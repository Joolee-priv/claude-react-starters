---
name: component-decisions
description: Button/Input/Card UI 원자 컴포넌트의 실제 설계 결정 및 사용 시 주의사항
metadata:
  type: project
---

## Button (src/components/ui/Button.tsx)
- variant: primary | secondary | danger | ghost
- size: sm | md | lg (기본 md)
- `ButtonHTMLAttributes<HTMLButtonElement>` 확장 — HTML button 속성 모두 passthrough 가능
- 자체적으로 `cursor-pointer`, `disabled:opacity-50`, `focus-visible:outline` 포함
- secondary/ghost 변형은 하드코딩된 bg-white/bg-slate-100 사용 (다크모드 CSS 변수 미적용 — Major 이슈)

## Card (src/components/ui/Card.tsx)
- title prop이 있으면 h2로 렌더링
- CSS 변수 방식 정상 적용 (bg-[var(--color-surface)])
- heading level이 항상 h2 고정 — 중첩 사용 시 접근성 계층 문제 가능

## Input (src/components/ui/Input.tsx)
- forwardRef 적용 완료
- label + error 조합 지원
- inputId 자동 생성: `label?.toLowerCase().replace(/\s+/g, '-')`
  - 주의: label에 한글 포함 시 id에 한글이 들어갈 수 있음 (HTML spec상 허용되나 특수문자 이슈 가능)
- CSS 변수 정상 적용

**How to apply:** 새 컴포넌트에서 원자 컴포넌트 재사용 권장. Button secondary/ghost 다크모드 동작 확인 필요.
