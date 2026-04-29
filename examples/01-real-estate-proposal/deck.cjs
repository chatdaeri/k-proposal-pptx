// 예시 01: 부동산 신축 오피스텔 분양성 검토 (가공 데이터)
// 실제 프로젝트 정보로 교체해 사용하세요.
module.exports = {
  slug: 'real-estate-proposal',
  title: 'S시 K동 오피스텔 분양성 검토',
  author: 'CHATdaeri',
  slides: [
    // ① 표지
    {
      template: 'cover',
      tokens: {
        SUBTITLE: 'REAL ESTATE FEASIBILITY STUDY · 2026.04',
        HERO_LINE_1: 'S시 K동 123번지',
        HERO_LINE_2: '신축 오피스텔',
        HERO_LINE_3: '분양성 검토 보고서',
        CONTACT_LABEL: '제출처',
        CONTACT_DETAIL: 'GreenDev Co. 개발사업팀',
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
          { ITEM_NUMBER: '01', ITEM_TITLE: '입지 현황 및 시장 환경',   ITEM_DESC: '역세권 접근성 · 인구 추이 · 개발 호재' },
          { ITEM_NUMBER: '02', ITEM_TITLE: '경쟁 단지 분석',           ITEM_DESC: '반경 1km 내 3개 단지 비교' },
          { ITEM_NUMBER: '03', ITEM_TITLE: '평형 구성 제안',           ITEM_DESC: '수요층 분석 기반 59/74/84형 믹스' },
          { ITEM_NUMBER: '04', ITEM_TITLE: '수익성 분석',             ITEM_DESC: '현행 토지 vs 개발 후 NPV 비교' },
          { ITEM_NUMBER: '05', ITEM_TITLE: '분양가 산정 및 사업비',   ITEM_DESC: '인근 실거래 기반 분양가 + 사업비 구조' },
        ],
      },
    },

    // ③ 입지 현황 — content-split (좌: 핵심 지표, 우: 2포인트 + TIP)
    {
      template: 'content-split',
      tokens: {
        SECTION_TITLE: 'Part 1. 입지 현황 및 시장 환경',
        PAGE_NUMBER: '03',
        LEFT_TITLE: 'S시 K동 — 역세권 + 신개발 수혜지',
        LEFT_DESC: 'K역 도보 5분 거리. 인근 지식산업센터 2개소 입주 완료(2024~2025), 유입 직장인 1만+ 명 예상. 기존 오피스텔 공급 대비 수요 흡수율 양호.',
        RIGHT_INTRO: '직주근접 수요 환경 핵심 2가지',
        RIGHT_ITEM_1_TITLE: '직주근접 수요 + 공실률 양호',
        RIGHT_ITEM_1_BODY: '반경 500m 일자리 18,000개+. 기존 단지 평균 공실률 4.2% (K동 평균 6.8% 대비 우수).',
        RIGHT_ITEM_2_TITLE: '인구 유입 + 개발 호재',
        RIGHT_ITEM_2_BODY: '최근 3년 연평균 인구 증가 +3.1% (S시 평균 +1.4% 상회). S시 도시재생 뉴딜지구 지정(2024.06).',
        TIP_TEXT: '역세권 도보 5분 + 신개발 수혜 — 경쟁 단지 대비 입지 우위 확보',
      },
    },

    // ④ 경쟁 단지 비교 — bar chart + 표 (free html)
    {
      html: `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=960, height=540">
<title>경쟁 단지 분석</title>
<link rel="stylesheet" href="../primitives/_shared.css">
<style>
  body { width: 960px; height: 540px; position: relative; }
  .body-area { position: absolute; top: 96px; left: 60px; right: 60px; bottom: 50px; }
  .section { font-size: 12px; font-weight: 600; color: var(--brand-orange); letter-spacing: 0.06em; margin: 0 0 4px; }
  .ph1 { font-size: 24px; font-weight: 800; color: var(--black); line-height: 1.25; margin: 0 0 6px; letter-spacing: -0.01em; }
  .ph1 .a { color: var(--brand-orange); }
  .lede { font-size: 14px; font-weight: 500; color: var(--label-gray); line-height: 1.45; margin: 0; }
  .axis-cap { font-size: 10.5px; color: var(--mid-gray); font-family: ui-monospace, Menlo, monospace; margin: 0 0 8px 0; }
  .source { font-size: 10.5px; color: var(--mid-gray); font-family: ui-monospace, Menlo, monospace; margin: 0; }
  .chart-box { width: 100%; height: 230px; }
  .chart-box svg { width: 100%; height: 100%; display: block; }
  .t { display: flex; flex-direction: column; border-top: 2px solid var(--brand-orange); border-bottom: 2px solid var(--brand-orange); font-size: 11.5px; }
  .tr { display: grid; grid-template-columns: 1.2fr 0.9fr 0.9fr 1.2fr 1.4fr; border-bottom: 1px solid var(--light-border); }
  .tr:last-child { border-bottom: none; }
  .thead .tr { background: var(--light-bg); }
  .th, .td { padding: 6px 10px; }
  .th p { margin: 0; font-size: 11px; font-weight: 700; color: var(--dark-gray); }
  .td p { margin: 0; color: var(--label-gray); font-size: 11px; line-height: 1.4; }
  .num { text-align: right; }
  .num p { font-family: ui-monospace, Menlo, monospace; color: var(--black); font-weight: 600; }
  .tr.hi { background: #FFF1EC; }
  .tr.hi .num p { color: var(--brand-orange); font-weight: 700; }
</style>
</head>
<body>
  <div class="slide-header">
    <div class="slide-header-inner"><p>Part 2. 경쟁 단지 분석</p><p>04</p></div>
    <div class="header-line"></div>
  </div>
  <div class="body-area">
    <p class="section">반경 1km 내 경쟁 단지 비교</p>
    <h1 class="ph1">기존 3개 단지 대비 <span class="a">분양가 경쟁력 + 입지 우위</span> 확보 가능</h1>
    <p class="lede">A단지(2021년 준공) · B단지(2023년) · C단지(2024년) 실거래 분석. 본 사업지는 역 접근성에서 A단지 대비 3분 단축.</p>

    <div style="display:grid;grid-template-columns:1fr 1.1fr;gap:18px;align-items:start;margin-top:12px">
      <div>
        <p class="axis-cap">전용 84형 분양가 비교 · 단위 천원/㎡</p>
        <div class="chart-box" data-pptx-image="true">
          <svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            <g font-family="ui-monospace, Menlo, monospace" font-size="10" fill="#7A7A78" text-anchor="end">
              <text x="45" y="18">20,000</text>
              <text x="45" y="76">15,000</text>
              <text x="45" y="134">10,000</text>
              <text x="45" y="192">5,000</text>
            </g>
            <g stroke="#F0F0F0" stroke-width="1">
              <line x1="50" y1="14" x2="410" y2="14"/>
              <line x1="50" y1="72" x2="410" y2="72"/>
              <line x1="50" y1="130" x2="410" y2="130"/>
              <line x1="50" y1="188" x2="410" y2="188"/>
            </g>
            <line x1="50" y1="216" x2="410" y2="216" stroke="#000" stroke-width="1"/>
            <!-- A단지 17,200 → y=216-(17200/20000)*202 = 216-173.7 = 42.3 -->
            <rect x="80"  y="42"  width="60" height="174" fill="#C8C8C8"/>
            <!-- B단지 16,500 → y=216-(16500/20000)*202 = 216-166.65 = 49.35 -->
            <rect x="190" y="49"  width="60" height="167" fill="#C8C8C8"/>
            <!-- C단지 15,800 → y=216-(15800/20000)*202 = 216-159.58 = 56.4 -->
            <rect x="300" y="56"  width="60" height="160" fill="#C8C8C8"/>
            <!-- 본 사업 15,000 → y=216-(15000/20000)*202 = 216-151.5 = 64.5 -->
            <rect x="360" y="64"  width="40" height="152" fill="#FF7E5F"/>
            <g font-family="ui-monospace, Menlo, monospace" font-size="11" font-weight="700" text-anchor="middle">
              <text x="110" y="36" fill="#676765">17,200</text>
              <text x="220" y="43" fill="#676765">16,500</text>
              <text x="330" y="50" fill="#676765">15,800</text>
              <text x="380" y="58" fill="#FF7E5F">15,000</text>
            </g>
            <g font-size="11" text-anchor="middle" fill="#676765">
              <text x="110" y="232">A단지</text>
              <text x="220" y="232">B단지</text>
              <text x="330" y="232">C단지</text>
              <text x="380" y="232" fill="#FF7E5F" font-weight="800">본 사업</text>
            </g>
          </svg>
        </div>
      </div>

      <div>
        <div class="t">
          <div class="thead"><div class="tr"><div class="th"><p>단지</p></div><div class="th num"><p>준공</p></div><div class="th num"><p>역 거리</p></div><div class="th num"><p>분양가(84형)</p></div><div class="th num"><p>공실률</p></div></div></div>
          <div class="tbody">
            <div class="tr"><div class="td"><p>A단지</p></div><div class="td num"><p>2021</p></div><div class="td num"><p>도보 8분</p></div><div class="td num"><p>17,200천원</p></div><div class="td num"><p>5.1%</p></div></div>
            <div class="tr"><div class="td"><p>B단지</p></div><div class="td num"><p>2023</p></div><div class="td num"><p>도보 7분</p></div><div class="td num"><p>16,500천원</p></div><div class="td num"><p>4.8%</p></div></div>
            <div class="tr"><div class="td"><p>C단지</p></div><div class="td num"><p>2024</p></div><div class="td num"><p>도보 6분</p></div><div class="td num"><p>15,800천원</p></div><div class="td num"><p>3.2%</p></div></div>
            <div class="tr hi"><div class="td"><p><strong>본 사업</strong></p></div><div class="td num"><p>2027(예정)</p></div><div class="td num"><p>도보 5분</p></div><div class="td num"><p>15,000천원</p></div><div class="td num"><p>—</p></div></div>
          </div>
        </div>
        <p class="source" style="text-align:right;margin-top:8px">[ 자료 : 인근 실거래가 · 공인중개사 조사 (2026.03) ]</p>
      </div>
    </div>
  </div>
  <div class="logo-area">
    <img src="../assets/logo.png" alt="CHATdaeri" style="height:18px;width:auto;display:block">
  </div>
</body>
</html>`,
    },

    // ⑤ 평형 구성 제안 — content-grid (4 카드)
    {
      template: 'content-grid',
      tokens: {
        SECTION_TITLE: 'Part 3. 평형 구성 제안',
        PAGE_NUMBER: '05',
        GRID_EYEBROW: '수요층 분석 기반 최적 평형 믹스',
        GRID_TITLE: '1인 가구 + 신혼부부 수요 중심 <span class="a">59·74·84형 3종 구성</span>',
        GRID_LEDE: '인근 직장인 수요(59형) 와 가족 수요(84형) 를 모두 흡수. 중간형(74형) 은 소형 투자 수요로 흡수.',
        ITEM_1_TITLE: '59형 (전용 59㎡) · 40세대',
        ITEM_1_DESC: '1~2인 직장인·싱글 타깃. 월세 수익률 관심 투자자 수요 강. 엘리베이터 1대 공용 구간 최적화.',
        ITEM_2_TITLE: '74형 (전용 74㎡) · 30세대',
        ITEM_2_DESC: '소형 투자 + 신혼 초기 수요. 드레스룸 제공 → 차별화. 분양가 1층 대비 20% 할인 구조.',
        ITEM_3_TITLE: '84형 (전용 84㎡) · 20세대',
        ITEM_3_DESC: '가족형 실거주 수요. 인근 A단지 대비 1,200만원 절감(84형 기준). 코너동 전 세대 배정.',
        ITEM_4_TITLE: '총 90세대 · 분양률 목표 95%',
        ITEM_4_DESC: '업무지구 도보권 + 저렴한 분양가로 6개월 내 완판 목표. 미분양 시 임대 전환 옵션 설정.',
      },
    },

    // ⑥ 수익성 분석 — as-is-to-be
    {
      template: 'as-is-to-be',
      tokens: {
        SECTION_TITLE: 'Part 4. 수익성 분석',
        PAGE_NUMBER: '06',
        LABEL: 'AS-IS · TO-BE 비교',
        TITLE_HTML: '토지 보유 → <span class="a">신축 분양</span> 시 NPV 3.2배 증가',
        ASIS_TAG: 'AS-IS · 현행 토지 보유',
        ASIS_HEADLINE: '연 임대 수익 1.2억',
        ASIS_BULLETS_HTML: `
          <li>연간 토지 임대수익 약 1.2억 (창고 임대)</li>
          <li>토지 공시지가 상승률 연 3.5% (완만)</li>
          <li>10년 보유 시 누적 현금흐름 약 12억</li>
          <li>개발 미추진 시 주변 신축 대비 자산가치 역전 우려</li>
        `,
        ASIS_NOTE: '<p style="margin:0">※ 현행 유지 시 기회비용 연 4억+ 발생</p>',
        TOBE_TAG: 'TO-BE · 신축 분양 후',
        TOBE_HEADLINE: '분양 수익 38.5억 (세전)',
        TOBE_BULLETS_HTML: `
          <li>총 분양가 135억 (90세대 × 평균 1.5억)</li>
          <li>사업비 96.5억 (토지비 · 공사비 · 금융비용 포함)</li>
          <li>세전 분양이익 38.5억 (수익률 28.5%)</li>
          <li>NPV 기준 현행 보유 대비 3.2배 가치 창출</li>
        `,
        TOBE_EFFECT: '<p style="margin:0">→ 사업 기간 2년, IRR 14.2%</p>',
        FOOTER_LABEL: 'S시 K동 오피스텔 분양성 검토 · 2026.04',
      },
    },

    // ⑦ 분양가 산정 — budget-table
    {
      template: 'budget-table',
      tokens: {
        SECTION_TITLE: 'Part 5. 분양가 산정 및 사업비',
        PAGE_NUMBER: '07',
        LABEL: '사업비 구조',
        TITLE_HTML: '총 사업비 <span class="a">96.5억</span> — 공사비 60% + 금융비용 15%',
        TABLE_HEADERS_HTML: `
          <div class="th"><p>항목</p></div>
          <div class="th"><p>세부 내용</p></div>
          <div class="th num"><p>금액 (억원)</p></div>
          <div class="th num"><p>비중</p></div>
        `,
        TABLE_ROWS_HTML: `
          <div class="tr hi">
            <div class="td"><p><strong>토지비</strong></p></div>
            <div class="td"><p>취득세·등기비 포함</p></div>
            <div class="td num"><p>22.0</p></div>
            <div class="td num"><p>22.8%</p></div>
          </div>
          <div class="tr">
            <div class="td"><p><strong>공사비</strong></p></div>
            <div class="td"><p>건축 + 인테리어 (평당 600만원 기준)</p></div>
            <div class="td num"><p>57.9</p></div>
            <div class="td num"><p>60.0%</p></div>
          </div>
          <div class="tr">
            <div class="td"><p><strong>금융비용</strong></p></div>
            <div class="td"><p>PF 대출 이자 + 수수료 (연 6.5%)</p></div>
            <div class="td num"><p>14.5</p></div>
            <div class="td num"><p>15.0%</p></div>
          </div>
          <div class="tr">
            <div class="td"><p><strong>기타 비용</strong></p></div>
            <div class="td"><p>설계·인허가·분양 대행·광고</p></div>
            <div class="td num"><p>2.1</p></div>
            <div class="td num"><p>2.2%</p></div>
          </div>
        `,
        TABLE_TOTAL_HTML: `
          <div class="tr total">
            <div class="td"><p>합계</p></div>
            <div class="td"><p>총 사업비</p></div>
            <div class="td num"><p>96.5</p></div>
            <div class="td num"><p>100%</p></div>
          </div>
        `,
        SOURCE_NOTE: '[ 자료 : 자체 추정 · 동종 사업 사례 종합 ]',
        PLAN_A_TITLE: '분양안 A · 표준가',
        PLAN_A_BODY_HTML: '<strong>평균 1.50억/세대</strong> — 인근 C단지 -5.3% 수준. 조기 완판 목표. 분양률 95% 시 세전이익 38.5억.',
        PLAN_B_TITLE: '분양안 B · 프리미엄가',
        PLAN_B_BODY_HTML: '<strong>평균 1.60억/세대</strong> — 입지 프리미엄 반영. 분양률 85% 확보 시 동일 이익. 미분양 리스크 소폭 상승.',
        FOOTER_LABEL: 'S시 K동 오피스텔 분양성 검토 · 2026.04',
      },
    },

    // ⑧ 리스크 검토 — content-grid
    {
      template: 'content-grid',
      tokens: {
        SECTION_TITLE: 'Part 5. 리스크 검토',
        PAGE_NUMBER: '08',
        GRID_EYEBROW: '주요 리스크 & 대응 방안',
        GRID_TITLE: '4대 리스크 <span class="a">대응 계획 수립</span> — 미분양 방어가 핵심',
        GRID_LEDE: '금리·인허가·미분양·공사비 리스크를 사전에 정의하고 대응 시나리오 확보.',
        ITEM_1_TITLE: '금리 상승 리스크',
        ITEM_1_DESC: 'PF 금리 +1%p 시 금융비용 2.2억 증가 → 분양가 1~2% 조정으로 흡수 가능. Cap 계약(6.5% 상한) 체결 예정.',
        ITEM_2_TITLE: '인허가 지연 리스크',
        ITEM_2_DESC: '도시재생 뉴딜지구 지정 수혜로 인허가 패스트트랙 가능. 최대 3개월 지연 시 금융비용 3.6억 추가 — 준비금 보유.',
        ITEM_3_TITLE: '미분양 리스크',
        ITEM_3_DESC: '분양률 70% 미만 시 임대 전환(전세·월세) 옵션 실행. 임대 수익률 4.2%로 운영 가능성 확인.',
        ITEM_4_TITLE: '공사비 인상 리스크',
        ITEM_4_DESC: '원자재 10% 인상 시 사업비 5.8억 증가 → 분양가 소폭 조정 또는 설계 최적화로 대응. GC 고정계약 협상 중.',
      },
    },

    // ⑨ 마무리 — emphasis-hero
    {
      template: 'emphasis-hero',
      tokens: {
        EYEBROW: 'CONCLUSION & NEXT STEP',
        HERO_LINE_1: '분양 적기,',
        HERO_LINE_2: '2026년 4분기 착공 권장',
        SUBTITLE: '역세권 입지 + 경쟁력 있는 분양가(15,000천원/㎡)로 조기 완판 가능. IRR 14.2%, 사업기간 2년, 세전이익 38.5억. 2주 내 착수 미팅을 제안 드립니다.',
        FOOTER_LABEL: 'S시 K동 오피스텔 분양성 검토 · 2026.04',
        PAGE_NUMBER: '09',
      },
    },
  ],
};
