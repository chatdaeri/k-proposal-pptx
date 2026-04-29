# Changelog

## [1.0.0] - 2026-04-28

### Added

- 23개 슬라이드 템플릿 — CHATdaeri 오렌지 브랜드 (`#FF7E5F`) 적용
- 3개 워킹 예시 (부동산 검토, DX 제안, 컨퍼런스 브랜딩)
- `npm install` 자동 설치 (postinstall: playwright chromium + 시스템 도구 검사)
- `/proposal` 슬래시 명령 + 자연어 트리거
- `proposal-deck-agent` — 9-Step 워크플로 에이전트
- SVG 차트 캡처 파이프라인 (`data-pptx-image`)
- `scripts/doctor.cjs` — 설치 환경 진단 도구
- `html2pptx.cjs` vendor 내장 (외부 의존 제거)
- Pretendard Variable 폰트 내장 (OFL 1.1), `fonts/*.ttf` + 자동 `font-face.generated.css`
- `LICENSE-FONTS` — 폰트 라이선스 명시

### Changed

- 본문 폰트: `skills/proposal/fonts/*.ttf` 및 `tokens/font-face.generated.css` 로 URL 자동화 (`npm run sync-font`)

### License

MIT © 2026 Synergy Labs — 챗대리 (CHATdaeri)
