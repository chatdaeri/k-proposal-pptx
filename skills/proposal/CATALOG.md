# CHATdaeri Templates — Catalog

> 39 개 HTML 템플릿(`layouts/` + `components/`) 의 결정 트리 + 토큰 명세.
> **이 파일 1번 Read 로 슬롯 매핑 · MECE 페어 · 모든 템플릿 토큰까지 파악된다.** (catalog/ 분할 폴더는 제거되어 더 이상 존재하지 않음.)

## 사용 흐름

1. 한국식 스토리 아크 슬롯(① ~ ⑩) 이 정해지면 **§ 1 슬롯 인덱스** 표에서 후보 1~3 개 추리기.
2. **§ 2 MECE 페어** 분리 규칙으로 1 개로 좁히기.
3. **§ 3 템플릿 상세** 의 해당 entry 에서 토큰명·제약·Notes 확인 (entry 헤딩이 ``` `<template>` ``` 형식이라 grep 으로 즉시 점프).
4. 카탈로그에 없는 템플릿명·토큰을 발명하지 말 것.

> 디자인 절대 규칙(8 색 토큰만, border-radius 0, no shadow/gradient/animation, `fonts/*.ttf` + `tokens/font-face.generated.css`·`colors_and_type.css` 폰트 SSoT, 한국어 전용, 원본 1:1 보존) 은 모든 템플릿이 이미 준수. 자유 HTML 슬라이드 작성 시에만 별도 점검.

---

## § 1. 슬롯 인덱스

| 슬롯 | 후보 |
|---|---|
| ① 표지 | `cover` |
| ② 목차 | `toc` |
| ③ 분석 1~5 장 | **모든 콘텐츠 템플릿 후보 (34 개)** — `cover` / `toc` / `divider` / `emphasis-hero` / `faq-list` 제외. 1 순위(흔히 맞음): [D] `matrix-2x2` `bubble-chart` `concept-tree` · [J] `combo-bar-line` `two-up-charts` `bar-table` `donut-chart` `bar-graph` `chart-donut` `two-up-charts-bar` `two-up-charts-line` · `as-is-to-be`. 2 순위(메시지 따라): [E] `content-grid` `content-text-only` `content-split` `content-2-col-cards` `content-3-col-cards` · [F] `content-hero-image` `content-2-image-row` `content-3-image-strip` `image-left-label-blocks` `news-clipping` · [G] · [H] · [I] `tool-card-grid` `areas-list`. |
| ④ 핵심 메시지 | `emphasis-hero` |
| ⑤ 핵심 인사이트 | `emphasis-hero` (재사용) · `content-grid` · `content-3-col-cards` · `icon-grid` |
| ⑥ 실행방안 | **모든 콘텐츠 템플릿 후보 (34 개)** — 같은 제외 5 개. 1 순위: [G] `timeline` `gantt-chart` `step-cards` `numbered-steps-split` `numbered-circle-list` · `as-is-to-be`. 2 순위(보조 메시지·근거): [E] · [F] · [J] (실행 효과 차트) · `tool-card-grid` `areas-list` (활용 도구·순번 과제) · `product-screenshot` (제품 소개). |
| ⑦ 인력 구성 | [H] `org-chart` `instructor-profile` · `numbered-circle-list` (5~10 명 명단) |
| ⑧ 예산안 | `budget-table` (한국 제안서 표준) · `bar-table` · `content-grid` |
| ⑨ 정당화 | **모든 콘텐츠 템플릿 후보 (34 개)** — 같은 제외 5 개. 1 순위: 과거 사례 → [F] `content-3-image-strip` `content-2-image-row` `content-hero-image` `news-clipping` 또는 [E] `content-3-col-cards` `content-grid` / 자사 솔루션·도구 → [I] `tool-card-grid` `icon-grid` / 팀·인물 → `instructor-profile` / 실적 데이터 → [J] 차트. 2 순위: 분석 재사용([D]) · Before/After (`as-is-to-be`) · 단계 흐름([G]) · 제품 스크린샷 → `product-screenshot`. |
| ⑩ 마무리 | `divider` (Closing) · `emphasis-hero` (한 줄 결론) · `faq-list` (Q&A) |

### 카테고리 결정변수

| Cat | 이름 | 결정변수 | 템플릿 |
|---|---|---|---|
| [A] | STRUCTURAL | 위치 | `cover` (첫 장) · `divider` (챕터·끝) |
| [B] | NAVIGATION | — | `toc` |
| [C] | EMPHASIS | — | `emphasis-hero` |
| [D] | ANALYSIS | 관계 형태 | `matrix-2x2` (사분면) · `bubble-chart` (산점) · `concept-tree` (위계) |
| [E] | CONTENT-LAYOUT | 블록 수 / 비교 형태 | `content-grid` (4 격자) · `content-text-only` (1 hero + 3 sub) · `content-split` (좌제목+우본문) · `content-2-col-cards` (2 카드) · `content-3-col-cards` (3 카드) · `as-is-to-be` (Before/After) |
| [F] | IMAGE-LAYOUT | 이미지 수 / 면적 | `content-hero-image` (1 풀폭) · `content-2-image-row` (2) · `content-3-image-strip` (3) · `image-left-label-blocks` (이미지+라벨) · `news-clipping` (뉴스클립 1+2) · `product-screenshot` (스크린샷+개념4) |
| [G] | EXECUTION-PLAN | 축 / 세부도 | `timeline` (마일스톤 점) · `gantt-chart` (워크스트림×주) · `step-cards` (가로 4) · `numbered-steps-split` (좌제목+우 3~5) · `numbered-circle-list` (세로 5~10) |
| [H] | PEOPLE | 단위 | `org-chart` (조직 계층) · `instructor-profile` (1인) |
| [I] | LIST | 종류 | `faq-list` (Q&A 3~5) · `tool-card-grid` (도구 6~8) · `areas-list` (순번 5행 리스트) · `icon-grid` (아이콘 4 카드) |
| [J] | DATA-VIS | 차트 형태 | `combo-bar-line` (시계열 12 점) · `two-up-charts` (좌:바±/우:라인) · `bar-table` (좌:바/우:표) · `donut-chart` (4 세그) · `budget-table` (표 + 합계) · `bar-graph` (절대값 막대6) · `chart-donut` (도넛 3종) · `two-up-charts-bar` (±편차 막대9) · `two-up-charts-line` (단일 추세선) |

