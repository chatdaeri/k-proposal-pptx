---
name: proposal
description: 한국식 제안서 PPT(.pptx) 자동 생성 — 12~18장 한국식 스토리 아크. 사용자 브리프나 문서를 받아 카탈로그 23개 템플릿 중 적합한 걸 골라 슬라이드 구성. CHATdaeri 오렌지 브랜드(#FF7E5F) 적용·Pretendard Variable 폰트·border-radius 0·box-shadow/gradient 금지의 절대 규칙을 따른다. "제안서 만들어줘", "한국식 PPT", "회사 소개서", "consulting deck", "맥킨지 스타일" 등의 요청에 트리거.
---

# CHATdaeri Design System — Claude Code Skill

> Claude Code / Claude Desktop에서 이 디자인 시스템을 따라 슬라이드·웹 페이지를 만들 때 읽는 스킬 문서.

## 언제 쓰나

- CHATdaeri 브랜드용 **세일즈·마케팅 제안서 슬라이드** (16:9, 960×540)
- CHATdaeri **제품 마케팅 페이지 · 고객 온보딩**
- CHATdaeri **분기 리뷰 · KPI 리포트 · 내부 발표**

## 절대 규칙 (깨면 안 되는 것)

1. **색은 8개 토큰만.** `tokens/colors_and_type.css` 의 CSS 변수만 사용. 새 색상 도입 금지. 특히 오프-팔레트 블루(`#3B82F6 · #0EA5E9 · #6366F1 · #60A5FA`), 웜 그레이(`#78716C`)는 가이드에서 **명시적으로 금지**.
2. **포인트 컬러는 3개 토큰뿐 — `#FF7E5F`(브랜드 블루), `#E5573A`(딥 네이비), `#FFF1EC`(소프트 블루).** 다른 블루 변주·투명도 버전 금지.
3. **border-radius: 0.** 모든 카드·배지·버튼·태그 직각. **예외**: 데이터 시각화 컴포넌트의 *원형 도트·아바타·범례 swatch* (예: numbered-circle-list 의 번호 뱃지, instructor-profile 의 사진 슬롯, bubble-chart·timeline 의 데이터 점) 는 의미상 원이라 `border-radius: 50%` 허용. 이 외에 카드/박스/버튼/표 셀은 무조건 0.
4. **box-shadow 금지.** 어떤 요소에도.
5. **linear-gradient 금지.** 배경도, 버튼도, 텍스트도.
6. **애니메이션 · 트랜지션 금지.** hover 상태에서도 색 변하지 않음.
7. **폰트는 Pretendard Variable 만.** Inter · Roboto · 시스템 폰트 단독 사용 금지 (fallback 에만 허용).
8. **한국어 전용.** 본문·제목 모두 한글. 영어는 제품명/기술 용어/UI 레이블에만.
9. **이모지는 프로덕션 UI 금지.** 마크다운 헤더에만 제한적 허용 (🎨 🧭 📇 ⛔ 🚫).
10. **원본 1:1 보존.** 엑셀/표 데이터를 "보기 좋게" 축약하거나 반올림하지 않음.

## 파일 구조

```
bluelaps-design-system/
├── README.html                 브랜드 가이드 (한국어 · 이 파일의 소스 컨텍스트)
├── SKILL.md                    이 파일
├── tokens/colors_and_type.css  [1] 유일한 소스 오브 트루스 — 먼저 읽기
├── fonts/PretendardVariable.ttf 공식 폰트 (Google Fonts 대체 없음)
├── primitives/_shared.css      [2] 헤더·로고·이미지슬롯·리듬 (모든 components/·layouts/ 가 import)
├── components/                 [3] 단위 데이터-시각화 컴포넌트 7종
│                                 (gantt · matrix-2x2 · timeline · org · bubble · concept-tree · numbered-list)
├── layouts/                    [4] 1슬라이드 단위 완성본 22종
│                                 (cover · divider · toc · content-* · faq-list · instructor-profile 등)
├── pages/                      [5] 실전 사용 사례
│   ├── index.html              마케팅 제안서 샘플 덱
│   └── charts.html             차트 슬라이드 7종 카탈로그
├── preview/                    [6] 디자인 시스템 탭 미니카드 (700px 카탈로그)
└── ui_kits/web-proposal/       웹 제안서 UI 키트
```

> **로고 자산 없음** — CHATdaeri 워드마크는 Pretendard 800 + 브랜드 블루 인라인 텍스트로 렌더. `<span style="font-family:'Pretendard Variable';font-weight:800;letter-spacing:-0.035em;color:#FF7E5F;">CHATdaeri</span>` 패턴 사용.

## 시작 순서

PPT 빌드(에이전트 위임): `proposal-deck-agent` 에 위임. 9-step 워크플로 본문은 `agents/proposal-deck-agent.md` 에 있음. 핵심:

1. `catalog/_index.md` 만 먼저 Read (분할 카탈로그) — 어느 stage 파일을 볼지 결정.
2. 슬라이드 슬롯이 정해지면 해당 stage 파일 1개만 Read.
3. **슬라이드별 Read/Write 반복 금지** — `output/<slug>/deck.cjs` 한 파일에 모든 슬라이드의 (template, tokens, blocks) 정의.
4. `node skills/proposal/scripts/build.cjs deck.cjs` 한 번 호출 → render → lint → convert 자동 실행 → `<slug>.pptx` 완성.

새 단일 슬라이드를 직접 손으로 만들 때:

1. **먼저 읽어라**: `tokens/colors_and_type.css` + `README.html` 의 Visual Foundations.
2. **템플릿에서 출발**: 단위 컴포넌트는 `components/`, 슬라이드 한 장 단위 완성본은 `layouts/`.
3. **공용 CSS**: `primitives/_shared.css` 를 import — 헤더·로고·이미지 슬롯·리듬 클래스 정의.
4. **브랜드 토큰**: 값 하드코딩 금지. 항상 `var(--brand-orange)`, `var(--light-border)` 형태로.

## 슬라이드 제작 체크리스트

슬라이드 한 장을 만들 때 이 순서로:

- [ ] 사이즈는 **960×540** 고정 (PPTX export 시 720pt×405pt 로 변환됨)
- [ ] **좌우 패딩 60px**, 상단 32px, 하단 30px
- [ ] **헤더 라인** (2px `#FF7E5F`) 이 `left: 60px; right: 60px` 폭과 일치
- [ ] 로고는 **우측 하단** `bottom: 20px; right: 60px`, `<img src="../assets/chatdaeri-logo.png">` (height: 18px)
- [ ] 페이지 번호는 **`01, 02, ...` 2자리 zero-pad**
- [ ] 본문 최소 **13px** (프로젝터 가독성)
- [ ] 2~4개 블록이면 **1개는 hero (flex:1.4, h3 19px 블루)**, 나머지는 sub (flex:1, h3 17px 그레이). AI 균일 카드 방지.
- [ ] 이미지는 한 슬라이드에서 **같은 aspect-ratio** (`16-9`, `3-2`, `4-3`, `1-1`, `2-3` 중 하나)
- [ ] 표는 **상단 3px + 하단 2px 블루 · 좌우 보더 없음 · 가로선만**

## 카피 라이팅 체크

- "Learn more" 같은 영문 CTA 금지 — "자세히 보기" / "도입 문의하기"
- 제안서·세일즈는 "~합니다" 정중체. 제품 마케팅 카피는 단정한 해요체.
- "사용자", "팀", "AI" 3인칭 기본. "I / you / we" 거의 안 씀
- 숫자·날짜는 한국식: `2026.04`, `Part 1`, `01.` 2자리 zero-pad

## Claude Code 가 피해야 할 패턴 (AI 슬롭)

이 디자인 시스템에서 특히 피할 것:

- ❌ 웜톤/세피아/그레인 이미지 필터
- ❌ "✨ 스마트한 ~" 같은 이모지 + 형용사 마케팅 카피
- ❌ `border-radius: 12px` + `box-shadow` + gradient 조합
- ❌ 블루 그라디언트 (`#FF7E5F → #60A5FA`)
- ❌ 풀 블리드 이미지 배경 (항상 흰색 배경 + 보더 있는 이미지 슬롯)
- ❌ 커스텀 SVG 일러스트 — 이 브랜드에 없음. 제품 스크린샷 · 다이어그램만.
- ❌ 아이콘 자유 사용 — 필요하면 Lucide stroke 만, 그 외 사용자 확인

## 산출물 포맷

- **슬라이드**: `.html` (960×540 section 여러 개) → 원하면 PPTX export
- **웹**: `.html` 단일 페이지, `scroll-snap` 으로 풀스크린 섹션
- **로고 표기**: 슬라이드 우측 하단 / 웹 헤더 · 푸터에 Pretendard 800 + 브랜드 블루 텍스트 워드마크 `CHATdaeri`
