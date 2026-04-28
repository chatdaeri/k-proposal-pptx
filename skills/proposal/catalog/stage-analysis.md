# Stage: ③ 분석 1~5장 / ⑤ 핵심 인사이트 / ⑨ 정당화 (재사용)

> 한국식 아크에서 ③ 분석 슬롯이 가장 많은 템플릿을 사용한다. 17종 후보:
> 데이터 분석(D) · 텍스트 레이아웃(E) · 이미지 레이아웃(F) · 데이터 시각화(J) · 변환 비교(E-6).
> 5장 분량을 한 종류로만 채우면 단조로워지므로 1~2장씩 섞는다.

---

## 결정변수 (이 stage 한정)

| 결정변수 | 후보 |
|---|---|
| 두 축 사분면 (라벨 명시) | `matrix-2x2` |
| 두 축 산점 (라벨 없음, 5~8점) | `bubble-chart` |
| 위계 분해 (root→cat→leaf) | `concept-tree` |
| 균등 4개 텍스트 격자 | `content-grid` |
| 1 hero + 3 sub 텍스트 리듬 | `content-text-only` |
| 좌:대제목 + 우:1단락 | `content-split` |
| 2개 카드 비교 | `content-2-col-cards` |
| 3개 카드 병렬 | `content-3-col-cards` |
| 이미지 1장 (50%+ 면적) | `content-hero-image` |
| 이미지 2장 (1:1, 비교) | `content-2-image-row` |
| 이미지 3장 (1:1, 병렬) | `content-3-image-strip` |
| 좌:이미지 + 우:라벨 블록 | `image-left-label-blocks` |
| 시계열 막대+선 콤보 | `combo-bar-line` |
| 카테고리 ±편차 막대 (0 기준선) | `two-up-charts-bar` |
| 단일 지표 시계열 추세선 | `two-up-charts-line` |
| 좌·우 다른 차트 (변동률+추이) | `two-up-charts` |
| 카테고리 막대만 (표 불필요) | `bar-graph` |
| 막대(좌) + 표(우) | `bar-table` |
| 도넛 비율 (4 세그먼트 + 범례 표) | `donut-chart` |
| 도넛 3종 KPI 비교 (한 슬라이드) | `chart-donut` |
| AS-IS / TO-BE 변환 | `as-is-to-be` |
| 좌:큰 제품 화면 + 우:번호 개념 4 | `product-screenshot` |
| 4 개념 큰 아이콘 카드 | `icon-grid` |
| 큰 헤로 뉴스 + 보조 뉴스 2 | `news-clipping` |

---

## [D-1] matrix-2x2