---

## § 2. MECE 페어 분리

| 페어 | 분리 기준 |
|---|---|
| `cover` vs `divider` | 덱 첫 장? → cover / 챕터·끝? → divider |
| `divider` vs `emphasis-hero` | 섹션 번호+제목? → divider / 한 줄 결론? → emphasis-hero |
| `cover` vs `emphasis-hero` | 회사명+문서종류+연락처? → cover / 분석 압축 결론? → emphasis-hero |
| `matrix-2x2` vs `bubble-chart` | 사분면 라벨 명시? → matrix / 위치만? → bubble |
| `matrix-2x2` vs `content-grid` | 사분면 의미? → matrix / 균등 4 개 나열? → grid |
| `matrix-2x2` vs `content-2-col-cards` | 두 축+사분면? → matrix / 2 개 단순 비교? → 2-col |
| `concept-tree` vs `org-chart` | 개념(추상)? → tree / 사람·조직(구체)? → org |
| `concept-tree` vs `numbered-steps-split` | 위계(parent-child)? → tree / 시간 순서(1→2→3)? → steps-split |
| `content-2-col-cards` vs `content-2-image-row` | 텍스트 핵심? → 2-col / 이미지? → 2-image |
| `content-3-col-cards` vs `content-3-image-strip` | 텍스트 핵심? → 3-col / 이미지 1:1? → 3-image |
| `content-text-only` vs `content-grid` | 1 hero + 3 sub 리듬? → text-only / 균등 4? → grid |
| `content-split` vs `content-text-only` | 좌 큰 제목 + 우 한 단락? → split / 블록 4~5? → text-only |
| `content-hero-image` vs `image-left-label-blocks` | 이미지 50%+? → hero-image / 이미지+우측 라벨? → image-left-label |
| `as-is-to-be` vs `content-2-col-cards` | 변환 방향성(화살표)? → as-is-to-be / 단순 비교? → 2-col |
| `timeline` vs `gantt-chart` | 마일스톤 점만? → timeline / 워크스트림×주간 막대? → gantt |
| `timeline` vs `numbered-steps-split` | 시간축(날짜 명시)? → timeline / 단계(번호만)? → steps-split |
| `step-cards` vs `numbered-circle-list` | 가로 4? → cards / 세로 5~10? → circle |
| `step-cards` vs `numbered-steps-split` | 동등 가로 4? → cards / 좌메인+우 단계? → steps-split |
| `numbered-circle-list` vs `org-chart` | 평면 명단? → circle / 계층? → org |
| `instructor-profile` vs `org-chart` | 1 명 상세? → instructor / 다인원 계층? → org |
| `instructor-profile` vs `tool-card-grid` | 사람 1? → instructor / 사물 N? → tool-card |
| `faq-list` vs `emphasis-hero` | Q&A 3~5 쌍? → faq / 한 줄 결론? → emphasis |
| `tool-card-grid` vs `content-grid` | 도구 6~8(로고)? → tool / 일반 4? → grid |
| `combo-bar-line` vs `two-up-charts` | 한 차트 막대2+선1? → combo / 좌·우 다른 차트? → two-up |
| `combo-bar-line` vs `bar-table` | 시계열(연도)? → combo / 카테고리 분포? → bar-table |
| `bar-table` vs `budget-table` | 좌:차트+우:표? → bar-table / 표 단독+합계+운영안? → budget |
| `donut-chart` vs `bar-table` | 비율(전체 100%)? → donut / 빈도·금액? → bar-table |
| `budget-table` vs `content-grid` | 예산·KPI 표+합계? → budget / 4 항목 균등? → grid |
| `areas-list` vs `numbered-circle-list` | 표형 행(번호+항목+설명 3열)? → areas-list / 세로 나열(원형 번호)? → circle |
| `areas-list` vs `faq-list` | 순번+항목+설명 → areas-list / Q&A 쌍 → faq-list |
| `icon-grid` vs `content-grid` | 아이콘 심볼 64px 강조? → icon-grid / 텍스트 균등 4? → content-grid |
| `icon-grid` vs `tool-card-grid` | 추상 개념(텍스트 심볼)? → icon-grid / 구체 도구(로고)? → tool-card-grid |
| `news-clipping` vs `content-2-image-row` | 뉴스(출처·헤드라인 포함)? → news-clipping / 일반 이미지 비교? → 2-image-row |
| `product-screenshot` vs `image-left-label-blocks` | 우측 번호 개념 4개? → product-screenshot / 우측 라벨 블록 3~5? → image-left-label |
| `product-screenshot` vs `content-hero-image` | 우측 개념 리스트 필요? → product-screenshot / 이미지만 강조? → hero-image |
| `bar-graph` vs `bar-table` | 시각 크기 비교만? → bar-graph / 차트+우측 상세표? → bar-table |
| `bar-graph` vs `two-up-charts-bar` | 절대값(양수만)? → bar-graph / ±증감률? → two-up-charts-bar |
| `chart-donut` vs `donut-chart` | 3 KPI 비율 동시 비교? → chart-donut / 단일 도넛+범례 표? → donut-chart |
| `two-up-charts-bar` vs `combo-bar-line` | 범주 간 ±편차? → two-up-charts-bar / 시계열 이중축? → combo-bar-line |
| `two-up-charts-line` vs `combo-bar-line` | 단일 추세선+영역음영? → two-up-charts-line / 막대2+선1 이중축? → combo-bar-line |

---

## § 3. 템플릿 상세

