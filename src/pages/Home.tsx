import { Counter } from '@/components/Counter'
import { TodoList } from '@/components/TodoList'
import { CardGrid } from '@/components/CardGrid'
import { DarkModeToggle } from '@/components/DarkModeToggle'

export function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] transition-colors duration-200">
      {/* 상단 헤더 */}
      <header className="sticky top-0 z-10 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
              React StarterKit
            </h1>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Vite v8 · React 19 · Tailwind CSS v4 · TypeScript 6
            </p>
          </div>
          <DarkModeToggle />
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Counter />
          <TodoList />
          <div className="lg:col-span-2">
            <CardGrid />
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="text-center py-8 text-xs text-[var(--color-text-secondary)]">
        Built with Vite + React + TypeScript + Tailwind CSS v4
      </footer>
    </div>
  )
}