- **File:** `skills/proposal/components/matrix-2x2.html`
- **Use when:** 두 축 사분면(시급성×중요도 등), 사분면 라벨 명시, 항목 4개
- **Don't use:** 라벨 없이 위치만 → `bubble-chart` / 단순 2개 → `content-2-col-cards` / 위계 → `concept-tree` / 시간 → `timeline`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` `{{X_AXIS}}` `{{Y_AXIS}}` `{{Q1_TAG}}/Q1_NAME/Q1_BODY/Q1_DESC` ~ `{{Q4_*}}`
- **Layout:** I 사분면(우상단) `.accent` (배경 #FFF1EC + 보더 브랜드 블루 1.5px), 다른 사분면 1px 회색. 우측 카드 4개 — 핀(I·II·III·IV) + 설명.

---

## [D-2] bubble-chart — **차트 = SVG + data-pptx-image PNG 캡처**

- **File:** `skills/proposal/components/bubble-chart.html` (예시 데이터 박힌 reference)
- **Use when:** 항목 5~8개를 점으로, 점 크기로 3차원 표현, 사분면 라벨 없음
- **Don't use:** 라벨 + 4그룹 → `matrix-2x2` / 4개 이하 → `content-grid` / 9개+ → 분할
- **Tokens (텍스트만):** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` `{{X_AXIS}}` `{{Y_AXIS}}` `{{SIZE_DIM}}` `{{SEG_A}}~{{SEG_E}}` `{{INSIGHT}}`
- **사용법:**
  1. `deck.cjs` 의 `{ html: '<...>' }` 자유 모드. reference `<body>` 통째 복사
  2. SVG 영역은 `<div data-pptx-image="true">` 로 감싸진 채로 둠 — convert.cjs 가 playwright 로 PNG 캡처
  3. SVG viewBox 480×320 안의 `<circle cx/cy/r>` 좌표 직접 수정 — cx/cy 는 데이터 포지션, r 은 3차원 차원 (8~24px)
  4. 점 색은 brand-blue (#FF7E5F) 단색. 그라디언트 금지. 점 옆 `<text>` 라벨로 세그먼트 이름 표시
  5. 항목 5개 미만이면 사용 안 하는 `<circle>`/`<text>` 요소 자체 삭제
- **NOTE:** 차트는 PNG 라스터 — PowerPoint 안에서 편집 불가. 데이터 변경 시 deck.cjs 재빌드.

---

## [D-3] concept-tree

- **File:** `skills/proposal/components/concept-tree.html`
- **Use when:** 위계 분해 root→3 cat→6 leaf, 이슈 트리, 전략 분해
- **Don't use:** 사람·조직 → `org-chart` / 시간 → `timeline` / 두 축 → `matrix-2x2`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` `{{ROOT_NAME}}` `{{ROOT_BODY}}` `{{CAT_1_NAME}}/CAT_1_BODY` ~ `{{CAT_3_*}}` `{{LEAF_1_*}}` ~ `{{LEAF_6_*}}`
- **Layout:** 가로 트리 L→R. 노드 1px 직각 박스, 연결선 1px dark-gray. 강조 노드 `.accent` 배경 #FFF1EC.

---

## [E-1] content-grid

- **File:** `skills/proposal/layouts/content-grid.html`
- **Use when:** 텍스트 항목 4개 균등 2×2 격자, 강약 없음
- **Don't use:** 2개 → `content-2-col-cards` / 3개 → `content-3-col-cards` / 5+ → 분할 / 이미지 → [F] / 두 축 → `matrix-2x2`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{GRID_EYEBROW}}` (브랜드 블루 작은 라벨 — 한국어 가능, 예: '시장 환경 분석') `{{GRID_TITLE}}` (큰 검정 24px 헤드라인, `<span class="a">` 강조 가능) `{{GRID_LEDE}}` (서브 설명 1줄, 14px label-gray) `{{ITEM_1_TITLE}}~ITEM_4_TITLE` `{{ITEM_1_DESC}}~ITEM_4_DESC`
- **Layout:** **자유 HTML 차트 슬라이드와 동일한 키 메시지 스타일** — eyebrow 12px / 600 / 브랜드 블루, 헤드라인 24px / 800 / black, lede 14px / 500 / label-gray. 격자 4개 — 좌:번호 뱃지 + 우:(제목+설명). gap 14px.
- **항목 4개 고정.** 5+ 필요시 다른 카테고리.

---

## [E-2] content-text-only

- **File:** `skills/proposal/layouts/content-text-only.html`
- **Use when:** 이미지 없음, **서술형 메시지** 4~5블록 (1 hero 강조 메시지 + 3 보조 메시지), 분석/관점 정리
- **Don't use:**
  - 이미지 핵심 → [F]
  - 균등 4개 메시지 → `content-grid`
  - 좌제목+우 1단락 → `content-split`
  - **위계가 같은 사실 데이터 항목들 (스펙·수치·면적·세대수 등) → `content-grid` 4카드 또는 `budget-table` 표 형식 사용**
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{HERO_TITLE}}` `{{HERO_BODY}}` `{{LEFT_TITLE}}` `{{LEFT_DESC}}` `{{SUB_2_TITLE}}` `{{SUB_2_BODY}}` ~ `{{SUB_3_*}}` (블록 N 복제 가능)
- **Layout:** 1 hero(flex 1.4) + 3 sub(flex 1) 리듬. hero 19px / 600 / 브랜드 블루, sub 17px / 600 / dark-gray.
- **위계 판단 규칙:** LEFT_TITLE(좌측 hero) 은 **나머지 3블록을 요약·관통하는 단일 메시지** 일 때만 거대 hero 로 띄움. 4개가 모두 동급 정보 (예: 사업 개요의 대지/면적/세대/주차) 면 → 좌측만 거대화하면 위계 왜곡. 표나 카드 격자가 옳음.

---

## [E-3] content-split

- **File:** `skills/proposal/layouts/content-split.html`
- **Use when:** 좌:큰 제목 + 우:한 단락 본문, "왜 이걸 하는가" 같은 한 메시지 집중
- **Don't use:** 우측 여러 항목 → `content-grid` / `content-2-col-cards` / 좌측 이미지 → `content-hero-image` / 단계 1·2·3 → `numbered-steps-split`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LEFT_TITLE}}` (≤20자) `{{LEFT_DESC}}` (≤200자)
- **Layout:** 좌:1 / 우:1.5, 사이 1px 세로선. 좌 32~36px / 700 / black, 우 14px / 400 / dark-gray (lh 1.6).

