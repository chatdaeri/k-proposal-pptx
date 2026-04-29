#!/usr/bin/env node
/**
 * bluelaps · render.cjs — deck.cjs → 슬라이드 HTML 일괄 생성
 *
 * 에이전트가 슬라이드마다 Read/Write 를 반복하지 않고, deck.cjs 한 파일에
 * 모든 슬라이드의 (템플릿명, 토큰값) 만 정의하면 본 스크립트가 일괄 치환.
 *
 * deck.cjs 형식:
 *   module.exports = {
 *     slug: 'q4-business-review',
 *     title: 'Q4 사업 리뷰',
 *     author: '담당자',
 *     slides: [
 *       { template: 'cover', tokens: {
 *           SUBTITLE: 'IR DECK · 2026',
 *           HERO_LINE_1: '글로벌 시장으로',
 *           HERO_LINE_2: '확장하는 전략',
 *           HERO_LINE_3: '',
 *           CONTACT_LABEL: 'Contact',
 *           CONTACT_DETAIL: 'hello@example.com',
 *       }},
 *       { template: 'toc', tokens: {
 *           SECTION_TITLE: 'Table of contents',
 *           PAGE_NUMBER: '02',
 *           HERO_LABEL: '목차',
 *       }, blocks: {
 *           toc_item: [
 *             { ITEM_NUMBER: '01', ITEM_TITLE: '시장 분석', ITEM_DESC: '...' },
 *             { ITEM_NUMBER: '02', ITEM_TITLE: '솔루션',   ITEM_DESC: '...' },
 *           ]
 *       }},
 *       { template: 'matrix-2x2', tokens: {
 *           SECTION_TITLE: 'Part 1', PAGE_NUMBER: '03',
 *           TITLE: '...', LEDE: '...',
 *           Q1_TAG: 'STAR', Q1_NAME: '...', Q1_BODY: '...', Q1_DESC: '...',
 *           Q2_TAG: '...', ... Q4_*: ...
 *           X_AXIS: '시장점유율', Y_AXIS: '성숙도',
 *           LABEL: 'POSITIONING',
 *       }},
 *       // 자유 형식 슬라이드 (HTML 그대로) 도 가능:
 *       { html: '<div>...직접 작성한 마크업...</div>' },
 *     ],
 *   };
 *
 * 사용법:
 *   cd output/<slug> && node skills/proposal/scripts/render.cjs deck.cjs
 *   또는: build.cjs 가 render + convert 한 번에 실행
 *
 * 출력:
 *   output/<slug>/slides/slide-NN.html
 *   output/<slug>/_shared.css
 *   output/<slug>/fonts/*.ttf (스킬 fonts/ 전부 복사)
 *   output/<slug>/tokens/font-face.generated.css (복사된 .ttf 이름에 맞게 재생성)
 *   output/<slug>/deck.config.cjs (convert.cjs 가 읽는 SLIDES 배열)
 */

const fs = require('fs');
const path = require('path');

const SKILL_ROOT = path.resolve(__dirname, '..');
const TEMPLATES = {
  // 카테고리 [A] STRUCTURAL
  'cover': 'layouts/cover.html',
  'divider': 'layouts/divider.html',
  // 카테고리 [B] NAVIGATION
  'toc': 'layouts/toc.html',
  // 카테고리 [C] EMPHASIS
  'emphasis-hero': 'layouts/emphasis-hero.html',
  // 카테고리 [D] ANALYSIS
  'matrix-2x2': 'components/matrix-2x2.html',
  'bubble-chart': 'components/bubble-chart.html',
  'concept-tree': 'components/concept-tree.html',
  // 카테고리 [E] CONTENT-LAYOUT
  'content-grid': 'layouts/content-grid.html',
  'content-text-only': 'layouts/content-text-only.html',
  'content-split': 'layouts/content-split.html',
  'content-2-col-cards': 'layouts/content-2-col-cards.html',
  'content-3-col-cards': 'layouts/content-3-col-cards.html',
  'as-is-to-be': 'layouts/as-is-to-be.html',
  // 카테고리 [F] IMAGE-LAYOUT
  'content-hero-image': 'layouts/content-hero-image.html',
  'content-2-image-row': 'layouts/content-2-image-row.html',
  'content-3-image-strip': 'layouts/content-3-image-strip.html',
  'image-left-label-blocks': 'layouts/image-left-label-blocks.html',
  'product-screenshot': 'layouts/product-screenshot.html',
  'icon-grid': 'layouts/icon-grid.html',
  'news-clipping': 'layouts/news-clipping.html',
  // 카테고리 [G] EXECUTION-PLAN
  'timeline': 'components/timeline.html',
  'gantt-chart': 'components/gantt-chart.html',
  'step-cards': 'layouts/step-cards.html',
  'numbered-steps-split': 'layouts/numbered-steps-split.html',
  'numbered-circle-list': 'components/numbered-circle-list.html',
  'areas-list': 'layouts/areas-list.html',
  // 카테고리 [H] PEOPLE
  'org-chart': 'components/org-chart.html',
  'instructor-profile': 'layouts/instructor-profile.html',
  // 카테고리 [I] LIST
  'faq-list': 'layouts/faq-list.html',
  'tool-card-grid': 'layouts/tool-card-grid.html',
  // 카테고리 [J] DATA-VIS
  'combo-bar-line': 'components/combo-bar-line.html',
  'two-up-charts': 'components/two-up-charts.html',
  'two-up-charts-bar': 'components/two-up-charts-bar.html',
  'two-up-charts-line': 'components/two-up-charts-line.html',
  'bar-graph': 'components/bar-graph.html',
  'bar-table': 'components/bar-table.html',
  'donut-chart': 'components/donut-chart.html',
  'chart-donut': 'components/chart-donut.html',
  'bubble-chart': 'components/bubble-chart.html',
  'matrix-2x2': 'components/matrix-2x2.html',
  'budget-table': 'layouts/budget-table.html',
};

