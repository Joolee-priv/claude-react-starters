import { Card } from '@/components/ui/Card'
import type { CardItem } from '@/types'

const CARDS: CardItem[] = [
  {
    id: '1',
    title: 'Vite v8',
    description:
      '번개처럼 빠른 HMR과 최적화된 빌드. ESM 기반 네이티브 개발 서버로 즉각적인 피드백.',
    tag: 'Build Tool',
    tagColor: 'bg-violet-100 text-violet-700',
  },
  {
    id: '2',
    title: 'React 19',
    description:
      'use(), 개선된 에러 처리, ref를 prop으로 전달 등 생산성을 높이는 새로운 기능들.',
    tag: 'UI Library',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: '3',
    title: 'TypeScript 6',
    description:
      'Strict 타입 안전성과 뛰어난 IDE 지원. erasableSyntaxOnly 등 최신 옵션 포함.',
    tag: 'Language',
    tagColor: 'bg-sky-100 text-sky-700',
  },
  {
    id: '4',
    title: 'Tailwind CSS v4',
    description:
      'Config 파일 없이 @import 한 줄로 시작. CSS-first 설정과 빠른 빌드 속도.',
    tag: 'Styling',
    tagColor: 'bg-emerald-100 text-emerald-700',
  },
]

export function CardGrid() {
  return (
    <Card title="기술 스택">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {CARDS.map((card) => (
          <div
            key={card.id}
            className={[
              'p-4 rounded-xl border border-[var(--color-border)]',
              'bg-[var(--color-bg)]',
              'hover:shadow-md hover:-translate-y-0.5',
              'transition-all duration-200 cursor-default',
            ].join(' ')}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-[var(--color-text-primary)]">
                {card.title}
              </h3>
              <span
                className={`shrink-0 px-2 py-0.5 rounded-full text-xs font-medium ${card.tagColor}`}
              >
                {card.tag}
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </Card>
  )
}