---

## [E-4] content-2-col-cards

- **File:** `skills/proposal/layouts/content-2-col-cards.html`
- **Use when:** 항목 2개 카드 비교 (Before/After, Plan A/B). 카드 안 작은 이미지 OK
- **Don't use:** 이미지가 카드 핵심 → `content-2-image-row` / 3개 → `content-3-col-cards` / 4개 → `content-grid` / 두 축 → `matrix-2x2`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{MAIN_TITLE}}` `{{MAIN_SUB}}` `{{CARD_1_TITLE}}/CARD_1_SUBTITLE/CARD_1_BODY/CARD_1_IMG_DESC` `{{CARD_2_*}}`
- **Layout:** 카드 균등 폭, gap 24px. 1px 회색 직각. 1개 `.accent` 강조 가능 (배경 #FFF1EC).

---

## [E-5] content-3-col-cards

- **File:** `skills/proposal/layouts/content-3-col-cards.html`
- **Use when:** 항목 3개 균등 카드, 텍스트 중심
- **Don't use:** 이미지 핵심 → `content-3-image-strip` / 2개 → `content-2-col-cards` / 4개 → `content-grid` / 시간 단계 → `step-cards`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{MAIN_TITLE}}` `{{MAIN_SUB}}` `{{CARD_1_*}}` `{{CARD_2_*}}` `{{CARD_3_*}}`
- **Layout:** 1:1:1, gap 16px. 1px 회색 직각.

---

## [E-6] as-is-to-be

- **File:** `skills/proposal/layouts/as-is-to-be.html`
- **Use when:** 좌:현재(AS-IS) / 우:제안(TO-BE) 변환 비교, 가운데 화살표가 변화 방향 강조, 양쪽에 헤드라인 + 불릿 3~4 + 노트/효과
- **Don't use:** 단순 2카드 (변환성 약함) → `content-2-col-cards` / 좌·우 모두 이미지 → `content-2-image-row` / N단계 절차 → `numbered-steps-split` / 시간축 → `timeline`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE_HTML}}` `{{ASIS_TAG}}` `{{ASIS_HEADLINE}}` `{{ASIS_BULLETS_HTML}}` `{{ASIS_NOTE}}` `{{TOBE_TAG}}` `{{TOBE_HEADLINE}}` `{{TOBE_BULLETS_HTML}}` `{{TOBE_EFFECT}}` `{{FOOTER_LABEL}}`
- **Layout:** 좌1 / 가운데 화살표 / 우1 grid. 좌(AS-IS) 배경 #F6F8FB, 불릿 dot. 우(TO-BE) 흰 + 상단 3px 브랜드 블루 라인, 불릿 ▸ 브랜드 블루. 화살표 SVG 32×32 stroke 브랜드 블루.

---

## [F-2] content-hero-image

- **File:** `skills/proposal/layouts/content-hero-image.html`
- **Use when:** 이미지 1개 면적 50%+ (제품 스크린샷·다이어그램), 옆 짧은 메시지 1~2 포인트
- **Don't use:** 이미지 보조 → `content-2-col-cards` / 2개 → `content-2-image-row` / 3개 → `content-3-image-strip`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{MAIN_TITLE}}` `{{MAIN_SUB}}` `{{IMG_DESC}}` `{{POINT_1_TITLE}}/POINT_1_BODY` `{{POINT_2_*}}`
- **Layout:** 이미지 슬롯 1px 회색, 풀 블리드 금지. aspect 16-9 또는 3-2.

---

## [F-7] content-2-image-row

- **File:** `skills/proposal/layouts/content-2-image-row.html`
- **Use when:** 이미지 2개가 핵심 (Before/After), 둘 다 1:1 정사각
- **Don't use:** 텍스트 비교 → `content-2-col-cards` / 3개 → `content-3-image-strip` / 비율 섞기 → 분할
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{MAIN_TITLE}}` `{{MAIN_SUB}}` `{{CARD_1_TITLE}}/CARD_1_BODY/CARD_1_IMG_DESC` `{{CARD_2_*}}`
- **Layout:** 이미지 1:1 통일 (혼합 금지), 카드 균등, gap 24px.

---

## [F-8] content-3-image-strip

- **File:** `skills/proposal/layouts/content-3-image-strip.html`
- **Use when:** 사례·도구·단계 3개 이미지 핵심, 모두 1:1
- **Don't use:** 2개 → `content-2-image-row` / 4+ → 분할 / 텍스트 핵심 → `content-3-col-cards`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{MAIN_TITLE}}` `{{MAIN_SUB}}` `{{CARD_1_*}} ~ {{CARD_3_*}}`
- **Layout:** 1:1 통일, 1:1:1 균등, gap 16px.

