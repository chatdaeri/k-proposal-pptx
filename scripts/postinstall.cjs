#!/usr/bin/env node
'use strict';
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🎨 k-proposal-pptx postinstall 시작');

// 1. Playwright Chromium 다운로드
console.log('\n📦 Playwright Chromium 다운로드 중...');
try {
  execSync('npx playwright install chromium', { stdio: 'inherit' });
  console.log('✅ Playwright Chromium OK');
} catch (e) {
  console.error('❌ Playwright Chromium 설치 실패. 수동으로 실행하세요:');
  console.error('   npx playwright install chromium');
  process.exit(1);
}

// 2. 시스템 도구 검사 (필수)
const requiredTools = [
  {
    cmd: 'soffice --version',
    name: 'LibreOffice (soffice)',
    install: 'brew install --cask libreoffice (mac) / sudo apt install libreoffice (ubuntu)',
  },
  {
    cmd: 'pdftoppm -v',
    name: 'poppler (pdftoppm)',
    install: 'brew install poppler (mac) / sudo apt install poppler-utils (ubuntu)',
  },
];

let allOK = true;
for (const tool of requiredTools) {
  try {
    execSync(tool.cmd, { stdio: 'pipe' });
    console.log(`✅ ${tool.name} OK`);
  } catch (e) {
    console.error(`❌ ${tool.name} 미설치 — 설치 명령: ${tool.install}`);
    allOK = false;
  }
}

if (!allOK) {
  console.error('\n❌ 필수 시스템 도구가 누락되어 플러그인이 정상 동작하지 않습니다.');
  console.error('   위 안내에 따라 설치 후 `node scripts/doctor.cjs` 로 재검증하세요.');
  process.exit(1);
}

console.log('\n✅ k-proposal-pptx 설치 완료');
