---
name: k-proposal
description: 한국식 제안서 PPT 생성 (12~18장 자동 구성). 사용자 브리프나 inputs/ 파일을 받아 CHATdaeri 오렌지 브랜드 23개 템플릿으로 .pptx를 빌드합니다. "제안서 만들어줘", "한국식 PPT", "맥킨지 스타일" 등의 자연어로도 트리거됩니다.
---

사용자 브리프: $ARGUMENTS

위 브리프를 바탕으로 k-proposal-pptx 의 `k-proposal-agent` 에 위임하여 한국식 제안서 PPT 를 생성합니다.

**에이전트 위임**: `k-proposal-agent`

에이전트는 다음 흐름으로 작업합니다:
1. **현재 작업 디렉토리(프로젝트 폴더) 의 모든 자료 스캔 + 읽기** — `inputs/` 가 없어도 루트와 하위 폴더의 md·docx·xlsx·csv·pdf·이미지를 자동으로 모두 읽고 시작 (큰 폴더면 어느 자료가 핵심인지 한 번만 확인)
2. 브리프 + 읽은 자료에서 청중·목적·데이터·언어 톤 식별
3. `catalog/_index.md` → 적합한 stage 파일 Read
4. `output/<slug>/deck.cjs` 한 파일에 전체 슬라이드 정의
5. `node skills/proposal/scripts/build.cjs deck.cjs` → render → lint → convert → `.pptx` 완성