---

## [F-6] image-left-label-blocks

- **File:** `skills/proposal/layouts/image-left-label-blocks.html`
- **Use when:** 좌:큰 이미지 1개(3-2/4-3) + 우:라벨 블록 3~5개. "이 화면의 4가지 핵심"
- **Don't use:** 이미지 50%+ → `content-hero-image` / 라벨 6+ → 분할
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{MAIN_TITLE}}` `{{IMG_DESC}}` `{{BLOCK_1_LABEL}}/BLOCK_1_BODY` ~ `{{BLOCK_3_*}}` (블록 N 복제)
- **Layout:** 좌 이미지(1.2) / 우 블록(1). 라벨 12px / 700 / 브랜드 블루, 본문 13px / 400 / dark-gray.

---

## 차트 공통 정책 (J-1 ~ J-8 + D-2 bubble) — 반드시 읽기

이 차트 reference 들은 모두 **SVG + data-pptx-image PNG 캡처** 패턴 사용. html2pptx 가 SVG 의 `<rect>`/`<polyline>`/`<circle>` 을 PPTX 도형으로 변환 못 하고, div+CSS rotate 도 PPTX 에서 회전 미적용이라, **차트 영역 SVG 를 div 로 감싸 playwright 스크린샷 → `slide.addImage()`** 가 유일하게 픽셀 퍼펙트한 방법.

**작성 절차 (모든 차트 공통):**
1. `deck.cjs` 슬라이드를 `{ html: '<!DOCTYPE html>…</html>' }` 자유 모드로 작성 (template+tokens 모드 X)
2. reference 파일 (`skills/proposal/components/<chart>.html`) 의 `<body>` 마크업 통째 복사 → deck.cjs html 문자열에 붙여넣기
3. **차트 영역은 `<div class="chart-box" data-pptx-image="true">…<svg>…</svg></div>` 그대로** (감싸는 div 건드리지 말 것 — convert.cjs 가 이 속성 보고 캡처)
4. SVG viewBox 안의 좌표·라벨·색만 데이터에 맞게 직접 수정. 사용 안 하는 `<rect>`/`<circle>`/`<polyline>` 요소는 통째 삭제
5. SVG 밖의 텍스트 (헤더·타이틀·범례·표·인사이트 박스) 는 토큰 그대로 치환 — 이건 html2pptx 가 PPTX 네이티브 텍스트로 처리해서 PowerPoint 에서 편집 가능
6. 우측 표는 `<div class="th"><p>…</p></div>` / `<div class="td num"><p>…</p></div>` / 강조 행 `<div class="tr hi">…</div>` 형식 (div+grid). `<th>`/`<td>` 태그 직접 사용 금지

**중요한 제약:**
- 차트 영역 (PNG 캡처 부분) 은 PowerPoint 안에서 **단일 raster image** — 더블클릭 편집 불가
- 데이터 변경 필요시 deck.cjs 의 SVG 좌표 수정 후 빌드 스크립트 (`build.cjs`) 재실행
- 표·텍스트는 PPTX 네이티브라 PowerPoint 에서 자유롭게 편집 가능

---

## [J-5] bar-graph

- **File:** `skills/proposal/components/bar-graph.html`
- **Use when:** 카테고리 N개 절대값 크기 비교. 정확한 수치 표 불필요. 우측 인사이트 박스로 결론 고정.
- **Don't use:** 수치 표 병행 필요 → `bar-table` / 시계열 → `combo-bar-line` / ±편차 → `two-up-charts-bar`
- **Tokens (텍스트만):** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` `{{INSIGHT}}`
- **SVG 좌표계 (viewBox 420×254):**
  - 6 막대 — x=64,124,184,244,304,364 (width 42, col pitch 60)
  - Y 매핑: height = val/maxY × 200, y = 220 - height
  - 강조 막대: `fill="#FF7E5F"`, 값 라벨 `fill="#FF7E5F"`, X 라벨 `font-weight="800"`
  - 일반 막대: `fill="#C8C8C8"`
  - 카테고리 6 미만이면 `<rect>`/`<text>` 통째 삭제
