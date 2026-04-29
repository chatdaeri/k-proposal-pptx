# K-Proposal-PPTX · 토큰 Quick Reference

> **이 파일 1개만 읽으면 템플릿 선택 + 토큰 작성 완료.**
> 개별 HTML 파일을 읽을 필요 없음.

---

## 공통 패턴

| 패턴 | 설명 |
|---|---|
| `SECTION_TITLE` | 헤더 좌측 섹션명 (모든 content 슬라이드 공통) |
| `PAGE_NUMBER` | 헤더 우측 페이지 번호 ("02", "03"...) |
| `LABEL` | 소형 블루 라벨 (새 그룹 템플릿들) |
| `TITLE` / `TITLE_HTML` | 본문 대제목. HTML 허용 시 `<span class="a">강조</span>` 사용 가능 |
| `IMG_DESC` | 이미지 placeholder 안내 문구 (실제 이미지 없어도 됨) |

---

## 브랜드 커스텀

### 컬러 변경
`primitives/_shared.css` 7~12번째 줄만 수정:
```css
--brand-orange: #FF7E5F;    /* 메인 포인트 컬러 */
--brand-deep:   #E5573A;    /* 헤드라인·섹션번호 배지 */
--brand-tint-solid: #FFF1EC; /* 하이라이트 행 배경 */
```

### 로고 변경
```bash
# 본인 로고 PNG를 같은 이름으로 덮어쓰기 (권장)
cp /path/to/my-logo.png ~/.claude/skills/k-proposal-pptx/assets/chatdaeri-logo.png
```
또는 `deck.cjs`에 `brand.logoPath` 지정 후 render.cjs img src 주입 방식 사용.

### 폰트 변경
`primitives/_shared.css` 26번째 줄:
```css
--font-family: '원하는폰트', -apple-system, sans-serif;
```

---

## [A] STRUCTURAL

### `cover`
```
TOP_TYPE · TOP_DOMAIN · SUBTITLE
HERO_LINE_1 · HERO_LINE_2 · HERO_LINE_3   ← 각 ≤14자
CONTACT_LABEL · CONTACT_DETAIL · LOGO_PATH
```

### `divider`
```
SECTION_NUMBER ("01"~"99" 또는 "Q&A")
SECTION_TITLE (≤25자) · SECTION_SUBTITLE (≤50자)
```

---

## [B] NAVIGATION

### `toc`
```
SECTION_TITLE · PAGE_NUMBER · HERO_LABEL ("목차")
blocks.toc_item[]: ITEM_NUMBER · ITEM_TITLE · ITEM_DESC
```

---

## [C] EMPHASIS

### `emphasis-hero`
```
EYEBROW (소형 대문자 라벨) · HERO_LINE_1 · HERO_LINE_2 (58px 대형)
SUBTITLE (하단 설명 ≤80자) · FOOTER_LABEL · PAGE_NUMBER
```

---

## [D] ANALYSIS

### `matrix-2x2`
```
SECTION_TITLE · PAGE_NUMBER · LABEL · TITLE · LEDE
Y_AXIS · X_AXIS
Q1_TAG · Q1_NAME · Q1_BODY · Q1_DESC  (→ Q2, Q3, Q4 동일)
INSIGHT
```

### `gantt-chart`
```
SECTION_TITLE · PAGE_NUMBER · LABEL · TITLE · LEDE
TASK_1~5 (워크스트림 이름) · TODAY (날짜 문자열) · INSIGHT
※ 막대 셀은 HTML 직접 편집 필요 (토큰 치환 불가)
```

### `concept-tree`
```
SECTION_TITLE · PAGE_NUMBER · LABEL · TITLE · LEDE
※ 트리 노드는 HTML 직접 편집
```

---

## [E] CONTENT-LAYOUT

### `content-grid`
```
SECTION_TITLE · PAGE_NUMBER
GRID_EYEBROW · GRID_TITLE · GRID_LEDE
ITEM_1_TITLE · ITEM_1_DESC  (→ ITEM_2, 3, 4 동일)
```

