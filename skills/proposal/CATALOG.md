# CHATdaeri Templates — Catalog & Decision Tree

> 25개+ HTML 템플릿(`layouts/` + `components/`)의 결정 트리.
> proposal-deck-agent 가 Step 4 에서 이 카탈로그를 읽고 슬라이드별 템플릿 1개를 선택한다.
> 이 문서가 곧 **"무엇을 언제 쓸 것인가"** 의 단일 소스 오브 트루스.

---

## 사용법

1. Step 3 에서 정한 슬라이드 자리(① 표지 / ③ 분석 / ⑥ 실행 등) → 해당 카테고리 [A] ~ [I] 로 진입.
2. 카테고리 안의 **결정변수**(블록 수, 이미지 수, 축 종류 등)로 후보 1~3개 추리기.
3. 각 항목의 **Don't use when** 절로 후보 제거.
4. 결정 못 하면 마지막 **§ X. 헷갈리기 쉬운 페어** 참조.
5. 카탈로그에 없는 템플릿명·토큰을 발명하지 말 것 — 새 템플릿 필요시 사용자에게 알린다.

---

## 분류 체계 — 9개 카테고리 (MECE)

한 템플릿 = 정확히 한 카테고리. 9개 카테고리가 한국식 스토리 아크의 ① ~ ⑩ 모든 슬롯을 덮는다.

| Cat | 이름 | 역할 (스토리 아크 슬롯) | 템플릿 수 |
|---|---|---|---|
| [A] | STRUCTURAL | ① 표지 / ⑩ 마무리 / 챕터 구분 | 2 |
| [B] | NAVIGATION | ② 목차 | 1 |
| [C] | EMPHASIS | ④ 핵심 메시지 / ⑤ 핵심 인사이트 / ⑩ Q&A | 1+ |
| [D] | ANALYSIS | ③ 분석 (시장·경쟁·현황) | 3 |
| [E] | CONTENT-LAYOUT | ③ ⑥ ⑨ 텍스트 중심 | 4 |
| [F] | IMAGE-LAYOUT | ③ ⑥ ⑨ 이미지가 핵심 | 7 |
| [G] | EXECUTION-PLAN | ⑥ 세부 실행방안 | 5 |
| [H] | PEOPLE | ⑦ 인력 / ⑨ 팀 정당화 | 2 |
| [I] | LIST | ⑨ 정당화 (사례·도구·FAQ) | 2 |
| [J] | DATA-VIS | ③ 분석 / ⑧ 예산안 — 차트·표 데이터 시각화 | 5 |

> **참고**: 위 카운트는 1차 6개(이번 배치) 기준. 나머지 19개 + `pages/` 추가 추출분은 후속 배치에서 채움.

---

## 카테고리별 결정변수

각 카테고리 안에서 **결정변수 1~2개의 값**으로 정확히 한 템플릿이 결정된다.

### [A] STRUCTURAL — 결정변수: "위치"

| 위치 | 템플릿 |
|---|---|
| 덱 맨 앞 (표지) | `cover` |
| 섹션 사이 / 끝맺음 (챕터 브레이크) | `divider` |

### [B] NAVIGATION — (1개, 결정 불요)

| | 템플릿 |
|---|---|
| 목차 | `toc` |

### [C] EMPHASIS — 결정변수: "메시지 형태"

| 메시지 형태 | 템플릿 |
|---|---|
| 한 줄짜리 결론 + 인사이트 다발 | `emphasis-hero` |

> emphasis 카테고리는 후속 배치에서 `emphasis-message`(짧은 결론 단독) 추가 검토.

### [D] ANALYSIS — 결정변수: "관계 형태"

| 항목 간 관계 | 템플릿 |
|---|---|
| 두 축의 사분면 (4개 명확한 라벨) | `matrix-2x2` |
| 두 축의 산점 (라벨 없는 위치잡기) | `bubble-chart` |
| 위계 분해 (parent → children) | `concept-tree` |

### [E] CONTENT-LAYOUT — 결정변수: "블록 수 / 비교 여부"

| 블록 구조 | 템플릿 |
|---|---|
| 격자 4~6개 동등 블록 | `content-grid` |
| 텍스트 1덩이 (서술형) | `content-text-only` |
| 좌:대제목 / 우:불릿 (좌우 분할) | `content-split` |
| 2개 카드 (비교/대조) | `content-2-col-cards` |
| 3개 카드 (병렬 소개) | `content-3-col-cards` |

### [F] IMAGE-LAYOUT — 결정변수: "이미지 수 + 형태"

| 이미지 수 / 형태 | 템플릿 |
|---|---|
| 1 + 풀폭 hero | `content-hero-image` |
| 1 + 라벨 블록 다수 | `image-left-label-blocks` |
| 2 (Before/After 등 1:1) | `content-2-image-row` |
| 3 (사례 1:1 병렬) | `content-3-image-strip` |

> [F] 의 anchored-left·anchored-right·hero-overview-features·image-table 은 후속 배치에서.

### [G] EXECUTION-PLAN — 결정변수: "축 종류 + 세부도"

| 축 / 세부도 | 템플릿 |
|---|---|
| 시간 (마일스톤 점) | `timeline` |
| 시간 (워크스트림×주간 막대) | `gantt-chart` |
| 단계 (가로 카드 4~6) | `step-cards` |
| 단계 (좌제목+우 3~5) | `numbered-steps-split` |
| 단계 (세로 리스트 5~10) | `numbered-circle-list` |

### [H] PEOPLE — 결정변수: "조직 vs 개인"

| 단위 | 템플릿 |
|---|---|
| 조직도 (계층 + 다인원) | `org-chart` |
| 개인 1명 상세 프로필 | `instructor-profile` |

### [I] LIST — 결정변수: "콘텐츠 종류"

| 항목 종류 | 템플릿 |
|---|---|
| 질문/답변 쌍 (FAQ) | `faq-list` |
| 도구·솔루션 카탈로그 | `tool-card-grid` |

### [J] DATA-VIS — 결정변수: "차트 형태 + 보조 요소"

데이터 시각화 차트 4종 + 표 1종. 모두 ⑧ 예산안 또는 ③ 분석 슬롯에 사용한다.
**SVG 차트는 좌표/막대 높이가 데이터에 종속되므로, 데이터 변경 시 카탈로그의 토큰 치환만으로는 부족하고 SVG 영역을 직접 편집해야 한다.** 각 템플릿 USAGE 주석에 편집 공식이 박혀있다.

| 차트 형태 | 보조 요소 | 템플릿 |
|---|---|---|
| 막대 2계열 + 선 1계열 (시계열 12점) | 예측 마커 | `combo-bar-line` |
| 좌:막대(±값) / 우:라인(14점) | 인사이트 박스 | `two-up-charts` |
| 좌:막대(6 카테고리) / 우:상세 표 | 강조 행/막대 | `bar-table` |
| 도넛 (4 세그먼트) + 중앙 합계 | 범례 표 + 시사점 | `donut-chart` |
| 풀폭 표(8 컬럼 + 합계 행) + 운영안 카드 | A안/B안 비교 | `budget-table` |

---

# § 1차 카탈로그 — 6개 템플릿 (검토용)

각 카테고리당 최소 1개씩 뽑아 분류 체계가 작동하는지 검증하는 첫 배치.
[A] cover · [A] divider · [B] toc · [C] emphasis-hero · [D] matrix-2x2 · [E] content-grid.

---

## [A-1] cover

- **File:** `skills/proposal/layouts/cover.html`
- **Category:** [A] STRUCTURAL
- **Stage (워크플로):** ① 표지 (덱의 첫 장)

### Use when
- 덱의 가장 첫 슬라이드 — 회사명 + 문서 종류(IR / 제안 / 분기리뷰) + 핵심 카피 + 연락처
- 발표 시작 30초 안에 청중에게 "이 덱이 무엇인지"를 각인
- 핵심 카피는 3행으로 끊어 대형 타이포(56px) 로 표시

### Don't use when
- 챕터 사이 구분 슬라이드 → `divider`
- 한 줄 결론 강조 슬라이드(중간 슬롯) → `emphasis-hero`
- 데크 끝 마무리 슬라이드 → `divider` (Closing 변형) 또는 `emphasis-hero`

