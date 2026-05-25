import { useState, useCallback } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const STEP_OPTIONS = [1, 5, 10] as const
type Step = (typeof STEP_OPTIONS)[number]

export function Counter() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState<Step>(1)

  const increment = useCallback(() => setCount((c) => c + step), [step])
  const decrement = useCallback(() => setCount((c) => c - step), [step])
  const reset = useCallback(() => setCount(0), [])

  const countColor =
    count > 0
      ? 'text-emerald-500'
      : count < 0
        ? 'text-red-500'
        : 'text-[var(--color-text-primary)]'

  return (
    <Card title="Counter">
      <div className="flex flex-col items-center gap-6">
        {/* 카운트 표시 */}
        <div
          className={[
            'text-6xl font-bold tabular-nums transition-colors duration-200',
            countColor,
          ].join(' ')}
          aria-live="polite"
          aria-atomic="true"
        >
          {count}
        </div>

        {/* Step 선택 */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-[var(--color-text-secondary)]">
            Step:
          </span>
          {STEP_OPTIONS.map((s) => (
            <button
              key={s}
              onClick={() => setStep(s)}
              className={[
                'w-8 h-8 rounded-full text-sm font-medium transition-all cursor-pointer',
                step === s
                  ? 'bg-indigo-500 text-white'
                  : 'bg-[var(--color-border)] text-[var(--color-text-secondary)] hover:bg-indigo-100',
              ].join(' ')}
            >
              {s}
            </button>
          ))}
        </div>

        {/* 컨트롤 버튼 */}
        <div className="flex gap-3">
          <Button variant="secondary" onClick={decrement}>
            − {step}
          </Button>
          <Button variant="ghost" size="sm" onClick={reset}>
            Reset
          </Button>
          <Button variant="primary" onClick={increment}>
            + {step}
          </Button>
        </div>
      </div>
    </Card>
  )
}
