#!/usr/bin/env node
'use strict';
/**
 * fonts/ 디렉터리에 있는 .ttf 를 찾아 @font-face 조각을 생성한다.
 * CSS는 디렉터리 목록을 읽을 수 없으므로, 렌더/동기화 시 이 스크립트로 갱신한다.
 */
const fs = require('fs');
const path = require('path');

const LOGICAL_FAMILY = 'Proposal Deck Body';

function listTtfBasenames(fontsDir) {
  if (!fs.existsSync(fontsDir)) {
    throw new Error(`fonts 폴더 없음: ${fontsDir}`);
  }
  return fs
    .readdirSync(fontsDir, { withFileTypes: true })
    .filter((e) => e.isFile() && /\.ttf$/i.test(e.name))
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
}

/**
 * @returns {string} basename e.g. "PretendardVariable.ttf"
 */
function pickBodyFontBasename(fontsDir, { warn = console.warn } = {}) {
  const ttfs = listTtfBasenames(fontsDir);
  if (ttfs.length === 0) {
    throw new Error(`${fontsDir} 에 .ttf 파일이 없습니다. 본문 폰트를 한 개 이상 넣어 주세요.`);
  }
  if (ttfs.length === 1) return ttfs[0];
  const body = ttfs.find((f) => f.toLowerCase() === 'body.ttf');
  if (body) return body;
  const chosen = ttfs[0];
  warn(
    `[resolve-body-font] fonts/에 .ttf가 ${ttfs.length}개 있습니다. (${ttfs.join(', ')}) ` +
      `우선순위 파일이 없어 알파벳 순 첫 파일을 사용합니다: ${chosen}. ` +
      `하나만 쓰거나 우선 사용할 파일명을 body.ttf 로 두세요.`
  );
  return chosen;
}

function cssUrlTokenRelToTokens(fontBasename) {
  // url('../fonts/…') 안에 넣을 값; 따옴표로 감쌈
  const safe = String(fontBasename).replace(/\\/g, '/').replace(/'/g, "\\'");
  return `'../fonts/${safe}'`;
}

/**
 * @param {string} tokensDir  …/tokens (colors_and_type.css 가 있는 폴더)
 * @param {string} fontsDir   …/fonts (실제 .ttf 가 있는 폴더; 보통 tokens의 형제)
 */
function writeFontFaceGenerated(tokensDir, fontsDir, { warn = console.warn } = {}) {
  const basename = pickBodyFontBasename(fontsDir, { warn });
  const u = cssUrlTokenRelToTokens(basename);
  const css = `/* AUTO-GENERATED — fonts/ 안의 .ttf 를 반영. 수동 수정 금지. */
/* 갱신: node skills/proposal/scripts/sync-font-face.cjs */
@font-face {
  font-family: '${LOGICAL_FAMILY}';
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
  src: url(${u}) format('truetype-variations'),
       url(${u}) format('truetype');
}
`;
  const out = path.join(tokensDir, 'font-face.generated.css');
  fs.mkdirSync(tokensDir, { recursive: true });
  fs.writeFileSync(out, css, 'utf8');
  return basename;
}

module.exports = {
  listTtfBasenames,
  pickBodyFontBasename,
  writeFontFaceGenerated,
  LOGICAL_FAMILY,
};
