#!/usr/bin/env node
'use strict';
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PLUGIN_ROOT = path.resolve(__dirname, '..');
let ok = 0;
let fail = 0;

function check(label, fn) {
  try {
    fn();
    console.log(`✅ ${label}`);
    ok++;
  } catch (e) {
    console.error(`❌ ${label} — ${e.message || e}`);
    fail++;
  }
}

console.log('🩺 k-proposal-pptx doctor\n');

// 시스템 도구
check('LibreOffice (soffice)', () => execSync('soffice --version', { stdio: 'pipe' }));
check('poppler (pdftoppm)', () => execSync('pdftoppm -v', { stdio: 'pipe' }));
check('Node.js >= 18', () => {
  const ver = parseInt(process.version.replace('v', '').split('.')[0]);
  if (ver < 18) throw new Error(`Node ${process.version} (need >= 18)`);
});

// npm 패키지
check('pptxgenjs installed', () => require.resolve(path.join(PLUGIN_ROOT, 'node_modules/pptxgenjs')));
check('playwright installed', () => require.resolve(path.join(PLUGIN_ROOT, 'node_modules/playwright')));
check('sharp installed', () => require.resolve(path.join(PLUGIN_ROOT, 'node_modules/sharp')));

// 자산 파일
check('html2pptx.cjs vendor', () => {
  const p = path.join(PLUGIN_ROOT, 'skills/proposal/scripts/html2pptx.cjs');
  if (!fs.existsSync(p)) throw new Error('파일 없음');
});
check('fonts/*.ttf (본문 폰트 ≥1)', () => {
  const d = path.join(PLUGIN_ROOT, 'skills/proposal/fonts');
  if (!fs.existsSync(d)) throw new Error('fonts 폴더 없음');
  const n = fs.readdirSync(d).filter((f) => /\.ttf$/i.test(f)).length;
  if (n < 1) throw new Error('.ttf 파일 없음');
});
check('font-face.generated.css', () => {
  const p = path.join(PLUGIN_ROOT, 'skills/proposal/tokens/font-face.generated.css');
  if (!fs.existsSync(p)) throw new Error('먼저: node skills/proposal/scripts/sync-font-face.cjs');
});
check('logo.png', () => {
  const p = path.join(PLUGIN_ROOT, 'skills/proposal/assets/logo.png');
  if (!fs.existsSync(p)) throw new Error('파일 없음');
});
check('layouts: 23개', () => {
  const layouts = fs.readdirSync(path.join(PLUGIN_ROOT, 'skills/proposal/layouts')).filter(f => f.endsWith('.html'));
  if (layouts.length < 23) throw new Error(`${layouts.length}개 (23 필요)`);
});

console.log(`\n결과: ${ok} 통과 / ${fail} 실패`);
if (fail > 0) process.exit(1);
