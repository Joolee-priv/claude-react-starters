---
name: project-css-variables
description: 프로젝트에서 실제 사용 중인 다크모드 CSS 변수 5종 (index.css 기준)
metadata:
  type: project
---

`src/index.css`에 정의된 CSS 변수 (라이트/다크 공통):

- `--color-bg`: 페이지 배경 (라이트 #ffffff / 다크 #0f172a)
- `--color-surface`: 카드·패널 배경 (라이트 #f8fafc / 다크 #1e293b)
- `--color-text-primary`: 주 텍스트 (라이트 #0f172a / 다크 #f1f5f9)
- `--color-text-secondary`: 보조 텍스트 (라이트 #475569 / 다크 #94a3b8)
- `--color-border`: 테두리 (라이트 #e2e8f0 / 다크 #334155)

다크모드 전환: `:root[data-theme="dark"]` 선택자로 재정의.
컴포넌트에서 참조: `bg-[var(--color-surface)]`, `text-[var(--color-text-primary)]` 형식.
`dark:` 클래스는 이 프로젝트에서 사용하지 않음.

**Why:** Tailwind v4 CSS-first 방식 + 커스텀 CSS 변수 기반 다크모드 채택.
**How to apply:** 새 컴포넌트 작성 시 하드코딩 색상 대신 반드시 이 변수 사용.