- **우측:** `.insight` 박스 (`{{INSIGHT}}`) — 토큰 치환

---

## [J-6] two-up-charts-bar

- **File:** `skills/proposal/components/two-up-charts-bar.html`
- **Use when:** 카테고리별 ±편차·증감률 — 0 기준선 위(양수) / 아래(음수) 분리. "산업별 성장률 비교"
- **Don't use:** 절대값 크기만 → `bar-graph` / 시계열 이중축 → `combo-bar-line` / 단일 지표 추세 → `two-up-charts-line`
- **Tokens (텍스트만):** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` `{{INSIGHT}}`
- **SVG 좌표계 (viewBox 400×210):**
  - 0 기준선 y=110. 9 카테고리 x=50,90,130,170,210,250,290,330,370, width=22
  - 양수 막대: height = val×8 (±10 단위 → 80px), y = 110 - height, `fill="#FF7E5F"`
  - 음수 막대: height = |val|×8, y = 110, `fill="#C8C8C8"`
  - 값 라벨: 양수 `fill="#000"`, 음수 `fill="#676765"`
  - 카테고리 9 미만이면 요소 통째 삭제
- **우측:** `.insight` 박스 (`{{INSIGHT}}`)

---

## [J-7] two-up-charts-line

- **File:** `skills/proposal/components/two-up-charts-line.html`
- **Use when:** 단일 지표 시계열 추세 + 평균선 + 영역 음영. "월별 신규 가입자 추이"
- **Don't use:** 이중축 막대+선 → `combo-bar-line` / ±편차 → `two-up-charts-bar` / 두 차트 동시 → `two-up-charts`
- **Tokens (텍스트만):** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` `{{INSIGHT}}`
- **SVG 좌표계 (viewBox 400×210):**
  - 14점 라인 — x = 50 + i×25 (i=0~13), cy = 180 - (val/maxY)×160
  - 평균선: `stroke-dasharray="3 2"`, y = 180 - (avg/maxY)×160
  - 영역 `<path>`: `M x0,cy0 L … L x_last,180 L 50,180 Z`, `fill="#FFF1EC" opacity="0.6"`
  - 마지막 점 강조: `r=4.5`, `fill="#fff"`, `stroke="#FF7E5F" stroke-width="2"`
  - 마지막 값 라벨: `fill="#FF7E5F" font-weight="800"`
