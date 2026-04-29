module.exports = {
  slug: 'dx-proposal-demo',
  title: 'DX 솔루션 도입 제안서',
  author: 'CHATdaeri',
  slides: [
    // ① 표지
    {
      template: 'cover',
      tokens: {
        SUBTITLE: 'DIGITAL TRANSFORMATION PROPOSAL · 2026.04',
        HERO_LINE_1: '디지털 전환',
        HERO_LINE_2: '솔루션 도입',
        HERO_LINE_3: '사업 제안서',
        CONTACT_LABEL: '제출처',
        CONTACT_DETAIL: 'G회사 디지털혁신본부',
      },
    },

    // ② 목차
    {
      template: 'toc',
      tokens: {
        SECTION_TITLE: 'Table of contents',
        PAGE_NUMBER: '02',
        HERO_LABEL: '목차',
      },
      blocks: {
        toc_item: [
          { ITEM_NUMBER: '01', ITEM_TITLE: '사업 배경 및 시장 현황', ITEM_DESC: '시장 성장 추이 · 주요 지표 변화' },
          { ITEM_NUMBER: '02', ITEM_TITLE: '전략적 목표 및 핵심 가치', ITEM_DESC: 'SWOT 분석 + 4 분면 대응 전략' },
          { ITEM_NUMBER: '03', ITEM_TITLE: '세부 실행 방안 및 일정',   ITEM_DESC: '16주 4 단계 마일스톤 로드맵' },
          { ITEM_NUMBER: '04', ITEM_TITLE: '기대 효과 및 성과 관리',   ITEM_DESC: '도입 전후 KPI 비교 + 정량 목표' },
          { ITEM_NUMBER: '05', ITEM_TITLE: '운영 및 유지보수 계획',    ITEM_DESC: 'SLA 등급별 처리 기준' },
        ],
      },
    },

    // ③ 시장 성장 추이 — line chart + 표 (free html)
    {
      html: `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=960, height=540">
<title>시장 성장 추이</title>
<link rel="stylesheet" href="../primitives/_shared.css">
<style>
  body { width: 960px; height: 540px; position: relative; }
  .body-area { position: absolute; top: 96px; left: 60px; right: 60px; bottom: 50px; }
  .section { font-size: 12px; font-weight: 600; color: var(--brand-blue); letter-spacing: 0.06em; margin: 0 0 4px; }
  .ph1 { font-size: 24px; font-weight: 800; color: var(--black); line-height: 1.25; margin: 0 0 6px; letter-spacing: -0.01em; }
  .ph1 .a { color: var(--brand-blue); }
  .lede { font-size: 14px; font-weight: 500; color: var(--label-gray); line-height: 1.45; margin: 0; }
  .axis-cap { font-size: 10.5px; color: var(--mid-gray); font-family: ui-monospace, Menlo, monospace; margin: 0 0 8px 0; }
  .source { font-size: 10.5px; color: var(--mid-gray); font-family: ui-monospace, Menlo, monospace; margin: 0; }

  .chart-box { width: 100%; height: 268px; }
  .chart-box svg { width: 100%; height: 100%; display: block; }

  .t { display: flex; flex-direction: column; border-top: 2px solid var(--brand-blue); border-bottom: 2px solid var(--brand-blue); font-size: 11.5px; }
  .tr { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1.6fr; border-bottom: 1px solid var(--light-border); }
  .tr:last-child { border-bottom: none; }
  .thead .tr { background: var(--light-bg); }
  .th, .td { padding: 7px 10px; }
  .th p { margin: 0; font-size: 11px; font-weight: 700; color: var(--dark-gray); letter-spacing: 0.02em; }
  .td p { margin: 0; color: var(--label-gray); font-size: 11px; line-height: 1.4; }
  .num { text-align: right; }
  .num p { font-family: ui-monospace, Menlo, monospace; color: var(--black); font-weight: 600; }
  .tr.hi { background: #FFF1EC; }
  .tr.hi .num p { color: var(--brand-blue); font-weight: 700; }
</style>
</head>
<body>
  <div class="slide-header">
    <div class="slide-header-inner"><p>Part 1. 사업 배경 및 시장 현황</p><p>03</p></div>
    <div class="header-line"></div>
  </div>
  <div class="body-area">
    <p class="section">시장 환경 분석</p>
    <h1 class="ph1">시장 규모 <span class="a">연평균 +30% 고성장</span> — '26년 3,500억 원 전망</h1>
    <p class="lede">디지털 전환(DX) 가속화에 따라 관련 산업군은 5개년 연평균 30%+ 의 고성장을 기록. 신규 수요 유입 및 시장 파편화 동시 진행 중.</p>

    <div style="display:grid;grid-template-columns:1.1fr 1fr;gap:18px;align-items:start;margin-top:14px">
      <div>
        <p class="axis-cap">시장 규모 추이 · 단위 억원</p>
        <div class="chart-box" data-pptx-image="true">
          <svg viewBox="0 0 460 290" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            <!-- Y axis labels: 400 / 300 / 200 / 100 / 0 -->
            <g font-family="ui-monospace, Menlo, monospace" font-size="10" fill="#7A7A78" text-anchor="end">
              <text x="50" y="18">400</text>
              <text x="50" y="76">300</text>
              <text x="50" y="134">200</text>
              <text x="50" y="192">100</text>
              <text x="50" y="250">0</text>
            </g>
            <!-- Gridlines -->
            <g stroke="#F0F0F0" stroke-width="1">
              <line x1="55" y1="14" x2="450" y2="14"/>
              <line x1="55" y1="72" x2="450" y2="72"/>
              <line x1="55" y1="130" x2="450" y2="130"/>
              <line x1="55" y1="188" x2="450" y2="188"/>
            </g>
            <!-- Baseline -->
            <line x1="55" y1="246" x2="450" y2="246" stroke="#000" stroke-width="1"/>
            <!-- Data points: x = 90, 175, 260, 345, 430 -->
            <!-- 120 → y=246-(120/400)*232 = 246-69.6 = 176.4 -->
            <!-- 155 → y=246-(155/400)*232 = 246-89.9 = 156.1 -->
            <!-- 210 → y=246-(210/400)*232 = 246-121.8 = 124.2 -->
            <!-- 280 → y=246-(280/400)*232 = 246-162.4 = 83.6 -->
            <!-- 350 → y=246-(350/400)*232 = 246-203.0 = 43.0 -->
            <!-- Filled area under line -->
            <path d="M 90 176.4 L 175 156.1 L 260 124.2 L 345 83.6 L 430 43 L 430 246 L 90 246 Z" fill="#FF7E5F" fill-opacity="0.10"/>
            <!-- Line -->
            <polyline points="90,176.4 175,156.1 260,124.2 345,83.6 430,43" fill="none" stroke="#FF7E5F" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
            <!-- Markers -->
            <g fill="#FFFFFF" stroke="#FF7E5F" stroke-width="2.4">
              <circle cx="90" cy="176.4" r="4.5"/>
              <circle cx="175" cy="156.1" r="4.5"/>
              <circle cx="260" cy="124.2" r="4.5"/>
              <circle cx="345" cy="83.6" r="4.5"/>
              <circle cx="430" cy="43" r="5.5" fill="#FF7E5F"/>
            </g>
            <!-- Value labels above markers -->
            <g font-family="ui-monospace, Menlo, monospace" font-size="11" font-weight="700" text-anchor="middle">
              <text x="90" y="167" fill="#000">120</text>
              <text x="175" y="147" fill="#000">155</text>
              <text x="260" y="115" fill="#000">210</text>
              <text x="345" y="74" fill="#000">280</text>
              <text x="430" y="32" fill="#FF7E5F">350</text>
            </g>
            <!-- X labels -->
            <g font-size="11" text-anchor="middle" fill="#676765">
              <text x="90" y="266">2022</text>
              <text x="175" y="266">2023</text>
              <text x="260" y="266">2024(E)</text>
              <text x="345" y="266">2025(E)</text>
              <text x="430" y="266" fill="#FF7E5F" font-weight="800">2026(E)</text>
            </g>
          </svg>
        </div>
      </div>

      <div>
        <div class="t">
          <div class="thead"><div class="tr"><div class="th"><p>구분</p></div><div class="th num"><p>2023 실적</p></div><div class="th num"><p>2024 예상</p></div><div class="th"><p>비고</p></div></div></div>
          <div class="tbody">
            <div class="tr hi"><div class="td"><p>시장 규모</p></div><div class="td num"><p>1,550억</p></div><div class="td num"><p>2,100억</p></div><div class="td"><p>전년비 +35%</p></div></div>
            <div class="tr"><div class="td"><p>서비스 보급률</p></div><div class="td num"><p>42.5%</p></div><div class="td num"><p>58.0%</p></div><div class="td"><p>신규 수요 급증</p></div></div>
            <div class="tr"><div class="td"><p>경쟁사 점유율</p></div><div class="td num"><p>12.4%</p></div><div class="td num"><p>11.8%</p></div><div class="td"><p>시장 파편화</p></div></div>
          </div>
        </div>
        <p class="source" style="text-align:right;margin-top:8px">[ 자료 : 자체 추정 · 업계 리포트 종합 ]</p>
      </div>
    </div>
  </div>
  <div class="logo-area">
    <img src="../assets/logo.png" alt="CHATdaeri" style="height:18px;width:auto;display:block">
  </div>
</body>
</html>`,
    },

    // ④ SWOT 2x2 매트릭스 (free html)
    {
      html: `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=960, height=540">
<title>SWOT 분석</title>
<link rel="stylesheet" href="../primitives/_shared.css">
<style>
  body { width: 960px; height: 540px; position: relative; }
  .body-area { position: absolute; top: 96px; left: 60px; right: 60px; bottom: 50px; }
  .section { font-size: 12px; font-weight: 600; color: var(--brand-blue); letter-spacing: 0.06em; margin: 0 0 4px; }
  .ph1 { font-size: 24px; font-weight: 800; color: var(--black); line-height: 1.25; margin: 0 0 6px; letter-spacing: -0.01em; }
  .ph1 .a { color: var(--brand-blue); }
  .lede { font-size: 14px; font-weight: 500; color: var(--label-gray); line-height: 1.45; margin: 0; }

  .matrix { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 18px; }
  .cell { padding: 18px 20px; border: 1px solid var(--light-border); min-height: 168px; display: flex; flex-direction: column; gap: 10px; }
  .cell.s { background: #F8F8F8; border-top: 3px solid var(--brand-blue); }
  .cell.w { background: #FFFFFF; border-top: 3px solid #C8C8C8; }
  .cell.o { background: #FFF1EC; border-top: 3px solid var(--brand-blue); }
  .cell.t { background: #FFFFFF; border-top: 3px solid #4A4A48; }
  .cell h3 { margin: 0; font-size: 11px; font-weight: 800; letter-spacing: 0.08em; font-family: ui-monospace, Menlo, monospace; color: var(--brand-blue); }
  .cell.w h3 { color: #B7B7B5; }
  .cell.t h3 { color: #4A4A48; }
  .cell h4 { margin: 0; font-size: 15px; font-weight: 800; color: var(--black); letter-spacing: -0.01em; }
  .cell ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px; }
  .cell li { font-size: 12px; color: var(--label-gray); line-height: 1.45; padding-left: 14px; position: relative; }
  .cell li:before { content: "▸"; position: absolute; left: 0; color: var(--brand-blue); font-size: 10px; top: 2px; }
  .cell.w li:before, .cell.t li:before { content: "·"; color: #B7B7B5; left: 4px; font-weight: 800; font-size: 14px; top: 0; }
</style>
</head>
<body>
  <div class="slide-header">
    <div class="slide-header-inner"><p>Part 2. 전략적 목표 및 핵심 가치</p><p>04</p></div>
    <div class="header-line"></div>
  </div>
  <div class="body-area">
    <p class="section">SWOT 분석 및 대응 전략</p>
    <h1 class="ph1">기존 인프라 강점 + 정부 정책 기회로 <span class="a">신규 시장 선점</span></h1>
    <p class="lede">내부 강점·약점 vs 외부 기회·위협을 4 분면으로 정렬. 강점·기회 조합을 1차 공략, 약점은 시스템 현대화로 보완.</p>

    <div class="matrix">
      <div class="cell s">
        <h3>S · 강점 STRENGTH</h3>
        <h4>업계 최고의 브랜드 인지도</h4>
        <ul>
          <li>20년+ 누적 브랜드 자산</li>
          <li>탄탄한 기존 고객 인프라 — 이탈률 5% 미만</li>
          <li>현장 운영 노하우 축적</li>
        </ul>
      </div>
      <div class="cell w">
        <h3>W · 약점 WEAKNESS</h3>
        <h4>시스템 노후화 · 데이터 분절</h4>
        <ul>
          <li>레거시 시스템 노후화로 처리 속도 저하</li>
          <li>부서 간 데이터 분절 — 통합 분석 불가</li>
          <li>모바일·외부 채널 대응 미흡</li>
        </ul>
      </div>
      <div class="cell o">
        <h3>O · 기회 OPPORTUNITY</h3>
        <h4>정부 디지털 혁신 지원 + 신규시장</h4>
        <ul>
          <li>정부 DX 지원 정책 — 보조금 최대 30%</li>
          <li>신규 시장 확장성 풍부 — 인접 영역 4 개</li>
          <li>고객사 자체 DX 수요 가속화</li>
        </ul>
      </div>
      <div class="cell t">
        <h3>T · 위협 THREAT</h3>
        <h4>저가 신규 진입 · 보안 규제</h4>
        <ul>
          <li>신규 진입 업체의 저가 공세</li>
          <li>글로벌 개인정보·보안 규정 강화</li>
          <li>핵심 인력 이탈 리스크 상승</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="logo-area">
    <img src="../assets/logo.png" alt="CHATdaeri" style="height:18px;width:auto;display:block">
  </div>
</body>
</html>`,
    },

    // ⑤ 추진 일정 4단계 — content-grid (4 카드)
    {
      template: 'content-grid',
      tokens: {
        SECTION_TITLE: 'Part 3. 세부 실행 방안 및 일정',
        PAGE_NUMBER: '05',
        GRID_EYEBROW: '단계별 추진 로드맵',
        GRID_TITLE: '착수일 + <span class="a">16주 4 단계</span> 체계적 품질 관리 공정',
        GRID_LEDE: '진단 → 설계 → 개발 → 안정화. 단계마다 명확한 결과물(Deliverable) + 게이트 리뷰로 품질을 보장.',
        ITEM_1_TITLE: '1단계 · 1~3주 / 진단',
        ITEM_1_DESC: '현황 진단 및 요구사항 분석. 결과물: 요구사항 정의서 — 업무 흐름 매핑 + 페인포인트 우선순위 도출.',
        ITEM_2_TITLE: '2단계 · 4~7주 / 설계',
        ITEM_2_DESC: '시스템 설계 및 프로토타입. 결과물: UI/UX 설계안 — 와이어프레임 → 인터랙션 프로토타입 검증.',
        ITEM_3_TITLE: '3단계 · 8~13주 / 개발',
        ITEM_3_DESC: '핵심 기능 개발 및 DB 구축. 결과물: 테스트 결과 보고서 — 단위 테스트 + 통합 테스트 + 부하 테스트.',
        ITEM_4_TITLE: '4단계 · 14~16주 / 안정화',
        ITEM_4_DESC: '안정화 및 최종 검수. 결과물: 완료 보고서 — 사용자 교육 + 운영 인수인계 + 1개월 하이퍼케어.',
      },
    },

    // ⑥ AS-IS / TO-BE — as-is-to-be 템플릿
    {
      template: 'as-is-to-be',
      tokens: {
        SECTION_TITLE: 'Part 4. 기대 효과 및 성과 관리',
        PAGE_NUMBER: '06',
        LABEL: 'AS-IS · TO-BE 비교',
        TITLE_HTML: '레거시 운영 → <span class="a">통합 자동화 플랫폼</span>으로 전환',
        ASIS_TAG: 'AS-IS · 현행 운영',
        ASIS_HEADLINE: '수작업 + 분절 시스템',
        ASIS_BULLETS_HTML: `
          <li>리드타임 24시간 — 부서간 수기 인수인계</li>
          <li>연간 운영비 12.5억 — 중복 라이선스·외주 다수</li>
          <li>사용자 만족도 3.2 / 5.0 — UX 노후화</li>
          <li>장애 대응 평균 8시간 — 모니터링 체계 부재</li>
        `,
        ASIS_NOTE: '<p style="margin:0">※ 디지털 전환 미흡 → 경쟁력 격차 확대</p>',
        TOBE_TAG: 'TO-BE · 도입 후',
        TOBE_HEADLINE: '통합 자동화 플랫폼',
        TOBE_BULLETS_HTML: `
          <li>리드타임 8시간 (△66%) — 워크플로 자동화</li>
          <li>연간 운영비 10.2억 (△18%) — 라이선스 통합</li>
          <li>만족도 4.5 / 5.0 (+40.6%) — UX 전면 개편</li>
          <li>장애 대응 1시간 — 24/7 모니터링 + SLA</li>
        `,
        TOBE_EFFECT: '<p style="margin:0">→ 연간 2.3억 절감 + 처리 속도 3배</p>',
        FOOTER_LABEL: 'DX 솔루션 도입 제안서 · 2026.04',
      },
    },

    // ⑦ KPI 비교 차트 (AS-IS/TO-BE bar) + 표
    {
      html: `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=960, height=540">
<title>KPI 목표</title>
<link rel="stylesheet" href="../primitives/_shared.css">
<style>
  body { width: 960px; height: 540px; position: relative; }
  .body-area { position: absolute; top: 96px; left: 60px; right: 60px; bottom: 50px; }
  .section { font-size: 12px; font-weight: 600; color: var(--brand-blue); letter-spacing: 0.06em; margin: 0 0 4px; }
  .ph1 { font-size: 24px; font-weight: 800; color: var(--black); line-height: 1.25; margin: 0 0 6px; letter-spacing: -0.01em; }
  .ph1 .a { color: var(--brand-blue); }
  .lede { font-size: 14px; font-weight: 500; color: var(--label-gray); line-height: 1.45; margin: 0; }
  .axis-cap { font-size: 10.5px; color: var(--mid-gray); font-family: ui-monospace, Menlo, monospace; margin: 0 0 8px 0; }
  .source { font-size: 10.5px; color: var(--mid-gray); font-family: ui-monospace, Menlo, monospace; margin: 0; }

  .chart-box { width: 100%; height: 268px; }
  .chart-box svg { width: 100%; height: 100%; display: block; }
  .legend { display: flex; gap: 14px; font-size: 10.5px; color: var(--mid-gray); font-family: ui-monospace, Menlo, monospace; margin: 0 0 6px 0; }
  .legend .sw { display: inline-block; width: 10px; height: 10px; margin-right: 5px; vertical-align: middle; }

  .t { display: flex; flex-direction: column; border-top: 2px solid var(--brand-blue); border-bottom: 2px solid var(--brand-blue); font-size: 11.5px; }
  .tr { display: grid; grid-template-columns: 1.4fr 0.9fr 0.9fr 0.7fr; border-bottom: 1px solid var(--light-border); }
  .tr:last-child { border-bottom: none; }
  .thead .tr { background: var(--light-bg); }
  .th, .td { padding: 7px 10px; }
  .th p { margin: 0; font-size: 11px; font-weight: 700; color: var(--dark-gray); letter-spacing: 0.02em; }
  .td p { margin: 0; color: var(--label-gray); font-size: 11px; }
  .num { text-align: right; }
  .num p { font-family: ui-monospace, Menlo, monospace; color: var(--black); font-weight: 600; }
  .tr.hi { background: #FFF1EC; }
  .tr.hi .num p { color: var(--brand-blue); font-weight: 700; }
</style>
</head>
<body>
  <div class="slide-header">
    <div class="slide-header-inner"><p>Part 4. 기대 효과 및 성과 관리</p><p>07</p></div>
    <div class="header-line"></div>
  </div>
  <div class="body-area">
    <p class="section">정량적 목표 성과 (KPI)</p>
    <h1 class="ph1">4 개 KPI <span class="a">평균 +37.5% 개선</span> — 도입 1년 내 달성 목표</h1>
    <p class="lede">현재(AS-IS) 100 지수 기준, 도입 후(TO-BE) 효율·비용·만족도·속도 4 지표 모두 25%+ 상승. 속도(Speed) 지표가 +50% 로 가장 큰 폭 개선 예상.</p>

    <div style="display:grid;grid-template-columns:1.1fr 1fr;gap:18px;align-items:start;margin-top:14px">
      <div>
        <div class="legend">
          <span><span class="sw" style="background:#C8C8C8"></span>현행 (AS-IS)</span>
          <span><span class="sw" style="background:#FF7E5F"></span>도입 후 (TO-BE)</span>
        </div>
        <div class="chart-box" data-pptx-image="true">
          <svg viewBox="0 0 460 290" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            <!-- Y axis labels: 160 / 120 / 80 / 40 / 0 -->
            <g font-family="ui-monospace, Menlo, monospace" font-size="10" fill="#7A7A78" text-anchor="end">
              <text x="50" y="18">160</text>
              <text x="50" y="76">120</text>
              <text x="50" y="134">80</text>
              <text x="50" y="192">40</text>
              <text x="50" y="250">0</text>
            </g>
            <!-- Gridlines -->
            <g stroke="#F0F0F0" stroke-width="1">
              <line x1="55" y1="14" x2="450" y2="14"/>
              <line x1="55" y1="72" x2="450" y2="72"/>
              <line x1="55" y1="130" x2="450" y2="130"/>
              <line x1="55" y1="188" x2="450" y2="188"/>
            </g>
            <!-- Baseline -->
            <line x1="55" y1="246" x2="450" y2="246" stroke="#000" stroke-width="1"/>
            <!-- Bars: 4 categories, paired (AS-IS gray + TO-BE blue) -->
            <!-- Y mapping: val=100 → y=246-(100/160)*232 = 246-145 = 101 -->
            <!-- val=135 → y=246-(135/160)*232 = 246-195.75 = 50.25 -->
            <!-- val=125 → y=246-(125/160)*232 = 246-181.25 = 64.75 -->
            <!-- val=140 → y=246-(140/160)*232 = 246-203 = 43 -->
            <!-- val=150 → y=246-(150/160)*232 = 246-217.5 = 28.5 -->
            <!-- Group centers: 130, 230, 330, 430 -->
            <!-- AS-IS bars (left of group center) x = center-30, w = 26 -->
            <!-- TO-BE bars (right) x = center+4, w = 26 -->

            <!-- Group 1: Efficiency 100→135 -->
            <rect x="100" y="101" width="26" height="145" fill="#C8C8C8"/>
            <rect x="134" y="50" width="26" height="196" fill="#FF7E5F"/>
            <!-- Group 2: Cost Saving 100→125 -->
            <rect x="200" y="101" width="26" height="145" fill="#C8C8C8"/>
            <rect x="234" y="65" width="26" height="181" fill="#FF7E5F"/>
            <!-- Group 3: User Satisfaction 100→140 -->
            <rect x="300" y="101" width="26" height="145" fill="#C8C8C8"/>
            <rect x="334" y="43" width="26" height="203" fill="#FF7E5F"/>
            <!-- Group 4: Speed 100→150 -->
            <rect x="400" y="101" width="26" height="145" fill="#C8C8C8"/>
            <rect x="434" y="29" width="26" height="217" fill="#FF7E5F"/>

            <!-- Value labels on TO-BE bars -->
            <g font-family="ui-monospace, Menlo, monospace" font-size="10.5" font-weight="700" text-anchor="middle" fill="#FF7E5F">
              <text x="147" y="44">135</text>
              <text x="247" y="59">125</text>
              <text x="347" y="37">140</text>
              <text x="447" y="23">150</text>
            </g>
            <!-- AS-IS labels (small, above gray bars) -->
            <g font-family="ui-monospace, Menlo, monospace" font-size="10" text-anchor="middle" fill="#676765">
              <text x="113" y="95">100</text>
              <text x="213" y="95">100</text>
              <text x="313" y="95">100</text>
              <text x="413" y="95">100</text>
            </g>
            <!-- X labels -->
            <g font-size="11" text-anchor="middle" fill="#676765">
              <text x="130" y="266">효율성</text>
              <text x="230" y="266">비용 절감</text>
              <text x="330" y="266">사용자 만족도</text>
              <text x="430" y="266">처리 속도</text>
            </g>
          </svg>
        </div>
      </div>

      <div>
        <div class="t">
          <div class="thead"><div class="tr"><div class="th"><p>지표명</p></div><div class="th num"><p>AS-IS</p></div><div class="th num"><p>TO-BE</p></div><div class="th num"><p>개선율</p></div></div></div>
          <div class="tbody">
            <div class="tr hi"><div class="td"><p>업무 리드타임</p></div><div class="td num"><p>24시간</p></div><div class="td num"><p>8시간</p></div><div class="td num"><p>△66%</p></div></div>
            <div class="tr"><div class="td"><p>연간 운영 비용</p></div><div class="td num"><p>12.5억</p></div><div class="td num"><p>10.2억</p></div><div class="td num"><p>△18%</p></div></div>
            <div class="tr"><div class="td"><p>사용자 만족도</p></div><div class="td num"><p>3.2 / 5</p></div><div class="td num"><p>4.5 / 5</p></div><div class="td num"><p>+40.6%</p></div></div>
            <div class="tr"><div class="td"><p>처리 속도 지수</p></div><div class="td num"><p>100</p></div><div class="td num"><p>150</p></div><div class="td num"><p>+50%</p></div></div>
          </div>
        </div>
        <p class="source" style="text-align:right;margin-top:8px">[ 자료 : 자체 추정 · 동종업계 도입 사례 ]</p>
      </div>
    </div>
  </div>
  <div class="logo-area">
    <img src="../assets/logo.png" alt="CHATdaeri" style="height:18px;width:auto;display:block">
  </div>
</body>
</html>`,
    },

    // ⑧ SLA 운영체계 표 — budget-table 활용
    {
      template: 'budget-table',
      tokens: {
        SECTION_TITLE: 'Part 5. 운영 및 유지보수 계획',
        PAGE_NUMBER: '08',
        LABEL: 'SLA 운영 체계',
        TITLE_HTML: '장애 등급별 <span class="a">대응 시간 / 복구 목표</span> 명문화 — 24/7 모니터링 보장',
        TABLE_HEADERS_HTML: `
          <div class="th"><p>장애 등급</p></div>
          <div class="th"><p>정의</p></div>
          <div class="th num"><p>대응 시간</p></div>
          <div class="th num"><p>복구 목표</p></div>
          <div class="th num"><p>월 SLA</p></div>
        `,
        TABLE_ROWS_HTML: `
          <div class="tr hi">
            <div class="td"><p><strong>Critical</strong></p></div>
            <div class="td"><p>전체 시스템 중단 · 데이터 손실 위험</p></div>
            <div class="td num"><p>즉시 대응</p></div>
            <div class="td num"><p>4시간 이내</p></div>
            <div class="td num"><p>99.95%</p></div>
          </div>
          <div class="tr">
            <div class="td"><p><strong>Major</strong></p></div>
            <div class="td"><p>주요 기능 오작동 · 일부 사용자 제한</p></div>
            <div class="td num"><p>1시간 내</p></div>
            <div class="td num"><p>12시간 이내</p></div>
            <div class="td num"><p>99.5%</p></div>
          </div>
          <div class="tr">
            <div class="td"><p><strong>Minor</strong></p></div>
            <div class="td"><p>단순 문의 · 기능 개선 요청</p></div>
            <div class="td num"><p>4시간 내</p></div>
            <div class="td num"><p>3일 이내</p></div>
            <div class="td num"><p>99.0%</p></div>
          </div>
        `,
        TABLE_TOTAL_HTML: `
          <div class="tr total">
            <div class="td"><p>종합</p></div>
            <div class="td"><p>3 등급 SLA 운영 + 월간 리포트</p></div>
            <div class="td num"><p>—</p></div>
            <div class="td num"><p>—</p></div>
            <div class="td num"><p>99.5%+</p></div>
          </div>
        `,
        SOURCE_NOTE: '[ 자료 : 자체 SLA 정책 · ITIL v4 기준 ]',
        PLAN_A_TITLE: '운영안 A · 표준',
        PLAN_A_BODY_HTML: '<strong>월 1,200만원</strong> · 영업시간 대응 + 분기 리뷰. 안정 운영 단계 진입 후 권장.',
        PLAN_B_TITLE: '운영안 B · 24/7 프리미엄',
        PLAN_B_BODY_HTML: '<strong>월 2,400만원</strong> · 24시간 모니터링 + 전담 PM 배정 + 월간 개선 리포트. 도입 첫 1년 권장.',
        FOOTER_LABEL: 'DX 솔루션 도입 제안서 · 2026.04',
      },
    },

    // ⑨ 마무리 — emphasis-hero
    {
      template: 'emphasis-hero',
      tokens: {
        EYEBROW: 'NEXT STEP',
        HERO_LINE_1: '16주 후,',
        HERO_LINE_2: '통합 자동화 플랫폼 가동',
        SUBTITLE: '연간 2.3억 운영비 절감 + 처리 속도 3배 + 사용자 만족도 +40.6%. 본 제안서를 토대로 1주 내 착수 미팅을 제안 드립니다.',
        FOOTER_LABEL: 'DX 솔루션 도입 제안서 · 2026.04',
        PAGE_NUMBER: '09',
      },
    },
  ],
};