// ─── 토큰 치환 ─────────────────────────────────────────────────────
function substitute(html, tokens) {
  let out = html;
  // 1) 단순 토큰 {{KEY}} → value
  for (const [key, val] of Object.entries(tokens || {})) {
    const re = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
    out = out.replace(re, val == null ? '' : String(val));
  }
  return out;
}

// 반복 블록 처리: <!-- BLOCK:name BEGIN --> ... <!-- BLOCK:name END -->
// blocks[name] = [{token...}, {token...}] 배열 → 사이 영역을 N회 복제
// 마지막 인스턴스 뒤의 toc-divider 같은 경계 요소는 자동 제거 안 됨 — 템플릿이 알아서.
function expandBlocks(html, blocks) {
  let out = html;
  for (const [name, rows] of Object.entries(blocks || {})) {
    const re = new RegExp(
      `<!--\\s*BLOCK:${name}\\s+BEGIN[\\s\\S]*?-->([\\s\\S]*?)<!--\\s*BLOCK:${name}\\s+END[\\s\\S]*?-->`,
      'g'
    );
    out = out.replace(re, (match, body) => {
      const expanded = (rows || []).map((row) => substitute(body, row)).join('\n');
      return expanded;
    });
  }
  return out;
}

// 미치환 토큰 검출
function findUnsubstituted(html) {
  return (html.match(/\{\{[A-Z0-9_]+\}\}/g) || []);
}

function copyDirRecursive(src, dst) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dst, { recursive: true });
  for (const ent of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, ent.name);
    const d = path.join(dst, ent.name);
    if (ent.isDirectory()) copyDirRecursive(s, d);
    else fs.copyFileSync(s, d);
  }
}

