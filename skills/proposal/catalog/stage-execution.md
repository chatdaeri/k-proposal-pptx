# Stage: ⑥ 세부 실행방안

> 한국식 아크 ⑥ 슬롯 — "어떻게 할 것인가"의 액션·로드맵·단계 절차.
> 후보 6종: `timeline` · `gantt-chart` · `step-cards` · `numbered-steps-split` · `numbered-circle-list` · `as-is-to-be`(변환 개선안)

---

## 결정변수

| 결정변수 | 후보 |
|---|---|
| 마일스톤 점만 (날짜 라벨) | `timeline` |
| 워크스트림 N개 × 주간 막대 | `gantt-chart` |
| 단계 4개 가로 카드 | `step-cards` |
| 좌:대제목 + 우:단계 3~5 | `numbered-steps-split` |
| 세로 리스트 5~10개 (원형 번호 뱃지) | `numbered-circle-list` |
| 번호+레이블+설명 5개 행 리스트 | `areas-list` |
| AS-IS / TO-BE 개선안 | `as-is-to-be` |

---

## [G-1] timeline

- **File:** `skills/proposal/components/timeline.html`
- **Use when:** 마일스톤 5개 (점·날짜·이름·본문). 분기·연도·월 단순 흐름. 워크스트림 막대 없음
- **Don't use:** 워크스트림 N개 막대 → `gantt-chart` / 가로 카드 4~6 → `step-cards` / 좌제목+우 단계 → `numbered-steps-split`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` `{{N1_DATE}}/N1_NAME/N1_BODY ~ {{N5_*}}` (블록 N 복제 가능)
- **Layout:** 가로 시간축 1px 브랜드 블루, 점 8px 원. 점 위 날짜 11px / mid-gray, 아래 이름 14px / 700 / black + 본문 12px.

---

## [G-2] gantt-chart

- **File:** `skills/proposal/components/gantt-chart.html`
- **Use when:** 워크스트림 5개 × 주간 단위 막대 (Week 1~12), 의존 관계, "Today" 마커
- **Don't use:** 마일스톤 점만 → `timeline` / 단계 카드 → `step-cards` / 6+ 워크스트림 → 분할 / 시간축 없음 → `numbered-steps-split`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` `{{TASK_1}} ~ {{TASK_5}}` (≤18자) `{{TODAY}}`
- **Layout:** 좌 워크스트림 라벨 컬럼, 우 주간 그리드. 막대 브랜드 블루 단색 직각 4~8px. "Today" 1px 브랜드 딥 세로선.

---

## [G-3] step-cards

- **File:** `skills/proposal/layouts/step-cards.html`
- **Use when:** 단계 4개 가로 카드 (Step 1·2·3·4), 동등 가중치, 카드 안 작은 이미지(선택)
- **Don't use:** 5+ 세로 → `numbered-circle-list` / 좌제목+우 → `numbered-steps-split` / 시간축 → `timeline` / 2~3개 → `content-2/3-col-cards`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{STEP_TAG}}/STEP_TITLE/STEP_DESC` `{{CARD_1_TITLE}}/CARD_1_BODY/CARD_1_IMG_DESC ~ {{CARD_4_*}}` `{{WARNING_TEXT}}` (선택)
- **Layout:** 4개 균등 가로, gap 12px. 좌상단 단계 번호 12px / 700 / 브랜드 블루. 카드 1px 회색 직각.

---

## [G-4] numbered-steps-split

- **File:** `skills/proposal/layouts/numbered-steps-split.html`
- **Use when:** 좌:큰 메인 타이틀 + 우:단계 3~5개 (번호+제목+설명), 좌측 다이어그램(선택)
- **Don't use:** 가로 카드 → `step-cards` / 세로 길게 → `numbered-circle-list` / 시간축 → `timeline` / 단순 좌우 → `content-split`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{MAIN_TITLE}}` `{{STEP_LABEL}}` `{{IMG_DESC}}` (선택) `{{SUB_1_TITLE}}/SUB_1_BODY ~ {{SUB_3_*}}` (블록 N 복제)
- **Layout:** 좌:1.1 / 우:1. 우측 각 단계 — 좌 28px / 800 / 브랜드 블루 번호 + 우 제목·본문. 단계 사이 1px 회색 가로선.