- **우측:** `.insight` 박스 (`{{INSIGHT}}`)

---

## [J-8] chart-donut

- **File:** `skills/proposal/components/chart-donut.html`
- **Use when:** KPI 비율 3개를 한 슬라이드에 나란히. 단일 비율·딥 강조·다중 세그먼트 변형 비교 제시.
- **Don't use:** 세그먼트 1종 + 범례 표 → `donut-chart` / 수치 분포 카테고리 → `bar-table` / 2~3개 비율 텍스트 → `content-3-col-cards`
- **Tokens (텍스트만):** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` `{{D1_VALUE}} {{D1_LABEL}} {{D1_CAPTION}}` `{{D2_VALUE}} {{D2_LABEL}} {{D2_CAPTION}}` `{{D3_VALUE}} {{D3_LABEL}} {{D3_CAPTION}}` `{{INSIGHT}}`
- **SVG 공식 (r=50, 원주 314.16):**
  - 도넛 1 (단일비율): `stroke="#FF7E5F"`, `stroke-dasharray="호 314.16"`, `stroke-dashoffset=-(314.16-호)`
  - 도넛 2 (딥강조): `stroke="#E5573A"`, 값 텍스트 `fill="#E5573A"`
  - 도넛 3 (다중): 4 circle — #FF7E5F / #E5573A / #C8C8C8 / #E0E0E0, dashoffset = 누적 호의 음수
  - 모든 도넛 `transform="rotate(-90 70 70)"` (12시 방향 시작)
- **PNG 캡처:** 3개 도넛 그리드 `.donut-row[data-pptx-image]`
- **우측:** `.insight` 박스 (`{{INSIGHT}}`)

---

## [J-1] combo-bar-line

- **File:** `skills/proposal/components/combo-bar-line.html`
- **Use when:** 시계열 10~12 시점, 막대(주) + 라인(보조) 콤보, 마지막 시점 예측 마커
- **Don't use:** 단일 막대 → `bar-table` / 5점 미만 → `content-grid` / ± 막대 → `two-up-charts`
- **Tokens (텍스트만):** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` `{{LEGEND_BAR}}` `{{LEGEND_LINE}}` `{{FORECAST_LABEL}}` `{{SOURCE_NOTE}}`
- **SVG 좌표계 (viewBox 880×260):**
  - 12 시점 슬롯 — 막대 x = 77 + i·67.92 (width 24), 라인 점 cx = 89 + i·68
  - Y 매핑: y = 228 − (val/maxY)·200, 막대 height = (val/maxY)·200
  - 라인은 `<polyline points="x1,y1 x2,y2 …">` 좌표를 모두 다시 계산
  - 마지막 시점 강조: X 라벨 `fill="#FF7E5F" font-weight="800"`, 라인 마지막 점은 r=4 로 키우기

---

## [J-2] two-up-charts

- **File:** `skills/proposal/components/two-up-charts.html`
- **Use when:** 좌:± 양·음수 막대 (변동률 등) / 우:라인 추이 + 평균선 + 하단 인사이트
- **Don't use:** 단일 차트로 충분 → `combo-bar-line` / 차트 + 표 → `bar-table` / 매트릭스 → `matrix-2x2`
- **Tokens (텍스트만):** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` `{{LEFT_CHART_TITLE}}` `{{LEFT_CHART_SUB}}` `{{RIGHT_CHART_TITLE}}` `{{RIGHT_CHART_SUB}}` `{{INSIGHT_BOX_HTML}}`
- **SVG 좌표계:** 좌·우 SVG 각각 별도 캡처 (data-pptx-image 2개)
  - **좌 viewBox 400×200**: 0% 기준선 y=100. 양수 막대 height=val·8, y=100−height. 음수 막대 height=|val|·8, y=100. 9 카테고리 x=50,90,...,370
  - **우 viewBox 400×200**: 14점 라인 polyline. cx = 50 + i·25, cy = 180 − (val/maxY)·160. 평균 점선 + 마지막 값 라벨

---

## [J-3] bar-table

- **File:** `skills/proposal/components/bar-table.html`
- **Use when:** 분포·구간 N개 카테고리 막대 + 정확한 숫자 우측 표 (강조 1~2 카테고리)
- **Don't use:** 시계열 → `combo-bar-line` / 좌우 다른 차트 → `two-up-charts` / 표 단독 + 합계 → `budget-table`
- **Tokens (텍스트만):** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` `{{TABLE_HEADERS_HTML}}` `{{TABLE_ROWS_HTML}}` `{{SOURCE_NOTE}}`
- **SVG 좌표계 (viewBox 420×260):**
  - 6 막대 — x=76,133,190,247,304,361 (width 40, gap 17). Y 매핑: y = 228 − (val/maxY)·200
  - 강조 막대: `fill="#FF7E5F"`, X 라벨 `fill="#FF7E5F" font-weight="800"`
  - 카테고리 6 미만이면 `<rect>`/`<text>` 통째 삭제