### Tokens
| 토큰 | 타입 | 설명 / 예시 |
|---|---|---|
| `{{SUBTITLE}}` | text ≤ 30자 | "AI AUTOMATION SOLUTION" (대문자 영문 라벨 또는 짧은 한국어) |
| `{{HERO_LINE_1}}` | text ≤ **14자** | 1행 — "AI 자동화로" (한국어 폭 1.3× 보정. 56px/800 + 폭 840px 실측 결과 14자 안전, 18자 오버플로) |
| `{{HERO_LINE_2}}` | text ≤ **14자** | 2행 — "효율적인 업무 환경" |
| `{{HERO_LINE_3}}` | text ≤ **14자** | 3행 — "CHATdaeri 솔루션" (생략 가능, 빈 문자열로) |
| `{{CONTACT_LABEL}}` | text | "Contact" / "Team" |
| `{{CONTACT_DETAIL}}` | text | "+82 10-1234-5678" 또는 "hello@proposal.com" |
| `{{LOGO_PATH}}` | path | 로고가 있으면 경로, 없으면 빈 src 또는 워드마크 인라인 텍스트로 교체 |

### Layout cues
- 상단 메타정보 한 줄: "CHATdaeri | Presentation | proposal.com" (스타일 고정)
- 중앙 hero 타이포: 56px / 800 / `var(--brand-deep)` 단색
- 하단 좌측 contact + 우측 로고 영역
- **로고가 별도 자산이 아니므로**, `{{LOGO_PATH}}` 대신 인라인 워드마크 패턴 권장:
  `<span style="font-family:'Pretendard Variable';font-weight:800;letter-spacing:-0.035em;color:#FF7E5F;font-size:18px;">CHATdaeri</span>`
- 절대 규칙 준수: 그라디언트·그림자 없음, border-radius 0

---

## [A-2] divider

- **File:** `skills/proposal/layouts/divider.html`
- **Category:** [A] STRUCTURAL
- **Stage (워크플로):** ⑩ 마무리 / 챕터 사이 구분

### Use when
- "이제부터 Part 02 입니다" 같은 챕터 전환
- 덱의 마지막 마무리 ("감사합니다" / "Q&A")
- 섹션 번호(01, 02, 03) + 섹션 제목 + 한 줄 부제목 형태가 어울릴 때

### Don't use when
- 콘텐츠가 있는 슬라이드(불릿·차트·표 포함) → 해당 카테고리 [C]~[I] 사용
- 한 줄짜리 결론 메시지(분석을 압축한 강조) → `emphasis-hero`
- 표지 → `cover`

### Tokens
| 토큰 | 타입 | 설명 / 예시 |
|---|---|---|
| `{{SECTION_NUMBER}}` | "01"~"99" | "02" — 64×64px 네이비 뱃지에 박힘 |
| `{{SECTION_TITLE}}` | text ≤ 25자 | "AI 자동화의 필요성" |
| `{{SECTION_SUBTITLE}}` | text ≤ 50자 | "왜 지금 자동화에 투자해야 하는가" — 생략 시 빈 값 |

### Layout cues
- 정중앙 정렬, 배경 흰색
- 상단 64×64px 네이비 뱃지(`--brand-deep`) 안에 흰색 28px/800 숫자
- 그 아래 44px / 800 / `--brand-deep` 섹션 제목
- 그 아래 16px / 400 / dark-gray 부제목
- 헤더 라인·로고 없음 (이 슬라이드는 카테고리 [A] 라 헤더 chrome 면제)

---

## [B-1] toc

- **File:** `skills/proposal/layouts/toc.html`
- **Category:** [B] NAVIGATION
- **Stage (워크플로):** ② 목차

### Use when
- 덱의 두 번째 슬라이드 — 청중에게 전체 흐름을 한 번 보여주기
- 섹션 3~7개를 큰 번호(28px 블루) + 제목 + 한 줄 설명으로 나열

### Don't use when
- 섹션이 2개 이하 → 목차 슬라이드 자체 생략
- 섹션이 8개 이상 → 두 페이지로 분할 또는 그룹화 (이 템플릿은 5~7개가 sweet spot)
- 본문 콘텐츠 격자 → `content-grid`

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

> 반복 블록 구현: 템플릿의 `<!-- BLOCK:toc_item BEGIN -->` ~ `<!-- BLOCK:toc_item END -->` 사이를 N회 복제. 마지막 항목 뒤 `<div class="toc-divider"></div>` 는 제거.

### Layout cues
- 헤더: "Table of contents" + 페이지 번호 + 2px 브랜드 오렌지 라인
- 좌측 큰 "Contents" 타이포 (52px / 800 / `--brand-deep`)
- 우측 항목 리스트 — 항목당 padding 20px, 사이 1px `--light-border` 가로선
- 번호 28px / 800 / `--brand-orange`, 제목 18px / 600 / black, 설명 13px / 400 / dark-gray

---

## [C-1] emphasis-hero

- **File:** `skills/proposal/layouts/emphasis-hero.html`
- **Category:** [C] EMPHASIS
- **Stage (워크플로):** ④ 핵심 메시지 / ⑤ 핵심 인사이트 / ⑩ Q&A 마무리

### Use when
- 분석을 한 줄로 압축한 결론을 정중앙 대형 타이포로 강조 (Bottom line up front)
- 핵심 메시지 + 한 문단 부제목 + (선택적) 상단 라벨 + 좌하단 섹션 라벨 + 우하단 페이지 번호
- "왜 지금인가", "결론은 한 가지", "Q&A" 같은 단독 슬라이드
- 전체 덱에서 0~3장 권장 (너무 많이 쓰면 강조 효과 사라짐)

### Don't use when
- 챕터 구분(섹션 번호 + 제목) → `divider`
- 표지 → `cover`
- 콘텐츠 격자(여러 항목 나열) → `content-grid`
- 데이터 분석(매트릭스·트리) → [D] 카테고리

### Tokens
| 토큰 | 타입 | 설명 / 예시 |
|---|---|---|
| `{{EYEBROW}}` | text ≤ 20자 | "결론" / "PART 03" — 14px / 600 / 브랜드 오렌지, 대문자 변환됨. 빈 문자열 가능. |
| `{{HERO_LINE_1}}` | text ≤ **14자** | 1행 — 검정 텍스트. "지금 시작하지 않으면" (58px/800 + 폭 840px 실측. 25자는 약 1300px 로 명백한 오버플로 — 14자 안전치) |
| `{{HERO_LINE_2}}` | text ≤ **14자** | 2행 — 브랜드 오렌지 강조. "따라잡을 수 없습니다" |
| `{{SUBTITLE}}` | text ≤ 80자 | 부제목 한 문단. 16px / dark-gray, max-width 640px |
| `{{FOOTER_LABEL}}` | text | 좌하단 — "Section 04 — Conclusion" |
| `{{PAGE_NUMBER}}` | "01"~"99" | "10" |

### Layout cues
- 헤더 chrome 없음. 본문 자체가 메시지.
- accent bar 48×4px 브랜드 오렌지 (eyebrow 아래)
- hero h1 58px / 800 / 검정. 두 줄 중 강조 줄만 `--brand-orange`
- 푸터: top border 1px `--light-border`, 좌측 dark-gray 라벨 + 우측 브랜드 오렌지 페이지 번호

---

## [D-1] matrix-2x2

- **File:** `skills/proposal/components/matrix-2x2.html`
- **Category:** [D] ANALYSIS
- **Stage (워크플로):** ③ 분석 슬라이드

### Use when
- 두 축으로 명확한 사분면 비교 (시급성 × 중요도, 시장점유율 × 기술성숙도, Effort × Impact)
- 사분면별 명시적 라벨이 있는 경우 (Q1·Q2·Q3·Q4 또는 Star/Cash-cow/Question/Dog)
- 항목 4개 (각 사분면당 1개) — 사분면 라벨이 곧 항목명
- 강조 사분면이 명확할 때 (예: I 사분면을 누르고 들어갈 영역)

### Don't use when
- 사분면 라벨 없이 위치만 표시 → `bubble-chart`
- 항목이 2개뿐인 단순 비교 → `content-2-col-cards`
- 위계 분해(parent → children) → `concept-tree`
- 시간 흐름이 핵심 → `timeline` / `gantt-chart`
- 항목 5개 이상 (한 사분면에 여러 점) → `bubble-chart`

### Tokens
| 토큰 | 타입 | 설명 / 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` | text | 헤더 좌상단 — "Part 02. 시장 분석" |
| `{{PAGE_NUMBER}}` | "01"~"99" | "07" |
| `{{LABEL}}` | text ≤ 20자 | 본문 상단 작은 라벨 — "PRIORITIZATION" |
| `{{TITLE}}` | text ≤ 50자 | 본문 메인 타이틀 — "어디부터 손댈 것인가" |
| `{{LEDE}}` | text ≤ 80자 | 부제목 한 문단 |
| `{{Y_AXIS}}` | text ≤ 12자 | Y축 라벨 — "Impact" / "중요도" |
| `{{X_AXIS}}` | text ≤ 12자 | X축 라벨 — "Effort" / "시급성" |
| `{{Q1_TAG}}` `{{Q1_NAME}}` `{{Q1_BODY}}` `{{Q1_DESC}}` | text | 우상단 사분면(강조됨) — 태그 / 짧은 이름 / 매트릭스 셀 본문(≤30자) / 우측 카드 설명(≤60자) |
| `{{Q2_*}}` | text | 좌상단 사분면 (4개 토큰 동일 구조) |
| `{{Q3_*}}` | text | 좌하단 사분면 |
| `{{Q4_*}}` | text | 우하단 사분면 |

### Layout cues
- 헤더 + 라벨/타이틀/lede 블록 + 좌:매트릭스 / 우:항목 리스트(I/II/III/IV)
- I 사분면(우상단) 은 `.accent` 강조: 배경 `#FFF1EC` + 보더 `--brand-orange` 1.5px
- 다른 사분면은 1px `--light-border`
- 우측 카드 4개 — 각 카드 좌측에 12.5px / 800 / 브랜드 오렌지 핀(I·II·III·IV)
- 절대 규칙: 둥근 모서리 0, 그라디언트·그림자 없음

