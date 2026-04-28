# 예시 덱 상세 가이드

## 01. 부동산 분양성 검토 (`examples/01-real-estate-proposal/`)

**시나리오**: 가상 S시 K동 123번지 신축 오피스텔 분양 타당성 검토 (9장)

**포함 기법**:
- 경쟁 단지 분양가 bar chart (`data-pptx-image`)
- AS-IS/TO-BE 수익성 비교
- budget-table 사업비 구조

**커스터마이징 포인트**:
```js
// deck.cjs 상단 토큰만 교체
HERO_LINE_1: 'S시 K동 123번지',  // → 실제 주소
CONTACT_DETAIL: 'GreenDev Co.',   // → 실제 발주처
// 분양가, 세대수, 수익성 숫자도 교체
```

---

## 02. DX 솔루션 도입 제안 (`examples/02-dx-proposal/`)

**시나리오**: 가상 G회사 디지털 전환 솔루션 도입 제안 (9장)

**포함 기법**:
- 시장 성장 추이 line chart + 표
- SWOT 2×2 매트릭스 (free html)
- KPI AS-IS/TO-BE bar chart + 표
- SLA 운영 체계 budget-table

**커스터마이징 포인트**:
```js
CONTACT_DETAIL: 'G회사 디지털혁신본부',  // → 실제 고객사
// 시장 수치, KPI 목표값 교체
```

---

## 03. 브랜드 컨퍼런스 기획 제안 (`examples/03-conference-branding/`)

**시나리오**: 가상 "G러닝 GCON" 브랜드 경험 전략 제안 (8장)

**포함 기법**:
- 글로벌 컨퍼런스 참가자 수 bar chart + 표
- emphasis-hero 브랜드 한 문장
- 5 프로그램 grid (free html, hero 카드 포함)
- KPI 기대 효과 bar chart

**커스터마이징 포인트**:
```js
// G러닝 → 실제 플랫폼명
// GCON → 실제 이벤트명
```

---

## deck.cjs 문법 레퍼런스

### 템플릿 슬라이드

```js
{
  template: 'content-grid',
  tokens: {
    SECTION_TITLE: 'Part 1. 제목',
    PAGE_NUMBER: '03',
    GRID_EYEBROW: '소제목',
    GRID_TITLE: '주 제목 <span class="a">강조</span>',
    GRID_LEDE: '리드 문장',
    ITEM_1_TITLE: '카드 1 제목',
    ITEM_1_DESC: '카드 1 설명',
    // ITEM_2 ~ ITEM_4 도 동일 패턴
  },
}
```

### 자유 HTML 슬라이드

```js
{
  html: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="../primitives/_shared.css">
  <!-- var(--brand-orange) 등 CSS 변수 사용 가능 -->
</head>
<body>
  <div class="slide-header">
    <div class="slide-header-inner"><p>섹션명</p><p>페이지번호</p></div>
    <div class="header-line"></div>
  </div>
  <!-- 본문 -->
  <div class="logo-area">
    <img src="../../skills/proposal/assets/chatdaeri-logo.png" alt="CHATdaeri" style="height:18px;width:auto;display:block">
  </div>
</body>
</html>`,
}
```

### SVG 차트 → PPTX 이미지 변환

```html
<!-- data-pptx-image 속성을 추가하면 Playwright 가 스크린샷 → PPTX 이미지로 삽입 -->
<div data-pptx-image="true">
  <svg viewBox="0 0 460 290">...</svg>
</div>
```