> 헤더 토큰 `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` 는 [B][C][D][E][F][G][H][I][J] 모든 컨텐츠 슬라이드에 공통이므로 entry 에서 반복 표기 안 함. [A] cover/divider 는 헤더 chrome 면제.
> [D][G][J] entry 는 본문 라벨 토큰 `{{LABEL}}` (≤ 20 자 eyebrow) · `{{TITLE}}` (≤ 50 자 메인 메시지) · `{{LEDE}}` (≤ 80 자 부제) 도 공통.
> 토큰 표기 약속: `{{NAME}}` ≤ N 자 = 한국어 글자 수 상한. `block × N` = 반복 슬롯 (BLOCK 마커로 N 회 복제).

### `cover` — [A] · ① 표지
- File: `layouts/cover.html`
- Use: 덱 첫 슬라이드 (회사명 + 문서 종류 + 핵심 카피 3 행 + 연락처)
- Don't: 챕터 → `divider` / 한 줄 결론 → `emphasis-hero` / 끝맺음 → `divider` (Closing) 또는 `emphasis-hero`
- Tokens: `{{SUBTITLE}}` ≤ 30 자 · `{{HERO_LINE_1~3}}` ≤ 14 자 (한국어 56px/800 폭 보정) · `{{CONTACT_LABEL}}` · `{{CONTACT_DETAIL}}` · `{{LOGO_PATH}}` (기본 `../assets/logo.png`)
- Notes: 헤더 chrome 없음. hero 56px/800/`var(--brand-deep)` 단색.

### `divider` — [A] · ⑩ 마무리 / 챕터 구분
- File: `layouts/divider.html`
- Use: "Part 02 시작" 챕터 전환 / 덱 마지막 ("감사합니다"/"Q&A") / 섹션 번호+제목+부제
- Don't: 콘텐츠 슬라이드 → [C]~[I] / 표지 → `cover` / 한 줄 결론 → `emphasis-hero`
- Tokens: `{{SECTION_NUMBER}}` "01"~"99" · `{{SECTION_TITLE}}` ≤ 25 자 · `{{SECTION_SUBTITLE}}` ≤ 50 자 (옵션)
- Notes: 헤더 chrome 면제. 64×64 네이비 뱃지(`--brand-deep`) + 44px/800/`--brand-deep` 제목.

### `toc` — [B] · ② 목차
- File: `layouts/toc.html`
- Use: 두 번째 슬라이드, 섹션 3~7 개 (sweet spot 5~7)
- Don't: 섹션 ≤ 2 (생략) / ≥ 8 (분할 또는 그룹화) / 본문 격자 → `content-grid`
- Tokens: `{{HERO_LABEL}}` ≤ 12 자 (52px/800 좌측 큰 타이포) · `BLOCK:toc_item` × N { `{{ITEM_NUMBER}}` "01"~"99" · `{{ITEM_TITLE}}` ≤ 20 자 · `{{ITEM_DESC}}` ≤ 40 자 (옵션) }
- Notes: 좌측 "Contents" 큰 타이포 + 우측 항목 리스트. 항목 사이 1px `--light-border`.

### `emphasis-hero` — [C] · ④ 핵심 메시지 / ⑤ 인사이트 / ⑩ Q&A
- File: `layouts/emphasis-hero.html`
- Use: 분석을 한 줄로 압축한 결론 (BLUF), 정중앙 대형 타이포. 덱 전체에 0~3 장 권장.
- Don't: 챕터 → `divider` / 표지 → `cover` / 격자 → `content-grid` / 분석 → [D]
- Tokens: `{{EYEBROW}}` ≤ 20 자 (14px/600 brand-orange, 대문자 변환) · `{{HERO_LINE_1~2}}` ≤ 14 자 (58px/800. LINE_2 만 brand-orange 강조) · `{{SUBTITLE}}` ≤ 80 자 · `{{FOOTER_LABEL}}`
- Notes: 헤더 chrome 없음. accent bar 48×4 brand-orange (eyebrow 아래).

### `matrix-2x2` — [D] · ③ 분석
- File: `components/matrix-2x2.html`
- Use: 두 축 사분면 비교 (시급성×중요도, Effort×Impact, BCG), 사분면별 명시 라벨
- Don't: 라벨 없는 위치 → `bubble-chart` / 항목 2 → `content-2-col-cards` / 위계 → `concept-tree` / 시간 → `timeline`/`gantt-chart` / 5+ → `bubble-chart`
- Tokens: `{{X_AXIS}}` `{{Y_AXIS}}` ≤ 12 자 · `{{Q1~4_TAG}}` `{{Q1~4_NAME}}` `{{Q1~4_BODY}}` ≤ 30 자 `{{Q1~4_DESC}}` ≤ 60 자
- Notes: I 사분면(우상단) accent — 배경 `var(--brand-tint-solid)` + 1.5px brand-orange 보더. 우측 카드 4 — 좌측 핀 12.5px/800/brand-orange (I·II·III·IV).

### `bubble-chart` — [D] · ③ 분석
- File: `components/bubble-chart.html`
- Use: 산점도 5~8 항목, 점 크기로 3 차원 표현(매출·사용자 수), 사분면 라벨 없는 자유 위치잡기
- Don't: 사분면 라벨 명시 → `matrix-2x2` / 위계 → `concept-tree` / 시간 → `timeline` / 4 이하 → `content-2-col-cards`/`content-grid` / 9+ → 분할
- Tokens: `{{X_AXIS}}` `{{Y_AXIS}}` `{{SIZE_DIM}}` ≤ 12 자 · `{{SEG_A~E}}` 5 점 세그먼트 이름 · `{{INSIGHT}}` ≤ 80 자
- Notes: 점 8~24px 원, brand-orange 단색. 라벨 점 옆 11px/dark-gray.