---

## [E-1] content-grid

- **File:** `skills/proposal/layouts/content-grid.html`
- **Category:** [E] CONTENT-LAYOUT
- **Stage (워크플로):** ③ 분석 / ⑥ 실행 / ⑨ 정당화 — 텍스트 4개 항목 균등 나열

### Use when
- 텍스트 항목 4개를 2×2 격자로 동등 나열 (기능 4가지, 핵심 가치 4개, 단계 4개)
- 각 항목이 비슷한 가중치 — 강약을 두지 않을 때
- 항목당 (번호 뱃지 + 제목 + 짧은 설명) 형식

### Don't use when
- 항목이 2개 → `content-2-col-cards`
- 항목이 3개 → `content-3-col-cards`
- 항목이 5~6개 → 격자가 지저분해짐, `numbered-circle-list` 또는 슬라이드 분할
- 항목에 이미지가 핵심 → [F] IMAGE-LAYOUT (`content-2-image-row` / `content-3-image-strip`)
- 두 축 비교(매트릭스) → `matrix-2x2`
- 시간 흐름 → [G] EXECUTION-PLAN
- 사분면 의미 부여 → `matrix-2x2` (이건 균등 격자, matrix 는 의미 격자)

### Tokens
| 토큰 | 타입 | 설명 / 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` | text | 헤더 좌상단 — "Part 03. 솔루션" |
| `{{PAGE_NUMBER}}` | "01"~"99" | "08" |
| `{{GRID_TITLE}}` | text ≤ 50자 | 본문 메인 타이틀 — "한 번에 4가지 자동화" |
| `{{ITEM_1_TITLE}}` ~ `{{ITEM_4_TITLE}}` | text ≤ 18자 | 각 항목 제목 |
| `{{ITEM_1_DESC}}` ~ `{{ITEM_4_DESC}}` | text ≤ 50자 | 각 항목 설명 (1~2줄) |

> 이 템플릿은 **항목 4개 고정**. 5개 이상 필요하면 다른 카테고리.

### Layout cues
- 헤더: 섹션 타이틀 + 페이지 번호 + 2px 브랜드 오렌지 라인
- 본문: eyebrow "Key Features" (고정) + 32px / 700 / 브랜드 오렌지 타이틀
- 격자 4개 — 각 항목당 좌측 번호 뱃지 + 우측 (제목 + 설명)
- 절대 규칙 준수: 격자 항목 사이 14px gap, border-radius 0, 그림자 없음

---

# § 2차 카탈로그 — 분석 / 콘텐츠 (6개)

## [D-2] bubble-chart

- **File:** `skills/proposal/components/bubble-chart.html`
- **Category:** [D] ANALYSIS
- **Stage:** ③ 분석 (포지셔닝·세그먼트 분포)

### Use when
- 두 축의 산점에 항목 5~8개를 점(원) 으로 찍을 때
- 점 크기로 **3번째 차원**(매출, 사용자 수 등) 추가 표현이 필요
- 사분면 라벨이 **없는** 자유 위치잡기 (Star/Cash 등 명명 불요)
- 경쟁사 포지셔닝, 세그먼트 분포 분석

### Don't use when
- 사분면 라벨 명시 + 4개 그룹 → `matrix-2x2`
- 위계 분해 → `concept-tree`
- 시간 흐름 → `timeline` / `gantt-chart`
- 항목 4개 이하 → `content-2-col-cards` 또는 `content-grid`
- 항목 9개 이상 → 가독성 한계, 슬라이드 분할

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{LABEL}}` | text ≤ 20자 | 본문 라벨 — "POSITIONING" |
| `{{TITLE}}` | text ≤ 50자 | "경쟁 환경에서 우리의 위치" |
| `{{LEDE}}` | text ≤ 80자 | 부제목 |
| `{{X_AXIS}}` `{{Y_AXIS}}` `{{SIZE_DIM}}` | text ≤ 12자 | 축·크기 라벨 |
| `{{SEG_A}}~{{SEG_E}}` | text | 5개 점의 세그먼트 이름 |
| `{{INSIGHT}}` | text ≤ 80자 | 하단 한 줄 인사이트 |

### Layout cues
- 점은 8~24px 원, `var(--brand-orange)` 단색 (크기로 3차원 표현)
- 라벨은 점 옆 11px / dark-gray
- 절대 규칙: 그라디언트 점 금지, 그림자 금지

---

## [D-3] concept-tree

- **File:** `skills/proposal/components/concept-tree.html`
- **Category:** [D] ANALYSIS
- **Stage:** ③ 분석 (개념 분해·이슈 트리)

### Use when
- 위계 구조 분해 — root → 카테고리 3개 → 하위 leaf 6개
- 문제 → 원인 → 근본 원인 (이슈 트리)
- 전략 → 영역 → 액션 (전략 분해)
- 가로 방향(L→R) 트리

### Don't use when
- 사람·조직(직책·이름) → `org-chart`
- 시간 순서(1→2→3) → `timeline` / `numbered-steps-split`
- 두 축 비교 → `matrix-2x2` / `bubble-chart`
- 항목 단순 나열 → `content-grid`

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` | text | 본문 라벨/타이틀/부제 |
| `{{ROOT_NAME}}` `{{ROOT_BODY}}` | text | 루트 노드 (≤ 15자 / ≤ 40자) |
| `{{CAT_1_NAME}} ~ {{CAT_3_NAME}}` `{{CAT_*_BODY}}` | text | 카테고리 3개 (각각 ≤ 12자 / ≤ 30자) |
| `{{LEAF_1_NAME}} ~ {{LEAF_6_NAME}}` `{{LEAF_*_BODY}}` | text | 리프 6개 (각각 ≤ 12자 / ≤ 25자) |

### Layout cues
- 가로 트리 — 좌:root, 중:category 3개, 우:leaf 6개 (카테고리당 2개)
- 노드는 1px `--light-border` 직각 박스, 연결선 1px dark-gray
- 강조 노드(`accent`)는 배경 `#FFF1EC`

---

## [E-2] content-text-only

- **File:** `skills/proposal/layouts/content-text-only.html`
- **Category:** [E] CONTENT-LAYOUT
- **Stage:** ③ ⑥ ⑨ — 이미지 없는 텍스트 블록 다수

### Use when
- 이미지가 없고 텍스트로만 4~5개 블록 (1 hero + 3 sub)
- 서술형 분석 슬라이드 (정성적 평가)
- 이미지 placeholder 를 "빈 채로" 두지 않기 위한 fallback

