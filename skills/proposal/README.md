# CHATdaeri Design System

> **B2B SaaS 워크플로우 자동화 플랫폼** — 제품 UI, 마케팅 사이트, 세일즈 제안서, 고객 자료를 위한 디자인 시스템

---

## 브랜드 개요

**CHATdaeri** 는 팀의 반복 업무를 자동화하는 B2B SaaS 워크플로우 플랫폼입니다. 엔터프라이즈 세일즈를 위한 제안서, 제품 마케팅 페이지, 고객 온보딩 자료, 사내 교육까지 같은 비주얼 시스템으로 운용해야 하기 때문에, 디자인 시스템은 **엔터프라이즈 SaaS 의 정제된 미감 + 한국 시장의 비즈니스 덱 규범**을 동시에 만족시키는 방향으로 짜여 있습니다.

핵심 감각:
- **플랫 미니멀** — box-shadow, linear-gradient, border-radius(5px+), 애니메이션 전면 금지
- **화이트 스페이스 중심** — 95% 화이트, 5% 포인트 블루
- **단일 포인트 컬러** — 브랜드 오렌지 `#FF7E5F` + 딥 오렌지 `#E5573A` 조합으로 정제된 시선 유도
- **회색 외곽선 기반 구조** — 모든 카드/박스/표는 `#E0E0E0` 1px 테두리로 영역 구분
- **직각** — 모든 모서리 `border-radius: 0`

## 소스

- **GitHub:** `proposal/brand-system` (private) — 브랜드 가이드라인 PPT/HTML 자동 생성 스킬. 이 레포의 `references/` 폴더(`brand-guidelines.md`, `WEB-GUIDELINE.md`, `layout-principles.md`, `image-placement-rules.md`)가 디자인 시스템의 원본 소스입니다.
- **관련 레포 (같은 조직):** `proposal/proposal-skill`, `proposal/pptx-skill`, `proposal/onboarding-materials`
- **로고:** **`assets/logo.png`** 단일 원본(SSoT). 제안서 슬라이드·`pages/` 샘플 모두 이 파일을 `<img src="../assets/logo.png" …>` 로 참조한다.

---

## Content Fundamentals

### Voice & Tone

CHATdaeri 의 콘텐츠는 **한국어 전용** (UI 레이블·기술 용어만 영문)이며, 다음 세 가지 레지스터를 상황에 따라 섞어 씁니다.

1. **제품 / 마케팅 톤** — 단정한 해요체. 기능을 풀어서 설명하되 과장 없는 정중체. 제품 사이트·고객 온보딩에 사용.
   - 예: "엑셀을 던지면 한국식 분양 제안서 PPT 가 자동으로 만들어집니다."
   - 예: "본인이 평소 쓰던 엑셀에 몇 가지 약속만 지켜서 작성하면 됩니다."

2. **세일즈 / 제안서 톤** — 명사형, 압축적. 한국식 비즈니스 덱 관례 따름. "~함", "~됨" 보다는 "~합니다" 정중체 유지.
   - 예: "광주 주요 지역 시세 상승세"
   - 예: "Q2 도입 효과: 평균 처리 시간 −38%"

3. **시스템 / 체크리스트 톤** — 기술 문서·내부 가이드에서 사용. 규칙을 `✅ / ❌` 로 대비시키는 포맷을 선호. 이모지는 헤더의 **구조 표시용** 으로만 (🎨 🧭 📇 🚫 ⛔).
   - 예: "❌ `sectionLabel` 에 `/` 없이 적기 → 네이비 박스 사라짐"

### 카피 규칙