### `concept-tree` — [D] · ③ 분석
- File: `components/concept-tree.html`
- Use: 위계 분해 (root → 카테고리 3 → 리프 6), 이슈 트리, 전략 분해. 가로(L→R) 트리.
- Don't: 사람·조직 → `org-chart` / 시간 → `timeline`/`numbered-steps-split` / 두 축 → `matrix-2x2`/`bubble-chart` / 단순 나열 → `content-grid`
- Tokens: `{{ROOT_NAME}}` ≤ 15 자 `{{ROOT_BODY}}` ≤ 40 자 · `{{CAT_1~3_NAME}}` ≤ 12 자 `{{CAT_1~3_BODY}}` ≤ 30 자 · `{{LEAF_1~6_NAME}}` ≤ 12 자 `{{LEAF_1~6_BODY}}` ≤ 25 자
- Notes: 1px `--light-border` 직각 박스, 연결선 1px dark-gray. 강조 노드 배경 `var(--brand-tint-solid)`.

### `content-grid` — [E] · ③ ⑥ ⑨
- File: `layouts/content-grid.html`
- Use: 텍스트 4 항목 2×2 격자, 동등 가중치 (기능 4, 핵심 가치 4)
- Don't: 2 → `content-2-col-cards` / 3 → `content-3-col-cards` / 5~6 → `numbered-circle-list` 또는 분할 / 이미지 핵심 → [F] / 두 축 → `matrix-2x2` / 시간 → [G]
- Tokens: `{{GRID_TITLE}}` ≤ 50 자 · `{{ITEM_1~4_TITLE}}` ≤ 18 자 `{{ITEM_1~4_DESC}}` ≤ 50 자
- Notes: **항목 4 개 고정.** 5+ 필요 시 다른 카테고리. 32px/700/brand-orange 타이틀.

### `content-text-only` — [E] · ③ ⑥ ⑨
- File: `layouts/content-text-only.html`
- Use: 이미지 없는 텍스트 4~5 블록 (1 hero + 3 sub), 정성 분석
- Don't: 이미지 핵심 → [F] / 균등 4 → `content-grid` / 좌제목+우 한 단락 → `content-split` / 2~3 → `content-2-col-cards`/`content-3-col-cards`
- Tokens: `{{HERO_TITLE}}` ≤ 20 자 `{{HERO_BODY}}` ≤ 80 자 · `{{LEFT_TITLE}}` `{{LEFT_DESC}}` (sub-1) · `{{SUB_2~3_TITLE}}` `{{SUB_2~3_BODY}}` · `{{SUB_N_*}}` (block × N)
- Notes: 1 hero(flex 1.4, h3 19px brand-orange) + 3 sub(flex 1, h3 17px dark-gray). **위계 위배 금지**: 좌측 LEFT_TITLE 거대 hero 는 나머지 블록을 요약하는 단일 메시지일 때만. 동급 4 항목이면 `content-grid` 사용.

### `content-split` — [E] · ③ ⑥ ⑨
- File: `layouts/content-split.html`
- Use: 좌측 큰 제목 + 우측 한 단락 본문 (한 메시지 집중)
- Don't: 우측 다항목 → `content-grid`/`content-2-col-cards` / 좌측 이미지 → `content-hero-image` / 단계 → `numbered-steps-split`
- Tokens: `{{LEFT_TITLE}}` ≤ 20 자 (32~36px/700) · `{{LEFT_DESC}}` ≤ 200 자
- Notes: 좌:1 / 우:1.5 비율, 사이 1px `--light-border` 세로선.

### `content-2-col-cards` — [E] · ③ ⑥ ⑨
- File: `layouts/content-2-col-cards.html`
- Use: 2 카드 비교 (Plan A/B, Before/After), 텍스트 중심 (이미지 카드 면적 < 50%)
- Don't: 이미지 핵심 → `content-2-image-row` / 3 → `content-3-col-cards` / 4 → `content-grid` / 두 축 → `matrix-2x2`
- Tokens: `{{MAIN_TITLE}}` `{{MAIN_SUB}}` · `{{CARD_1~2_TITLE}}` `{{CARD_1~2_SUBTITLE}}` `{{CARD_1~2_BODY}}` `{{CARD_1~2_IMG_DESC}}`
- Notes: 균등 폭, 24px gap. 1 개 `accent` 강조 가능 (배경 `var(--brand-tint-solid)`).

### `content-3-col-cards` — [E] · ③ ⑥ ⑨
- File: `layouts/content-3-col-cards.html`
- Use: 3 카드 병렬 (Tier 1·2·3, 솔루션 3), 텍스트 중심
- Don't: 이미지 → `content-3-image-strip` / 2 → `content-2-col-cards` / 4 → `content-grid` / 단계 시간 → `step-cards`/`numbered-circle-list`
- Tokens: `{{MAIN_TITLE}}` `{{MAIN_SUB}}` · `{{CARD_1~3_TITLE}}` `{{CARD_1~3_SUBTITLE}}` `{{CARD_1~3_BODY}}` `{{CARD_1~3_IMG_DESC}}`
- Notes: 1:1:1 균등, 16px gap.

### `as-is-to-be` — [E+] · ③ ⑥
- File: `layouts/as-is-to-be.html`
- Use: 좌:현재(AS-IS) / 가운데 화살표 / 우:제안(TO-BE) 의 변환 비교 — 마케팅·시스템·프로세스 개선
- Don't: 단순 2 카드 → `content-2-col-cards` / 양쪽 이미지 → `content-2-image-row` / N 단계 → `numbered-steps-split` / 시간축 → `timeline`/`gantt-chart` / 좌:대제목+우:한 단락 → `content-split`
- Tokens: `{{TITLE_HTML}}` ≤ 50 자 (`<span class="a">…</span>` 강조 가능) · `{{ASIS_TAG}}` `{{ASIS_HEADLINE}}` ≤ 25 자 `{{ASIS_BULLETS_HTML}}` (`<li>` × 3~4) `{{ASIS_NOTE}}` ≤ 40 자 (반드시 `<p>` wrap) · `{{TOBE_TAG}}` `{{TOBE_HEADLINE}}` `{{TOBE_BULLETS_HTML}}` `{{TOBE_EFFECT}}` ≤ 50 자 · `{{FOOTER_LABEL}}`
- Notes: AS-IS 박스 `var(--light-bg)` + 불릿 `·` mid-gray. TO-BE 흰 + 상단 3px brand-orange + 불릿 `▸` brand-orange. 화살표 32×32 SVG.

