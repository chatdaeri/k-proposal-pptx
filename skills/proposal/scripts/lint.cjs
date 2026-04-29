#!/usr/bin/env node
/**
 * bluelaps · lint.cjs — 절대 규칙 위반 정적 검출
 *
 * 사용법:
 *   node skills/proposal/scripts/lint.cjs <html-file-or-dir> [...]
 *
 * 검출 항목 (SKILL.md 절대 규칙 기준):
 *   1. div 안에 raw text 직접 (html2pptx 호환 깨짐 — <p>/<h1~6>/<ul>/<ol> 안 필요)
 *   2. border-radius != 0 (예외: 원형 dot/avatar/swatch — border-radius: 50% 만 허용)
 *   3. box-shadow 사용
 *   4. linear-gradient / radial-gradient 사용
 *   5. transition / animation 키워드
 *   6. 오프-팔레트 색상 hex (8개 토큰 + 허용 보조 회색 외)
 *
 * 종료 코드:
 *   0 — 위반 없음
 *   1 — 위반 발견 (각 위반 줄 + 메시지 stderr 출력)
 */

const fs = require('fs');
const path = require('path');

// 8개 브랜드 토큰 (대소문자 무시 비교용)
const BRAND_TOKENS = new Set([
  '#FF7E5F', // brand-blue
  '#E5573A', // brand-deep
  '#FFF1EC', // brand-tint-solid
  '#FFFFFF', '#FFF', // white
  '#F8F8F8', // light-bg
  '#000000', '#000', // black
  '#333333', '#333', // dark-gray
  '#E0E0E0', // light-border
]);

// 허용 보조 회색 (UI 디테일 — 표 구분선·차트 그리드·범례 swatch 등)
const ALLOWED_GRAYS = new Set([
  '#C8C8C8', '#F0F0F0', '#676765', '#4A4A48', '#B7B7B5',
  '#F6F8FB', // 표 헤더·박스 배경 매우 옅은 회청
  '#EAEAE8', // 합계 행 배경
  // 도넛 차트 4 세그먼트 보조 그레이
  '#3E4A5E', '#A0A8B3', '#D6D6D2',
  // 차트 라벨용 placeholder grey
  '#999', '#999999', '#AAA', '#BBB',
]);

const VIOLATIONS = [];

function lintFile(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const lines = text.split(/\r?\n/);

  lines.forEach((line, i) => {
    const ln = i + 1;
    const lower = line.toLowerCase();

    // 0) <table>·<tr>·<th>·<td> 마크업 사용 (html2pptx 미지원 — div grid 로 대체)
    if (/<\/?(table|thead|tbody|tr|th|td)\b/i.test(line) && !/^\s*\*?\s*-/.test(line) && !/<!--/.test(line)) {
      VIOLATIONS.push({ file: filePath, line: ln, rule: '<table> 마크업 (html2pptx 미지원, div grid 로 대체 필요)', text: line.trim() });
    }
    // 1) box-shadow
    if (/\bbox-shadow\s*:\s*(?!none\b)/i.test(line)) {
      VIOLATIONS.push({ file: filePath, line: ln, rule: 'box-shadow', text: line.trim() });
    }
    // 2) linear-gradient / radial-gradient
    if (/\b(linear|radial)-gradient\s*\(/i.test(line)) {
      VIOLATIONS.push({ file: filePath, line: ln, rule: 'gradient', text: line.trim() });
    }
    // 3) transition / animation (단, none 또는 0 인 경우는 OK)
    if (/\btransition\s*:\s*(?!none\b|0s\b|0\s*s\b)/i.test(line)) {
      VIOLATIONS.push({ file: filePath, line: ln, rule: 'transition', text: line.trim() });
    }
    if (/\banimation\s*:\s*(?!none\b)/i.test(line)) {
      VIOLATIONS.push({ file: filePath, line: ln, rule: 'animation', text: line.trim() });
    }
    // 4) border-radius (0 또는 50% 만 허용)
    const brMatch = line.match(/\bborder-radius\s*:\s*([^;}\n]+)/i);
    if (brMatch) {
      const v = brMatch[1].trim().toLowerCase();
      if (!(v === '0' || v === '0px' || v === '0%' || v === '50%')) {
        VIOLATIONS.push({
          file: filePath,
          line: ln,
          rule: `border-radius (예외=0/50% 만): ${v}`,
          text: line.trim(),
        });
      }
    }
    // 5) 오프-팔레트 hex
    const hexes = line.match(/#[0-9a-fA-F]{3,6}\b/g) || [];
    hexes.forEach((h) => {
      const upper = h.toUpperCase();
      if (BRAND_TOKENS.has(upper) || ALLOWED_GRAYS.has(upper)) return;
      // 6자리 hex 만 검출 (3자리는 별칭으로 #fff 등)
      VIOLATIONS.push({
        file: filePath,
        line: ln,
        rule: `오프-팔레트 색상: ${h}`,
        text: line.trim(),
      });
    });
    // 6) div 안 raw text — 단순 검출(완벽하지 않음. 정확한 검사는 html2pptx 가 빌드 시 잡음)
    //    여기선 명백한 케이스만: <div ...>한글|영문\w+...</div> 한 줄 안에 텍스트 노드
    const divRaw = line.match(/<div[^>]*>([^<]*[가-힣A-Za-z][^<]*)<\/div>/);
    if (divRaw) {
      const inner = divRaw[1].trim();
      // span/p 등이 들어있지 않은 순수 텍스트만 검출
      if (inner && !/\{\{[A-Z_]+\}\}/.test(inner) && inner.length > 1) {
        VIOLATIONS.push({
          file: filePath,
          line: ln,
          rule: `<div> 안 raw text — <p>/<h1~6>/<ul>/<ol>/<span> 으로 감싸야 함`,
          text: line.trim().slice(0, 120),
        });
      }
    }
  });
}

function walk(target) {
  const stat = fs.statSync(target);
  if (stat.isDirectory()) {
    fs.readdirSync(target).forEach((f) => walk(path.join(target, f)));
  } else if (target.endsWith('.html') || target.endsWith('.css')) {
    lintFile(target);
  }
}

const args = process.argv.slice(2);
if (!args.length) {
  console.error('Usage: node lint.cjs <html-file-or-dir> [...]');
  process.exit(2);
}
args.forEach((a) => walk(path.resolve(a)));

if (!VIOLATIONS.length) {
  console.log('✅ lint 통과 — 절대 규칙 위반 0건');
  process.exit(0);
}

console.error(`❌ lint 실패 — 위반 ${VIOLATIONS.length}건`);
const grouped = {};
VIOLATIONS.forEach((v) => {
  const f = v.file;
  if (!grouped[f]) grouped[f] = [];
  grouped[f].push(v);
});
Object.entries(grouped).forEach(([file, vs]) => {
  console.error(`\n  ${file}`);
  vs.forEach((v) => {
    console.error(`    L${v.line.toString().padStart(4)}  [${v.rule}]`);
    console.error(`           ${v.text.slice(0, 140)}`);
  });
});
process.exit(1);