// ─── 메인 ──────────────────────────────────────────────────────────
function main() {
  const args = process.argv.slice(2);
  const deckPath = path.resolve(args[0] || 'deck.cjs');
  if (!fs.existsSync(deckPath)) {
    console.error(`❌ deck.cjs 없음: ${deckPath}`);
    process.exit(2);
  }
  const deck = require(deckPath);
  const outDir = path.dirname(deckPath);

  const slidesDir = path.join(outDir, 'slides');
  fs.mkdirSync(slidesDir, { recursive: true });

  // _shared.css 자동 복사 (+ 빌드 산출물 기준 @import 경로 보정)
  const sharedCss = path.join(SKILL_ROOT, 'primitives/_shared.css');
  if (fs.existsSync(sharedCss)) {
    let sharedText = fs.readFileSync(sharedCss, 'utf8');
    sharedText = sharedText.replace(
      /@import url\("\.\.\/tokens\/colors_and_type\.css"\);/,
      '@import url("tokens/colors_and_type.css");'
    );
    fs.writeFileSync(path.join(outDir, '_shared.css'), sharedText, 'utf8');
  }

  // tokens/ 복사 후, 출력 폴더의 fonts/*.ttf 에 맞춰 @font-face URL 갱신
  copyDirRecursive(path.join(SKILL_ROOT, 'tokens'), path.join(outDir, 'tokens'));
  const outFonts = path.join(outDir, 'fonts');
  fs.mkdirSync(outFonts, { recursive: true });
  const skillFonts = path.join(SKILL_ROOT, 'fonts');
  if (fs.existsSync(skillFonts)) {
    for (const ent of fs.readdirSync(skillFonts, { withFileTypes: true })) {
      if (ent.isFile() && /\.ttf$/i.test(ent.name)) {
        fs.copyFileSync(path.join(skillFonts, ent.name), path.join(outFonts, ent.name));
      }
    }
  }
  const { writeFontFaceGenerated } = require(path.join(__dirname, 'resolve-body-font.cjs'));
  try {
    writeFontFaceGenerated(path.join(outDir, 'tokens'), outFonts, { warn: (m) => console.warn(m) });
  } catch (e) {
    console.warn(`⚠️ font-face.generated.css 갱신 실패: ${e.message}`);
  }

  // assets/ 자동 복사 — 브랜드 로고 SSoT: skills/proposal/assets/logo.png (슬라이드에서는 ../assets/logo.png)
  const srcAssets = path.join(SKILL_ROOT, 'assets');
  const dstAssets = path.join(outDir, 'assets');
  if (fs.existsSync(srcAssets) && !fs.existsSync(dstAssets)) {
    fs.mkdirSync(dstAssets, { recursive: true });
    for (const f of fs.readdirSync(srcAssets)) {
      fs.copyFileSync(path.join(srcAssets, f), path.join(dstAssets, f));
    }
  }

  const generated = [];
  let warnings = 0;

  (deck.slides || []).forEach((slide, i) => {
    const num = String(i + 1).padStart(2, '0');
    const fileName = `slide-${num}.html`;
    const outPath = path.join(slidesDir, fileName);

    let html;
    if (slide.html) {
      // 자유 HTML 슬라이드 (전체 마크업 그대로)
      html = slide.html;
      // _shared.css 경로 보정 — 자유 HTML 도 slides/ 안에 들어가니 ../_shared.css 가 정답
      html = html.replace(/\.\.\/primitives\/_shared\.css/g, '../_shared.css');
      // 플러그인 assets 절대 경로 → 상대 경로 보정
      html = html.replace(/[^"']*skills\/proposal\/assets\//g, '../assets/');
    } else if (slide.template) {
      const tplRel = TEMPLATES[slide.template];
      if (!tplRel) {
        console.error(`❌ slide-${num}: unknown template "${slide.template}"`);
        process.exit(1);
      }
      const tplPath = path.join(SKILL_ROOT, tplRel);
      html = fs.readFileSync(tplPath, 'utf8');
      // primitives/_shared.css 경로를 상대 경로로 보정
      html = html.replace(/\.\.\/primitives\/_shared\.css/g, '../_shared.css');
      // 반복 블록 → 확장
      html = expandBlocks(html, slide.blocks);
      // 토큰 치환
      html = substitute(html, slide.tokens);
    } else {
      console.error(`❌ slide-${num}: must have either "template" or "html"`);
      process.exit(1);
    }

    // 미치환 토큰 검사 (USAGE 주석 안의 토큰은 사이드 효과로 카운트되니 본문만 검사)
    const stripped = html.replace(/<!--[\s\S]*?-->/g, '');
    const orphans = findUnsubstituted(stripped);
    if (orphans.length) {
      console.warn(`⚠ slide-${num}: 미치환 토큰 ${orphans.length}개 — ${[...new Set(orphans)].slice(0, 5).join(', ')}`);
      warnings++;
    }

    fs.writeFileSync(outPath, html);
    generated.push(`slides/${fileName}`);
  });

  // convert.cjs 가 읽을 deck.config.cjs 자동 생성
  const configPath = path.join(outDir, 'deck.config.cjs');
  fs.writeFileSync(
    configPath,
    `// auto-generated by render.cjs\nmodule.exports = ${JSON.stringify({
      SLIDES: generated,
      OUTPUT_FILE: `${deck.slug || 'deck'}.pptx`,
      DECK_TITLE: deck.title || 'CHATdaeri Deck',
      DECK_AUTHOR: deck.author || 'CHATdaeri',
    }, null, 2)};\n`
  );

  console.log(`✅ render: ${generated.length}장 생성 → ${slidesDir}`);
  if (warnings) console.log(`⚠ 미치환 토큰 슬라이드 ${warnings}장 (USAGE 주석은 무관)`);
}

main();