### `content-hero-image` — [F] · ③ ⑥ ⑨
- File: `layouts/content-hero-image.html`
- Use: 이미지 1 개 면적 50%+ (제품 스크린샷, 다이어그램), 이미지 옆/아래 짧은 메시지 1~2 포인트
- Don't: 이미지 보조 → `content-2-col-cards` 의 카드 안 / 2 → `content-2-image-row` / 3 → `content-3-image-strip`
- Tokens: `{{MAIN_TITLE}}` `{{MAIN_SUB}}` · `{{IMG_DESC}}` · `{{POINT_1~2_TITLE}}` `{{POINT_1~2_BODY}}`
- Notes: 이미지 슬롯 1px `--light-border`, aspect 16-9 또는 3-2.

### `content-2-image-row` — [F] · ③ ⑥ ⑨
- File: `layouts/content-2-image-row.html`
- Use: 이미지 2 핵심 (Before/After, 사례 2), 모두 1:1 정사각 통일
- Don't: 텍스트 비교 → `content-2-col-cards` / 3 → `content-3-image-strip` / **비율 혼합 (16:9+1:1) 절대 금지** → 다른 템플릿 또는 분할
- Tokens: `{{MAIN_TITLE}}` `{{MAIN_SUB}}` · `{{CARD_1~2_TITLE}}` `{{CARD_1~2_BODY}}` `{{CARD_1~2_IMG_DESC}}`
- Notes: aspect 1:1 통일, 24px gap.

### `content-3-image-strip` — [F] · ③ ⑥ ⑨
- File: `layouts/content-3-image-strip.html`
- Use: 이미지 3 병렬 (사례 3, 도구 3), 모두 1:1 통일
- Don't: 2 → `content-2-image-row` / 4+ → 슬라이드 분할 (3+1 / 2+2) / 텍스트 중심 → `content-3-col-cards`
- Tokens: `{{MAIN_TITLE}}` `{{MAIN_SUB}}` · `{{CARD_1~3_TITLE}}` `{{CARD_1~3_BODY}}` `{{CARD_1~3_IMG_DESC}}`
- Notes: aspect 1:1 통일, 1:1:1 균등, 16px gap.

### `image-left-label-blocks` — [F] · ③ ⑥ ⑨
- File: `layouts/image-left-label-blocks.html`
- Use: 좌측 큰 이미지(3-2 또는 4-3) + 우측 라벨 블록 3~5 ("이 화면의 4 가지 핵심 요소")
- Don't: 이미지 면적 50%+ → `content-hero-image` / 라벨 대신 단락 → 별도 템플릿 / 라벨 6+ → 분할
- Tokens: `{{MAIN_TITLE}}` · `{{IMG_DESC}}` · `{{BLOCK_1~3_LABEL}}` ≤ 12 자 `{{BLOCK_1~3_BODY}}` ≤ 40 자 · `{{BLOCK_N_*}}` (block × N)
- Notes: 좌(이미지 flex 1.2) / 우(블록 flex 1). 라벨 12px/700/brand-orange.

### `timeline` — [G] · ⑥ 실행
- File: `components/timeline.html`
- Use: 마일스톤 5 점 (날짜·이름·본문), 분기/연도 단순 흐름
- Don't: 워크스트림×주 → `gantt-chart` / 가로 카드 → `step-cards` / 좌제목+우 → `numbered-steps-split` / 세로 5~10 → `numbered-circle-list`
- Tokens: `{{N1~5_DATE}}` ≤ 8 자 `{{N1~5_NAME}}` ≤ 12 자 `{{N1~5_BODY}}` ≤ 30 자 · `{{N_N_*}}` (block × N)
- Notes: 가로 시간축 1px brand-orange, 점 8px 원. 점 위 11px/mid-gray 날짜.

### `gantt-chart` — [G] · ⑥ 실행
- File: `components/gantt-chart.html`
- Use: 워크스트림 5 × 주간 단위 막대 (Week 1~12), 시작/종료 + 의존, "Today" 마커
- Don't: 마일스톤 점만 → `timeline` / 단계 카드 → `step-cards` / 워크스트림 6+ → 분할/통합 / 시간 축 없는 단계 → `numbered-steps-split`
- Tokens: `{{TASK_1~5}}` ≤ 18 자 (워크스트림 이름) · `{{TODAY}}` (Week 5 등 마커 위치)
- Notes: 좌 라벨 컬럼 + 우 주간 그리드. 막대 brand-orange 단색 4~8px. Today 1px brand-deep 세로선.

### `step-cards` — [G] · ⑥ 실행
- File: `layouts/step-cards.html`
- Use: 단계 4 가로 카드 (Step 1·2·3·4), 동등 가중치, 카드 안 단계 이미지 작게 (옵션)
- Don't: 5+ 세로 → `numbered-circle-list` / 좌제목+우 → `numbered-steps-split` / 시간축 → `timeline` / 2~3 → `content-2-col-cards`/`content-3-col-cards`
- Tokens: `{{STEP_TAG}}` `{{STEP_TITLE}}` `{{STEP_DESC}}` (본문 헤더) · `{{CARD_1~4_TITLE}}` `{{CARD_1~4_BODY}}` `{{CARD_1~4_IMG_DESC}}` · `{{WARNING_TEXT}}` ≤ 100 자 (옵션 하단 박스)
- Notes: 4 카드 균등, 12px gap. 좌상단 단계 번호 12px/700/brand-orange.

### `numbered-steps-split` — [G] · ⑥ 실행
- File: `layouts/numbered-steps-split.html`
- Use: 좌측 큰 메인 타이틀 + 우측 단계 3~5 (번호 + 제목 + 설명), 좌측 다이어그램 (옵션)
- Don't: 가로 카드 → `step-cards` / 세로 길이 → `numbered-circle-list` / 시간 → `timeline`/`gantt-chart` / 단순 좌우 → `content-split`
- Tokens: `{{MAIN_TITLE}}` ≤ 25 자 · `{{STEP_LABEL}}` ≤ 20 자 · `{{IMG_DESC}}` (옵션) · `{{SUB_1~3_TITLE}}` `{{SUB_1~3_BODY}}` · `{{SUB_N_*}}` (block × N)
- Notes: 좌:1.1 / 우:1. 우측 단계 28px/800/brand-orange 번호 + 제목·본문.