### Don't use when
- 이미지가 핵심 → [F] IMAGE-LAYOUT
- 단순 격자 4개 → `content-grid`
- 좌:대제목 / 우:1개 큰 메시지 → `content-split`
- 항목 2~3개 → `content-2-col-cards` / `content-3-col-cards`

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{HERO_TITLE}}` `{{HERO_BODY}}` | text | 좌측 hero 블록 (제목 ≤ 20자, 본문 ≤ 80자) |
| `{{LEFT_TITLE}}` `{{LEFT_DESC}}` | text | 좌측 sub-1 블록 |
| `{{SUB_2_TITLE}}` `{{SUB_2_BODY}}` ~ `{{SUB_3_*}}` | text | 우측 sub 2~3 블록 |
| `{{SUB_N_TITLE}}` `{{SUB_N_BODY}}` | block × N | 추가 블록 필요시 N 회 복제 |

### Layout cues
- 1 hero(flex 1.4) + 3 sub(flex 1) 리듬 — AI 균일 카드 방지
- hero h3 19px / 600 / 브랜드 오렌지
- sub h3 17px / 600 / dark-gray

---

## [E-6] as-is-to-be

- **File:** `skills/proposal/layouts/as-is-to-be.html`
- **Category:** [E] CONTENT-LAYOUT (확장 — Before/After 변환 비교)
- **Stage:** ③ 분석 (현재 → 목표 진단) / ⑥ 실행 (개선안 제시)

### Use when
- 좌:현재(AS-IS) / 우:제안(TO-BE) 의 변환 비교가 핵심 메시지
- 가운데 화살표가 변화의 방향을 시각적으로 강조
- 마케팅·운영 개선안, 시스템 리뉴얼, 프로세스 재설계
- 양쪽에 짧은 헤드라인 + 불릿 3~4 + 하단 노트/효과 명시

### Don't use when
- 단순 2개 카드 비교 (변환 방향성 약함) → `content-2-col-cards`
- 좌·우 모두 이미지 → `content-2-image-row`
- 변환이 N단계 절차 → `numbered-steps-split` / `step-cards`
- 시간축 위 흐름 → `timeline` / `gantt-chart`
- 단순 좌:대제목 + 우:한 단락 → `content-split`

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` | text | 헤더 좌상단 — "PART 03 · 실행 #1" (`<span class="ch">` 강조) |
| `{{PAGE_NUMBER}}` | "01"~"99" | "06 / 10" 형태도 가능 |
| `{{LABEL}}` | text ≤ 20자 | "캠페인 구조 재설계" |
| `{{TITLE_HTML}}` | text ≤ 50자 | 본문 메인 메시지. `<span class="a">…</span>` 강조 가능 |
| `{{ASIS_TAG}}` | text | 좌측 상단 태그 — "AS-IS · 현행 셋팅" |
| `{{ASIS_HEADLINE}}` | text ≤ 25자 | 좌측 헤드라인 — "캠페인 5개 · 그룹 23개로 분산" |
| `{{ASIS_BULLETS_HTML}}` | html | 좌측 불릿 — `<li>...</li>` × 3~4 |
| `{{ASIS_NOTE}}` | text ≤ 40자 | 좌측 하단 메모 — "※ 광고비 누수 추정 월 12M" |
| `{{TOBE_TAG}}` | text | 우측 상단 태그 — "TO-BE · 제안 셋팅" |
| `{{TOBE_HEADLINE}}` | text ≤ 25자 | 우측 헤드라인 |
| `{{TOBE_BULLETS_HTML}}` | html | 우측 불릿 — `<li>...</li>` × 3~4 |
| `{{TOBE_EFFECT}}` | text ≤ 50자 | 우측 하단 효과 — "→ ROAS 240% 회복 · 광고비 12M 절감" |
| `{{FOOTER_LABEL}}` | text | 좌측 푸터 — "FLOWDESK · 2026 Q2" |

### Layout cues
- 좌:1 / 가운데:40px 화살표 / 우:1 의 3컬럼 grid
- 좌(AS-IS) 박스 배경 `#F6F8FB`(매우 옅은 회청), 불릿은 dot(·) `#B7B7B5`
- 우(TO-BE) 박스 흰 배경 + 상단 3px 브랜드 오렌지 라인, 불릿은 ▸ 브랜드 오렌지
- 화살표 SVG 32×32, 브랜드 오렌지 stroke
- 헤더 chrome 은 `h-top + h-rule` 인라인 absolute 패턴 (pages 출신, padding 90px 56px 56px)
- 절대 규칙 준수: border-radius 0, 그라디언트/그림자 없음

---

## [E-3] content-split

- **File:** `skills/proposal/layouts/content-split.html`
- **Category:** [E] CONTENT-LAYOUT
- **Stage:** ③ ⑥ ⑨ — 좌우 분할 (좌제목 + 우 본문)

### Use when
- 좌측 큰 제목 + 세로 구분선 + 우측 한 덩이 본문 (한 메시지에 집중)
- "왜 이걸 하는가" 처럼 큰 질문 + 한 단락 답변
- 좌측 32~36px / 700 타이틀이 메시지의 핵심

### Don't use when
- 우측이 여러 항목 → `content-grid` / `content-2-col-cards`
- 좌측이 이미지 → `content-image-anchored-left` (후속) / `content-hero-image`
- 단계 설명 (1·2·3) → `numbered-steps-split`

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{LEFT_TITLE}}` | text ≤ 20자 | 좌측 큰 제목 |
| `{{LEFT_DESC}}` | text ≤ 200자 | 우측 본문 1단락 |

### Layout cues
- 좌:1 / 우:1.5 비율, 사이 1px `--light-border` 세로 구분선
- 좌측 32~36px / 700 / black, 우측 14px / 400 / dark-gray (line-height 1.6)

---

## [E-4] content-2-col-cards

- **File:** `skills/proposal/layouts/content-2-col-cards.html`
- **Category:** [E] CONTENT-LAYOUT
- **Stage:** ③ ⑥ ⑨ — 2개 카드 (비교/대조)

### Use when
- 항목 2개를 좌/우 카드로 비교 (Before/After, As-Is/To-Be, Plan A/Plan B)
- 카드 안에 작은 이미지 또는 아이콘 있어도 OK (이미지가 카드 면적 50% 미만)
- 텍스트가 핵심 메시지

### Don't use when
- 이미지가 카드의 핵심 → `content-2-image-row`
- 항목 3개 → `content-3-col-cards`
- 항목 4개 → `content-grid`
- 두 축 매트릭스 → `matrix-2x2`

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{MAIN_TITLE}}` `{{MAIN_SUB}}` | text | 본문 메인 타이틀 + 부제 |
| `{{CARD_1_TITLE}}` `{{CARD_1_SUBTITLE}}` `{{CARD_1_BODY}}` `{{CARD_1_IMG_DESC}}` | text | 카드 1 (제목·소제목·본문·이미지 설명) |
| `{{CARD_2_*}}` | text | 카드 2 (동일 구조) |
| `{{CARD_N_*}}` | block × N | 추가 카드 (실제 사용 시 2개로 한정 권장) |

### Layout cues
- 2개 카드 균등 폭, 사이 24px gap
- 카드 보더 1px `--light-border`, 직각, 그림자 없음
- 1개를 `accent` 클래스로 강조 가능 (배경 `#FFF1EC`)

---

## [E-5] content-3-col-cards

- **File:** `skills/proposal/layouts/content-3-col-cards.html`
- **Category:** [E] CONTENT-LAYOUT
- **Stage:** ③ ⑥ ⑨ — 3개 카드 (병렬 소개)

### Use when
- 항목 3개를 균등 카드로 병렬 소개 (Tier 1·2·3, 단계 3, 솔루션 3개)
- 텍스트 중심, 이미지는 보조 (있어도 카드 면적 50% 미만)
- 항목 간 가중치 차이 적음

### Don't use when
- 이미지가 핵심 → `content-3-image-strip`
- 항목 2개 → `content-2-col-cards`
- 항목 4개 → `content-grid`
- 단계가 시간 흐름 → `step-cards` / `numbered-circle-list`

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{MAIN_TITLE}}` `{{MAIN_SUB}}` | text | 메인 타이틀 + 부제 |
| `{{CARD_1_TITLE}}` `{{CARD_1_SUBTITLE}}` `{{CARD_1_BODY}}` `{{CARD_1_IMG_DESC}}` | text | 카드 1~3 (각 4개 토큰) |
| `{{CARD_2_*}}` `{{CARD_3_*}}` | text | 카드 2·3 |

### Layout cues
- 3개 카드 균등 1:1:1, 사이 16px gap
- 카드 보더 1px `--light-border`, 직각

---

# § 3차 카탈로그 — 이미지 / 리스트 (6개)

## [F-2] content-hero-image

- **File:** `skills/proposal/layouts/content-hero-image.html`
- **Category:** [F] IMAGE-LAYOUT
- **Stage:** ③ ⑥ ⑨ — 이미지 풀폭 hero

### Use when
- 이미지 1개가 슬라이드 면적의 50%+ — 제품 스크린샷, 다이어그램
- 이미지 옆 또는 아래에 짧은 메시지(1~2 포인트)

### Don't use when
- 이미지가 보조 → `content-2-col-cards` 의 카드 안 이미지
- 이미지 2개 → `content-2-image-row`
- 이미지 3개 → `content-3-image-strip`
- 이미지 + 표 → `content-image-table` (후속)

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{MAIN_TITLE}}` `{{MAIN_SUB}}` | text | 본문 타이틀 + 부제 |
| `{{IMG_DESC}}` | text | 이미지 placeholder 설명 (실제 이미지 경로로 교체) |
| `{{POINT_1_TITLE}}` `{{POINT_1_BODY}}` `{{POINT_2_*}}` | text | 사이드 포인트 2개 |

### Layout cues
- 이미지 슬롯 — 1px `--light-border`, 풀 블리드 금지
- aspect-ratio 16-9 또는 3-2

---

## [F-7] content-2-image-row

- **File:** `skills/proposal/layouts/content-2-image-row.html`
- **Category:** [F] IMAGE-LAYOUT
- **Stage:** ③ ⑥ ⑨ — 이미지 2개 비교

