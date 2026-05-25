# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 명령어

```bash
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # 타입 체크 후 프로덕션 빌드 (tsc -b && vite build)
npm run preview  # 빌드 결과 미리보기
npm run lint     # ESLint 검사
npx tsc --noEmit # 빌드 없이 타입 체크만
```

## 기술 스택 버전

- Vite 8 / React 19 / TypeScript 6 / Tailwind CSS 4

## 아키텍처

```
src/
├── types/index.ts          # 전역 타입 (Todo, CardItem, Theme)
├── hooks/                  # 커스텀 훅
│   ├── useLocalStorage.ts  # 제네릭 localStorage 래퍼
│   └── useTheme.ts         # 다크모드 상태 관리
├── components/
│   ├── ui/                 # 범용 UI 원자 컴포넌트 (Button, Card, Input)
│   └── *.tsx               # 기능별 예제 컴포넌트
└── pages/Home.tsx          # 컴포넌트 쇼케이스 페이지
```

새 페이지는 `src/pages/`, 재사용 UI는 `src/components/ui/`, 상태 로직은 `src/hooks/`에 위치시킨다.

## 주요 설정 특이사항

### Tailwind CSS v4
`tailwind.config.js` 파일이 없다. 설정은 CSS 파일에서 직접 처리한다.

```css
/* src/index.css */
@import "tailwindcss";      /* 진입점 */
@theme { ... }              /* 테마 확장 */
```

### 다크모드
`dark:` 클래스를 사용하지 않는다. `document.documentElement`의 `data-theme="dark"` 속성을 토글하면 `src/index.css`의 `:root[data-theme="dark"]` CSS 변수가 전환된다. 컴포넌트에서는 `bg-[var(--color-bg)]` 형식으로 참조한다.

사용 가능한 CSS 변수: `--color-bg`, `--color-surface`, `--color-text-primary`, `--color-text-secondary`, `--color-border`

### Path Alias
`@/` → `src/` 로 매핑된다. TypeScript 6에서 `moduleResolution: bundler`를 사용하므로 `baseUrl` 없이 `paths`만 설정되어 있다.

### TypeScript strict
`noUncheckedIndexedAccess: true`가 활성화되어 있어 배열/객체 인덱스 접근 시 optional chaining이 필요하다.
