#!/usr/bin/env node
/**
 * bluelaps · convert.cjs — HTML → PPTX 빌더
 *
 * 사용법:
 *   1. 빌드할 슬라이드 HTML 들이 있는 디렉토리 (예: output/<slug>/) 에
 *      이 파일을 복사하거나 절대 경로로 require.
 *   2. 같은 디렉토리에 SLIDES 배열을 정의한 deck.config.cjs 를 두거나,
 *      이 파일을 직접 수정해 SLIDES / OUTPUT_FILE 을 채운다.
 *   3. 실행:
 *        cd output/<slug>
 *        NODE_PATH="$(npm root -g)" node convert.cjs
 *
 * 사전 준비:
 *   npm install -g pptxgenjs playwright sharp
 *   npx playwright install chromium
 *
 * 호출 흐름:
 *   bluelaps-deck-agent (Step 7) → 본 스크립트 → pptx-skill 의 html2pptx →
 *     Playwright Chromium 으로 HTML 렌더링 → pptxgenjs 로 PPTX shape 변환
 *
 * LAYOUT_16x9: body 가 960×540 인 모든 bluelaps 템플릿이 자동 매칭됨.
 */

const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

// NODE_PATH — 플러그인 로컬 node_modules 우선, 없으면 전역 fallback
const pluginRoot = path.resolve(__dirname, '..', '..', '..');
const localNodeModules = path.join(pluginRoot, 'node_modules');
if (fs.existsSync(localNodeModules)) {
  process.env.NODE_PATH = localNodeModules;
} else if (!process.env.NODE_PATH) {
  try {
    process.env.NODE_PATH = execSync('npm root -g', { encoding: 'utf8' }).trim();
  } catch (e) {}
}
require('module').Module._initPaths();

const pptxgen = require('pptxgenjs');
const { chromium } = require('playwright');

// html2pptx.cjs 는 vendor 로 scripts/ 디렉토리에 포함됨
const html2pptxPath = path.join(__dirname, 'html2pptx.cjs');
if (!fs.existsSync(html2pptxPath)) {
  throw new Error('html2pptx.cjs not found in plugin scripts/. Reinstall plugin.');
}
const html2pptx = require(html2pptxPath);

// =========================================================================
// 설정 — 빌드 디렉토리에서 직접 수정하거나, deck.config.cjs 를 두면 자동 로드
// =========================================================================
let SLIDES = [
  // 'slides/slide-01.html',
  // 'slides/slide-02.html',
  // ...
];
let OUTPUT_FILE = 'deck.pptx';
let DECK_TITLE = 'CHATdaeri Deck';
let DECK_AUTHOR = 'CHATdaeri';

// deck.config.cjs 는 cwd (빌드 디렉토리) 기준으로 찾음 — scripts/ 가 아닌 deckDir 에 위치
const cwdConfig = path.join(process.cwd(), 'deck.config.cjs');
const localConfig = path.join(__dirname, 'deck.config.cjs');
const configPath = fs.existsSync(cwdConfig) ? cwdConfig : (fs.existsSync(localConfig) ? localConfig : null);
if (configPath) {
  const cfg = require(configPath);
  if (Array.isArray(cfg.SLIDES)) SLIDES = cfg.SLIDES;
  if (typeof cfg.OUTPUT_FILE === 'string') OUTPUT_FILE = cfg.OUTPUT_FILE;
  if (typeof cfg.DECK_TITLE === 'string') DECK_TITLE = cfg.DECK_TITLE;
  if (typeof cfg.DECK_AUTHOR === 'string') DECK_AUTHOR = cfg.DECK_AUTHOR;
}
// 빌드 디렉토리 = config 가 있는 폴더 (없으면 cwd)
const BUILD_DIR = configPath ? path.dirname(configPath) : process.cwd();