### Use when
- Before/After, As-Is/To-Be 처럼 **이미지 2개가 핵심 메시지**
- 두 이미지 모두 1:1 (정사각) 으로 통일

### Don't use when
- 이미지 핵심 아니고 텍스트 비교 → `content-2-col-cards`
- 이미지 3개 → `content-3-image-strip`
- 비율 섞기(16:9 + 1:1) → 한 슬라이드 안에서 절대 금지, 다른 템플릿 또는 분할

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{MAIN_TITLE}}` `{{MAIN_SUB}}` | text | 본문 |
| `{{CARD_1_TITLE}}` `{{CARD_1_BODY}}` `{{CARD_1_IMG_DESC}}` | text | 카드 1 (이미지+텍스트) |
| `{{CARD_2_*}}` | text | 카드 2 |

### Layout cues
- 이미지 aspect 1:1 (혼합 금지)
- 두 카드 균등 폭, 사이 24px gap

---

## [F-8] content-3-image-strip

- **File:** `skills/proposal/layouts/content-3-image-strip.html`
- **Category:** [F] IMAGE-LAYOUT
- **Stage:** ③ ⑥ ⑨ — 이미지 3개 병렬

### Use when
- 사례 3개, 도구 3개, 단계 3개 등 이미지가 핵심
- 모두 1:1 정사각 통일

### Don't use when
- 이미지 2개 → `content-2-image-row`
- 4개 이상 → 슬라이드 분할 (3+1 또는 2+2)
- 텍스트가 핵심 → `content-3-col-cards`

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{MAIN_TITLE}}` `{{MAIN_SUB}}` | text | 본문 |
| `{{CARD_1_TITLE}}` `{{CARD_1_BODY}}` `{{CARD_1_IMG_DESC}}` ~ `{{CARD_3_*}}` | text | 카드 1~3 |

### Layout cues
- 이미지 aspect 1:1 통일
- 3개 카드 균등 1:1:1, 사이 16px gap

---

## [F-6] image-left-label-blocks

- **File:** `skills/proposal/layouts/image-left-label-blocks.html`
- **Category:** [F] IMAGE-LAYOUT
- **Stage:** ③ ⑥ ⑨ — 좌측 이미지 + 우측 라벨 블록 다수

### Use when
- 좌측 큰 이미지 1개(3-2 또는 4-3) + 우측 라벨 블록 3~5개
- 이미지가 보여주는 영역을 우측 라벨로 설명
- "이 화면의 4가지 핵심 요소" 같은 패턴

### Don't use when
- 이미지가 전체 면적의 50%+ → `content-hero-image`
- 라벨 대신 본문 단락 → `content-image-anchored-left` (후속)
- 라벨 6개+ → 슬라이드 분할

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{MAIN_TITLE}}` | text | 본문 타이틀 |
| `{{IMG_DESC}}` | text | 이미지 설명 |
| `{{BLOCK_1_LABEL}}` `{{BLOCK_1_BODY}}` ~ `{{BLOCK_3_*}}` | text | 라벨 블록 3개 (≤ 12자 / ≤ 40자) |
| `{{BLOCK_N_*}}` | block × N | 4~5개 필요 시 복제 |

### Layout cues
- 좌:이미지(flex 1.2) / 우:블록 리스트(flex 1)
- 라벨 12px / 700 / 브랜드 오렌지, 본문 13px / 400 / dark-gray

---

## [I-1] faq-list

- **File:** `skills/proposal/layouts/faq-list.html`
- **Category:** [I] LIST
- **Stage:** ⑨ 정당화 / 부록 — Q&A

### Use when
- 자주 묻는 질문 3~5개 (Q + A 쌍)
- 발표 후 예상 질의 정리, 부록

### Don't use when
- 단일 큰 메시지 → `emphasis-hero`
- Q 가 1개 → `content-split`
- 도구·솔루션 카탈로그 → `tool-card-grid`
- 사례 3개 → `content-3-col-cards`

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{MAIN_TITLE}}` | text ≤ 30자 | "자주 묻는 질문" |
| `{{Q_1}} ~ {{Q_5}}` | text ≤ 50자 | 질문 |
| `{{A_1}} ~ {{A_5}}` | text ≤ 100자 | 답변 |
| `{{Q_N}}` `{{A_N}}` | block × N | 5개 초과 시 복제 (slot 추가) |

### Layout cues
- Q 16px / 700 / black, A 13px / 400 / dark-gray
- Q-A 쌍 사이 16px 간격, 항목 사이 1px `--light-border`

---

## [I-2] tool-card-grid

- **File:** `skills/proposal/layouts/tool-card-grid.html`
- **Category:** [I] LIST
- **Stage:** ⑨ 정당화 — 자사 솔루션·도구 카탈로그

### Use when
- 사용한 도구·솔루션·앱 6~8개 카탈로그 (로고 + 짧은 설명)
- 자사 기술 스택 보여주기

### Don't use when
- 사람 N명 → `org-chart` / `numbered-circle-list`
- 사례 3개 → `content-3-col-cards`
- 단순 격자 4개 → `content-grid`
- 도구 1~2개 → `content-2-col-cards`

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{MAIN_TITLE}}` | text | "활용 도구 스택" |
| (도구 카드 슬롯) | block × N | 템플릿 안 카드 슬롯 — 로고 placeholder + 이름 + 설명 |

> 본 템플릿은 카드 N개 슬롯이 inline 으로 박혀있다. 실제 사용 시 카드 N개 영역의 (로고경로·이름·설명) 을 직접 채운다. 6~8개 권장.

### Layout cues
- 카드 그리드 3×2 또는 4×2, gap 14px
- 카드 보더 1px `--light-border`, 직각, 그림자 없음

---

# § 4차 카탈로그 — 실행 플랜 (5개)

## [G-1] timeline

- **File:** `skills/proposal/components/timeline.html`
- **Category:** [G] EXECUTION-PLAN
- **Stage:** ⑥ 실행방안

### Use when
- 마일스톤 5개 (점·날짜·이름·본문)
- 시간축 위에 핵심 이벤트만 찍기, 워크스트림 막대는 없음
- 분기·연도·월 단위 단순 흐름

### Don't use when
- 워크스트림 N개 × 주간 막대 → `gantt-chart`
- 단계 가로 카드 4~6 → `step-cards`
- 좌제목 + 우 단계 3~5 → `numbered-steps-split`
- 세로 리스트 5~10 → `numbered-circle-list`

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` | text | 본문 라벨/타이틀/부제 |
| `{{N1_DATE}}` `{{N1_NAME}}` `{{N1_BODY}}` ~ `{{N5_*}}` | text | 마일스톤 5개 (날짜 ≤ 8자, 이름 ≤ 12자, 본문 ≤ 30자) |
| `{{N_DATE}}` `{{N_NAME}}` `{{N_BODY}}` | block × N | 5개 초과 시 슬롯 추가 |

### Layout cues
- 가로 시간축 1px `--brand-orange`, 점 8px 원
- 점 위 날짜 11px / mid-gray, 아래 이름 14px / 700 / black + 본문 12px

---

## [G-2] gantt-chart

- **File:** `skills/proposal/components/gantt-chart.html`
- **Category:** [G] EXECUTION-PLAN
- **Stage:** ⑥ 실행방안

### Use when
- 워크스트림 5개 × 주간 단위 막대 (Week 1~12 등)
- 워크스트림별 시작/종료 + 의존 관계 보여주기
- "Today" 마커로 현재 시점 표시

### Don't use when
- 마일스톤 점만 필요 → `timeline`
- 단계 카드 → `step-cards`
- 워크스트림 6개+ → 슬라이드 분할 또는 통합
- 시간축 없는 단계 흐름 → `numbered-steps-split`

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` | text | 본문 라벨/타이틀/부제 |
| `{{TASK_1}} ~ {{TASK_5}}` | text ≤ 18자 | 워크스트림 5개 이름 |
| `{{TODAY}}` | text | "Today" 마커 위치 (Week 5 등) |

### Layout cues
- 좌측 워크스트림 라벨 컬럼, 우측 주간 그리드
- 막대 `var(--brand-orange)` 단색, 직각, 4~8px 두께
- "Today" 마커 1px `--brand-deep` 세로선

---

## [G-3] step-cards

- **File:** `skills/proposal/layouts/step-cards.html`
- **Category:** [G] EXECUTION-PLAN
- **Stage:** ⑥ 실행방안

### Use when
- 단계 4개를 가로 카드로 (Step 1·2·3·4)
- 각 단계가 동등 가중치, 짧은 설명
- 카드 안에 단계 이미지/스크린샷 작게 (선택)

### Don't use when
- 단계 5개+ 세로 리스트 → `numbered-circle-list`
- 좌제목 + 우 단계 3~5 → `numbered-steps-split`
- 시간축 위 마일스톤 → `timeline`
- 단계 2~3개 → `content-2-col-cards` / `content-3-col-cards`

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{STEP_TAG}}` `{{STEP_TITLE}}` `{{STEP_DESC}}` | text | 본문 헤더 (태그·제목·부제) |
| `{{CARD_1_TITLE}}` `{{CARD_1_BODY}}` `{{CARD_1_IMG_DESC}}` ~ `{{CARD_4_*}}` | text | 단계 1~4 (각 카드) |
| `{{WARNING_TEXT}}` | text ≤ 100자 | 하단 주의/팁 박스 (선택) |
| `{{CARD_N_*}}` | block × N | 4개 초과 시 복제 (권장 X) |