### `content-text-only`
```
SECTION_TITLE · PAGE_NUMBER
LEFT_TITLE · LEFT_DESC
HERO_TITLE · HERO_BODY
SUB_2_TITLE · SUB_2_BODY · SUB_3_TITLE · SUB_3_BODY
```

### `content-split`
```
SECTION_TITLE · PAGE_NUMBER
LEFT_TITLE · LEFT_DESC
RIGHT_INTRO
RIGHT_ITEM_1_TITLE · RIGHT_ITEM_1_BODY
RIGHT_ITEM_2_TITLE · RIGHT_ITEM_2_BODY
TIP_TEXT
```

### `content-2-col-cards`
```
SECTION_TITLE · PAGE_NUMBER · MAIN_TITLE · MAIN_SUB
CARD_1_IMG_DESC · CARD_1_TITLE · CARD_1_SUBTITLE · CARD_1_BODY
CARD_2_IMG_DESC · CARD_2_TITLE · CARD_2_SUBTITLE · CARD_2_BODY
```

### `content-3-col-cards`
```
SECTION_TITLE · PAGE_NUMBER · MAIN_TITLE · MAIN_SUB
CARD_N_IMG_DESC · CARD_N_TITLE · CARD_N_SUBTITLE · CARD_N_BODY  (N=1,2,3)
```

### `as-is-to-be`
```
SECTION_TITLE · PAGE_NUMBER · LABEL · TITLE_HTML · FOOTER_LABEL
ASIS_TAG · ASIS_HEADLINE · ASIS_BULLETS_HTML (<li>×3~4) · ASIS_NOTE
TOBE_TAG · TOBE_HEADLINE · TOBE_BULLETS_HTML · TOBE_EFFECT
```

---

## [F] IMAGE-LAYOUT

### `content-hero-image`
```
SECTION_TITLE · PAGE_NUMBER · IMG_DESC (16:9)
MAIN_TITLE · MAIN_SUB
POINT_1_TITLE · POINT_1_BODY · POINT_2_TITLE · POINT_2_BODY
```

### `image-left-label-blocks`
```
SECTION_TITLE · PAGE_NUMBER · IMG_DESC · MAIN_TITLE
BLOCK_1_LABEL · BLOCK_1_BODY  (→ BLOCK_2, BLOCK_3 동일)
```

### `content-2-image-row`
```
SECTION_TITLE · PAGE_NUMBER · MAIN_TITLE · MAIN_SUB
CARD_N_IMG_DESC · CARD_N_TITLE · CARD_N_BODY  (N=1,2)
```

### `content-3-image-strip`
```
SECTION_TITLE · PAGE_NUMBER · MAIN_TITLE · MAIN_SUB
CARD_N_IMG_DESC · CARD_N_TITLE · CARD_N_BODY  (N=1,2,3)
```

### `product-screenshot`
```
SECTION_TITLE · PAGE_NUMBER · LABEL · TITLE · LEDE · IMG_DESC · IMG_CAPTION
CONCEPT_N_TAG · CONCEPT_N_TITLE · CONCEPT_N_BODY  (N=1~4)
```

### `icon-grid`
```
SECTION_TITLE · PAGE_NUMBER · LABEL · TITLE · LEDE
ICON_N (텍스트/이모지) · ITEM_N_TITLE · ITEM_N_DESC  (N=1~4)
```

### `news-clipping`
```
SECTION_TITLE · PAGE_NUMBER · LABEL · TITLE · LEDE
HERO_CLIP_DESC · HERO_SOURCE · HERO_HEADLINE · HERO_BODY · HERO_META
SUB_1_SOURCE · SUB_1_HEADLINE · SUB_1_META  (→ SUB_2 동일)
```

---

## [G] EXECUTION-PLAN

### `timeline`
```
SECTION_TITLE · PAGE_NUMBER · LABEL · TITLE · LEDE
N1_DATE · N1_NAME · N1_BODY  (→ N2~N5 동일)
```

### `gantt-chart`
위 [D] 참고.

