# Stage: ① 표지 / ⑩ 마무리

> 대상 슬롯: ① 표지 (덱 첫 장) · ⑩ 마무리 (Closing / Q&A) · 챕터 사이 구분
> 후보 3종: `cover` · `divider` · `emphasis-hero`

---

## 빠른 결정

| 슬롯 | 1순위 | 2순위 |
|---|---|---|
| ① 첫 장 (회사명 + 핵심 카피) | `cover` | — |
| ⑩ 마지막 ("감사합니다" / Q&A) | `divider` (Closing 변형) | `emphasis-hero` (한 줄 결론) |
| 챕터 전환 ("Part 02 시작") | `divider` | — |
| 한 줄 결론 강조 (분석 압축) | `emphasis-hero` | — |

> 절대 규칙: cover/divider 는 헤더 chrome (가로 라인) 없음. emphasis-hero 도 헤더 없음 (본문 자체가 메시지).

---

## [A-1] cover

- **File:** `skills/proposal/layouts/cover.html`
- **Category:** [A] STRUCTURAL
- **Stage:** ① 표지 (덱의 첫 장)

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
- 절대 규칙 준수: 그라디언트·그림자 없음, border-radius 0

---

## [A-2] divider

- **File:** `skills/proposal/layouts/divider.html`
- **Category:** [A] STRUCTURAL
- **Stage:** ⑩ 마무리 / 챕터 사이 구분

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

## [C-1] emphasis-hero

- **File:** `skills/proposal/layouts/emphasis-hero.html`
- **Category:** [C] EMPHASIS
- **Stage:** ④ 핵심 메시지 / ⑤ 핵심 인사이트 / ⑩ Q&A 마무리

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
| `{{EYEBROW}}` | text ≤ 20자 | "결론" / "PART 03" — 14px / 600 / 브랜드 블루, 대문자 변환됨. 빈 문자열 가능. |
| `{{HERO_LINE_1}}` | text ≤ **14자** | 1행 — 검정 텍스트. (58px/800, 14자 안전치) |
| `{{HERO_LINE_2}}` | text ≤ **14자** | 2행 — 브랜드 블루 강조. |
| `{{SUBTITLE}}` | text ≤ 80자 | 부제목 한 문단. 16px / dark-gray, max-width 640px |
| `{{FOOTER_LABEL}}` | text | 좌하단 — "Section 04 — Conclusion" |
| `{{PAGE_NUMBER}}` | "01"~"99" | "10" |

### Layout cues
- 헤더 chrome 없음. 본문 자체가 메시지.
- accent bar 48×4px 브랜드 블루 (eyebrow 아래)
- hero h1 58px / 800 / 검정. 두 줄 중 강조 줄만 `--brand-blue`
- 푸터: top border 1px `--light-border`, 좌측 dark-gray 라벨 + 우측 브랜드 블루 페이지 번호

---

## 헷갈리는 페어 (이 stage 한정)

| 페어 | 분리 기준 |
|---|---|
| `cover` vs `divider` | 덱 첫 장? → cover / 챕터 사이? → divider |
| `divider` vs `emphasis-hero` | 섹션 번호 + 제목? → divider / 한 줄 결론? → emphasis-hero |
| `cover` vs `emphasis-hero` | 회사명 + 문서종류 + 연락처? → cover / 분석 압축 결론? → emphasis-hero |