- **I / You 는 거의 안 씀.** 주어 생략이 기본. 필요할 때 "사용자", "팀", "AI" 처럼 3인칭으로.
- **축약 금지** — 원본 데이터를 1:1 보존하는 것을 미덕으로 삼음. "엑셀 1행 그대로 복붙", "원본 1:1 보존" 이 반복 등장.
- **케이싱** — 브랜드명은 첫 글자 대문자만. 로고에서도 **CHATdaeri** (B 만 대문자). 한글 표기 없음 — 영문 유지.
- **이모지 사용** — 본문 UI 에서는 쓰지 않음. 내부 문서 헤더 불릿용으로 제한적 사용(🎨 🧭 📇 ⛔ 🚫). 프로덕션 슬라이드/웹에서는 아이콘 대신 사용하지 않음.
- **유니코드 장식** — `━━━`, `│`, `┌─┐`, `✓`, `●` 는 마크다운/스킬 문서에서만. 슬라이드에서는 실제 HTML/CSS 로 구현.
- **숫자·날짜** — 한국식. `2026.04`, `Part 1`, `01.` 2자리 zero-pad.

### 카피 예시 (실제 사용 문구)

| 상황 | 실제 문구 |
|---|---|
| 회사 설명 | "B2B SaaS 워크플로우 자동화 플랫폼" |
| 표지 부제 | "Marketing Proposal", "Quarterly Review" |
| 체크포인트 강조 | "도입 5분 — 첫 자동화 완성" |
| 규칙 금지 | "❌ 엑셀 데이터 임의 가공·축약·재구성 — 원본 1:1 보존" |
| 기술 설명 | "시트 한 장이 슬라이드 한 장이 됩니다" |
| 과정 안내 | "한 번에 완벽하게 맞기보다는 1~2번 추가 조정이 들어가는 게 보통입니다" |

---

## Visual Foundations

### 컬러

브랜드 가이드는 **의도적으로 제한적**입니다. 8개 토큰이 전부.

| 토큰 | HEX | 용도 |
|---|---|---|
| `--brand-orange` | `#FF7E5F` | 본문 포인트 — 구분선, 칩, 인라인 강조, KPI 숫자
| `--brand-deep` | `#E5573A` | 디스플레이 — Cover hero, 섹션 디바이더, 큰 타이틀
| `--brand-tint-solid` | `#FFF1EC` | 오렌지 틴트 — 칩 배경, 하이라이트 행, 부드러운 채움 |
| `--white` | `#FFFFFF` | 주 배경 (95%) |
| `--light-bg` | `#F8F8F8` | 보조 배경 (태그, 라벨 셀) |
| `--light-border` | `#E0E0E0` | 모든 외곽선, 구분선, 내부선 |
| `--black` | `#000000` | 대제목, 카드 메인 텍스트 |
| `--dark-gray` | `#333333` | 헤더 텍스트, 서브타이틀, 본문 |
| `--mid-gray` | `#676765` | 서브 텍스트, 불릿, 캡션 |
| `--label-gray` | `#4A4A48` | 테이블 좌측 라벨, 프로필 본문 |

**금지 컬러**: 그라디언트, 채도 낮은 회청색, 보라 또는 파랑 변주(`#3B82F6`, `#0EA5E9`, `#6366F1` 등), 웜 그레이(`#78716C`). 블루 계열은 위 3개 토큰만 사용.

**색상 비율**: 화이트 ~92% : 블루(딥+비비드+소프트) ~8%. 한 슬라이드에 3가지 이상 컬러 금지.

### 타이포그래피

- **폰트 패밀리**: 논리명 **`Proposal Deck Body`**(`tokens/colors_and_type.css` 의 `--font-face-family`·`--font-family`) — 바이너리는 `fonts/*.ttf`(파일명 자유, `npm run sync-font` 로 `font-face.generated.css` 갱신). Inter 금지, 토큰에 정의된 시스템 폰트 fallback만 허용.
- **웹 사이즈 체계** (1440px 기준):
  - Cover hero: 64px / ExtraBold 800 / 딥 오렌지
  - Section divider: 48px / ExtraBold 800 / 딥 오렌지
  - 페이지 대제목: 32px / Bold 700 / 블랙
  - 카드 제목: 22px / Bold 700 / 블랙
  - 박스 타이틀: 18px / Bold 700 / 비비드 블루
  - 본문: 13~14px / Regular 400 / `--label-gray` or `--mid-gray`
  - 캡션: 11~12px / Medium 500 / `--dark-gray`
