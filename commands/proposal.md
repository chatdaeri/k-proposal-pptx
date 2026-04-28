---
name: proposal
description: 한국식 제안서 PPT 생성 (12~18장 자동 구성). 사용자 브리프나 inputs/ 파일을 받아 CHATdaeri 오렌지 브랜드 23개 템플릿으로 .pptx를 빌드합니다. "제안서 만들어줘", "한국식 PPT", "맥킨지 스타일" 등의 자연어로도 트리거됩니다.
---

사용자 브리프: $ARGUMENTS

위 브리프를 바탕으로 k-proposal-pptx 의 `proposal-deck-agent` 에 위임하여 한국식 제안서 PPT 를 생성합니다.

**에이전트 위임**: `proposal-deck-agent`

에이전트는 다음 흐름으로 작업합니다:
1. 브리프에서 청중·목적·데이터·언어 톤 식별
2. `catalog/_index.md` → 적합한 stage 파일 Read
3. `output/<slug>/deck.cjs` 한 파일에 전체 슬라이드 정의
4. `node skills/proposal/scripts/build.cjs deck.cjs` → render → lint → convert → `.pptx` 완성
