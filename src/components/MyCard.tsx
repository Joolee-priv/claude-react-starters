interface MyCardProps {
  className?: string
}

export function MyCard({ className = '' }: MyCardProps) {
  return (
    <div
      className={[
        'rounded-lg bg-[var(--color-surface)] p-4 text-[var(--color-text-primary)]',
        className,
      ].join(' ')}
    >
      <h2 className="text-lg font-semibold">MyCard</h2>
    </div>
  )
}
