import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  title?: string
}

export function Card({ children, className = '', title }: CardProps) {
  return (
    <div
      className={[
        'rounded-2xl border p-6',
        'bg-[var(--color-surface)] border-[var(--color-border)]',
        'shadow-sm',
        className,
      ].join(' ')}
    >
      {title && (
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
          {title}
        </h2>
      )}
      {children}
    </div>
  )
}
