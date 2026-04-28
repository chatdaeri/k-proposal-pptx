#!/usr/bin/env node
/**
 * bluelaps · audit.cjs — CATALOG.md ↔ layouts/components 정합성 검증
 *
 * 사용법:
 *   node skills/proposal/scripts/audit.cjs
 *
 * 검증 항목:
 *   1. CATALOG.md 의 모든 `**File:**` 경로가 실제로 존재하는가
 *   2. layouts/ + components/ 의 모든 .html 이 카탈로그에 등록돼있는가
 *   3. 각 카탈로그 항목 Tokens 표의 토큰이 실제 HTML 안에 존재하는가
 *   4. HTML 의 토큰 중 카탈로그에 명시 안 된 토큰이 있는가 (drift 검출)
 *
 * 종료 코드:
 *   0 — 정합성 통과
 *   1 — drift 발견
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CATALOG = path.join(ROOT, 'CATALOG.md');
const LAYOUTS_DIR = path.join(ROOT, 'layouts');
const COMPONENTS_DIR = path.join(ROOT, 'components');

const issues = [];

// ─── load CATALOG ───────────────────────────────────────────
if (!fs.existsSync(CATALOG)) {
  console.error(`❌ CATALOG.md 없음: ${CATALOG}`);
  process.exit(2);
}
const cat = fs.readFileSync(CATALOG, 'utf8');

// File 경로 추출 — `**File:**` `${PLUGIN_ROOT}/skills/proposal/<dir>/<name>.html`
const fileRe = /\*\*File:\*\*\s*`?([^`\n]+\.html)`?/g;
const catFiles = new Set();
let m;
while ((m = fileRe.exec(cat))) {
  let p = m[1].trim();
  if (p.startsWith('~/')) p = p.replace(/^~/, process.env.HOME || '');
  catFiles.add(path.normalize(p));
}

// 카탈로그 항목별 Tokens 추출
//   직접 토큰 `{{TOKEN}}` 외에 다음 시리즈 표기도 인식:
//   - `{{SEG_A}}~{{SEG_E}}` (범위)
//   - `{{CAT_*_BODY}}` (와일드카드)
//   - `{{TEAM_N_*}}` (와일드카드)
const itemRe = /## \[([A-Z+\-0-9]+)\]\s+([\w-]+)([\s\S]*?)(?=\n## \[|\n# § |$)/g;
const catItems = []; // {tag, name, file, tokens: Set<string>, wildPats: RegExp[]}
let im;
while ((im = itemRe.exec(cat))) {
  const tag = im[1];
  const name = im[2];
  const body = im[3];
  const fileM = /\*\*File:\*\*\s*`?([^`\n]+\.html)`?/.exec(body);
  if (!fileM) continue;
  let file = fileM[1].trim();
  if (file.startsWith('~/')) file = file.replace(/^~/, process.env.HOME || '');

  // 1) 직접 토큰
  const tokenM = body.match(/\{\{[A-Z0-9_]+\}\}/g) || [];
  const tokens = new Set(tokenM.map((t) => t));

  // 2) 와일드카드 패턴 — `{{X_*_Y}}` 또는 `{{X_*}}`
  const wildPats = [];
  const wildRe = /\{\{([A-Z0-9_]*\*[A-Z0-9_]*)\}\}/g;
  let wm;
  while ((wm = wildRe.exec(body))) {
    const pat = '^\\{\\{' + wm[1].replace(/\*/g, '[A-Z0-9_]+') + '\\}\\}$';
    wildPats.push(new RegExp(pat));
  }

  catItems.push({ tag, name, file: path.normalize(file), tokens, wildPats });
}

// ─── 1. 카탈로그가 가리키는 파일이 실제 존재하는가 ─────────────────
catItems.forEach((it) => {
  if (!fs.existsSync(it.file)) {
    issues.push(`[1] 카탈로그 [${it.tag}] ${it.name} 의 File 경로 부재: ${it.file}`);
  }
});