- **PPTX 슬라이드 사이즈 체계** (960×540 HTML→PPTX):
  - 메인 타이틀 28px · 블록 h3 14~15px · 본문 **최소 13px** · 캡션 **최소 12px**
  - 이유: 프로젝터/원거리 뷰어 가독성 (청중 피드백 표준)
- **PPT Print 사이즈** (실제 프리젠테이션): 제목 54~60pt · 부제목 36~44pt · 본문 24~28pt

### 배경 · 이미지

- **배경**: 거의 항상 순백 `#FFFFFF`. 예외로 `--light-bg` (`#F8F8F8`) 가 라벨 셀/태그 배경으로만.
- **이미지 스타일**: `object-fit: cover`, `border: 1px solid #E0E0E0`, `border-radius: 0`. 풀-블리드 이미지 **절대 금지**, 웜톤/세피아/그레인 같은 컬러 그레이딩 금지.
- **이미지 aspect ratio** 는 슬라이드 유형에 따라 `16-9`, `3-2`, `4-3`, `1-1`, `2-3` 중 하나로 고정. 한 슬라이드에서 비율 혼합 금지.
- **일러스트레이션**: 브랜드에 사용자 정의 일러스트 없음. 제품 스크린샷 + 다이어그램만 사용.

### 애니메이션 · 인터랙션

- **애니메이션 전면 금지** — keyframes, transition, hover 효과 없음. 정적인 프린트 덱 미감.
- **호버 상태** — 웹 컴포넌트에서도 색상 변화 없음. CTA 버튼은 정적 단색.
- **프레스 상태** — 정의 없음 (프레젠테이션·제안서 중심이라 부차적).

### 테두리 · 그림자

- **box-shadow 전면 금지.**
- **border-radius**: 0. 태그 · 배지 · 버튼 · 카드 전부 직각.
- **보더 시스템**:
  - 기본 외곽선: `1px solid #E0E0E0`
  - 카드 상단 액센트: `3px solid #FF7E5F`
  - 테이블 상단: `3px solid #FF7E5F`
  - 테이블 하단: `2px solid #FF7E5F`
  - 테이블 좌우: **없음** (가로선만)

### 헤더 · 로고

**한국식 고정 헤더** — cover/divider 제외 모든 슬라이드에 적용:

```
[섹션명 (좌)]                    [페이지번호 (우)]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ← 2px 비비드 블루 구분선
```

- 섹션명 / 페이지번호: 13px Medium `#333`
- 구분선: 2px solid `#FF7E5F`
- 로고: 우측 하단 (`bottom: 20px; right: 60px`), 이미지 `../assets/logo.png` (표지 상·하단 및 공통 푸터에서 height 약 12~18px 권장)
- 페이지번호는 `01, 02, ...` 2자리 zero-pad

### 레이아웃

- **기본 슬라이드 사이즈**: 960×540 (HTML), 720pt×405pt (PPTX), 16:9
- **좌우 패딩**: **60px 고정**
- **헤더 상단**: 32px
- **헤더 구분선 → 콘텐츠**: 22~30px
- **블록 간격**: 14~18px
- **하단 여백**: 최소 30px
- **그리드 갭**: 대 40px / 소 32px
- **박스 패딩**: 20px 24px / 카드 패딩 32px

### 시선 흐름

Planner가 슬라이드마다 `reading_flow` 명시. 3가지 패턴만 사용:

1. **Z-패턴** (content 기본) — 좌상 → 우상 → 좌하 → 우하
2. **F-패턴** (리스트형) — 세로 스캔, TOC / FAQ / 체크리스트
3. **Center-focal** (집중형) — Cover, Divider, Emphasis

### 블록 리듬 (AI 균일 방지)

모든 카드가 같은 크기로 나열되면 AI 냄새가 남. 2~4개 블록 중 **1개는 hero, 나머지는 sub**:
- hero: `flex: 1.4`, h3 19px Bold 비비드 블루, body 14px `--dark-gray`
- sub: `flex: 1`, h3 17px SemiBold `--mid-gray`, body 13px `--mid-gray`