---

## [J-4] donut-chart

- **File:** `skills/proposal/components/donut-chart.html`
- **Use when:** 4 세그먼트 비율 시각화 + 중앙 합계 숫자 + 우측 범례 표
- **Don't use:** 시간 → `combo-bar-line` / 5+ → `bar-table` / 2~3개 → `content-2-col-cards`
- **Tokens (텍스트만):** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` `{{TABLE_ROWS_HTML}}` `{{SOURCE_NOTE}}` `{{INSIGHT_BOX_HTML}}`
- **도넛 SVG 공식 (viewBox 200×200, r=60):**
  - 원주 = 2π × 60 ≈ 376.99
  - 각 세그먼트 `<circle>` 의 `stroke-dasharray` 첫 값 = (비중% × 376.99) / 100
  - `stroke-dashoffset` = 이전 누적 호 길이의 음수
  - 예 52.4/22.1/15.8/9.7% → dasharray 197.5/83.3/59.6/36.6, offset 0/−197.5/−280.8/−340.4
  - 세그먼트 색 (밝→어두): #FF7E5F / #3E4A5E / #A0A8B3 / #D6D6D2
  - 중앙 합계 텍스트 `<text>` 직접 수정
- **우측 범례 표** (SVG 밖, div+grid 네이티브): swatch 는 `.swatch.s1`~`.s4` 클래스로 색 매핑

---

## [F-9] product-screenshot

- **File:** `skills/proposal/layouts/product-screenshot.html`
- **Use when:** ⑥ 제품 소개 / ⑨ 정당화 — 좌:큰 제품 캡처 (3-2 비율 placeholder) / 우:번호 매긴 개념 4개 ("개념 01~04")
- **Don't use:** 이미지 50%+ 면적인데 옆 텍스트 단순 → `content-hero-image` / 4 카드 균등 → `content-grid` / 단계 흐름 → `numbered-steps-split`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` `{{IMG_DESC}}` `{{IMG_CAPTION}}` `{{CONCEPT_1_TAG}}/CONCEPT_1_TITLE/CONCEPT_1_BODY` ~ `{{CONCEPT_4_*}}`
- **Layout:** 좌 1.4 / 우 1 비율. 우측 개념 사이 1px 회색 구분선. 개념 태그 (예: "개념 01") 는 11px / 800 / 브랜드 블루 monospace.

---

## [F-10] icon-grid

- **File:** `skills/proposal/layouts/icon-grid.html`
- **Use when:** ⑤ 핵심 인사이트 / ⑨ 정당화 — 4개 개념을 큰 아이콘 + 짧은 설명으로 정리. "서비스가 만드는 4가지 변화" 메시지
- **Don't use:** 텍스트만 4개 → `content-grid` / 단계 흐름 → `step-cards` / 도구 6~8개 → `tool-card-grid`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` `{{ICON_1}}/ITEM_1_TITLE/ITEM_1_DESC` ~ `{{ICON_4_*}}`
- **Layout:** 4 카드 균등 1:1:1:1, 각 카드 64×64px 브랜드 블루 보더 박스 + 단일 글자 아이콘. 카드 배경 #F8F8F8, 1px 회색 보더.
- **아이콘 권장:** 단일 영문/숫자/심볼 (T, $, R, ★ 등). 이모지는 절대 규칙 위반 — 실제 아이콘 필요시 이미지 슬롯 교체.

