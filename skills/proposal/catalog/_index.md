# CHATdaeri Catalog — Stage Index

> 36개 템플릿이 한국식 스토리 아크 ① ~ ⑩ 슬롯별 stage 파일에 분산돼있다.
> 에이전트는 슬라이드 자리(slot)가 정해지면 **그 stage 파일 1개만** Read.
> 전체 카탈로그(`CATALOG.md` 1300줄)를 매번 로드하지 않는다.

---

## 슬롯 → stage 파일

| 스토리 아크 슬롯 | stage 파일 | 후보 템플릿 수 |
|---|---|---|
| ① 표지 / ⑩ 마무리 | [stage-cover.md](stage-cover.md) | 3 (cover, divider, emphasis-hero) |
| ② 목차 | [stage-toc.md](stage-toc.md) | 1 (toc) |
| ③ 분석 1~5장 | [stage-analysis.md](stage-analysis.md) | 21 |
| ⑤ 핵심 인사이트 | [stage-analysis.md](stage-analysis.md) | 3 (재사용: emphasis-hero, content-grid, content-3-col-cards) |
| ⑥ 세부 실행방안 | [stage-execution.md](stage-execution.md) | 7 |
| ⑦ 인력 구성 | [stage-people.md](stage-people.md) | 3 |
| ⑧ 예산안 | [stage-budget.md](stage-budget.md) | 3 |
| ⑨ 정당화 | 위 분석/예산/실행 stage 재사용 | — |

---

## stage 파일별 템플릿 목록 (빠른 참조)

### stage-cover.md (① ⑩)
- `cover` · `divider` · `emphasis-hero`

### stage-toc.md (②)
- `toc`

### stage-analysis.md (③ ⑤)
- `matrix-2x2` · `bubble-chart` · `concept-tree`
- `content-grid` · `content-text-only` · `content-split` · `content-2-col-cards` · `content-3-col-cards`
- `content-hero-image` · `content-2-image-row` · `content-3-image-strip` · `image-left-label-blocks`
- `combo-bar-line` · `two-up-charts-bar` · `two-up-charts-line` · `two-up-charts` · `bar-graph` · `bar-table` · `donut-chart` · `chart-donut`
- `as-is-to-be`

### stage-execution.md (⑥)
- `timeline` · `gantt-chart`
- `step-cards` · `numbered-steps-split` · `numbered-circle-list` · `areas-list`
- `as-is-to-be`

### stage-people.md (⑦)
- `org-chart` · `instructor-profile` · `numbered-circle-list`

### stage-budget.md (⑧)
- `budget-table` · `bar-table` · `content-grid`

---

## 사용 흐름 (에이전트)

```
Step 3 (스토리 아크 결정) → 슬롯별 stage 파일 1개만 Read
        예) ③ 분석 슬라이드 → stage-analysis.md
        예) ⑥ 실행 슬라이드 → stage-execution.md
        예) ⑩ 마무리      → stage-cover.md (재사용)

Step 3.5 ★ 항목 수 먼저 확인 ★
        stage 파일의 결정변수 표를 보기 전에,
        해당 슬라이드에 들어갈 실제 데이터 항목이 몇 개인지 먼저 센다.
        항목 수가 템플릿 슬롯 수와 맞지 않으면 템플릿을 바꾼다.
        슬롯을 채우기 위해 없는 항목을 만들거나,
        실제 항목을 슬롯 부족으로 누락시키는 것은 절대 금지.
          예) 데이터 항목 3개 → content-3-col-cards / numbered-circle-list
          예) 데이터 항목 4개 → step-cards / content-grid
          예) 데이터 항목 5개 → areas-list / numbered-circle-list

        ★ bar-table / budget-table 행 한도 → agent.md Step 5 / SKILL.md 체크리스트 참조
          (요약: ≤4행 안전 / 5행 압축 / 9행+ 반드시 분할 — 어기면 overflow 빌드 실패)

Step 4 에서 Use/Don't use 절로 후보 압축, 헷갈리는 페어는 § X 참조.
```

> § X (헷갈리기 쉬운 페어 — MECE 강제 규칙) 와 절대 규칙은 본 _index.md 와 SKILL.md 양쪽에 짧게 유지. 자세한 페어 표는 [CATALOG.md](../CATALOG.md#-x-헷갈리기-쉬운-페어--mece-강제-규칙) 참조.

---

## 카탈로그에 없는 템플릿 / 토큰

새로 발명하지 말 것. 후보가 없으면 stage 파일에서 가장 가까운 1개를 선택해 **변형 사유**를 사용자에게 알리거나, `slide.html` 자유 마크업으로 작성한다(자유 마크업도 `_shared.css` 변수만 사용 — 절대 규칙).
