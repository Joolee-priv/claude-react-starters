import { useState, useId } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import type { Todo } from '@/types'

type Filter = 'all' | 'active' | 'done'

const FILTER_LABELS: Record<Filter, string> = {
  all: '전체',
  active: '진행중',
  done: '완료',
}

export function TodoList() {
  const id = useId()
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      text: 'Vite + React 프로젝트 설정',
      completed: true,
      createdAt: new Date(),
    },
    {
      id: '2',
      text: 'Tailwind CSS v4 통합',
      completed: true,
      createdAt: new Date(),
    },
    {
      id: '3',
      text: '예제 컴포넌트 작성',
      completed: false,
      createdAt: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState<Filter>('all')

  const addTodo = () => {
    const text = inputValue.trim()
    if (!text) return
    setTodos((prev) => [
      ...prev,
      {
        id: `${id}-${Date.now()}`,
        text,
        completed: false,
        createdAt: new Date(),
      },
    ])
    setInputValue('')
  }

  const toggleTodo = (todoId: string) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todoId ? { ...t, completed: !t.completed } : t,
      ),
    )
  }

  const deleteTodo = (todoId: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== todoId))
  }

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed))
  }

  const filtered = todos.filter((t) => {
    if (filter === 'active') return !t.completed
    if (filter === 'done') return t.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.completed).length

  return (
    <Card title="Todo List">
      {/* 입력 영역 */}
      <div className="flex gap-2 mb-4">
        <Input
          placeholder="새 할 일 입력..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          className="flex-1"
        />
        <Button onClick={addTodo} disabled={!inputValue.trim()}>
          추가
        </Button>
      </div>

      {/* 필터 탭 */}
      <div className="flex gap-1 mb-3 p-1 bg-[var(--color-border)] rounded-lg">
        {(Object.keys(FILTER_LABELS) as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={[
              'flex-1 py-1.5 text-sm font-medium rounded-md transition-all cursor-pointer',
              filter === f
                ? 'bg-[var(--color-bg)] text-[var(--color-text-primary)] shadow-sm'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
            ].join(' ')}
          >
            {FILTER_LABELS[f]}
          </button>
        ))}
      </div>

      {/* Todo 목록 */}
      <ul className="flex flex-col gap-2 min-h-[120px]">
        {filtered.length === 0 && (
          <li className="text-center py-8 text-[var(--color-text-secondary)] text-sm">
            할 일이 없습니다
          </li>
        )}
        {filtered.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-3 p-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] group"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="w-4 h-4 rounded accent-indigo-500 cursor-pointer"
            />
            <span
              className={[
                'flex-1 text-sm',
                todo.completed
                  ? 'line-through text-[var(--color-text-secondary)]'
                  : 'text-[var(--color-text-primary)]',
              ].join(' ')}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition-all text-lg leading-none cursor-pointer"
              aria-label="삭제"
            >
              ×
            </button>
          </li>
        ))}
      </ul>

      {/* 하단 상태 */}
      <div className="flex justify-between items-center mt-4 text-xs text-[var(--color-text-secondary)]">
        <span>{activeCount}개 남음</span>
        {todos.some((t) => t.completed) && (
          <button
            onClick={clearCompleted}
            className="hover:text-red-500 transition-colors cursor-pointer"
          >
            완료 삭제
          </button>
        )}
      </div>
    </Card>
  )
}