---

## [I-3] news-clipping

- **File:** `skills/proposal/layouts/news-clipping.html`
- **Use when:** ⑨ 정당화 / ③ 분석 — "주요 매체가 주목한 시장 전환점" 외부 시그널 인용. 좌:큰 헤로 뉴스 1개 / 우:보조 뉴스 2개
- **Don't use:** 1개 뉴스만 강조 → `emphasis-hero` / 사례 3개 → `content-3-col-cards` / 도구 카탈로그 → `tool-card-grid`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` `{{HERO_CLIP_DESC}}` `{{HERO_SOURCE}}` `{{HERO_HEADLINE}}` `{{HERO_BODY}}` `{{HERO_META}}` `{{SUB_1_SOURCE}}/SUB_1_HEADLINE/SUB_1_META` `{{SUB_2_*}}`
- **Layout:** 좌 1.5 / 우 1 비율. 카드 1px 회색 직각 보더. 클립 placeholder 는 #F4F3F0 단색 배경. 출처(.src) 는 10px / 700 / 브랜드 블루 monospace.

---

## 헷갈리는 페어 (이 stage 한정)

| 페어 | 분리 기준 |
|---|---|
| `matrix-2x2` vs `bubble-chart` | 사분면 라벨 명시? → matrix / 위치만? → bubble |
| `matrix-2x2` vs `content-grid` | 사분면에 의미? → matrix / 균등 4개? → content-grid |
| `matrix-2x2` vs `content-2-col-cards` | 두 축 + 사분면? → matrix / 항목 2개 비교? → 2-col-cards |
| `concept-tree` vs `numbered-steps-split` | 위계? → tree / 시간 1→2→3? → numbered-steps |
| `content-2-col-cards` vs `content-2-image-row` | 텍스트 핵심? → 2-col-cards / 이미지? → 2-image-row |
| `content-3-col-cards` vs `content-3-image-strip` | 텍스트? → 3-col-cards / 이미지 1:1? → 3-image-strip |
| `content-text-only` vs `content-grid` | 1 hero + 3 sub? → text-only / 균등 4개? → grid |
| `content-split` vs `content-text-only` | 좌제목 + 우 1단락? → split / 4~5블록? → text-only |
| `content-hero-image` vs `image-left-label-blocks` | 이미지 50%+? → hero-image / 이미지 + 우 라벨? → image-left-label |
| `combo-bar-line` vs `two-up-charts` | 한 차트 콤보? → combo / 좌우 다른 차트? → two-up |
| `combo-bar-line` vs `bar-table` | 시계열(연도)? → combo / 카테고리 분포? → bar-table |
| `bar-graph` vs `bar-table` | 수치 표 불필요? → bar-graph / 표 병행 필요? → bar-table |
| `bar-graph` vs `two-up-charts-bar` | 절대값 비교? → bar-graph / ±부호 편차? → two-up-charts-bar |
| `two-up-charts-bar` vs `combo-bar-line` | 카테고리 ±편차? → two-up-charts-bar / 시계열 이중축? → combo |
| `two-up-charts-line` vs `combo-bar-line` | 단일 지표 추세? → two-up-charts-line / 막대+선 이중축? → combo |
| `donut-chart` vs `chart-donut` | 세그먼트 상세 표 필요? → donut-chart / KPI 3개 비율 나열? → chart-donut |
| `bar-table` vs `donut-chart` | 카테고리 빈도·금액? → bar-table / 비율(100%)? → donut |
| `as-is-to-be` vs `content-2-col-cards` | 변환 방향성? → as-is-to-be / 단순 2개? → 2-col-cards |
| `[J] DATA-VIS` vs `matrix-2x2` | 정량 시각화? → [J] / 두 축 사분면? → matrix |
