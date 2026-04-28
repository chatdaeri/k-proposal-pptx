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
check('PretendardVariable.ttf', () => {
  const p = path.join(PLUGIN_ROOT, 'skills/proposal/fonts/PretendardVariable.ttf');
  if (!fs.existsSync(p)) throw new Error('파일 없음');
});
check('chatdaeri-logo.png', () => {
  const p = path.join(PLUGIN_ROOT, 'skills/proposal/assets/chatdaeri-logo.png');
  if (!fs.existsSync(p)) throw new Error('파일 없음');
});
check('layouts: 23개', () => {
  const layouts = fs.readdirSync(path.join(PLUGIN_ROOT, 'skills/proposal/layouts')).filter(f => f.endsWith('.html'));
  if (layouts.length < 23) throw new Error(`${layouts.length}개 (23 필요)`);
});

console.log(`\n결과: ${ok} 통과 / ${fail} 실패`);
if (fail > 0) process.exit(1);
