import {
  Plus, Moon, Sun, ChevronDown, Menu,
  ArrowRight, Filter, Settings, Search,
  Bell, User, Trash2, Edit3, Eye,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const iconContexts = [
  {
    context: 'Nav chevron',
    size: 14,
    strokeWidth: 2,
    icon: ChevronDown,
    spec: 'h-3.5 w-3.5',
  },
  {
    context: 'CTA button',
    size: 14,
    strokeWidth: 2.5,
    icon: Plus,
    spec: 'h-3.5 w-3.5, stroke 2.5',
  },
  {
    context: 'Mobile menu',
    size: 16,
    strokeWidth: 2,
    icon: Menu,
    spec: 'h-4 w-4',
  },
  {
    context: 'Action lane',
    size: 18,
    strokeWidth: 1.75,
    icon: Settings,
    spec: '18px, stroke 1.75',
  },
  {
    context: 'Action arrow',
    size: 16,
    strokeWidth: 2,
    icon: ArrowRight,
    spec: '16px, stroke 2',
  },
  {
    context: 'Filter button',
    size: 14,
    strokeWidth: 2,
    icon: Filter,
    spec: '14px, stroke 2',
  },
]

const sampleIcons = [
  { icon: Search, name: 'Search' },
  { icon: Bell, name: 'Bell' },
  { icon: User, name: 'User' },
  { icon: Settings, name: 'Settings' },
  { icon: Edit3, name: 'Edit3' },
  { icon: Trash2, name: 'Trash2' },
  { icon: Eye, name: 'Eye' },
  { icon: Plus, name: 'Plus' },
  { icon: Moon, name: 'Moon' },
  { icon: Sun, name: 'Sun' },
  { icon: ArrowRight, name: 'ArrowRight' },
  { icon: Filter, name: 'Filter' },
]

export function IconsSection() {
  return (
    <section id="icons" className="scroll-mt-20 space-y-6">
      <div>
        <h2 className="page-title text-2xl mb-1">Icons</h2>
        <p className="text-[0.9375rem] text-[var(--color-muted)]">
          lucide-react — consistent 24x24 viewBox, MIT licensed, tree-shakeable. Sizes and stroke widths vary by context.
        </p>
      </div>

      {/* Size contexts */}
      <Card>
        <CardHeader>
          <CardTitle>Size Contexts</CardTitle>
          <CardDescription>Each context uses a specific size and stroke width for optical balance.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {iconContexts.map((item) => (
              <div key={item.context} className="flex flex-col items-center gap-3 p-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)]">
                <div className="flex items-center justify-center w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-background)]">
                  <item.icon size={item.size} strokeWidth={item.strokeWidth} className="text-[var(--color-ink)]" />
                </div>
                <div className="text-center space-y-0.5">
                  <p className="text-[0.75rem] font-medium text-[var(--color-ink)]">{item.context}</p>
                  <p className="text-[0.6875rem] font-mono text-[var(--color-muted)]">{item.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Icon palette */}
      <Card>
        <CardHeader>
          <CardTitle>Icon Palette</CardTitle>
          <CardDescription>Common icons used across KOLNORD at the default 24px / stroke-width 2.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-3">
            {sampleIcons.map((item) => (
              <div
                key={item.name}
                className="group flex flex-col items-center gap-2 p-3 rounded-[var(--radius-md)] transition-colors duration-150 hover:bg-[var(--color-surface-soft)]"
              >
                <item.icon size={20} className="text-[var(--color-muted)] group-hover:text-[var(--color-ink)] transition-colors duration-150" />
                <span className="text-[0.625rem] font-mono text-[var(--color-muted-light)] group-hover:text-[var(--color-muted)] transition-colors duration-150">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