### `numbered-circle-list` — [G] · ⑥ 실행 / ⑦ 인력
- File: `components/numbered-circle-list.html`
- Use: 세로 리스트 5~10 (단계, 멤버 명단, 체크리스트), 항목당 (원형 번호 + 제목 + 짧은 설명)
- Don't: 가로 카드 → `step-cards` / 좌제목+우 → `numbered-steps-split` / 격자 4 → `content-grid` / 시간축 → `timeline`
- Tokens: `{{MAIN_TITLE}}` `{{MAIN_SUB}}` · `{{ITEM_1~3_TITLE}}` ≤ 18 자 `{{ITEM_1~3_DESC}}` ≤ 40 자 · `{{ITEM_N_*}}` (block × N, 4~10)
- Notes: 28px 원형 뱃지(`var(--brand-orange)` + 흰 14px/800).

### `org-chart` — [H] · ⑦ 인력
- File: `components/org-chart.html`
- Use: 조직 계층 — CEO → 부서 3 → 팀 3 개씩 → 인원, 다인원(10+) 압축
- Don't: 추상 분해 → `concept-tree` / 1 명 → `instructor-profile` / 5~10 명단 → `numbered-circle-list` / 도구·솔루션 → `tool-card-grid`
- Tokens: `{{CEO_NAME}}` ≤ 12 자 · `{{DIV_1~3_TAG}}` ≤ 4 자 `{{DIV_1~3_NAME}}` ≤ 12 자 · `{{T1~3_1~3_HEAD}}` `{{T1~3_1~3_NAME}}` (부서당 3 팀, 팀당 head + name) · `{{DIV_N_*}}` `{{TEAM_N_*}}` (block × N)
- Notes: CEO 박스만 accent (배경 `var(--brand-tint-solid)`). 박스 1px `--light-border`, 연결선 1px dark-gray.

### `instructor-profile` — [H] · ⑨ 정당화 (1 인 핵심)
- File: `layouts/instructor-profile.html`
- Use: 강사·발표자·핵심 인력 1 명 상세 — 사진 + 이름 + 이력 4~6 + 저서/대표작
- Don't: 조직 계층 → `org-chart` / 5+ → `numbered-circle-list` / 정보 부족 → `content-text-only`/`emphasis-hero`
- Tokens: `{{INSTRUCTOR_NAME}}` ≤ 15 자 · `{{BULLET_1~5}}` ≤ 40 자 · `{{BULLET_N}}` (block × N, ≤ 6 권장) · `{{BOOK_LABEL}}` `{{BOOK_TITLE}}` (옵션)
- Notes: 좌(사진 flex 1, aspect 3-2) / 우(정보 flex 1.4). 이름 28px/800/black.

### `faq-list` — [I] · ⑨ 정당화 / 부록
- File: `layouts/faq-list.html`
- Use: Q&A 3~5 쌍, 발표 후 예상 질의 정리
- Don't: 단일 메시지 → `emphasis-hero` / Q 1 → `content-split` / 도구 → `tool-card-grid` / 사례 3 → `content-3-col-cards`
- Tokens: `{{MAIN_TITLE}}` ≤ 30 자 · `{{Q_1~5}}` ≤ 50 자 · `{{A_1~5}}` ≤ 100 자 · `{{Q_N}}` `{{A_N}}` (block × N)
- Notes: Q 16px/700/black, A 13px/400/dark-gray. 항목 사이 1px `--light-border`.

### `tool-card-grid` — [I] · ⑨ 정당화 (도구 카탈로그)
- File: `layouts/tool-card-grid.html`
- Use: 도구·솔루션 6~8 카탈로그 (로고 + 짧은 설명), 자사 기술 스택
- Don't: 사람 N → `org-chart`/`numbered-circle-list` / 사례 3 → `content-3-col-cards` / 일반 4 → `content-grid` / 도구 1~2 → `content-2-col-cards`
- Tokens: `{{MAIN_TITLE}}` · 카드 N 슬롯 inline (로고 placeholder + 이름 + 설명). 6~8 권장.
- Notes: 3×2 또는 4×2 그리드, 14px gap.

### `combo-bar-line` — [J] · ③ 분석 (시계열)
- File: `components/combo-bar-line.html`
- Use: 시계열 12 점 (연도/분기), 막대 2 계열 + 선 1 계열, 마지막 시점 예측 마커
- Don't: 단일 막대 → `bar-table` / 5 점 미만 → `content-grid`/KPI / 양·음수 → `two-up-charts` 좌측 / 비율 → `donut-chart`
- Tokens: `{{Y_UNIT}}` ("단위 · 명") · `{{LEGEND_BAR_A}}` `{{LEGEND_BAR_B}}` `{{LEGEND_LINE}}` ≤ 10 자 · `{{FORECAST_LABEL}}` ≤ 18 자 · `{{SOURCE_NOTE}}`
- Notes: SVG viewBox 880×280, 12 점 (x 60~764, gap 64). 막대 A=brand-orange, B=mid-gray, 라인=검정 2px. **데이터 변경 시 rect y/height·polyline points·X 라벨 SVG 직접 편집** (PNG 캡처 모드).

### `two-up-charts` — [J] · ③ 분석 (좌·우 비교)
- File: `components/two-up-charts.html`
- Use: 좌(±값 막대 9)/우(라인 14 점) 두 차트로 다른 측면 대비, 하단 한 줄 인사이트
- Don't: 단일 → `combo-bar-line`/`bar-table` / 양쪽 시계열 → `combo-bar-line` / 차트+표 → `bar-table` / 4 사분면 → `matrix-2x2`
- Tokens: `{{LEFT_CHART_TITLE}}` ≤ 30 자 `{{LEFT_CHART_SUB}}` ≤ 40 자 · `{{RIGHT_CHART_TITLE}}` `{{RIGHT_CHART_SUB}}` · `{{INSIGHT_BOX_HTML}}`
- Notes: 좌 SVG 400×240 (9 막대, 0% y=120), 우 SVG 400×220 (14 점 + 평균선). 양수=brand-orange, 음수/일반=mid-gray. **데이터 변경 시 rect/polyline/circle 직접.**