---

## [G-5] numbered-circle-list

- **File:** `skills/proposal/components/numbered-circle-list.html`
- **Use when:** 세로 리스트 5~10개 (단계, 멤버, 체크리스트). 항목당 (원형 번호 뱃지 + 제목 + 짧은 설명)
- **Don't use:** 가로 카드 4~6 → `step-cards` / 좌제목+우 3~5 → `numbered-steps-split` / 격자 4 → `content-grid` / 시간축 → `timeline`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{MAIN_TITLE}}` `{{MAIN_SUB}}` `{{ITEM_1_TITLE}}/ITEM_1_DESC ~ {{ITEM_3_*}}` (블록 N 복제, 4~10개)
- **Layout:** 원 28px, 배경 브랜드 블루, 흰 14px / 800 글자. 제목 16px / 700 / black, 설명 13px / 400 / dark-gray.

---

## [G-6] areas-list

- **File:** `skills/proposal/layouts/areas-list.html`
- **Use when:** 전략·실행 영역 5개를 번호+항목명+설명 행으로 나열. 홀짝 배경 교대. "5대 실행 우선순위"
- **Don't use:** 원형 뱃지 세로 리스트(5~10개) → `numbered-circle-list` / 가로 카드 4개 → `step-cards` / 설명 없이 항목만 → `numbered-steps-split` / 6+ 행 → 분할
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE}}` `{{ROW_N_NUM}}` `{{ROW_N_NAME}}` `{{ROW_N_DESC}}` (N=1~5, `<strong>` 가능) — **SVG 없음, 순수 토큰 치환**
- **Layout:** `grid: 38px 190px 24px 1fr`. 홀수행 #F8F8F8 / 짝수행 #FFFFFF. 화살표 SVG 16×9 stroke 브랜드 블루(#FF7E5F).
- **NOTE:** ③ 분석 슬롯에서도 "분석 영역 5가지" 등에 사용 가능.

---

## [E-6] as-is-to-be

- **File:** `skills/proposal/layouts/as-is-to-be.html`
- **Use when:** 좌:현재(AS-IS) / 우:제안(TO-BE) 변환 비교 — ⑥ 슬롯에서 "기존 → 개선안" 형식의 실행방안
- **Don't use:** 단순 2카드 → `content-2-col-cards` / N단계 절차 → `numbered-steps-split` / 시간축 → `timeline`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE_HTML}}` `{{ASIS_TAG}}/ASIS_HEADLINE/ASIS_BULLETS_HTML/ASIS_NOTE` `{{TOBE_TAG}}/TOBE_HEADLINE/TOBE_BULLETS_HTML/TOBE_EFFECT` `{{FOOTER_LABEL}}`
- **Layout:** 좌1 / 가운데 화살표 / 우1. 좌 배경 #F6F8FB · dot 불릿. 우 흰 배경 + 상단 3px 브랜드 블루 라인 · ▸ 불릿. 화살표 SVG 32×32 stroke 브랜드 블루.

---

## 헷갈리는 페어 (이 stage 한정)

| 페어 | 분리 기준 |
|---|---|
| `timeline` vs `gantt-chart` | 마일스톤 점만? → timeline / 워크스트림 N개 막대? → gantt |
| `timeline` vs `numbered-steps-split` | 시간축(날짜)? → timeline / 절차(번호)? → numbered-steps |
| `step-cards` vs `numbered-circle-list` | 가로 4 카드? → step-cards / 세로 5~10? → numbered-circle |
| `step-cards` vs `numbered-steps-split` | 동등 가로? → step-cards / 좌메인+우단계? → numbered-steps |
| `numbered-circle-list` vs `areas-list` | 원형 뱃지 + 제목+설명? → numbered-circle / 번호+항목명+설명 행? → areas-list |
| `areas-list` vs `numbered-steps-split` | 5행 테이블 느낌? → areas-list / 좌메인+우단계? → numbered-steps |
| `numbered-circle-list` vs `org-chart` | 평면 명단? → numbered-circle / 계층? → org-chart |
| `as-is-to-be` vs `numbered-steps-split` | 변환 방향성? → as-is-to-be / 절차 단계? → numbered-steps |
