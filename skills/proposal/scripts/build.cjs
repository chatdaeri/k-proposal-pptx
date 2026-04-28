#!/usr/bin/env node
/**
 * bluelaps · build.cjs — deck.cjs 한 파일 → PPTX 까지 한 번에
 *
 * 사용법:
 *   cd output/<slug> && node skills/proposal/scripts/build.cjs deck.cjs
 *
 * 흐름:
 *   1) render.cjs  : deck.cjs → slides/*.html + deck.config.cjs
 *   2) lint.cjs    : 절대 규칙 위반 사전 점검 (선택)
 *   3) convert.cjs : html2pptx 로 PPTX 생성
 *
 * 에이전트는 deck.cjs 한 파일만 작성하고 build.cjs 한 번 호출하면 끝.
 * 슬라이드 14장이라도 호출 1회로 수렴 — Pro 플랜 토큰 사용량 대폭 절감.
 */

const path = require('path');
const { spawnSync } = require('child_process');

const SCRIPTS = path.resolve(__dirname);
const NODE = process.execPath;

function run(label, file, args = []) {
  console.log(`\n── ${label} ──`);
  const r = spawnSync(NODE, [path.join(SCRIPTS, file), ...args], { stdio: 'inherit' });
  if (r.status !== 0) {
    console.error(`❌ ${label} 실패 (exit ${r.status})`);
    process.exit(r.status || 1);
  }
}

function main() {
  const deckPath = path.resolve(process.argv[2] || 'deck.cjs');
  const deckDir = path.dirname(deckPath);
  const noLint = process.argv.includes('--no-lint');

  // 1) render
  run('1/3 · render', 'render.cjs', [deckPath]);

  // 2) lint (선택, --no-lint 로 끄기 가능)
  if (!noLint) {
    console.log(`\n── 2/3 · lint ──`);
    const r = spawnSync(NODE, [path.join(SCRIPTS, 'lint.cjs'), path.join(deckDir, 'slides')], { stdio: 'inherit' });
    if (r.status !== 0) {
      console.warn(`⚠ lint 위반 발견 — 빌드는 진행하되 PPTX 검증 권장`);
    }
  } else {
    console.log(`\n── 2/3 · lint (skipped via --no-lint) ──`);
  }

  // 3) convert (PPTX 생성)
  // convert.cjs 는 cwd 기준 deck.config.cjs / convert.cjs 를 읽음 — deckDir 로 cwd 변경
  console.log(`\n── 3/3 · convert ──`);
  const pluginRoot = path.resolve(SCRIPTS, '..', '..', '..');
  const localNodeModules = require('fs').existsSync(require('path').join(pluginRoot, 'node_modules'))
    ? require('path').join(pluginRoot, 'node_modules')
    : null;
  const nodePath = process.env.NODE_PATH || localNodeModules
    || (() => { try { return require('child_process').execSync('npm root -g', { encoding: 'utf8' }).trim(); } catch(e) { return ''; } })();
  const r = spawnSync(NODE, [path.join(SCRIPTS, 'convert.cjs')], {
    stdio: 'inherit',
    cwd: deckDir,
    env: { ...process.env, NODE_PATH: nodePath },
  });
  if (r.status !== 0) {
    console.error(`❌ convert 실패`);
    process.exit(r.status || 1);
  }

  console.log(`\n✅ 빌드 완료 — deck.cjs 1개 호출로 ${path.relative(process.cwd(), deckDir)}/*.pptx 생성`);
}

main();