### Layout cues
- 4개 카드 균등 가로, 사이 12px gap
- 카드 안 좌상단 단계 번호 12px / 700 / 브랜드 오렌지
- 카드 보더 1px `--light-border`, 직각

---

## [G-4] numbered-steps-split

- **File:** `skills/proposal/layouts/numbered-steps-split.html`
- **Category:** [G] EXECUTION-PLAN
- **Stage:** ⑥ 실행방안

### Use when
- 좌측 큰 메인 타이틀 + 우측 단계 3~5개 (번호 + 제목 + 설명)
- 좌측에 단계 전체를 설명하는 이미지 / 다이어그램 (선택)
- 한 메시지 + 그것을 풀어내는 단계 절차

### Don't use when
- 단계 가로 카드 → `step-cards`
- 단계 세로 리스트 길게 → `numbered-circle-list`
- 시간축 → `timeline` / `gantt-chart`
- 단순 좌우 분할 → `content-split`

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{MAIN_TITLE}}` | text ≤ 25자 | 좌측 메인 타이틀 |
| `{{STEP_LABEL}}` | text ≤ 20자 | 좌측 라벨 — "프로세스" |
| `{{IMG_DESC}}` | text | 좌측 이미지 placeholder (선택) |
| `{{SUB_1_TITLE}}` `{{SUB_1_BODY}}` ~ `{{SUB_3_*}}` | text | 우측 단계 3개 |
| `{{SUB_N_*}}` | block × N | 4~5개 시 복제 |

### Layout cues
- 좌:1.1 / 우:1 비율
- 우측 각 단계 — 좌측 28px / 800 / 브랜드 오렌지 번호 + 우측 제목·본문
- 단계 사이 1px `--light-border` 가로선

---

## [G-5] numbered-circle-list

- **File:** `skills/proposal/components/numbered-circle-list.html`
- **Category:** [G] EXECUTION-PLAN
- **Stage:** ⑥ 실행방안 / ⑦ 인력 (5~10명 명단)

### Use when
- 세로 리스트 5~10개 (단계, 멤버 명단, 체크리스트)
- 항목당 (원형 번호 뱃지 + 제목 + 짧은 설명)
- 한 줄에 다 안 들어가는 길이 — 세로 흐름이 자연스러움

### Don't use when
- 가로 카드 4~6 → `step-cards`
- 좌제목 + 우 3~5 → `numbered-steps-split`
- 격자 4개 → `content-grid`
- 시간축 → `timeline`

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{MAIN_TITLE}}` `{{MAIN_SUB}}` | text | 메인 타이틀 + 부제 |
| `{{ITEM_1_TITLE}}` `{{ITEM_1_DESC}}` ~ `{{ITEM_3_*}}` | text | 항목 3개 (각 ≤ 18자 / ≤ 40자) |
| `{{ITEM_N_TITLE}}` `{{ITEM_N_DESC}}` | block × N | 4~10개 필요시 복제 |

### Layout cues
- 원형 번호 뱃지 28px 원, 배경 `--brand-orange`, 흰 글자 14px / 800
- 본문 — 제목 16px / 700 / black, 설명 13px / 400 / dark-gray

---

# § 5차 카탈로그 — 사람 (1개) + 후속 검토용 (3개)

## [H-1] org-chart

- **File:** `skills/proposal/components/org-chart.html`
- **Category:** [H] PEOPLE
- **Stage:** ⑦ 인력 구성

### Use when
- 조직 계층 표현 — CEO → 부서장 N명 → 팀장·팀원 (3개 부서, 부서당 3개 팀, 팀당 인원)
- 직책·이름·부서태그가 명확한 구조
- 다인원(10명 이상) 한 슬라이드에 압축

### Don't use when
- 개념 분해(추상) → `concept-tree`
- 1명 상세 프로필 → `instructor-profile`
- 사람 5~10명 단순 명단 → `numbered-circle-list`
- 도구·솔루션 → `tool-card-grid`

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` | text | 본문 라벨/타이틀/부제 |
| `{{CEO_NAME}}` | text ≤ 12자 | 최상위 직책 + 이름 |
| `{{DIV_1_TAG}}` `{{DIV_1_NAME}}` ~ `{{DIV_3_*}}` | text | 부서 3개 (태그 ≤ 4자, 이름 ≤ 12자) |
| `{{T1_1_HEAD}}` `{{T1_1_NAME}}` ~ `{{T3_3_*}}` | text | 팀 (부서당 3팀, 팀당 head + name) |
| `{{DIV_N_*}}` `{{TEAM_N_*}}` | block × N | 부서·팀 추가 시 복제 |

### Layout cues
- 상단 CEO 박스, 그 아래 부서 3개, 각 부서 아래 팀 3개씩
- 박스 1px `--light-border`, 직각, 연결선 1px dark-gray
- CEO 박스만 `accent` 강조 (배경 `#FFF1EC`)

---

## [H-2] instructor-profile

- **File:** `skills/proposal/layouts/instructor-profile.html`
- **Category:** [H] PEOPLE
- **Stage:** ⑨ 정당화 — 1인 핵심 인력 프로필

### Use when
- 강사·발표자·핵심 인력 1명 상세 프로필
- 좌측 사진 placeholder + 우측 이름 + 이력 불릿 4~6개 + 저서/대표작 박스

### Don't use when
- 조직 계층 → `org-chart`
- 멤버 명단 5명 이상 → `numbered-circle-list`
- 1명인데 프로필 정보 거의 없음 → `content-text-only` 또는 `emphasis-hero`

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{INSTRUCTOR_NAME}}` | text ≤ 15자 | 이름 + 직함 |
| `{{BULLET_1}} ~ {{BULLET_5}}` | text ≤ 40자 | 이력 불릿 |
| `{{BULLET_N}}` | block × N | 5개 초과 시 복제 (권장 ≤ 6) |
| `{{BOOK_LABEL}}` `{{BOOK_TITLE}}` | text | 저서/대표작 박스 (선택) |

### Layout cues
- 좌:사진(flex 1) / 우:정보(flex 1.4)
- 사진 슬롯 aspect 3-2, 1px `--light-border`
- 이름 28px / 800 / black, 불릿 13px / 400 / dark-gray

---

# § 6차 카탈로그 — DATA-VIS (5개)

데이터 시각화 5종 — 차트 4 + 표 1. 모두 ③ 분석 또는 ⑧ 예산안 슬롯에 사용.
**SVG 좌표는 데이터 종속이라 토큰 치환 외에 SVG 영역 직접 편집이 필요한 경우가 많다.** 각 항목 USAGE 주석에 편집 공식 명시.

---

## [J-1] combo-bar-line

- **File:** `skills/proposal/components/combo-bar-line.html`
- **Category:** [J] DATA-VIS
- **Stage:** ③ 분석 — 시계열 추세 + 보조 지표

### Use when
- 시계열 데이터 10~12년치 (연도 또는 분기 단위)
- 막대 2계열(주·보조) + 선 1계열의 콤보 — 3가지 측면 동시 비교
- 마지막 시점에 예측(F)·전망 마커가 필요한 경우

### Don't use when
- 단일 막대 1계열 → `bar-table` (좌측 막대 영역만)
- 시점이 5점 미만 → `content-grid` 또는 KPI 카드
- 양·음수 막대(±) 필요 → `two-up-charts` 의 좌측 차트
- 도넛/원형 비율 → `donut-chart`

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{LABEL}}` | text ≤ 20자 | "10년 사용자 동향" |
| `{{TITLE}}` | text ≤ 50자 | 핵심 메시지. `<span class="a">…</span>` 강조 가능 |
| `{{LEDE}}` | text ≤ 80자 | 부제 한 문단 (`<strong>` 가능) |
| `{{Y_UNIT}}` | text | "단위 · 명" |
| `{{LEGEND_BAR_A}}` `{{LEGEND_BAR_B}}` `{{LEGEND_LINE}}` | text ≤ 10자 | 범례 3개 |
| `{{FORECAST_LABEL}}` | text ≤ 18자 | 예측 마커 — "'26 이후 6,399" |
| `{{SOURCE_NOTE}}` | text | "[ 자료 : 자체 분석 ... ]" |

