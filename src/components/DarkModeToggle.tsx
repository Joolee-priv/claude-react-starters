import { useTheme } from '@/hooks/useTheme'

export function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
      className={[
        'relative inline-flex h-7 w-14 items-center rounded-full',
        'transition-colors duration-300',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500',
        isDark ? 'bg-indigo-500' : 'bg-slate-300',
      ].join(' ')}
    >
      <span
        className={[
          'inline-block h-5 w-5 rounded-full bg-white shadow-sm',
          'transform transition-transform duration-300',
          isDark ? 'translate-x-8' : 'translate-x-1',
        ].join(' ')}
      />
      <span className="absolute left-1.5 text-xs" aria-hidden="true">
        {!isDark && '☀️'}
      </span>
      <span className="absolute right-1.5 text-xs" aria-hidden="true">
        {isDark && '🌙'}
      </span>
    </button>
  )
}
