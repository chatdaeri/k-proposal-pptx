# Stage: ⑦ 인력 구성 / ⑨ 정당화 (1인 프로필)

> 한국식 아크 ⑦ 슬롯 — 사람·조직 표현. 후보 3종.
> 선택: 다인원 계층 (`org-chart`) · 1인 상세 (`instructor-profile`) · 5~10명 단순 명단 (`numbered-circle-list`)

---

## 결정변수

| 결정변수 | 후보 |
|---|---|
| 조직 계층 (CEO → 부서 → 팀, 10명+) | `org-chart` |
| 1명 상세 프로필 (사진·이력·저서) | `instructor-profile` |
| 5~10명 평면 명단 | `numbered-circle-list` |

---

## [H-1] org-chart

- **File:** `skills/proposal/components/org-chart.html`
- **Use when:** 조직 계층 — CEO → 부서장 N명 → 팀장·팀원 (3 부서 × 3 팀). 직책·이름·부서태그 명확. 다인원 한 슬라이드에 압축
- **Don't use:** 개념 분해 → `concept-tree` / 1명 상세 → `instructor-profile` / 5~10명 단순 명단 → `numbered-circle-list` / 도구 → `tool-card-grid`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` `{{CEO_NAME}}` `{{DIV_1_TAG}}/DIV_1_NAME ~ {{DIV_3_*}}` `{{T1_1_HEAD}}/T1_1_NAME ~ {{T3_3_*}}` (블록 N 복제)
- **Layout:** 상단 CEO 박스, 그 아래 부서 3개, 각 부서 아래 팀 3개. 박스 1px 회색 직각, 연결선 1px dark-gray. CEO 박스만 `.accent` (배경 #FFF1EC).

---

## [H-2] instructor-profile

- **File:** `skills/proposal/layouts/instructor-profile.html`
- **Use when:** 강사·발표자·핵심 인력 1명 상세 프로필. 좌:사진(3-2) + 우:이름·이력 불릿 4~6 + 저서/대표작 박스
- **Don't use:** 조직 계층 → `org-chart` / 5+명 → `numbered-circle-list` / 정보 거의 없음 → `content-text-only` / `emphasis-hero`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{INSTRUCTOR_NAME}}` `{{BULLET_1}} ~ {{BULLET_5}}` (블록 N 복제, 권장 ≤6) `{{BOOK_LABEL}}/BOOK_TITLE` (선택)
- **Layout:** 좌:사진(flex 1) / 우:정보(flex 1.4). 사진 슬롯 aspect 3-2, 1px 회색. 이름 28px / 800 / black, 불릿 13px / 400 / dark-gray.

---

## [G-5] numbered-circle-list (인력 슬롯 재사용)

- **File:** `skills/proposal/components/numbered-circle-list.html`
- **Use when:** 멤버 5~10명 평면 명단 (계층 없음). 항목당 (원형 번호 뱃지 + 이름·역할 + 짧은 설명)
- **Don't use:** 계층 → `org-chart` / 1명 상세 → `instructor-profile`
- **Tokens:** `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` `{{MAIN_TITLE}}` `{{MAIN_SUB}}` `{{ITEM_1_TITLE}}/ITEM_1_DESC ~ {{ITEM_3_*}}` (블록 N 복제, 4~10개)
- **Layout:** 원 28px, 배경 브랜드 블루, 흰 14px / 800 글자. 제목 16px / 700 / black, 설명 13px / 400 / dark-gray.

---

## 헷갈리는 페어 (이 stage 한정)

| 페어 | 분리 기준 |
|---|---|
| `org-chart` vs `numbered-circle-list` | 계층(직책 트리)? → org / 평면 명단? → numbered-circle |
| `org-chart` vs `instructor-profile` | 다인원? → org / 1명 상세? → instructor |
| `instructor-profile` vs `numbered-circle-list` | 1명 상세? → instructor / 5+명? → numbered-circle |
| `concept-tree` vs `org-chart` | 추상 분해? → concept-tree / 사람·조직? → org |
