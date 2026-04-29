# k-proposal-pptx

한국식 제안서 PPT 자동 생성 플러그인 (Claude Code)

> 12~18장 한국식 스토리 아크 · 23개 슬라이드 템플릿 · 표·차트·매트릭스 자동 변환

## 무엇을 만들 수 있나

| 표지 + 목차 | 차트 + 데이터 표 |
|---|---|
| 오렌지 브랜드 라인 + CHATdaeri 로고 | SVG 차트 → PPTX 이미지 자동 변환 |

| AS-IS/TO-BE 비교 | 마무리 |
|---|---|
| 직각 2단 분리 레이아웃 | emphasis-hero 풀스크린 CTA |

## 설치

> 공식 마켓플레이스 등록 심사 중입니다. 현재는 git clone으로 설치하세요.

```bash
# 1. 플러그인 다운로드
git clone https://github.com/chatdaeri/k-proposal-pptx \
  ~/.claude/plugins/marketplaces/chatdaeri

# 2. 의존성 설치 (Playwright Chromium 등 자동 세팅)
cd ~/.claude/plugins/marketplaces/chatdaeri && npm install

# 3. 시스템 도구 (미설치 시)
brew install --cask libreoffice  # macOS
brew install poppler             # macOS
# 또는
sudo apt install libreoffice poppler-utils  # Ubuntu

# 4. 설치 검증
node scripts/doctor.cjs
```

Claude Code를 재시작하면 `/k-proposal` 커맨드가 자동으로 활성화됩니다.

## 에이전트

이 플러그인은 `k-proposal-agent` 하나로 동작합니다.

| 항목 | 내용 |
|---|---|
| 파일 | `agents/k-proposal-agent.md` |
| 트리거 | `/k-proposal` 슬래시 커맨드, 또는 "한국식 제안서", "맥킨지 스타일 PPT" 등 자연어 |
| 입력 | 한 문단 브리프 또는 `inputs/` 폴더의 xlsx · docx · pdf |
| 출력 | `output/<slug>/<slug>.pptx` |

에이전트를 직접 호출하려면 Claude Code에서:

```
Use the k-proposal-agent to build a proposal for ...
```

## 빠른 시작

슬래시 명령:
```
/k-proposal "Q4 사업 리뷰 12장으로 만들어줘"
```

자연어 트리거:
```
"맥킨지 스타일 한국 제안서 만들어줘"
"한국식 PPT 덱 짜줘"
"DX 도입 제안서 9장 만들어줘"
```

직접 빌드:
```bash
node skills/proposal/scripts/build.cjs examples/02-dx-proposal/deck.cjs --no-lint
```

## 슬라이드 카탈로그 (23 템플릿)

| 카테고리 | 템플릿 | 용도 |
|---|---|---|
| 표지·구분 | cover, toc, divider | 시작·목차·간지 |
| 강조 | emphasis-hero, as-is-to-be | 결론·전후 비교 |
| 본문 (2~4칸) | content-grid, content-2-col-cards, content-3-col-cards | 4항목 이하 핵심 메시지 |
| 본문 (텍스트) | content-text-only, content-split | 서술형·좌우 분리 |
| 이미지 | content-hero-image, content-2-image-row, content-3-image-strip | 사진 중심 슬라이드 |
| 이미지+레이블 | image-left-label-blocks, icon-grid, product-screenshot | 제품·기능 소개 |
| 데이터 | budget-table, news-clipping, tool-card-grid | 표·뉴스클리핑·도구 비교 |
| 인물 | instructor-profile, faq-list | 팀 소개·Q&A |
| 실행 | step-cards, numbered-steps-split | 단계·프로세스 |

완전한 토큰 명세는 `skills/proposal/CATALOG.md` 참조.

## 절대 규칙 (깨면 안 됨)

1. **그라디언트 금지** — background 에 linear-gradient 절대 사용 불가
2. **그림자 금지** — box-shadow, filter: drop-shadow 등 일체 금지
3. **border-radius 금지** — 카드·버튼·태그 모두 직각 (원형 데이터 마커 예외)
4. **브랜드 컬러 단일** — `#FF7E5F` / `#E5573A` 외 임의 컬러 추가 금지
5. **표 데이터 1:1 보존** — 축약·반올림·생략 금지
6. **폰트 SSoT** — 본문은 `skills/proposal/fonts/`의 `.ttf` + `tokens/font-face.generated.css`(자동)·`colors_and_type.css`만. Inter·Roboto 등으로 본문 단독 대체 금지
7. **한국어 전용** — 본문·제목 모두 한글. 영어는 기술 용어·제품명만
8. **이모지 금지** — 프로덕션 슬라이드에 이모지 삽입 불가
9. **슬라이드 사이즈 고정** — 960×540 (PPTX: 720pt×405pt)
10. **로고 위치 고정** — 우측 하단 `bottom: 56px; right: 60px`

## 데모 모음

| 예시 | 장수 | 설명 |
|---|---|---|
| `examples/01-real-estate-proposal/` | 9장 | 가상 오피스텔 분양성 검토 |
| `examples/02-dx-proposal/` | 9장 | B2B DX 솔루션 도입 제안 |
| `examples/03-conference-branding/` | 8장 | 브랜드 컨퍼런스 기획 제안 |

각 폴더에서:
```bash
node ../../skills/proposal/scripts/build.cjs ./deck.cjs --no-lint
```

## 라이선스

MIT © 2026 Synergy Labs — 챗대리 (CHATdaeri)

오픈소스 플러그인에는 MIT 라이선스가 적용됩니다. 커스텀 확장·프라이빗 템플릿·엔터프라이즈 배포는 별도의 상업적 조건으로 운영됩니다 — Synergy Labs로 문의 주세요.

## 기여

이슈·PR 환영: https://github.com/chatdaeri/k-proposal-pptx/issues
