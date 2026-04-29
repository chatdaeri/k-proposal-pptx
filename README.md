# k-proposal-pptx

> **[CHATdaeri](https://github.com/chatdaeri)가 만든 Claude Code 플러그인입니다.**
> [seulee26/mckinsey-pptx](https://github.com/seulee26/mckinsey-pptx)에서 영감을 받아,
> 한국 비즈니스 현장에 맞게 처음부터 새로 설계했습니다.
>
> 맥킨지 리포트가 **글로벌 컨설팅 언어**(딥네이비·영문 중심·전략 분석 위주)라면,
> 이 플러그인은 **한국식 제안서 문법**으로 만들어졌습니다.
> 예산안·팀 소개·AS-IS/TO-BE·분기 실행계획처럼 국내 B2B 영업·기획 현장에서
> 실제로 쓰는 슬라이드 구성을 기본값으로 탑재했고,
> 브랜드 컬러(오렌지)·Pretendard 한국어 폰트·한국식 스토리 아크(표지→분석→예산→마무리)를
> 처음부터 내장합니다.
>
> "DX 도입 제안서 12장으로 만들어줘"라고 입력하면 31개의 전문 템플릿 중에서
> 적절한 걸 골라 표지·분석·예산안·실행계획·마무리까지 완성된 `.pptx` 파일이
> 폴더에 생깁니다. 파워포인트를 열어서 드래그할 필요도, 디자인 감각도 필요 없습니다.

![Author](https://img.shields.io/badge/author-CHATdaeri-FF7E5F)
![License](https://img.shields.io/badge/license-MIT-blue)
![Templates](https://img.shields.io/badge/templates-31-brightgreen)
![Platform](https://img.shields.io/badge/platform-Claude%20Code-6b4bff)

---

## 이게 뭔가요? (1분 요약)

- **무엇을 하는 도구:** 글로만 지시해도 한국 비즈니스 스타일 제안서 PPT를 자동으로 만들어주는 도구예요.
- **누가 쓰면 좋은가:** 기획자·영업담당·마케터·컨설턴트·스타트업 대표 — **제안서 PPT를 매번 처음부터 만들기 지겨운 누구나.**
- **어떻게 쓰는가:** Claude Code(채팅 AI 도구) 안에서 **한국어로 말하듯** 요청하면 됩니다. 개발 지식이 필요 없어요.
- **결과물:** 진짜 `.pptx` 파일. 파워포인트로 열어서 편집하고, 메일로 보내고, 발표까지 바로 가능합니다.

**예시 한 줄:**
> "DX 솔루션 도입 제안서 12장으로 만들어줘. 현재 AS-IS 분석, 예산안, 담당 팀 소개 포함."

↓ 30초~1분 후 ↓

→ `output/dx-proposal.pptx` 파일이 생성됩니다. 표지 + 분석 + AS-IS/TO-BE + 실행 로드맵 +
  예산안 + 팀 소개 + 마무리까지 한국식 스토리 아크로 완성된 슬라이드가 들어가요.

---

## 처음 설치하는 분을 위한 준비 (5분)

이 도구는 **Claude Code**라는 프로그램 안에서 동작합니다. Claude Code는
"명령줄에서 쓰는 AI 비서"라고 생각하시면 돼요.

### 1단계. Claude Code 설치

아직 없다면 [Claude Code 공식 다운로드](https://claude.com/claude-code)에서 설치하세요.
Mac / Windows / Linux 전부 지원합니다.

### 2단계. 플러그인 다운로드

터미널에서 아래 명령을 실행하세요:

```bash
git clone https://github.com/chatdaeri/k-proposal-pptx \
  ~/.claude/plugins/marketplaces/chatdaeri
```

### 3단계. 의존성 설치

```bash
cd ~/.claude/plugins/marketplaces/chatdaeri && npm install
```

이 명령 하나로 PPT 생성에 필요한 Playwright Chromium 등이 자동으로 설치됩니다.
2~3분 정도 걸릴 수 있어요.

### 4단계. 시스템 도구 설치 (선택)

PPT를 이미지로 미리보기하고 싶다면 추가로 설치하세요:

```bash
# macOS
brew install --cask libreoffice
brew install poppler

# Ubuntu / Debian
sudo apt install libreoffice poppler-utils
```

> 💡 미리보기 도구가 없어도 `.pptx` 파일은 정상 생성됩니다.
> 파워포인트나 Keynote로 직접 열면 돼요.

### 5단계. 설치 확인

```bash
node scripts/doctor.cjs
```

문제가 없으면 각 항목이 ✓ 로 표시됩니다.

### 6단계. ⚠️ Claude Code를 완전히 껐다 켜세요 (중요!)

**플러그인은 설치 후 Claude Code를 재시작해야 실제로 로드됩니다.**

1. 채팅창에 `/exit` 입력 (또는 터미널 창을 완전히 닫기)
2. Claude Code를 다시 실행
3. 채팅창에 `/k-proposal`을 입력했을 때 자동완성이 뜨면 성공입니다

재시작을 안 하면 "제안서 만들어줘"라고 말해도 전용 에이전트가 반응하지 않아요.
**꼭 재시작하세요.**

---

## 쓰는 법 — 채팅창에 말만 걸면 끝

### 가장 흔한 사용 패턴 (이거부터 따라해보세요)

**① 작업할 폴더를 하나 만들고 원본 파일을 넣는다**

```
my-proposal/
└── inputs/
    ├── 시장조사.xlsx
    ├── 기획안.docx
    └── 로고.png
```

**② Claude Code를 "그 폴더에서" 연다**

```bash
cd ~/Desktop/my-proposal
claude
```

> 핵심은 **Claude가 그 폴더 안에 있어야** 원본 파일을 읽을 수 있어요.

**③ 채팅창에 한 줄 말한다**

```
inputs/ 폴더 자료로 DX 도입 제안서 12장 만들어줘. 예산안과 팀 소개 포함.
```

**④ 30초~1분 기다리면 완성**

`output/` 폴더에 `.pptx` 파일이 만들어집니다. 열어서 확인 후 바로 발표에 쓰면 됩니다.

---

### 슬래시 명령어

채팅창에 직접 입력:

```
/k-proposal "Q4 사업 리뷰 12장으로 만들어줘"
```

### 자연어로도 됩니다

이런 말을 알아듣습니다:

- "맥킨지 스타일 한국 제안서 만들어줘"
- "DX 도입 제안서 9장, 예산안 포함"
- "한국식 PPT 덱 짜줘, 분기 리뷰용"
- "실행 로드맵을 간트 차트로 보여줘"
- "AS-IS/TO-BE 비교 슬라이드 하나 넣어줘"
- "팀 소개는 조직도로, 예산은 표로 정리해줘"

### 파일 종류별 활용법

#### 엑셀·CSV (매출, KPI, 예산 숫자)

어느 시트의 어느 숫자를 쓸지 알려주면 됩니다:

```
inputs/매출데이터.xlsx의 '월별매출' 시트로 분기 리뷰 덱 만들어줘.
KPI 대시보드 한 장과 예산안 표도 넣어줘.
```

#### 워드 문서 (기획안, 보고서 초안)

Claude가 문장을 읽어서 슬라이드용 짧은 키워드로 자동 축약해줍니다:

```
inputs/기획안.docx 읽고 경영진용 10슬라이드 전략 보고서로 만들어줘.
결론은 투자 승인 요청으로.
```

> ⚠️ 구버전 `.doc` 파일은 워드에서 먼저 `.docx`로 저장해주세요.

#### PDF (회의록, 외부 리서치)

```
inputs/시장조사.pdf 요약해서 임원용 현황 분석 슬라이드로 만들어줘.
```

### 마음에 안 들면? 바로 수정 가능

첫 결과는 초안이에요. 채팅을 이어가면서 바로 다듬을 수 있습니다:

```
슬라이드 4를 다른 레이아웃으로 바꿔줘. 숫자 비교가 더 잘 보이게.
```

```
예산안 표에 1분기 컬럼 추가해줘.
```

```
전체 톤을 더 단정하게. 이모지랑 느낌표 다 빼줘.
```

---

## 어떤 슬라이드를 만들어주나요? (31개 템플릿)

Claude가 알아서 고르긴 하지만, 원하면 직접 지정할 수도 있습니다.

### 구조·탐색 슬라이드

| 템플릿 | 용도 |
|---|---|
| `cover` | 덱 첫 장 — 회사명 + 문서 종류 + 핵심 카피 3행 + 연락처 |
| `toc` | 목차 — 섹션 3~7개, 각 섹션 번호 + 제목 + 부제 |
| `divider` | 챕터 구분 간지 / 덱 마지막 ("감사합니다" · "Q&A") |

### 강조·결론 슬라이드

| 템플릿 | 용도 |
|---|---|
| `emphasis-hero` | 분석을 한 줄로 압축한 핵심 메시지, 정중앙 대형 타이포, 풀스크린 |
| `as-is-to-be` | 현재(AS-IS) → 제안(TO-BE) 전후 비교, 변환 방향 화살표 |

### 분석 프레임워크

| 템플릿 | 용도 |
|---|---|
| `matrix-2x2` | 2×2 사분면 — 시급성×중요도, BCG, Effort×Impact |
| `bubble-chart` | 산점도 5~8항목 — 점 크기로 3차원 동시 표현 |
| `concept-tree` | 위계 분해 — 이슈 트리, 전략 구조화, 가로(L→R) 트리 |

### 본문 레이아웃

| 템플릿 | 용도 |
|---|---|
| `content-grid` | 4항목 2×2 격자 (기능 4, 핵심 가치 4 등 동등 가중치) |
| `content-text-only` | 1 hero + 3 sub 텍스트 블록, 정성 분석·서술형 |
| `content-split` | 좌 큰 제목 + 우 한 단락 본문, 메시지 집중 |
| `content-2-col-cards` | 2 카드 비교 — Plan A/B, Before/After |
| `content-3-col-cards` | 3 카드 병렬 — Tier 1·2·3, 솔루션 3가지 |

### 이미지 레이아웃

| 템플릿 | 용도 |
|---|---|
| `content-hero-image` | 이미지 1개 50%+ — 제품 스크린샷, 다이어그램 |
| `content-2-image-row` | 이미지 2개 1:1 — Before/After, 사례 2종 |
| `content-3-image-strip` | 이미지 3개 병렬 — 사례 3종, 도구 3종 |
| `image-left-label-blocks` | 좌 큰 이미지 + 우 라벨 블록 3~5 ("이 화면의 4가지 핵심 요소") |

### 실행 계획

| 템플릿 | 용도 |
|---|---|
| `timeline` | 마일스톤 5점 (날짜·이름·본문), 분기/연도 단순 흐름 |
| `gantt-chart` | 워크스트림 5 × 주간 막대 (Week 1~12), "Today" 마커 |
| `step-cards` | 단계 4 가로 카드 (Step 1·2·3·4), 동등 가중치 |
| `numbered-steps-split` | 좌 큰 메인 타이틀 + 우 단계 3~5, 번호+제목+설명 |
| `numbered-circle-list` | 세로 리스트 5~10 — 단계, 멤버 명단, 체크리스트 |

### 인력·팀

| 템플릿 | 용도 |
|---|---|
| `org-chart` | 조직 계층 — CEO → 부서 3 → 팀원, 다인원 압축 |
| `instructor-profile` | 강사·핵심 인력 1명 상세 — 사진 + 이름 + 이력 + 저서 |

### 목록·카탈로그

| 템플릿 | 용도 |
|---|---|
| `faq-list` | Q&A 3~5쌍 — 발표 후 예상 질의 정리 |
| `tool-card-grid` | 도구·솔루션 6~8개 카탈로그 — 로고 + 짧은 설명 |

### 데이터 시각화

| 템플릿 | 용도 |
|---|---|
| `combo-bar-line` | 시계열 12점 — 막대 2계열 + 선 1계열, 예측 마커 |
| `two-up-charts` | 좌·우 다른 차트 2개 대비 분석, 하단 인사이트 박스 |
| `bar-table` | 카테고리 막대 6개 + 우측 정확한 숫자 표 |
| `donut-chart` | 4 세그먼트 비율 — 채널 점유, 매출 구성, 중앙 합계 |
| `budget-table` | 분기·연간 예산 표 + 합계 행 + 운영안 2가지 (보수/확장) |

> 전체 토큰 명세 및 슬라이드 선택 결정 트리는 [`skills/proposal/CATALOG.md`](skills/proposal/CATALOG.md)에 있습니다.
> 평소엔 Claude에게 "예산 표로" "조직도로" 같이 **목적만** 말해도 알아서 골라요.

---

## 한국식 스토리 아크

이 플러그인은 아래 10개 슬롯으로 12~18장짜리 제안서를 자동 구성합니다.
원하면 개별 슬라이드만 지정해도 됩니다.

| 슬롯 | 역할 | 주로 쓰는 템플릿 |
|---|---|---|
| ① 표지 | 회사·문서 종류·카피 | `cover` |
| ② 목차 | 전체 구성 안내 | `toc` |
| ③ 분석 1~5장 | 현황·문제·근거 데이터 | 차트·매트릭스·본문 레이아웃 |
| ④ 핵심 메시지 | 분석 한 줄 결론 | `emphasis-hero` |
| ⑤ 핵심 인사이트 | 데이터가 말하는 것 | `emphasis-hero` · `content-grid` |
| ⑥ 실행 방안 | 로드맵·단계·간트 | `timeline` · `gantt-chart` · `step-cards` |
| ⑦ 인력 구성 | 팀 소개·조직도 | `org-chart` · `instructor-profile` |
| ⑧ 예산안 | 비용·분기·운영안 | `budget-table` |
| ⑨ 정당화 | 사례·도구·팀 신뢰도 | 이미지·카드·차트 |
| ⑩ 마무리 | 감사·Q&A·결론 CTA | `divider` · `emphasis-hero` · `faq-list` |

---

## 자주 묻는 질문

**Q. 코딩을 전혀 모르는데 쓸 수 있나요?**
A. 네, 전혀 필요 없어요. Claude Code만 설치하면 전부 한국어 대화로 끝납니다.

**Q. 회사 기밀 데이터인데 안전한가요?**
A. 파일은 여러분 컴퓨터 안에서만 처리됩니다. 엑셀·워드를 클라우드에
   업로드하지 않아요. (단, Claude와의 대화 내용은 AI 응답을 받기 위해
   Anthropic 서버에 전달됩니다. 회사 보안 정책에 따라 판단해주세요.)

**Q. 슬라이드 개수를 지정할 수 있나요?**
A. 네. "12장으로", "9슬라이드로" 같이 말씀하시면 됩니다. 지정 안 하면
   내용에 맞춰 보통 12~15장으로 만들어줍니다.

**Q. 레이아웃이 마음에 안 들어요.**
A. "이 슬라이드 다른 레이아웃으로 바꿔줘"라고만 말하면 31개 템플릿 중
   다른 걸 골라 다시 그려줍니다. "숫자 비교가 더 잘 보이게" 같이 힌트를
   주면 더 빠르게 좋은 결과가 나와요.

**Q. 완성된 PPT를 편집할 수 있나요?**
A. 네, 일반 파워포인트 파일이에요. 파워포인트/Keynote로 열어서
   마음대로 수정·발표하세요.

**Q. 예시 파일은 어디서 볼 수 있나요?**
A. `examples/` 폴더에 3종의 샘플 덱이 있습니다.

| 예시 | 장수 | 설명 |
|---|---|---|
| `examples/01-real-estate-proposal/` | 9장 | 가상 오피스텔 분양성 검토 |
| `examples/02-dx-proposal/` | 9장 | B2B DX 솔루션 도입 제안 |
| `examples/03-conference-branding/` | 8장 | 브랜드 컨퍼런스 기획 제안 |

직접 빌드해서 확인하려면:

```bash
node skills/proposal/scripts/build.cjs examples/02-dx-proposal/deck.cjs --no-lint
```

---

## 플러그인 구성

설치하면 이런 폴더 구조가 들어옵니다. 비개발자라면 "이런 게 들어있구나" 정도로만
알고 계셔도 충분해요. 모두 **필수 구성요소**이니 지우지 마세요.

```
k-proposal-pptx/
├── .claude-plugin/         ← 플러그인 명함 (Claude Code가 읽는 정보)
├── agents/                 ← AI 에이전트 "두뇌" (k-proposal-agent.md)
├── commands/               ← /k-proposal 슬래시 커맨드 정의
├── skills/proposal/        ← 실제 PPT를 그리는 엔진 (31개 템플릿)
│   ├── layouts/            ← 슬라이드 HTML 템플릿
│   ├── components/         ← 차트·매트릭스 컴포넌트
│   ├── fonts/              ← Pretendard Variable (한국어 최적화)
│   └── tokens/             ← 색상·타이포 디자인 토큰
├── examples/               ← 참고용 샘플 덱 3종
└── scripts/                ← 설치·검증 스크립트 (postinstall, doctor)
```

**핵심 세 가지:**

- **`agents/` 폴더** — `k-proposal-agent`라는 AI 에이전트의 지식·역할·일하는 방식이 정의된 곳. 없으면 "제안서 만들어줘"라고 말해도 전용 에이전트가 깨어나지 않아요.
- **`commands/` 폴더** — `/k-proposal` 슬래시 커맨드가 정의된 곳. 채팅창에 `/`를 누르면 뜨는 자동완성의 소스예요.
- **`skills/proposal/` 폴더** — 실제 `.pptx` 파일을 그리는 그래픽 엔진. 31가지 슬라이드 템플릿의 디자인·색상·레이아웃 코드가 여기에 있어요.

---

## 기여·문의

- 버그 리포트·템플릿 제안: [GitHub 이슈](https://github.com/chatdaeri/k-proposal-pptx/issues) 환영합니다
- Pull Request 환영
- 문의: https://github.com/chatdaeri

---

## 라이선스

[MIT](./LICENSE) © 2026 Synergy Labs — 챗대리 (CHATdaeri)

오픈소스 플러그인에는 MIT 라이선스가 적용됩니다.

Heavily influenced by [mckinsey-pptx by axlabs](https://github.com/chatdaeri/mckinsey-pptx).