### `bar-table` — [J] · ③ ⑧ (분포 + 표)
- File: `components/bar-table.html`
- Use: 6 카테고리 막대 + 우측 표 (정확한 숫자), 강조 1~2 양쪽 시각화
- Don't: 시계열 → `combo-bar-line` / 좌·우 다른 차트 → `two-up-charts` / 표 단독+합계 → `budget-table` / 13+ → 분할
- Tokens: `{{Y_UNIT}}` · `{{TABLE_HEADERS_HTML}}` (`<th>` × 4) · `{{TABLE_ROWS_HTML}}` (`<tr class="hi">` 강조) · `{{SOURCE_NOTE}}`
- Notes: 좌 SVG 420×280 (6 막대). 우 표 상하 2px brand-orange, 좌우 보더 없음. 강조 X 라벨 `fill="var(--brand-orange)"`.

### `donut-chart` — [J] · ③ 분석 (비율)
- File: `components/donut-chart.html`
- Use: 4 세그먼트 비율 (채널 점유, 매출 구성), 중앙 합계 + 우측 범례 표 + 시사점
- Don't: 시간 → `combo-bar-line`/`two-up-charts` / 5+ 카테고리 → `bar-table` / 2~3 비교 → `content-2-col-cards`/`content-3-col-cards` / 사분면 → `matrix-2x2`
- Tokens: `{{CENTER_LABEL_TOP}}` ≤ 12 자 · `{{CENTER_VALUE}}` ≤ 8 자 · `{{CENTER_LABEL_BOT}}` ≤ 12 자 · `{{TABLE_ROWS_HTML}}` (swatch + 채널명 + 유입 + 비중 4 행) · `{{SOURCE_NOTE}}` · `{{INSIGHT_BOX_HTML}}`
- Notes: 도넛 r=92, 원주 ≈ 578.05 = 2π × 92. 4 세그 색(밝→어두): brand-orange / dark-gray / mid-gray / light-border. **데이터 변경 공식**: dasharray = (비중% × 578.05) / 100 · dashoffset = 누적 호 길이 음수.

### `budget-table` — [J] · ⑧ 예산안 (한국 표준)
- File: `layouts/budget-table.html`
- Use: 분기·연간 예산 표 4~8 컬럼 + 강조 1~2 + 합계 행 + 운영안 카드 2 (A:보수 / B:확장)
- Don't: 차트+표 → `bar-table` / 4×4 격자 → `content-grid` / 비율 → `donut-chart` / 단계 → `step-cards`/`numbered-steps-split` / 비교 2 → `content-2-col-cards`
- Tokens: `{{TITLE_HTML}}` ≤ 50 자 (`<span class="a">` 강조) · `{{TABLE_HEADERS_HTML}}` (× 4~8 컬럼, `.num` 우정렬) · `{{TABLE_ROWS_HTML}}` (`<tr class="hi">` 강조) · `{{TABLE_TOTAL_HTML}}` (`<tr class="total">`) · `{{SOURCE_NOTE}}` · `{{PLAN_A_TITLE}}` `{{PLAN_A_BODY_HTML}}` · `{{PLAN_B_TITLE}}` `{{PLAN_B_BODY_HTML}}` · `{{FOOTER_LABEL}}`
- Notes: 표 상하단 2px brand-orange 보더, 좌우 보더 없음. `.hi` 배경 `var(--brand-tint-solid)` + 숫자 brand-orange. `.total` 배경 `var(--light-border)` + 검정 800. **원본 1:1 보존, 축약·반올림 금지.**

---

### `areas-list` — [I] · ③ ⑥ ⑨
- File: `layouts/areas-list.html`
- Use: 번호+항목명+설명 5행 테이블형 리스트 ("전략 영역 5가지", "추진 과제", "실행 우선순위")
- Don't: Q&A 쌍 → `faq-list` / 세로 나열(원형 번호) → `numbered-circle-list` / 4 균등 격자 → `content-grid` / 도구 → `tool-card-grid`
- Tokens: `{{LABEL}}` ≤ 20 자 · `{{TITLE}}` ≤ 50 자 · `{{ROW_1~5_NUM}}` "01"~"05" · `{{ROW_1~5_NAME}}` ≤ 18 자 (`<strong>` 가능) · `{{ROW_1~5_DESC}}` ≤ 60 자 (`<strong>` 가능)
- Notes: 5행 고정. 3행 이하면 사용 안 하는 `.area` 행 삭제. 홀수행 `--light-bg`, 짝수행 white. brand-blue 화살표 SVG.

### `news-clipping` — [F] · ③ ⑨
- File: `layouts/news-clipping.html`
- Use: 좌:헤로 뉴스 1개(이미지+헤드라인+요약) / 우:보조 뉴스 2개 — 외부 시그널·언론 인용 ("주요 매체가 주목한 시장 전환점")
- Don't: 일반 이미지 비교 → `content-2-image-row` / 제품 스크린샷 → `product-screenshot` / 텍스트 중심 → `content-2-col-cards` / 뉴스 4+ → 분할
- Tokens: `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` · `{{HERO_CLIP_DESC}}` `{{HERO_SOURCE}}` ≤ 30 자 ("▸ 매체명 · 날짜") `{{HERO_HEADLINE}}` ≤ 40 자 `{{HERO_BODY}}` ≤ 80 자 `{{HERO_META}}` ≤ 20 자 · `{{SUB_1~2_SOURCE}}` `{{SUB_1~2_HEADLINE}}` ≤ 30 자 `{{SUB_1~2_META}}` ≤ 15 자
- Notes: 좌:우 = 1.5:1. 이미지 클립 placeholder `--light-bg` 배경. 1px `--light-border` 카드 보더. 출처 10px/700/brand-blue 모노 폰트.

