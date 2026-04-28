module.exports = {
  slug: 'gcon-levelup',
  title: 'GCON Level Up 브랜드 제안',
  author: 'CHATdaeri',
  slides: [
    // ① 표지
    {
      template: 'cover',
      tokens: {
        SUBTITLE: 'GCON BRAND EXPERIENCE PROPOSAL · 2026',
        HERO_LINE_1: 'Level Up',
        HERO_LINE_2: 'IT인의 성장 축제,',
        HERO_LINE_3: 'GCON 브랜드 전략',
        CONTACT_LABEL: '제출처',
        CONTACT_DETAIL: 'G러닝 GCON 운영팀',
        LOGO_PATH: '',
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
          { ITEM_NUMBER: '01', ITEM_TITLE: '글로벌 컨퍼런스 트렌드', ITEM_DESC: 'Dreamforce · AWS re:Invent · Figma Config 사례' },
          { ITEM_NUMBER: '02', ITEM_TITLE: '국내 IT 행사의 한계',     ITEM_DESC: '성장 서사 부재 · 자기효용 인식 약화' },
          { ITEM_NUMBER: '03', ITEM_TITLE: 'GCON의 한 문장',         ITEM_DESC: '"Level Up — 배우고, 증명하고, 공유하라"' },
          { ITEM_NUMBER: '04', ITEM_TITLE: 'Level Up 경험 설계',       ITEM_DESC: '5 핵심 프로그램 + 운영 방안' },
          { ITEM_NUMBER: '05', ITEM_TITLE: '기대 효과',                 ITEM_DESC: '인지도 · 전환 · 브랜드 강화 정량 목표' },
        ],
      },
    },

    // ③ 글로벌 컨퍼런스 — 3 사례 비교 (free html: bar-table)
    {
      html: `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=960, height=540">
<title>글로벌 컨퍼런스 트렌드</title>
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
  .tr { display: grid; grid-template-columns: 1.3fr 1fr 1.7fr; border-bottom: 1px solid var(--light-border); }
  .tr:last-child { border-bottom: none; }
  .thead .tr { background: var(--light-bg); }
  .th, .td { padding: 8px 10px; }
  .th p { margin: 0; font-size: 11px; font-weight: 700; color: var(--dark-gray); letter-spacing: 0.02em; }
  .td p { margin: 0; color: var(--label-gray); font-size: 11px; line-height: 1.45; }
  .num { text-align: right; }
  .num p { font-family: ui-monospace, Menlo, monospace; color: var(--black); font-weight: 600; }
  .tr.hi { background: #FFF1EC; }
  .tr.hi .num p { color: var(--brand-blue); font-weight: 700; }
</style>
</head>
<body>
  <div class="slide-header">
    <div class="slide-header-inner"><p>Part 1. 글로벌 컨퍼런스 트렌드</p><p>03</p></div>
    <div class="header-line"></div>
  </div>
  <div class="body-area">
    <p class="section">글로벌 IT 컨퍼런스는 '경험의 전쟁' 중</p>
    <h1 class="ph1">세계 주요 IT 브랜드는 오프라인 컨퍼런스를 <span class="a">브랜드 경험의 무대</span>로 활용</h1>
    <p class="lede">Dreamforce · AWS re:Invent · Figma Config — 참가 규모와 팬덤 모두 폭발적. 공통 공식: "배우고 → 증명하고 → 공유하게 만든다".</p>

    <div style="display:grid;grid-template-columns:1fr 1.05fr;gap:18px;align-items:start;margin-top:14px">
      <div>
        <p class="axis-cap">참가자 수 · 단위 만명</p>
        <div class="chart-box" data-pptx-image="true">
          <svg viewBox="0 0 420 290" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            <g font-family="ui-monospace, Menlo, monospace" font-size="10" fill="#7A7A78" text-anchor="end">
              <text x="45" y="18">6.0</text>
              <text x="45" y="76">4.5</text>
              <text x="45" y="134">3.0</text>
              <text x="45" y="192">1.5</text>
              <text x="45" y="250">0</text>
            </g>
            <g stroke="#F0F0F0" stroke-width="1">
              <line x1="50" y1="14" x2="410" y2="14"/>
              <line x1="50" y1="72" x2="410" y2="72"/>
              <line x1="50" y1="130" x2="410" y2="130"/>
              <line x1="50" y1="188" x2="410" y2="188"/>
            </g>
            <line x1="50" y1="246" x2="410" y2="246" stroke="#000" stroke-width="1"/>
            <!-- Bars cx 130, 230, 330 · w 60 -->
            <!-- Dreamforce 4.5 → y=246-(4.5/6)*232 = 246-174 = 72 -->
            <rect x="100" y="72" width="60" height="174" fill="#FF7E5F"/>
            <!-- AWS re:Invent 5.4 → y=246-(5.4/6)*232 = 246-208.8 = 37.2 -->
            <rect x="200" y="37" width="60" height="209" fill="#FF7E5F"/>
            <!-- Figma Config 1.0 → y=246-(1.0/6)*232 = 246-38.67 = 207.3 -->
            <rect x="300" y="207" width="60" height="39" fill="#C8C8C8"/>
            <g font-family="ui-monospace, Menlo, monospace" font-size="11" font-weight="700" text-anchor="middle">
              <text x="130" y="66" fill="#FF7E5F">4.5만</text>
              <text x="230" y="31" fill="#FF7E5F">5.4만</text>
              <text x="330" y="201" fill="#000">1.0만</text>
            </g>
            <g font-size="10" text-anchor="middle">
              <text x="130" y="262" fill="#FF7E5F" font-weight="800">Dreamforce</text>
              <text x="130" y="276" fill="#7A7A78">Salesforce</text>
              <text x="230" y="262" fill="#FF7E5F" font-weight="800">re:Invent</text>
              <text x="230" y="276" fill="#7A7A78">AWS</text>
              <text x="330" y="262" fill="#7A7A78">Config</text>
              <text x="330" y="276" fill="#7A7A78">Figma</text>
            </g>
          </svg>
        </div>
      </div>

      <div>
        <div class="t">
          <div class="thead"><div class="tr"><div class="th"><p>컨퍼런스</p></div><div class="th num"><p>규모</p></div><div class="th"><p>핵심 가치</p></div></div></div>
          <div class="tbody">
            <div class="tr hi"><div class="td"><p>Dreamforce</p></div><div class="td num"><p>4.5만</p></div><div class="td"><p>도시 전체 페스티벌화 · 호텔 점유율 93.6%</p></div></div>
            <div class="tr"><div class="td"><p>AWS re:Invent</p></div><div class="td num"><p>5.4만</p></div><div class="td"><p>실습 중심 2,300개 세션 · 자격증 연계</p></div></div>
            <div class="tr"><div class="td"><p>Figma Config</p></div><div class="td num"><p>1.0만</p></div><div class="td"><p>'디자이너의 코첼라' · 강력한 팬덤 형성</p></div></div>
          </div>
        </div>
        <p class="source" style="text-align:right;margin-top:8px">[ 자료 : 각사 공식 발표 · 업계 리포트 ]</p>
      </div>
    </div>
  </div>
  <div class="logo-area">
    <img src="../assets/chatdaeri-logo.png" alt="CHATdaeri" style="height:18px;width:auto;display:block">
  </div>
</body>
</html>`,
    },

    // ④ 국내 IT 행사 한계 — content-text-only (서술형 메시지 1 hero + 3 sub)
    {
      template: 'content-text-only',
      tokens: {
        SECTION_TITLE: 'Part 2. 국내 IT 행사의 한계',
        PAGE_NUMBER: '04',
        HERO_TITLE: '국내 IT 행사엔 \'성장 서사\'가 없다',
        HERO_BODY: '대부분 강연 중심 운영 — 참가자 개인의 성장 서사 부재. 콘텐츠는 풍부하나 "내가 얻은 게 뭔가?" 라는 자기효용 인식이 약함. 결과: SNS 확산도, 재방문도 낮은 일회성 소비.',
        LEFT_TITLE: '강연 중심 운영',
        LEFT_DESC: '세션 90% 이상이 일방향 강연. 참가자는 "주인공" 이 아닌 "관람객" 으로 머물러 능동적 몰입이 약함.',
        SUB_2_TITLE: '자기효용 인식 부족',
        SUB_2_BODY: '"내가 얻은 게 뭔가?" 에 답하는 가시적 결과물(배지·인증·작품)이 부재. 참가 후 자기 자랑거리가 남지 않음.',
        SUB_3_TITLE: '재등록률 30% 미만',
        SUB_3_BODY: '평균 재등록률 30% 이하 · SNS 해시태그 확산 미미. 정보는 소비되지만 브랜드 자산으로 축적되지 않음.',
      },
    },

    // ⑤ GCON의 한 문장 — emphasis-hero
    {
      template: 'emphasis-hero',
      tokens: {
        EYEBROW: 'BRAND PROMISE · ONE SENTENCE',
        HERO_LINE_1: 'Level Up —',
        HERO_LINE_2: '배우고, 증명하고, 공유하라.',
        SUBTITLE: 'G러닝 비전 "성장기회의 평등" + 참가자 욕망 "커리어를 한 단계 올리고 싶다" — 이 두 축을 한 문장으로 묶는 GCON의 약속.',
        FOOTER_LABEL: 'GCON Level Up 제안 · 2026',
        PAGE_NUMBER: '05',
      },
    },

    // ⑥ Level Up 경험 설계 — 5 프로그램 (content-grid 4 cards + 1 추가는 어려우니 4 핵심으로 압축)
    // 전체 5개를 표현하려면 free html 5 카드 grid 가 더 적합 → free html
    {
      html: `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=960, height=540">
<title>Level Up 경험 설계</title>
<link rel="stylesheet" href="../primitives/_shared.css">
<style>
  body { width: 960px; height: 540px; position: relative; }
  .body-area { position: absolute; top: 96px; left: 60px; right: 60px; bottom: 50px; }
  .section { font-size: 12px; font-weight: 600; color: var(--brand-blue); letter-spacing: 0.06em; margin: 0 0 4px; }
  .ph1 { font-size: 24px; font-weight: 800; color: var(--black); line-height: 1.25; margin: 0 0 6px; letter-spacing: -0.01em; }
  .ph1 .a { color: var(--brand-blue); }
  .lede { font-size: 14px; font-weight: 500; color: var(--label-gray); line-height: 1.45; margin: 0 0 14px 0; }

  .grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
  .card { background: var(--light-bg); border: 1px solid var(--light-border); padding: 14px 16px; min-height: 138px; display: flex; flex-direction: column; gap: 6px; }
  .card.hero { background: #FFF1EC; border-top: 3px solid var(--brand-blue); grid-column: span 2; }
  .card .num { font-size: 11px; font-weight: 800; color: var(--brand-blue); font-family: ui-monospace, Menlo, monospace; letter-spacing: 0.04em; margin: 0; }
  .card h4 { margin: 0; font-size: 15px; font-weight: 800; color: var(--black); line-height: 1.3; letter-spacing: -0.01em; }
  .card.hero h4 { font-size: 17px; }
  .card p.body { margin: 0; font-size: 12px; color: var(--label-gray); line-height: 1.5; }
</style>
</head>
<body>
  <div class="slide-header">
    <div class="slide-header-inner"><p>Part 4. Level Up 경험 설계</p><p>06</p></div>
    <div class="header-line"></div>
  </div>
  <div class="body-area">
    <p class="section">Level Up 경험 5 프로그램</p>
    <h1 class="ph1">참가자를 <span class="a">'주인공'</span>으로 만드는 5 가지 장치</h1>
    <p class="lede">강연 일변도 → 실습·증명·공유의 3 사이클로 재설계. 디지털 배지·포토존·신기능 공개·하이브리드 중계·시상식 순으로 동선 구성.</p>

    <div class="grid">
      <div class="card hero">
        <p class="num">01 · 메인 프로그램</p>
        <h4>실습형 스킬 퀘스트존</h4>
        <p class="body">30~60분 실전 과제 → 완료 시 디지털 배지 자동 발급. "배우고 → 증명한다" 의 핵심 장치.</p>
      </div>
      <div class="card">
        <p class="num">02</p>
        <h4>포토 · SNS 확산 포인트</h4>
        <p class="body">"Level Up Moment" 포토존 + 퍼포먼스 스팟 운영.</p>
      </div>
      <div class="card">
        <p class="num">03</p>
        <h4>G러닝 신규 기능 첫 공개</h4>
        <p class="body">AI 추천 · 커리어 툴 등 신기능 런칭 무대화.</p>
      </div>
      <div class="card">
        <p class="num">04</p>
        <h4>하이브리드 중계</h4>
        <p class="body">현장 + 온라인 동시 송출로 도달 극대화.</p>
      </div>
      <div class="card">
        <p class="num">05</p>
        <h4>Level Up Award</h4>
        <p class="body">성장 여정 공유한 참가자 시상식 → 커뮤니티 결속 강화.</p>
      </div>
    </div>
  </div>
  <div class="logo-area">
    <img src="../assets/chatdaeri-logo.png" alt="CHATdaeri" style="height:18px;width:auto;display:block">
  </div>
</body>
</html>`,
    },

    // ⑦ 기대 효과 — KPI 차트 + 표 (free html bar-table)
    {
      html: `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=960, height=540">
<title>기대 효과</title>
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
    <div class="slide-header-inner"><p>Part 5. 기대 효과</p><p>07</p></div>
    <div class="header-line"></div>
  </div>
  <div class="body-area">
    <p class="section">정량적 목표 (KPI · 도입 효과)</p>
    <h1 class="ph1">5 개 KPI <span class="a">평균 +180% 상승</span> — 인지도·전환·브랜드 동시 달성</h1>
    <p class="lede">전년(AS-IS) 100 지수 기준, Level Up 도입 후 해시태그·UGC 3배, 미디어 노출 2배, 강의 등록률 +30% 등 핵심 지표 동반 상승 예상.</p>

    <div style="display:grid;grid-template-columns:1.1fr 1fr;gap:18px;align-items:start;margin-top:14px">
      <div>
        <div class="legend">
          <span><span class="sw" style="background:#C8C8C8"></span>전년 (AS-IS)</span>
          <span><span class="sw" style="background:#FF7E5F"></span>Level Up 도입 후</span>
        </div>
        <div class="chart-box" data-pptx-image="true">
          <svg viewBox="0 0 460 290" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            <!-- Y axis labels: 320 / 240 / 160 / 80 / 0 -->
            <g font-family="ui-monospace, Menlo, monospace" font-size="10" fill="#7A7A78" text-anchor="end">
              <text x="50" y="18">320</text>
              <text x="50" y="76">240</text>
              <text x="50" y="134">160</text>
              <text x="50" y="192">80</text>
              <text x="50" y="250">0</text>
            </g>
            <g stroke="#F0F0F0" stroke-width="1">
              <line x1="55" y1="14" x2="450" y2="14"/>
              <line x1="55" y1="72" x2="450" y2="72"/>
              <line x1="55" y1="130" x2="450" y2="130"/>
              <line x1="55" y1="188" x2="450" y2="188"/>
            </g>
            <line x1="55" y1="246" x2="450" y2="246" stroke="#000" stroke-width="1"/>
            <!-- Y mapping: y = 246 - (val/320)*232 -->
            <!-- 100 → 246-72.5=173.5 / 300 → 246-217.5=28.5 / 200 → 101 / 130 → 151.75 / 120 → 159 -->
            <!-- Group centers: 130, 230, 330, 430 -->
            <!-- Group 1: 해시태그·UGC 100→300 -->
            <rect x="100" y="174" width="26" height="72" fill="#C8C8C8"/>
            <rect x="134" y="29" width="26" height="217" fill="#FF7E5F"/>
            <!-- Group 2: 미디어 노출 100→200 -->
            <rect x="200" y="174" width="26" height="72" fill="#C8C8C8"/>
            <rect x="234" y="101" width="26" height="145" fill="#FF7E5F"/>
            <!-- Group 3: 신규 회원가입 100→120 -->
            <rect x="300" y="174" width="26" height="72" fill="#C8C8C8"/>
            <rect x="334" y="159" width="26" height="87" fill="#FF7E5F"/>
            <!-- Group 4: 강의 등록률 100→130 -->
            <rect x="400" y="174" width="26" height="72" fill="#C8C8C8"/>
            <rect x="434" y="152" width="26" height="94" fill="#FF7E5F"/>

            <g font-family="ui-monospace, Menlo, monospace" font-size="10.5" font-weight="700" text-anchor="middle" fill="#FF7E5F">
              <text x="147" y="23">300</text>
              <text x="247" y="95">200</text>
              <text x="347" y="153">120</text>
              <text x="447" y="146">130</text>
            </g>
            <g font-family="ui-monospace, Menlo, monospace" font-size="10" text-anchor="middle" fill="#676765">
              <text x="113" y="168">100</text>
              <text x="213" y="168">100</text>
              <text x="313" y="168">100</text>
              <text x="413" y="168">100</text>
            </g>
            <g font-size="10.5" text-anchor="middle" fill="#676765">
              <text x="130" y="266">해시태그·UGC</text>
              <text x="230" y="266">미디어 노출</text>
              <text x="330" y="266">신규 회원가입</text>
              <text x="430" y="266">강의 등록률</text>
            </g>
          </svg>
        </div>
      </div>

      <div>
        <div class="t">
          <div class="thead"><div class="tr"><div class="th"><p>지표</p></div><div class="th num"><p>전년</p></div><div class="th num"><p>도입 후</p></div><div class="th num"><p>증가율</p></div></div></div>
          <div class="tbody">
            <div class="tr hi"><div class="td"><p>해시태그 · UGC</p></div><div class="td num"><p>100</p></div><div class="td num"><p>300</p></div><div class="td num"><p>+200%</p></div></div>
            <div class="tr"><div class="td"><p>미디어 노출</p></div><div class="td num"><p>100</p></div><div class="td num"><p>200</p></div><div class="td num"><p>+100%</p></div></div>
            <div class="tr"><div class="td"><p>신규 회원가입</p></div><div class="td num"><p>100</p></div><div class="td num"><p>120</p></div><div class="td num"><p>+20%</p></div></div>
            <div class="tr"><div class="td"><p>강의 찜·등록률</p></div><div class="td num"><p>100</p></div><div class="td num"><p>130</p></div><div class="td num"><p>+30%</p></div></div>
          </div>
        </div>
        <p class="source" style="text-align:right;margin-top:8px">[ 자료 : G러닝 자체 추정 · 글로벌 컨퍼런스 벤치마크 ]</p>
      </div>
    </div>
  </div>
  <div class="logo-area">
    <img src="../assets/chatdaeri-logo.png" alt="CHATdaeri" style="height:18px;width:auto;display:block">
  </div>
</body>
</html>`,
    },

    // ⑧ 마무리 — emphasis-hero
    {
      template: 'emphasis-hero',
      tokens: {
        EYEBROW: 'CLOSING · ONE LINE',
        HERO_LINE_1: '개인의 성장을',
        HERO_LINE_2: '브랜드 자산으로',
        SUBTITLE: 'Level Up 은 GCON 참가자를 \'수강생\' 에서 \'G러닝 홍보대사\' 로 전환시키는 단 하나의 길입니다. "IT인의 성장 축제 = GCON" 으로 인식 고착.',
        FOOTER_LABEL: 'GCON Level Up 제안 · 2026',
        PAGE_NUMBER: '08',
      },
    },
  ],
};
