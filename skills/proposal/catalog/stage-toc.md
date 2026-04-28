# Stage: ② 목차

> 대상 슬롯: ② 목차 (덱 두 번째 슬라이드)
> 후보 1종: `toc`

---

## [B-1] toc

- **File:** `skills/proposal/layouts/toc.html`
- **Category:** [B] NAVIGATION
- **Stage:** ② 목차

### Use when
- 덱의 두 번째 슬라이드 — 청중에게 전체 흐름을 한 번 보여주기
- 섹션 3~7개를 큰 번호(28px 블루) + 제목 + 한 줄 설명으로 나열

### Don't use when
- 섹션이 2개 이하 → 목차 슬라이드 자체 생략
- 섹션이 8개 이상 → 두 페이지로 분할 또는 그룹화 (이 템플릿은 5~7개가 sweet spot)
- 본문 콘텐츠 격자 → `content-grid` (stage-analysis.md 참조)

### Tokens
| 토큰 | 타입 | 설명 / 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` | text | 헤더 좌상단 — "Table of contents" |
| `{{PAGE_NUMBER}}` | "01"~"99" | "02" |
| `{{HERO_LABEL}}` | text ≤ 12자 | 좌측 큰 타이포 — "Contents" 또는 "목차" (52px / 800) |
| `BLOCK:toc_item` | block × N | 반복 블록. 항목당 (ITEM_NUMBER, ITEM_TITLE, ITEM_DESC). 3~7개 권장 |
| ↳ `{{ITEM_NUMBER}}` | "01"~"99" | "01", "02", … |
| ↳ `{{ITEM_TITLE}}` | text ≤ 20자 | "AI 자동화 개요" |
| ↳ `{{ITEM_DESC}}` | text ≤ 40자 | "업무 자동화의 필요성과 핵심 개념을 살펴봅니다" — 생략 가능 |

> 반복 블록 구현: `deck.cjs` 의 `blocks: { toc_item: [...] }` 배열로 N개 정의 → render.cjs 가 자동 복제. 마지막 항목 뒤 divider 자동 처리.

### deck.cjs 작성 예

```js
{
  template: 'toc',
  tokens: {
    SECTION_TITLE: 'Table of contents',
    PAGE_NUMBER: '02',
    HERO_LABEL: '목차',
  },
  blocks: {
    toc_item: [
      { ITEM_NUMBER: '01', ITEM_TITLE: '시장 분석', ITEM_DESC: '글로벌 시장 트렌드와 경쟁 환경 진단' },
      { ITEM_NUMBER: '02', ITEM_TITLE: '실행 로드맵', ITEM_DESC: '12주 단계별 마일스톤' },
      { ITEM_NUMBER: '03', ITEM_TITLE: '예산 운영안', ITEM_DESC: '두 가지 시나리오 비교' },
    ],
  },
}
```

### Layout cues
- 헤더: "Table of contents" + 페이지 번호 + 2px 브랜드 블루 라인
- 좌측 큰 "Contents" 타이포 (52px / 800 / `--brand-deep`)
- 우측 항목 리스트 — 항목당 padding 20px, 사이 1px `--light-border` 가로선
- 번호 28px / 800 / `--brand-blue`, 제목 18px / 600 / black, 설명 13px / 400 / dark-gray