### `product-screenshot` — [F] · ⑥ ⑨
- File: `layouts/product-screenshot.html`
- Use: 좌:제품 스크린샷(플레이스홀더) / 우:번호 개념 4개 ("메인 화면 4가지 핵심")
- Don't: 우측 라벨 블록 3~5 → `image-left-label-blocks` / 이미지만 강조 → `content-hero-image` / 개념 5+ → `numbered-steps-split` 또는 분할
- Tokens: `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` · `{{IMG_DESC}}` (placeholder 설명) `{{IMG_CAPTION}}` ≤ 25 자 · `{{CONCEPT_1~4_TAG}}` ≤ 10 자 (예: "개념 01") `{{CONCEPT_1~4_TITLE}}` ≤ 18 자 `{{CONCEPT_1~4_BODY}}` ≤ 40 자
- Notes: 좌:우 = 1.4:1. 개념 사이 1px `--light-border`. 태그 10.5px/800/brand-blue 모노 폰트.

### `icon-grid` — [I] · ⑤ ⑨
- File: `layouts/icon-grid.html`
- Use: 4 개 개념을 심볼 박스 + 제목 + 설명으로 제시 ("서비스가 만드는 4가지 변화")
- Don't: 텍스트 격자 → `content-grid` / 실제 로고·도구 → `tool-card-grid` / 아이콘 5+ → 분할
- Tokens: `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` · `{{ICON_1~4}}` (단일 텍스트 심볼 ≤ 2 자) `{{ITEM_1~4_TITLE}}` ≤ 18 자 `{{ITEM_1~4_DESC}}` ≤ 40 자
- Notes: 4 카드 균등 1:1:1:1. 심볼 박스 64×64px 2px brand-blue 보더. **이모지 절대 금지** — `★` `T` `$` `R` 등 텍스트 심볼만 허용. 카드 배경 `--light-bg`.

### `bar-graph` — [J] · ③ 분석 (절대값 비교)
- File: `components/bar-graph.html`
- Use: 카테고리 6개 절대값 세로 막대 + 우측 핵심 인사이트 (시각적 크기 비교가 메시지일 때)
- Don't: 차트+상세 수치 표 → `bar-table` / ±증감률 → `two-up-charts-bar` / 시계열+이중축 → `combo-bar-line` / 카테고리 7+ → 분할
- Tokens: `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` · `{{INSIGHT}}` ≤ 100 자 (`<strong>` 가능)
- Notes: SVG viewBox 420×254 → `data-pptx-image="true"` PNG 캡처. 강조 막대 brand-orange, 일반 mid-gray. 6 미만이면 해당 `<rect>` 삭제. **데이터 변경 시 `rect y/height` · X 라벨 `<text>` 직접 편집.**

### `chart-donut` — [J] · ③ 분석 (다중 KPI 비율)
- File: `components/chart-donut.html`
- Use: 소형 도넛 3종 (단일비율·딥강조·다중세그먼트) 나열 + 우측 인사이트 — 3 KPI 비율 동시 비교
- Don't: 단일 도넛 + 상세 범례표 → `donut-chart` / 시계열 → `combo-bar-line` / 막대 비교 → `bar-graph`/`bar-table`
- Tokens: `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` · `{{D1_VALUE}}` `{{D1_LABEL}}` `{{D1_CAPTION}}` · `{{D2_VALUE}}` `{{D2_LABEL}}` `{{D2_CAPTION}}` · `{{D3_VALUE}}` `{{D3_LABEL}}` `{{D3_CAPTION}}` · `{{INSIGHT}}` ≤ 100 자
- Notes: r=50 원주 ≈ 314.16 = 2π × 50. 단일비율 arc=brand-orange, 딥강조 arc=brand-deep, 다중세그 4색(brand-orange/brand-deep/mid-gray/light-border). **dasharray/dashoffset 직접 계산 편집.**

### `two-up-charts-bar` — [J] · ③ 분석 (±편차)
- File: `components/two-up-charts-bar.html`
- Use: 카테고리 9개 ± 증감률·편차 막대 + 우측 인사이트 (0 기준선 위아래 분리)
- Don't: 절대값 비교 → `bar-graph` / 시계열 이중축 → `combo-bar-line` / 차트+표 → `bar-table` / 카테고리 10+ → 분할
- Tokens: `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` · `{{INSIGHT}}` ≤ 100 자
- Notes: SVG viewBox 400×210 → PNG 캡처. 0 기준선 y=110. 양수=brand-orange, 음수=mid-gray. **데이터 변경 시 `rect y/height` (양수: `y=110-height`, 음수: `y=110`) 직접 편집.**

### `two-up-charts-line` — [J] · ③ 분석 (단일 추세)
- File: `components/two-up-charts-line.html`
- Use: 단일 지표 시계열 라인 14점 + 영역 음영 + 평균 점선 + 우측 인사이트
- Don't: 막대2+선1 이중축 → `combo-bar-line` / 좌·우 다른 차트 → `two-up-charts` / ±편차 → `two-up-charts-bar` / 비율 → `donut-chart`
- Tokens: `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` · `{{INSIGHT}}` ≤ 100 자
- Notes: SVG viewBox 400×210 → PNG 캡처. 14점 x = 50 + i×25. 영역 `brand-tint-solid` 음영. 마지막 점 r=4.5 흰 배경+brand-orange 보더. **데이터 변경 시 `polyline points` · `circle cx/cy` · `path d` 직접 편집.**

---

## § 4. 카탈로그에 없는 템플릿 / 토큰

새로 발명하지 말 것. 후보가 없으면 가장 가까운 1 개 선택 + 변형 사유를 사용자에게 알리거나, 자유 HTML 슬라이드(`{ html: '...' }`) 로 작성한다 (자유 HTML 도 `_shared.css` + `tokens/colors_and_type.css` 토큰만 사용).
