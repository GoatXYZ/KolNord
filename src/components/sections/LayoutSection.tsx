import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export function LayoutSection() {
  return (
    <section id="layout" className="scroll-mt-20 space-y-6">
      <div>
        <h2 className="page-title text-2xl mb-1">Layout</h2>
        <p className="text-[0.9375rem] text-[var(--color-muted)]">
          App shell structure, grid patterns, and responsive breakpoints.
        </p>
      </div>

      {/* App Shell */}
      <Card>
        <CardHeader>
          <CardTitle>App Shell</CardTitle>
          <CardDescription>Sticky nav, constrained content, fade-up entrance animation.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] overflow-hidden text-[0.75rem] font-mono text-[var(--color-muted)]">
            {/* Mini nav */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
              <span className="text-[var(--color-ink)] font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                NavBar
              </span>
              <span>sticky · h-14 · border-bottom</span>
            </div>
            {/* Content area */}
            <div className="p-4 bg-[var(--color-background)]">
              <div className="border border-dashed border-[var(--color-border)] rounded-[var(--radius-sm)] p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[var(--color-ink)]">max-w-[1400px] · px-4 sm:px-8 · py-8</span>
                </div>
                <div className="border-b border-[var(--color-border-light)]" />
                <div className="space-y-2">
                  <div className="h-4 w-48 rounded-[var(--radius-sm)] bg-[var(--color-border)]" />
                  <div className="h-3 w-64 rounded-[var(--radius-sm)] bg-[var(--color-border-light)]" />
                </div>
                <div className="h-20 rounded-[var(--radius-sm)] bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)]">
                  Content · page-enter animation
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Grid */}
      <Card>
        <CardHeader>
          <CardTitle>Main Grid</CardTitle>
          <CardDescription>Two-column layout with 360px sidebar. Collapses below 1080px.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] overflow-hidden">
            <div className="p-4 bg-[var(--color-background)]">
              <div className="grid grid-cols-[1fr_140px] gap-3 text-[0.75rem] font-mono">
                {/* Main */}
                <div className="space-y-2">
                  {['Card', 'Card', 'Card'].map((label, i) => (
                    <div
                      key={i}
                      className="h-14 rounded-[var(--radius-sm)] bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)]"
                    >
                      {label}
                    </div>
                  ))}
                  <p className="text-center text-[var(--color-muted-light)]">Main (1fr)</p>
                </div>
                {/* Sidebar */}
                <div className="space-y-2">
                  {['Card', 'Card'].map((label, i) => (
                    <div
                      key={i}
                      className="h-14 rounded-[var(--radius-sm)] bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)]"
                    >
                      {label}
                    </div>
                  ))}
                  <p className="text-center text-[var(--color-muted-light)]">Sidebar (360px)</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Page Header */}
      <Card>
        <CardHeader>
          <CardTitle>Page Header</CardTitle>
          <CardDescription>Title, optional subtitle, and action buttons. Separated by a divider.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="text-[1rem] font-semibold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.015em' }}>
                  Page Title
                </div>
                <div className="text-[0.8125rem] text-[var(--color-muted)]">
                  Optional subtitle or description text
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <div className="h-8 px-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center text-[0.75rem] text-[var(--color-muted)]">
                  Action
                </div>
                <div className="h-8 px-3 rounded-[var(--radius-md)] bg-[var(--color-primary-500)] flex items-center text-[0.75rem] text-white">
                  Primary
                </div>
              </div>
            </div>
            <div className="mt-4 h-px bg-[var(--color-border-light)]" />
            <p className="mt-3 text-[0.6875rem] font-mono text-[var(--color-muted-light)]">
              border-bottom · mb-6 · pb-4
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