### `step-cards`
```
SECTION_TITLE · PAGE_NUMBER · STEP_TAG · STEP_TITLE · STEP_DESC
CARD_N_IMG_DESC · CARD_N_TITLE · CARD_N_BODY  (N=1~4)
WARNING_TEXT (없으면 빈 문자열)
```

### `numbered-steps-split`
```
SECTION_TITLE · PAGE_NUMBER · MAIN_TITLE · STEP_LABEL
SUB_N_TITLE · SUB_N_BODY  (N=1~3, 좌측 번호 아이템)
IMG_DESC (우측 스크린샷 placeholder)
```

### `numbered-circle-list`
```
SECTION_TITLE · PAGE_NUMBER · MAIN_TITLE · MAIN_SUB
ITEM_N_TITLE · ITEM_N_DESC  (N=1~3)
```

### `areas-list`
```
SECTION_TITLE · PAGE_NUMBER · LABEL · TITLE
blocks.area_item[]: { NUM · NAME · DESC }  ← 가변 (1~5개)
```

---

## [H] PEOPLE

### `org-chart`
```
SECTION_TITLE · PAGE_NUMBER · LABEL · TITLE · LEDE
CEO_NAME
DIV_N_TAG · DIV_N_NAME  (N=1~3, 본부)
TN_M_NAME · TN_M_HEAD   (N=본부번호, M=팀번호, 팀 최대 3×3)
```

### `instructor-profile`
```
SECTION_TITLE · PAGE_NUMBER
INSTRUCTOR_NAME · BULLET_1~5 · BOOK_LABEL · BOOK_TITLE
```

---

## [I] LIST

### `faq-list`
```
SECTION_TITLE · PAGE_NUMBER · MAIN_TITLE
Q_N · A_N  (N=1~5)
```

### `tool-card-grid`
```
SECTION_TITLE · PAGE_NUMBER · MAIN_TITLE
※ 카드 내용은 HTML 직접 편집
```

---

## [J] DATA-VIS

### `bar-table`
```
SECTION_TITLE · PAGE_NUMBER · LABEL · TITLE · LEDE
TABLE_HEADERS_HTML  (<div class="th"><p>열명</p></div> 반복)
TABLE_ROWS_HTML     (<div class="tr [hi]"><div class="td [num]"><p>값</p></div>...</div> 반복)
SOURCE_NOTE
```
※ 행 한도(≤4행 안전 / 5행 압축 / 9행+ 분할) → SKILL.md 슬라이드 제작 체크리스트 참조

### `budget-table`
```
SECTION_TITLE · PAGE_NUMBER · LABEL · TITLE_HTML · FOOTER_LABEL
TABLE_HEADERS_HTML · TABLE_ROWS_HTML · TABLE_TOTAL_HTML · SOURCE_NOTE
PLAN_A_TITLE · PLAN_A_BODY_HTML · PLAN_B_TITLE · PLAN_B_BODY_HTML
※ .tr.hi = 오렌지 강조행 · .tr.total = 진한 합계행 · .td.num = 우정렬 · .td.span2 = 2칸 병합
※ 기본 컬럼 6개: --tr-cols: 2fr 1fr 1fr 1fr 1fr 1fr
※ 행 한도 → SKILL.md 슬라이드 제작 체크리스트 참조 (bar-table 과 동일 규칙)

### `donut-chart`
```
SECTION_TITLE · PAGE_NUMBER · LABEL · TITLE · LEDE
TABLE_ROWS_HTML  (범례 표 4행) · SOURCE_NOTE · INSIGHT
※ 도넛 SVG 세그먼트는 HTML 직접 편집
```

### `combo-bar-line` / `two-up-charts` / `bar-graph`
```
SECTION_TITLE · PAGE_NUMBER · LABEL · TITLE · LEDE · INSIGHT
※ SVG 좌표/막대 높이는 데이터에 맞게 HTML 직접 편집
```

---

## 자유 HTML 슬라이드

```js
{ html: `<!DOCTYPE html><html lang="ko"><head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=960, height=540">
  <link rel="stylesheet" href="../_shared.css">
  <style>/* 커스텀 스타일 */</style>
</head><body>
  <!-- 960×540 슬라이드 마크업 -->
</body></html>` }
```
