import { Moon, Sun, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NavbarProps {
  dark: boolean
  onToggleDark: () => void
}

const navItems = [
  { id: 'components', label: 'Components' },
  { id: 'colors', label: 'Colors' },
  { id: 'shadows-spacing', label: 'Shadows' },
  { id: 'typography', label: 'Typography' },
  { id: 'icons', label: 'Icons' },
  { id: 'layout', label: 'Layout' },
  { id: 'utilities', label: 'Utilities' },
  { id: 'accessibility', label: 'A11y' },
  { id: 'stack', label: 'Stack' },
  { id: 'tokens', label: 'Tokens' },
]

export function Navbar({ dark, onToggleDark }: NavbarProps) {
  return (
    <header
      className="sticky top-0 z-40 h-14 flex items-center border-b border-[var(--color-border)] no-print"
      style={{
        background: dark
          ? 'rgba(22,27,34,0.85)'
          : 'var(--color-surface)',
        backdropFilter: dark ? 'blur(12px)' : 'none',
      }}
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8 flex items-center justify-between gap-6">
        {/* Brand */}
        <span
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-base font-semibold tracking-[-0.02em] text-[var(--color-ink)] shrink-0"
        >
          KOL<span style={{ color: 'var(--color-primary-500)' }}>NORD</span>
        </span>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-3 py-1.5 rounded-[var(--radius-md)] text-[0.8125rem] font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-surface-soft)] transition-all duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <Button variant="ghost" size="icon" onClick={onToggleDark} aria-label="Toggle theme">
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button size="sm" className="hidden sm:inline-flex rounded-full gap-1.5">
            <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
            New Component
          </Button>
        </div>
      </div>
    </header>
  )
}