### 투명도 · 블러

사용하지 않음.

### 카드 모양

```
━━━━━━━━━━━━━━━━━  ← 3px solid #FF7E5F (상단)
┌─────────────────┐
│  01 (비비드 블루)│  ← 넘버
│  제목 (블랙)     │  ← 22px Bold
│  [이미지]        │  ← 1px #E0E0E0
│  설명 (그레이)   │  ← 14px #676765
└─────────────────┘  ← 1px solid #E0E0E0 (좌·우·하)
```

- 배경: 항상 흰색
- 코너: 직각
- 그림자: **없음**
- 패딩: 32px

---

## Iconography

**공식 브랜드 아이콘 시스템은 없음.** CHATdaeri 브랜드 레포에 아이콘 폰트/스프라이트가 존재하지 않음. 웹 컴포넌트에서 연락처 아이콘은 **인라인 SVG** 를 `stroke="#FF7E5F"` 1.5~2px 로 최소한만 사용.

**실무 가이드**:
- 아이콘이 꼭 필요한 경우 **Lucide** (CDN: `https://unpkg.com/lucide@latest`) 를 권장. stroke-based, 이 디자인 시스템의 1.5~2px 선형 미감과 일치.
- `stroke="currentColor"` 로 두고 CSS `color: var(--brand-orange)` 또는 `color: var(--mid-gray)` 로 제어.
- **이모지는 프로덕션 UI 에 쓰지 않음.** 내부 마크다운 문서 헤더에만 제한적 (🎨 🧭 📇 ⛔ 🚫).
- **유니코드 기호**: `→` (28px 비비드 블루, 프로세스 슬라이드 화살표), `●` (불릿, 5~8px), `━` (구분선) — 이 세 개만 반복적으로 등장.
- **커스텀 SVG 일러스트 금지** — 브랜드 스타일에 없음. 제품 스크린샷 · 다이어그램 캡처 사용.

**플래그**: Lucide 는 이 디자인 시스템에 공식 포함된 것이 아니라 "가장 가까운 매칭" 으로 제안하는 것입니다. 실제 프로젝트에서 아이콘이 필요해지면 사용자 확인이 필요합니다.

---

## 폰트 파일

**본문 바이너리** 는 `fonts/` 에 두는 **임의 이름의 `.ttf` 한 개를 권장**한다. 여러 개 두면 `body.ttf` 가 있으면 그것을 쓰고, 없으면 이름순 첫 파일(경고). 바꾼 뒤 **`npm run sync-font`** 또는 `node skills/proposal/scripts/sync-font-face.cjs` 로 `tokens/font-face.generated.css` 를 갱신한다. 실제 글꼴 패밀리명이 `Proposal Deck Body` 가 아니면 `@font-face` 의 `font-family`, `:root` 의 `--font-face-family`, SVG 등 논리명을 **같은 문자열**로 맞춘다.

`colors_and_type.css` 상단에서 `@font-face` 로 로드되므로, 템플릿·`_shared.css` 체인에서는 추가 `@font-face` 를 두지 않는다.

---

## Index — 디자인 시스템 구조

이 디자인 시스템은 **6계층** 으로 짜여 있고, 위계는 **아래 → 위로만 의존** 합니다. 즉 토큰은 컴포넌트를 모르고, 컴포넌트는 페이지를 모릅니다 (Single Source of Truth).

```
[1] Tokens          tokens/colors_and_type.css         ← 색·타이포 변수 (SSoT)
       ↓
[2] Primitives      primitives/_shared.css             ← 헤더·로고·이미지슬롯·리듬
       ↓
[3] Components      components/<component>.html        ← 단위 컴포넌트 (간트/매트릭스/타임라인 등) — 7종
       ↓
[4] Layouts         layouts/<layout>.html              ← 슬라이드 1장 단위 완성본 (cover, divider, content-*) — 17종
       ↓
[5] Pages           pages/index.html                   ← 실제 제안서 (실전 사용 예제)
                    pages/charts.html                  ← 차트 7종 컴포넌트 갤러리
       ↓
[6] Documentation   preview/, README.md, SKILL.md     ← 미니카드 갤러리 + 가이드
```

