---
name: recurring-violations
description: 초기 코드베이스 리뷰(2026-05-30)에서 발견된 반복 위반 패턴 및 주의 이슈
metadata:
  type: project
---

## 발견된 주요 패턴 (초기 리뷰 기준)

### 1. 인라인 버튼 vs Button 컴포넌트 혼용
Counter.tsx(step 선택), TodoList.tsx(필터 탭·완료 삭제) 등 여러 곳에서 원자 `<Button>` 대신 raw `<button>` 사용.
접근성 속성(aria-label, role) 누락이 함께 발생함.

### 2. cursor-pointer 중복 명시
`<Button>` 컴포넌트 자체가 이미 `cursor-pointer` 클래스를 포함하는데, 호출부에서 재지정하는 경우가 있음.

### 3. TodoList createdAt 직렬화 이슈
`useLocalStorage`로 `Todo[]`를 저장 시 `createdAt: Date` 필드가 JSON 직렬화 후 string으로 복원됨. 타입과 실제 값이 불일치.

### 4. useLocalStorage SSR 안전성
`window.localStorage` 직접 접근 — SSR/테스트 환경에서 오류 가능. typeof window 가드 없음.

### 5. tagColor 하드코딩 (CardItem)
`CardItem.tagColor`에 Tailwind 클래스 문자열을 직접 저장. 다크모드에서 bg-violet-100 등 하드코딩 색상이 CSS 변수 방식과 불일치.

### 6. MyCard 미완성 컴포넌트
`src/components/MyCard.tsx`가 placeholder 수준. 실제로 어디서도 import되지 않음.

**Why:** 스타터킷 초기 구성 단계의 코드로, 예제 품질보다 빠른 구성 우선.
**How to apply:** 향후 컴포넌트 추가 시 위 패턴 반복하지 않도록 주의.