// ─── 2. layouts/ + components/ 의 모든 .html 이 카탈로그에 등록 ───────
const fsHtmls = [];
[LAYOUTS_DIR, COMPONENTS_DIR].forEach((dir) => {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach((f) => {
    if (f.endsWith('.html')) fsHtmls.push(path.normalize(path.join(dir, f)));
  });
});
const catFileSet = new Set(catItems.map((it) => it.file));
fsHtmls.forEach((p) => {
  if (!catFileSet.has(p)) {
    issues.push(`[2] HTML 파일이 카탈로그에 미등록: ${p}`);
  }
});

// ─── 3+4. 토큰 정합성 — 카탈로그 토큰 ↔ HTML 안 토큰 ─────────────────
//
// 시리즈 인식: 토큰 안 모든 숫자를 N 으로 정규화한 stem 이 같으면 동일 시리즈.
//   예) {{Q1_TAG}}, {{Q2_TAG}}, {{Q3_TAG}}, {{Q4_TAG}} → 모두 stem {{QN_TAG}}.
//       카탈로그가 Q1 만 명시해도, HTML 의 Q2/3/4 는 같은 stem 으로 매칭.
//   예) {{T1_2_HEAD}} → {{TN_N_HEAD}} (다중 숫자 정규화)
function stem(t) {
  // 숫자 시리즈와 단일 알파벳 시리즈 모두 N 으로 정규화
  return t
    .replace(/\d+/g, 'N')
    .replace(/_[A-Z]\}\}$/, '_N}}')
    .replace(/_[A-Z]_/g, '_N_');
}

catItems.forEach((it) => {
  if (!fs.existsSync(it.file)) return;
  const html = fs.readFileSync(it.file, 'utf8');
  const htmlTokens = new Set((html.match(/\{\{[A-Z0-9_]+\}\}/g) || []));

  // 카탈로그 토큰 stem 셋 (시리즈 매칭용)
  const catStems = new Set();
  it.tokens.forEach((t) => catStems.add(stem(t)));

  // 카탈로그에 있지만 HTML 에 없는 토큰
  it.tokens.forEach((t) => {
    if (htmlTokens.has(t)) return;
    // 시리즈인 경우 다른 인스턴스가 HTML 에 있으면 OK
    const tStem = stem(t);
    const seriesFound = [...htmlTokens].some((h) => stem(h) === tStem);
    if (seriesFound) return;
    issues.push(`[3] [${it.tag}] ${it.name}: 카탈로그 토큰 ${t} 가 HTML 에 없음`);
  });

  // HTML 에 있지만 카탈로그에 없는 토큰
  htmlTokens.forEach((t) => {
    if (it.tokens.has(t)) return;
    // 시리즈 인식 — HTML 토큰 stem 이 카탈로그 토큰 stem 셋에 있으면 OK
    if (catStems.has(stem(t))) return;
    // 와일드카드 — 카탈로그 `{{X_*_Y}}` 패턴이 HTML 토큰을 매칭하면 OK
    if (it.wildPats.some((re) => re.test(t))) return;
    issues.push(`[4] [${it.tag}] ${it.name}: HTML 토큰 ${t} 가 카탈로그에 미명세`);
  });
});

// ─── 결과 ─────────────────────────────────────────────────────────────
if (!issues.length) {
  console.log(`✅ audit 통과 — drift 0건`);
  console.log(`   카탈로그 등록 템플릿: ${catItems.length}`);
  console.log(`   파일시스템 HTML: ${fsHtmls.length}`);
  process.exit(0);
}

console.error(`❌ audit 실패 — ${issues.length}건 drift 발견`);
const grouped = { 1: [], 2: [], 3: [], 4: [] };
issues.forEach((s) => {
  const k = s.match(/^\[(\d)\]/);
  if (k) grouped[k[1]].push(s);
});
const labels = {
  1: '카탈로그 → 파일 (File 경로 부재)',
  2: '파일 → 카탈로그 (HTML 미등록)',
  3: '카탈로그 토큰이 HTML 에 없음',
  4: 'HTML 토큰이 카탈로그에 미명세',
};
Object.entries(grouped).forEach(([k, list]) => {
  if (!list.length) return;
  console.error(`\n  [${k}] ${labels[k]} — ${list.length}건`);
  list.forEach((s) => console.error(`    ${s}`));
});
process.exit(1);