### 폴더 역할

| 폴더 / 파일 | 계층 | 역할 |
|---|---|---|
| `tokens/colors_and_type.css` | [1] Tokens | **단일 진실 원천**. 모든 색·타이포 변수가 여기에서만 정의됨. |
| `fonts/*.ttf` + `tokens/font-face.generated.css` | [1] | 본문 폰트(SSoT). `.ttf` 추가·교체 후 `sync-font` 실행 |
| `assets/logo.png` | [1] | **브랜드 로고 SSoT** — 슬라이드·샘플 페이지에서 `../assets/logo.png` 로만 참조 |
| `primitives/_shared.css` | [2] Primitives | 헤더·로고·이미지 슬롯·리듬 클래스. `components/`·`layouts/` 가 모두 import |
| `components/*.html` | [3] Components | **단위 데이터-시각화 컴포넌트** (gantt, matrix, timeline, org, tree, bubble, numbered list — 7종) |
| `layouts/*.html` | [4] Layouts | **슬라이드 1장 단위 완성본** (cover, divider, toc, content-* — 17종). 새 슬라이드 만들 때 여기서 복사 |
| `pages/index.html` | [5] Page | 마케팅 제안서 **샘플 덱** (실전 사용 사례) |
| `pages/charts.html` | [5] Page | **차트 7종 컴포넌트 레퍼런스** (카탈로그) |
| `preview/*.html` | [6] Docs | 디자인시스템 탭에 표시되는 **미니카드** (700px). 각 카드 상단 `<!-- TEMPLATE-MAP: ... -->` 주석으로 components/·layouts/ 와 매핑 |
| `README.md` / `SKILL.md` | [6] Docs | 가이드라인 (사람용) / 스킬 정의 (Claude Code용) |

### 핵심 룰

- **새 색상 도입 금지** — `tokens/colors_and_type.css` 의 8개 토큰만 사용
- **컴포넌트 내부에 hex hard-code 금지** — `var(--brand-orange)` 형식 사용
- **의존 방향은 단방향** — `tokens → primitives → components/layouts → pages`. 역참조 금지
- **`pages/` 가 `components/`·`layouts/` 의 패턴을 그대로 import** — 인라인 CSS로 다시 그리지 않음
- **`preview/` 는 카탈로그**. 실제 슬라이드 만들 땐 항상 `components/` 또는 `layouts/` 에서 복사

> **로고 SSoT** — `skills/proposal/assets/logo.png` 만 유지하고, 템플릿·예시·`pages/` 전부 슬라이드 기준 `../assets/logo.png` 로 참조한다.

### components/ 목록 (7종)

```
gantt-chart · matrix-2x2 · timeline · org-chart · bubble-chart · concept-tree · numbered-circle-list
```

### layouts/ 목록 (17종)

```
표지·섹션:           cover · divider · toc · emphasis-hero
콘텐츠 (이미지 개수): content-text-only · content-2-col-cards · content-3-col-cards
                     content-2-image-row · content-3-image-strip · content-grid
                     content-hero-image · content-split
프로세스·리스트:     numbered-steps-split · step-cards · tool-card-grid · image-left-label-blocks
기타:                faq-list · instructor-profile
```

---

## 렌더링 가이드 — 무엇을 언제 쓰는가

| 목적 | 쓸 것 |
|---|---|
| 세일즈 / 마케팅 제안서 (16:9 슬라이드) | `layouts/` HTML 템플릿 + `primitives/_shared.css`, 또는 `pages/index.html` 스타일 |
| 제품 마케팅 페이지 · 랜딩 (`scroll-snap` 풀스크린) | `ui_kits/web-proposal/` 참고, `WEB-GUIDELINE.md` 시스템 |
| 차트 슬라이드 (KPI, 시계열, 비율) | `pages/charts.html` 7가지 패턴 |
| 데이터 자동화 (엑셀 → PPT) | `proposal/pptx-skill` (별도 프로젝트) |
