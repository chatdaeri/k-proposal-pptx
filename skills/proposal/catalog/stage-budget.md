# Stage: ⑧ 예산안

> 한국식 아크 ⑧ 슬롯 — 예산·운영안. 후보 3종.
> 1순위 `budget-table` (한국 제안서 표준) · 2순위 `bar-table` (차트 + 표) · 3순위 `content-grid` (4 옵션)
>
> ⚠ **행 수 확인 필수:** budget-table 기본 max **6행**, 압축 시 최대 **13행**.
> 14행 이상은 슬라이드 분할. 자유 HTML 전환 금지. → 상세 레시피: `OPTIMIZATION.md` §8

---

## 결정변수

| 결정변수 | 후보 |
|---|---|
| 예산 표 + 합계 강조 + 운영안 카드 (한국 표준) | `budget-table` |
| 막대(좌) + 표(우) — 분포 시각화 + 정확한 숫자 | `bar-table` |
| 4가지 옵션 균등 카드 (옵션 비교) | `content-grid` |

---

## [J-5] budget-table

- **File:** `skills/proposal/layouts/budget-table.html`
- **Use when:** 분기·연간 예산 표 (매체·채널·예산·KPI 4~8 컬럼). 강조 행 1~2 + 합계 행. 운영안 카드 2개(A안/B안)
- **Don't use:** 차트 + 작은 표 → `bar-table` / 4×4 격자 → `content-grid` / 도넛 비율 → `donut-chart` / 단계 → `step-cards` / 비교 2개 → `content-2-col-cards`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE_HTML}}` `{{TABLE_HEADERS_HTML}}` `{{TABLE_ROWS_HTML}}` `{{TABLE_TOTAL_HTML}}` `{{SOURCE_NOTE}}` `{{PLAN_A_TITLE}}/PLAN_A_BODY_HTML` `{{PLAN_B_TITLE}}/PLAN_B_BODY_HTML` `{{FOOTER_LABEL}}`
- **Layout:**
  - 표 상하 2px 브랜드 블루 보더, 좌우 보더 없음 (절대 규칙)
  - 강조 행 `.hi` = 배경 #FFF1EC + 숫자 브랜드 블루
  - 합계 행 `.total` = 배경 #EAEAE8 + 검정 800
  - 운영안 카드 1px 회색 보더, 직각, 그림자 없음
- **절대 규칙 #10:** 원본 데이터 1:1 보존, 축약·반올림 금지

---

## [J-3] bar-table — **차트는 토큰 치환 X, 자유 HTML 모드 사용**

- **File:** `skills/proposal/components/bar-table.html` (예시 데이터 박힌 reference)
- **Use when:** 분포·구간 N개 카테고리 막대 + 정확한 숫자 우측 표 (예산 카테고리 분포 + 강조 1~2개)
- **Don't use:** 시계열 → `combo-bar-line` / 표 단독 + 합계 + 운영안 카드 → `budget-table`
- **사용법:**
  1. `deck.cjs` 의 `{ html: '<...>' }` 모드. reference 파일 `<body>` 마크업 통째 복사
  2. SVG (viewBox 420×280) 의 `<rect>` y/height (0~232 범위), 값 라벨, X 카테고리 라벨을 실데이터로 직접 수정
  3. 카테고리 수가 6 미만이면 사용 안 하는 `<rect>`/`<text>` 요소 자체 삭제 (빈 칸 남기지 말 것)
  4. 우측 표는 `<div class="th"><p>…</p></div>` / `<div class="td num"><p>…</p></div>` / 강조 행 `<div class="tr hi">…</div>` 형식 직접 작성

---

## [E-1] content-grid (예산 옵션 비교)

- **File:** `skills/proposal/layouts/content-grid.html`
- **Use when:** 4가지 예산 옵션을 균등 카드로 비교 (소형 / 중형 / 대형 / 프리미엄). 강약 없음
- **Don't use:** 표 형식 + 합계 → `budget-table` / 5+ 옵션 → 슬라이드 분할 / 2 옵션 → `content-2-col-cards`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{GRID_TITLE}}` `{{ITEM_1_TITLE}}~ITEM_4_TITLE` `{{ITEM_1_DESC}}~ITEM_4_DESC`
- **Layout:** 격자 4개 — 좌:번호 뱃지 + 우:(제목+설명). gap 14px.
- **항목 4개 고정.** 5+ 필요시 다른 카테고리.

---

## 헷갈리는 페어 (이 stage 한정)

| 페어 | 분리 기준 |
|---|---|
| `bar-table` vs `budget-table` | 좌 차트 + 우 표(보조)? → bar-table / 표 단독 + 합계 + 운영안 카드? → budget-table |
| `budget-table` vs `content-grid` | 표 + 합계? → budget-table / 4 옵션 균등? → content-grid |
| `donut-chart` vs `bar-table` | 비율(100%)? → donut / 카테고리 빈도·금액? → bar-table |