### Layout cues
- SVG viewBox 880×280, 12개 시점 슬롯 (x 60~764, 간격 64)
- 막대 A = 브랜드 오렌지(#FF7E5F), 막대 B = 그레이(#C8C8C8), 라인 = 검정 2px
- 예측 마커: 점선 vertical line + 브랜드 오렌지 라벨
- 데이터 변경 시 rect y/height, polyline points, X 라벨 직접 편집

---

## [J-2] two-up-charts

- **File:** `skills/proposal/components/two-up-charts.html`
- **Category:** [J] DATA-VIS
- **Stage:** ③ 분석 — 두 측면 비교

### Use when
- 좌·우 두 차트로 다른 측면을 한 화면에 대비 (예: 변동률 + 추이)
- 좌측에 양·음수 막대(±값), 우측에 장기 라인이 자연스러운 메시지
- 하단에 한 줄 인사이트로 결론 못박기

### Don't use when
- 단일 차트로 충분 → `combo-bar-line` / `bar-table`
- 두 차트 모두 시계열 콤보 → `combo-bar-line` (한 차트에 통합)
- 차트 + 표 분할 → `bar-table`
- 4사분면 매트릭스 → `matrix-2x2`

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` | text | 본문 |
| `{{LEFT_CHART_TITLE}}` `{{LEFT_CHART_SUB}}` | text ≤ 30자 / ≤ 40자 | 좌 차트 제목·부제 |
| `{{RIGHT_CHART_TITLE}}` `{{RIGHT_CHART_SUB}}` | text | 우 차트 제목·부제 |
| `{{INSIGHT_BOX_HTML}}` | html | 하단 인사이트 — `<strong>` 사용 가능 |

### Layout cues
- 좌 SVG 400×240 (9개 막대, 0% 라인 y=120), 우 SVG 400×220 (14점 라인 + 평균선)
- 강조 막대(양수 4개) = 브랜드 오렌지, 일반 = 그레이
- 우측 라인 마지막 값에 horizontal 강조선 + 평균 점선 + 라벨
- 데이터 변경 시 rect/polyline/circle 좌표 직접 편집

---

## [J-3] bar-table

- **File:** `skills/proposal/components/bar-table.html`
- **Category:** [J] DATA-VIS
- **Stage:** ③ 분석 / ⑧ 예산안 — 분포 비교 + 정확한 숫자

### Use when
- 분포·구간 6개 카테고리를 막대로 보여주고, 정확한 숫자는 우측 표로 보강
- 강조 카테고리 1~2개를 막대 + 표 양쪽에서 시각적으로 강조

### Don't use when
- 시계열 (날짜 축) → `combo-bar-line`
- 좌·우 다른 차트 → `two-up-charts`
- 표 단독 + 합계 강조 → `budget-table`
- 막대 카테고리가 13개 이상 → 슬라이드 분할

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` | text | 본문 |
| `{{Y_UNIT}}` | text | "단위 · 건" |
| `{{TABLE_HEADERS_HTML}}` | html | `<th>가격 구간</th><th class="num">건수</th>` × 4 컬럼 |
| `{{TABLE_ROWS_HTML}}` | html | `<tr>(.hi 강조)…</tr>` N 행 |
| `{{SOURCE_NOTE}}` | text | 출처 |

### Layout cues
- 좌 SVG 420×280, 6개 막대 슬롯
- 강조 막대 = 브랜드 오렌지, 일반 = 그레이
- 우측 표 — 상단 2px / 하단 2px 브랜드 오렌지, 좌우 보더 없음
- 강조 행은 `<tr class="hi">`, 강조 X 라벨은 `fill="#FF7E5F" font-weight="800"`

---

## [J-4] donut-chart

- **File:** `skills/proposal/components/donut-chart.html`
- **Category:** [J] DATA-VIS
- **Stage:** ③ 분석 — 비율·점유율

### Use when
- 4개 세그먼트의 비율 시각화 (채널 점유, 매출 구성 등)
- 중앙에 큰 합계 숫자가 메시지의 핵심
- 우측 범례 표 + 하단 시사점 박스로 구조화

### Don't use when
- 시간 흐름 → `combo-bar-line` / `two-up-charts`
- 카테고리 5개+ (도넛은 4개가 sweet spot) → `bar-table`
- 단순 비교 2~3개 → `content-2-col-cards` / `content-3-col-cards`
- 사분면 매트릭스 → `matrix-2x2`

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{LABEL}}` `{{TITLE}}` `{{LEDE}}` | text | 본문 |
| `{{CENTER_LABEL_TOP}}` | text ≤ 12자 | 도넛 중앙 상단 — "총 신규 가입자" |
| `{{CENTER_VALUE}}` | text ≤ 8자 | 중앙 큰 숫자 — "12,840" |
| `{{CENTER_LABEL_BOT}}` | text ≤ 12자 | 중앙 하단 — "'25년 누적" |
| `{{TABLE_ROWS_HTML}}` | html | 범례 표 본문 — 색 swatch + 채널명 + 유입 + 비중 4행 |
| `{{SOURCE_NOTE}}` | text | 출처 |
| `{{INSIGHT_BOX_HTML}}` | html | 하단 시사점 박스 |

### Layout cues
- 도넛 r=92, 원주 ≈ 578.05 = 2π × 92
- 4 세그먼트 색상(밝→어두): #FF7E5F / #3E4A5E / #A0A8B3 / #D6D6D2
- **데이터 변경 공식**: 각 세그먼트 dasharray = (비중% × 578.05) / 100, dashoffset = 누적 호 길이의 음수
  - 예: 52.4% / 22.1% / 15.8% / 9.7% → 302.9 / 127.7 / 91.3 / 56.1, offset 0 / -302.9 / -430.6 / -521.9

---

## [J-5] budget-table

- **File:** `skills/proposal/layouts/budget-table.html`
- **Category:** [J] DATA-VIS
- **Stage:** ⑧ 예산안 (한국 제안서 표준)

### Use when
- 분기·연간 예산 표 — 매체·채널·예산·KPI 등 4~8 컬럼
- 강조 행 1~2개 + 합계(총합) 행 명시
- 운영안 카드 2개(A안 보수 / B안 확장)로 옵션 비교

### Don't use when
- 차트 + 작은 표 보조 → `bar-table`
- 4×4 균등 격자 → `content-grid`
- 도넛 비율 → `donut-chart`
- 프로세스 단계 → `step-cards` / `numbered-steps-split`
- 비교 2개만 → `content-2-col-cards`

### Tokens
| 토큰 | 타입 | 예시 |
|---|---|---|
| `{{SECTION_TITLE}}` `{{PAGE_NUMBER}}` | text | 헤더 |
| `{{LABEL}}` | text ≤ 20자 | "매체 × 채널 × 비용 × KPI" |
| `{{TITLE_HTML}}` | text ≤ 50자 | "분기 운영 예산 <span class='a'>3.18억</span>" |
| `{{TABLE_HEADERS_HTML}}` | html | `<th>매체</th>...<th class="num">ROAS</th>` × 4~8 |
| `{{TABLE_ROWS_HTML}}` | html | `<tr>(.hi 강조)…</tr>` N행 |
| `{{TABLE_TOTAL_HTML}}` | html | `<tr class="total"><td colspan="N">합계</td>...</tr>` |
| `{{SOURCE_NOTE}}` | text | 출처 |
| `{{PLAN_A_TITLE}}` `{{PLAN_A_BODY_HTML}}` | text / html | A안 — "A안 · 보수" + 본문 |
| `{{PLAN_B_TITLE}}` `{{PLAN_B_BODY_HTML}}` | text / html | B안 — "B안 · 확장" + 본문 |
| `{{FOOTER_LABEL}}` | text | 좌측 푸터 |

### Layout cues
- 표 상하단 2px 브랜드 오렌지 보더, 좌우 보더 없음 (절대 규칙)
- 강조 행 `.hi` = 배경 #FFF1EC + 숫자 브랜드 오렌지
- 합계 행 `.total` = 배경 #EAEAE8 + 검정 800 굵기
- 운영안 카드 1px 회색 보더, 직각, 그림자 없음
- **원본 데이터 1:1 보존, 축약·반올림 금지** (절대 규칙 #10)

---

# § X. 헷갈리기 쉬운 페어 — MECE 강제 규칙

같은 메시지를 두 템플릿으로 표현 가능할 때, 다음 분리 규칙을 적용한다.

| 헷갈리는 페어 | 분리 기준 |
|---|---|
| `cover` vs `divider` | 덱 첫 장? → cover / 챕터 사이? → divider |
| `divider` vs `emphasis-hero` | 섹션 번호 + 제목? → divider / 한 줄 결론? → emphasis-hero |
| `matrix-2x2` vs `bubble-chart` | 사분면 라벨 명시? → matrix-2x2 / 위치만? → bubble-chart |
| `matrix-2x2` vs `content-grid` | 사분면에 의미? → matrix / 균등 4개 나열? → content-grid |
| `matrix-2x2` vs `content-2-col-cards` | 두 축 + 사분면? → matrix / 항목 2개 단순 비교? → 2-col-cards |
| `concept-tree` vs `org-chart` | 개념 분해(추상)? → concept-tree / 사람·조직(구체)? → org-chart |
| `concept-tree` vs `numbered-steps-split` | 위계(parent-child)? → concept-tree / 시간 순서(1→2→3)? → numbered-steps |
| `content-2-col-cards` vs `content-2-image-row` | 카드 핵심이 텍스트? → 2-col-cards / 이미지? → 2-image-row |
| `content-3-col-cards` vs `content-3-image-strip` | 카드 핵심이 텍스트? → 3-col-cards / 이미지 1:1 정사각? → 3-image-strip |
| `content-text-only` vs `content-grid` | 1 hero + 3 sub 리듬? → text-only / 균등 4개? → grid |
| `content-split` vs `content-text-only` | 좌 큰 제목 + 우 한 단락? → split / 텍스트 블록 4~5개? → text-only |
| `content-hero-image` vs `image-left-label-blocks` | 이미지가 면적 50%+? → hero-image / 이미지 + 우측 라벨 블록? → image-left-label |
| `timeline` vs `gantt-chart` | 마일스톤 점만? → timeline / 워크스트림 N개 × 주간 막대? → gantt-chart |
| `timeline` vs `numbered-steps-split` | 시간축(날짜 명시)? → timeline / 단계 절차(번호만)? → numbered-steps |
| `step-cards` vs `numbered-circle-list` | 가로 4개 카드? → step-cards / 세로 리스트 5~10? → numbered-circle |
| `step-cards` vs `numbered-steps-split` | 단계 모두 동등 가중치 가로? → step-cards / 좌 메인 + 우 단계? → numbered-steps |
| `numbered-circle-list` vs `org-chart` | 단순 명단(평면)? → numbered-circle / 계층 구조? → org-chart |
| `instructor-profile` vs `org-chart` | 사람 1명 상세? → instructor / 다인원 계층? → org-chart |
| `instructor-profile` vs `tool-card-grid` | 사람 1명? → instructor / 사물 N개? → tool-card |
| `faq-list` vs `emphasis-hero` | Q&A 3~5쌍? → faq-list / 한 줄 결론? → emphasis-hero |
| `tool-card-grid` vs `content-grid` | 도구·솔루션 6~8개(로고)? → tool-card / 일반 4항목? → content-grid |
| `combo-bar-line` vs `two-up-charts` | 한 차트에 막대2 + 선1 콤보? → combo-bar-line / 좌·우 다른 차트? → two-up-charts |
| `combo-bar-line` vs `bar-table` | 시계열(연도 축)? → combo-bar-line / 카테고리(구간) 분포? → bar-table |
| `bar-table` vs `budget-table` | 좌:차트 + 우:표(보조)? → bar-table / 표 단독 + 합계 강조 + 운영안 카드? → budget-table |
| `donut-chart` vs `bar-table` | 비율(전체 100%)? → donut-chart / 카테고리 빈도·금액? → bar-table |
| `budget-table` vs `content-grid` | 예산·KPI 표 + 합계? → budget-table / 4항목 균등 격자? → content-grid |
| `[J] DATA-VIS` vs `matrix-2x2` | 정량 데이터 시각화? → [J] / 두 축 사분면 분류? → matrix-2x2 |

---

# § Y. 스테이지별 후보표

한국식 스토리 아크의 각 슬롯마다 어느 템플릿이 후보인지 정리. 결정 시 위쪽 §[A]~[I] 항목의 Use/Don't use 절을 같이 본다.

| 스토리 아크 | 후보 템플릿 |
|---|---|
| ① 표지 | `cover` |
| ② 목차 | `toc` |
| ③ 분석 1~5장 | `matrix-2x2` · `bubble-chart` · `concept-tree` · `content-grid` · `content-2-col-cards` · `content-3-col-cards` · `content-text-only` · `content-split` · `content-hero-image` · `content-2-image-row` · `content-3-image-strip` · `image-left-label-blocks` · **`combo-bar-line`** · **`two-up-charts`** · **`bar-table`** · **`donut-chart`** · `as-is-to-be` |
| ④ 핵심 메시지 | `emphasis-hero` |
| ⑤ 핵심 인사이트 | `emphasis-hero` (재사용) · `content-grid` (4 인사이트 균등) · `content-3-col-cards` (3 인사이트) |
| ⑥ 세부 실행방안 | `timeline` · `gantt-chart` · `step-cards` · `numbered-steps-split` · `numbered-circle-list` · **`as-is-to-be`** (Before/After 변환) |
| ⑦ 인력 구성 | `org-chart` (계층) · `numbered-circle-list` (5~10명 명단) · `instructor-profile` (1명 강조) |
| ⑧ 예산안 | **`budget-table`** (한국 제안서 표준) · `bar-table` (차트 + 표) · `content-grid` (4 옵션) |
| ⑨ 정당화 | `content-grid` (4 사례) · `content-3-col-cards` (3 사례) · `content-3-image-strip` (3 스크린샷) · `tool-card-grid` (도구 6~8) · `instructor-profile` · `faq-list` · **`combo-bar-line`/`two-up-charts`** (실적 차트) |
| ⑩ 마무리 | `divider` (Closing) · `emphasis-hero` (한 줄 결론) · `faq-list` (Q&A 부록) |

---

# § Z. 카테고리별 카운트 (현 상태)

| Cat | 이름 | 템플릿 수 | 항목 |
|---|---|---|---|
| [A] | STRUCTURAL | 2 | cover · divider |
| [B] | NAVIGATION | 1 | toc |
| [C] | EMPHASIS | 1 | emphasis-hero |
| [D] | ANALYSIS | 3 | matrix-2x2 · bubble-chart · concept-tree |
| [E] | CONTENT-LAYOUT | 5 | content-grid · content-text-only · content-split · content-2-col-cards · content-3-col-cards |
| [F] | IMAGE-LAYOUT | 4 | content-hero-image · content-2-image-row · content-3-image-strip · image-left-label-blocks |
| [G] | EXECUTION-PLAN | 5 | timeline · gantt-chart · step-cards · numbered-steps-split · numbered-circle-list |
| [H] | PEOPLE | 2 | org-chart · instructor-profile |
| [I] | LIST | 2 | faq-list · tool-card-grid |
| [J] | DATA-VIS | 5 | combo-bar-line · two-up-charts · bar-table · donut-chart · budget-table |
| [E+] | CONTENT-LAYOUT (확장) | +1 | as-is-to-be (Before/After) |
| | **합계** | **31** | (기존 25 + pages/ 추출 6) |

---

# § AA. pages/ 추출 — 후속 작업 메모

`pages/index.html` (10장) 과 `pages/charts.html` (7장) 에는 위 25개와 중복되지 않는 추가 슬라이드 스타일이 들어있다 — 별도 워크플로(Task #9) 에서 추출 후 `layouts/` 또는 `components/` 에 단일 슬라이드 템플릿으로 분리하고, 본 카탈로그에 동일 형식(File / Use when / Don't use when / Tokens / Layout cues) 으로 등록한다.

추출 후보 (예상):

- `combo-bar-line` (charts.html 01) — 막대 + 선 콤보 차트
- `two-up-charts` (charts.html 02) — 좌:바 / 우:라인 듀얼 차트
- `bar-table` (charts.html 03) — 좌:바차트 / 우:표
- `donut-chart` (charts.html 04) — 도넛 + 범례 표
- `product-screenshot` (charts.html 05) — 좌:큰 스크린샷 / 우:번호 컨셉 리스트
- `icon-grid` (charts.html 06) — 아이콘 4~6 그리드
- `news-clipping` (charts.html 07) — 뉴스 헤로 + 보조 2개
- `insight-pg` (index.html 03) — 진단 슬라이드 (이슈 카드 다수)
- `qslide` (index.html 05) — Q. 질문 강조 슬라이드 (emphasis 변형)
- `as-is-to-be` (index.html 06) — 좌:현재 / 우:미래 (전환 화살표)
- `three-box` (index.html 07) — 동등 3박스 (현황·문제·해결)
- `budget-table` (index.html 09) — 예산 표 + 합계 강조
- `closing` (index.html 10) — 덱 마지막 마무리 슬라이드

각 추출분이 추가되면 § Z 카운트 표와 § Y 후보표를 함께 갱신한다.
