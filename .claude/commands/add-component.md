---
description: 'src/components/ 에 TypeScript + Tailwind CSS React 컴포넌트를 생성합니다'
argument-hint: 'ComponentName'
allowed-tools: ['Write', 'Read', 'Bash(ls:*)']
---

# Claude 커맨드: add-component

`$ARGUMENTS`를 이름으로 하는 React 함수형 컴포넌트를 `src/components/` 폴더에 생성합니다.

## 실행 순서

1. `$ARGUMENTS` 값을 컴포넌트 이름으로 사용합니다. 값이 없으면 사용자에게 이름을 요청합니다.
2. `src/components/$ARGUMENTS.tsx` 파일이 이미 존재하는지 확인합니다. 존재하면 덮어쓸지 사용자에게 확인합니다.
3. 아래 템플릿으로 파일을 생성합니다.

## 생성 템플릿

`$ARGUMENTS` 자리에 실제 컴포넌트 이름을 대입해 파일을 작성합니다.

```tsx
interface $ARGUMENTSProps {
  className?: string
}

export function $ARGUMENTS({ className = '' }: $ARGUMENTSProps) {
  return (
    <div
      className={[
        'rounded-lg bg-[var(--color-surface)] p-4 text-[var(--color-text-primary)]',
        className,
      ].join(' ')}
    >
      <h2 className="text-lg font-semibold">$ARGUMENTS</h2>
    </div>
  )
}
```

## 규칙

- named export 사용 (default export 금지)
- `interface {ComponentName}Props` 패턴으로 Props 타입 정의
- 다크모드는 `dark:` 클래스 대신 CSS 변수 사용: `bg-[var(--color-surface)]`, `text-[var(--color-text-primary)]` 등
- `@/` path alias 사용 가능
- `any` 타입 사용 금지