// =========================================================================
// 빌드
// =========================================================================
async function main() {
  if (!SLIDES.length) {
    throw new Error(
      'SLIDES 배열이 비어있습니다. deck.config.cjs 에 SLIDES = ["slides/slide-01.html", ...] 를 정의하거나 convert.cjs 를 수정하세요.'
    );
  }

  const dir = BUILD_DIR;
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9'; // 960×540 → 720pt × 405pt
  pres.title = DECK_TITLE;
  pres.author = DECK_AUTHOR;
  pres.company = 'CHATdaeri';

  for (const file of SLIDES) {
    const filePath = path.isAbsolute(file) ? file : path.join(dir, file);
    if (!fs.existsSync(filePath)) {
      console.error(`❌ 슬라이드 파일 없음: ${filePath}`);
      process.exit(1);
    }
    console.log(`Converting: ${path.basename(filePath)}`);

    // 슬라이드 HTML 의 PPTX 후처리 주석 추출
    // (1) pptx-line: <!-- pptx-line: x1=Xin y1=Yin x2=Xin y2=Yin color=#hex width=Npt -->
    //     좌표 인치 (LAYOUT_16x9 = 10in × 5.625in). color #hex. width pt.
    // (2) pptx-marker: <!-- pptx-marker: x=Xin y=Yin r=Rin color=#hex -->
    //     중심 (x,y) 반지름 r 의 채워진 원. 라인 차트 점 마커용.
    const slideHtml = fs.readFileSync(filePath, 'utf8');
    const lineMarkers = [];
    const dotMarkers = [];
    const reLine = /<!--\s*pptx-line:\s*([^>]+?)\s*-->/g;
    const reDot  = /<!--\s*pptx-marker:\s*([^>]+?)\s*-->/g;
    const parseAttrs = (s) => {
      const o = {};
      s.replace(/(\w+)=([^\s]+)/g, (_, k, v) => { o[k] = v; });
      return o;
    };
    let m;
    while ((m = reLine.exec(slideHtml)) !== null) {
      const p = parseAttrs(m[1]);
      const x1 = parseFloat(p.x1), y1 = parseFloat(p.y1);
      const x2 = parseFloat(p.x2), y2 = parseFloat(p.y2);
      if (!isFinite(x1) || !isFinite(y1) || !isFinite(x2) || !isFinite(y2)) continue;
      lineMarkers.push({
        x1, y1, x2, y2,
        color: (p.color || '#000000').replace(/^#/, ''),
        width: parseFloat(p.width) || 1.5,
      });
    }
    while ((m = reDot.exec(slideHtml)) !== null) {
      const p = parseAttrs(m[1]);
      const x = parseFloat(p.x), y = parseFloat(p.y);
      const r = parseFloat(p.r) || 0.06;
      if (!isFinite(x) || !isFinite(y)) continue;
      dotMarkers.push({
        x, y, r,
        color: (p.color || '#000000').replace(/^#/, ''),
      });
    }

    // (3) data-pptx-image 속성 — 해당 element 를 PNG 로 스크린샷해서
    //     PPTX 슬라이드에 이미지로 박음. SVG/복잡한 차트를 픽셀 퍼펙트로 가져갈 때 사용.
    //     element 의 bbox 위치·크기로 PPTX 좌표 자동 계산 (96px/in).
    const imageRegions = [];
    if (slideHtml.includes('data-pptx-image')) {
      const browser = await chromium.launch({ args: ['--no-sandbox'] });
      const page = await browser.newPage({ viewport: { width: 960, height: 540 }, deviceScaleFactor: 2 });
      await page.goto('file://' + path.resolve(filePath));
      await page.waitForLoadState('networkidle');
      const locators = await page.locator('[data-pptx-image]').all();
      for (const loc of locators) {
        const bbox = await loc.boundingBox();
        if (!bbox) continue;
        const buf = await loc.screenshot({ omitBackground: true });
        imageRegions.push({
          x: bbox.x / 96,
          y: bbox.y / 96,
          w: bbox.width / 96,
          h: bbox.height / 96,
          data: 'data:image/png;base64,' + buf.toString('base64'),
        });
      }
      await browser.close();
    }

    // html2pptx 가 새 슬라이드를 추가하기 전 인덱스 기록
    const beforeCount = pres.slides ? pres.slides.length : 0;
    await html2pptx(filePath, pres);

    // html2pptx 가 추가한 마지막 슬라이드에 라인 + 마커 그리기
    if ((lineMarkers.length || dotMarkers.length) && pres.slides && pres.slides.length > beforeCount) {
      const slide = pres.slides[pres.slides.length - 1];
      for (const ln of lineMarkers) {
        slide.addShape(pres.ShapeType.line, {
          x: ln.x1, y: ln.y1,
          w: ln.x2 - ln.x1, h: ln.y2 - ln.y1,
          line: { color: ln.color, width: ln.width },
        });
      }
      for (const d of dotMarkers) {
        slide.addShape(pres.ShapeType.ellipse, {
          x: d.x - d.r, y: d.y - d.r,
          w: 2 * d.r, h: 2 * d.r,
          fill: { color: d.color },
          line: { color: d.color, width: 0 },
        });
      }
      const parts = [];
      if (lineMarkers.length) parts.push(`${lineMarkers.length} pptx-line`);
      if (dotMarkers.length)  parts.push(`${dotMarkers.length} pptx-marker`);
      console.log(`  → ${parts.join(' + ')} 추가`);
    }

    // 스크린샷 이미지 슬라이드에 박기
    if (imageRegions.length && pres.slides && pres.slides.length > beforeCount) {
      const slide = pres.slides[pres.slides.length - 1];
      for (const r of imageRegions) {
        slide.addImage({ data: r.data, x: r.x, y: r.y, w: r.w, h: r.h });
      }
      console.log(`  → ${imageRegions.length} pptx-image (SVG/HTML 캡처)`);
    }
  }

  const outFile = path.isAbsolute(OUTPUT_FILE) ? OUTPUT_FILE : path.join(dir, OUTPUT_FILE);
  await pres.writeFile({ fileName: outFile });
  console.log(`✅ 빌드 완료: ${outFile}`);
}

main().catch((e) => {
  console.error('❌ 빌드 실패:', e && e.message ? e.message : e);
  if (e && e.stack) console.error(e.stack);
  process.exit(1);
});
