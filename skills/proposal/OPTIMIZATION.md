# proposal 속도/토큰 최적화 제안 — Pro 플랜에서도 무리 없이 쓰기

현재 9-step 워크플로는 **에이전트가 매번 31개 템플릿 카탈로그 + 절대 규칙 + 워크플로 전체를 컨텍스트에 올리는 구조**라 한 번 빌드 시 입력 토큰이 빠르게 쌓입니다. Pro 플랜의 5시간 사용량 제한 안에서 안정적으로 쓰려면 다음 7가지 최적화가 효과적입니다 — 임팩트 큰 순서로.

---

## 1. CATALOG.md 분할 로드 (★ 가장 큰 효과 — 토큰 70% 절감)

지금은 31개 템플릿 전부가 한 파일에 있어 에이전트가 한 슬라이드 결정마다 1500줄 카탈로그 전체를 봅니다. 한국식 아크 슬롯별로 후보가 정해져있으니 **스테이지별로 쪼개서 그 슬롯에서 필요한 카탈로그만 로드**합니다.

```
catalog/
├── _index.md           ← 짧은 인덱스 (어느 카테고리에 어느 템플릿 있는지)
├── stage-cover.md      ← ① 표지 + ⑩ 마무리 (cover, divider, emphasis-hero)
├── stage-toc.md        ← ② 목차 (toc)
├── stage-analysis.md   ← ③ 분석 (matrix-2x2, bubble-chart, concept-tree, charts/, content-*)
├── stage-execution.md  ← ⑥ 실행 (timeline, gantt, step-cards, numbered-*)
├── stage-people.md     ← ⑦ 인력 (org-chart, instructor-profile, numbered-circle)
└── stage-budget.md     ← ⑧ 예산 (budget-table, bar-table)
```

에이전트가 Step 3 에서 스토리 아크를 짠 뒤, **각 슬롯이 결정되면 그 스테이지 파일만** Read. 평균적으로 슬라이드당 1개 stage 파일(150~200줄) 만 읽으면 됨 — 전체 1500줄 대비 토큰 70% 절감.

---

## 2. SKILL.md 의 워크플로 본문 분리 (토큰 30% 절감)

`SKILL.md` 가 270줄이라 매 호출마다 전부 컨텍스트로 들어갑니다. 디자인 절대 규칙(브랜드 톤)만 SKILL.md 에 남기고 **9-step 워크플로 본문은 `agents/proposal-deck-agent.md` 에만 둠**. 현재 두 곳에 중복돼있는데 에이전트 정의에만 두면 충분.

- SKILL.md → 100줄 (절대 규칙 + 산출물 포맷만)
- 에이전트 정의 → 워크플로 전체 (이미 들어있음)
- 슬래시 커맨드는 에이전트 위임만 → 워크플로 다시 쓰지 않음

---

## 3. 슬라이드 빌드를 "데이터 수집 → 일괄 치환" 2-pass 로

현재 흐름은 **슬라이드마다** 에이전트가 (a) 템플릿 Read → (b) 토큰 결정 → (c) Write 를 반복합니다. 14장 덱이면 같은 sed/Edit 패턴이 14번 반복.

대신 **모든 슬라이드의 토큰값을 먼저 한 JSON 파일에 정리**한 뒤, 단일 빌드 스크립트가 정의된 토큰을 한 번에 일괄 치환:

```js
// deck.cjs (사용자가 작성, 또는 에이전트가 한 번에 작성)
module.exports = {
  slides: [
    { template: 'cover', tokens: { SUBTITLE: '...', HERO_LINE_1: '...' } },
    { template: 'matrix-2x2', tokens: { TITLE: '...', Q1_NAME: '...' } },
    ...
  ]
};
```

`scripts/render.cjs` 가 이 deck.cjs 를 읽고 각 슬라이드 HTML 을 자동 생성. **에이전트는 deck.cjs 한 파일만 작성**하면 됨 — 14장 슬라이드 작성을 14번 → 1번으로 압축. 토큰 사용량 80% 절감, 속도 5배.

이건 `bunyang-ppt` 스킬이 이미 채택한 패턴(`deck.cjs` 한 파일).

---

## 4. 데모 빌드 검증을 lint-then-build 로

지금 워크플로 Step 7→8 은 빌드 후 PNG 변환 후 LLM 이 직접 시각 점검. 이게 PNG 6장 × Read 툴 호출 = 토큰 큼.

