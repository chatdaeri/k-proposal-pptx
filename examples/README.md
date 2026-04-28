# 데모 모음

k-proposal-pptx 플러그인의 실제 동작을 확인할 수 있는 3개 예시 덱입니다.

| 예시 | 장수 | 설명 |
|---|---|---|
| `01-real-estate-proposal/` | 9장 | 가상 오피스텔 분양성 검토 |
| `02-dx-proposal/` | 9장 | B2B DX 솔루션 도입 제안 |
| `03-conference-branding/` | 8장 | 브랜드 컨퍼런스 기획 제안 |

## 빌드 방법

각 예시 폴더에서:

```bash
# 단일 빌드
node ../../skills/proposal/scripts/build.cjs ./deck.cjs --no-lint

# 3개 전체 빌드
for d in */; do
  node ../skills/proposal/scripts/build.cjs "$d/deck.cjs" --no-lint
done
```

## 각 예시의 deck.cjs 작성 패턴

```js
module.exports = {
  slug: 'my-proposal',       // 출력 파일명 접두사
  title: '제안서 제목',
  author: '담당자명',
  slides: [
    // 템플릿 슬라이드
    { template: 'cover', tokens: { HERO_LINE_1: '...' } },

    // 자유 HTML 슬라이드
    { html: `<!DOCTYPE html>...` },

    // 반복 블록이 있는 슬라이드
    { template: 'toc', tokens: { ... }, blocks: { toc_item: [...] } },
  ],
};
```

사용 가능한 템플릿 목록은 `skills/proposal/catalog/_index.md` 를 참조하세요.