대신:
- **Step 7 직전에 lint.cjs 자동 실행** — 절대 규칙 위반 0건이면 PNG 검증 건너뛰기
- **Step 8 PNG 검증은 LLM 이 아니라 PNG의 메타데이터(크기·페이지 수)만 자동 확인** → "오버플로 의심" 슬라이드만 LLM Read

대부분의 빌드는 PNG 까지 안 봐도 lint 만 통과하면 OK. LLM 시각 점검은 사용자가 명시적으로 요청할 때만.

---

## 5. 모델 분리 — Builder 는 Haiku, 검증만 Sonnet/Opus

proposal-deck-agent 의 frontmatter 에 `model: inherit` 가 박혀있어 항상 호출자 모델(Sonnet/Opus) 로 동작합니다. 그런데 토큰 치환 + HTML 작성 같은 단순 작업은 Haiku 4.5 로도 충분히 됩니다.

```yaml
# agents/proposal-deck-agent.md
model: claude-haiku-4-5  # 토큰 비용 1/3, 속도 3배
```

복잡한 결정(스토리 아크, 카탈로그 후보 추리기) 은 부모 Claude(Sonnet/Opus) 가 하고, 슬라이드 HTML 채우기만 자식 Haiku 가. Pro 플랜에서 가장 가성비 좋은 조합.

---

## 6. inputs/ 폴더 사전 요약 캐시

엑셀·워드·PDF 인풋이 큰 경우(예: 100MB 사업계획서) 매번 Read 하면 비쌈. **워크플로 Step 1 시작 시 inputs/.cache/summary.md 파일이 있는지 확인**, 없으면 한 번만 만들어 다음 빌드부터 재사용.

```
inputs/
├── 매출데이터.xlsx
├── 시장조사.pdf
└── .cache/
    └── summary.md   ← 첫 빌드 때 자동 생성, 이후 재사용
```

같은 프로젝트로 슬라이드 여러 번 재빌드할 때 토큰 90% 절감.

---

## 7. 카탈로그 자체를 더 짧게 — Tokens 표를 코드 주석으로 옮김

현재 CATALOG.md 의 각 항목 Tokens 표가 줄을 많이 차지합니다. 하지만 토큰 명세는 결국 **HTML 파일 자체의 USAGE 주석**에 이미 들어있음. 카탈로그에는:

- File / Use when / Don't use when (결정 변수만)
- Tokens 는 **링크만** ("토큰 명세는 templates/X.html 의 USAGE 주석 참조")

이렇게 하면 카탈로그가 절반 이하로 줄고, 에이전트는 결정할 때 Use/Don't use 만 보고 → 슬라이드 채울 때 그 HTML 만 Read. 분리된 컨텍스트.

---

# 우선순위 — Pro 플랜에서 가장 효과 큰 3개

```
1순위 ★★★ : #3 deck.cjs 일괄 치환  (토큰 80% 절감, 속도 5배)
2순위 ★★  : #1 카탈로그 분할 로드   (토큰 70% 절감)
3순위 ★★  : #5 모델을 Haiku 4.5 로  (토큰 비용 2/3 절감)

이 3개만 적용해도 14장 덱 빌드가 Pro 플랜 한 세션에 여유롭게 들어갑니다.
체감 속도는 3~5배, 토큰은 5~10배 절감.
```

---

# 적용 순서 권장

```
Step A. agents/proposal-deck-agent.md 에 model: claude-haiku-4-5 추가
        → 즉시 효과, 1줄 수정

Step B. scripts/render.cjs 신규 작성 (deck.cjs → 슬라이드 HTML 일괄 생성)
        에이전트 워크플로 Step 6 도 "deck.cjs 작성"으로 단순화
        → 1~2시간 작업, 가장 큰 효과

Step C. catalog/stage-*.md 분할 + agents 워크플로에서 stage 단위 Read
        → 2시간 작업, 후속 토큰 절감
```

원하시면 1순위 (#3 — `deck.cjs` 일괄 치환 시스템) 부터 구현. Step A + B 만 적용해도 사용자가 한 명령으로 14장 덱을 만들 때 에이전트가 14번이 아니라 1번 출력으로 끝나서 Pro 플랜 사용량이 크게 줄어듭니다.
