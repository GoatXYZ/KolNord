import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const shadows = [
  { token: '--shadow-sm', label: 'sm', light: '0 1px 2px rgba(0,0,0,0.04)', dark: '0 1px 3px rgba(0,0,0,0.3)' },
  { token: '--shadow-md', label: 'md', light: '0 2px 8px rgba(0,0,0,0.06)', dark: '0 2px 8px rgba(0,0,0,0.4)' },
  { token: '--shadow-hover', label: 'hover', light: '0 2px 12px rgba(0,0,0,0.08)', dark: '0 2px 12px rgba(0,0,0,0.5)' },
  { token: '--shadow-lg', label: 'lg', light: '0 4px 16px rgba(0,0,0,0.08)', dark: '0 4px 16px rgba(0,0,0,0.5)' },
]

const radii = [
  { token: '--radius-sm', value: '4px', usage: 'Dropdown items, inner elements' },
  { token: '--radius-md', value: '4px', usage: 'Cards, buttons, inputs, nav links' },
  { token: '--radius-lg', value: '6px', usage: 'Dialog panels' },
  { token: '--radius-xl', value: '8px', usage: 'Reserved' },
]

const spacing = [
  { element: 'Page max-width', value: '1400px' },
  { element: 'Page padding', value: '16px mobile, 32px desktop' },
  { element: 'Sidebar column', value: '360px' },
  { element: 'Main grid gap', value: '32px' },
  { element: 'Dialog max-width', value: '448px' },
  { element: 'Dropdown min-width', value: '176px' },
]

export function ShadowsSpacingSection() {
  return (
    <section id="shadows-spacing" className="scroll-mt-20 space-y-6">
      <div>
        <h2 className="page-title text-2xl mb-1">Shadows & Spacing</h2>
        <p className="text-[0.9375rem] text-[var(--color-muted)]">
          Depth, curvature, and spatial tokens. Dark mode uses 6-12x higher shadow alpha.
        </p>
      </div>

      {/* Shadow scale */}
      <Card>
        <CardHeader>
          <CardTitle>Shadow Scale</CardTitle>
          <CardDescription>Four elevation levels — hover any card to preview its shadow live.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {shadows.map((s) => (
              <div
                key={s.token}
                className="flex flex-col items-center gap-3 p-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] transition-shadow duration-200"
                style={{ boxShadow: `var(${s.token})` }}
              >
                <div
                  className="w-full aspect-[4/3] rounded-[var(--radius-sm)] bg-[var(--color-surface)]"
                  style={{ boxShadow: `var(${s.token})` }}
                />
                <div className="text-center space-y-0.5">
                  <p className="text-[0.8125rem] font-semibold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                    {s.label}
                  </p>
                  <p className="text-[0.6875rem] font-mono text-[var(--color-muted)]">{s.token}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Radius scale */}
      <Card>
        <CardHeader>
          <CardTitle>Radius Scale</CardTitle>
          <CardDescription>Tight and precise — 4px base, no softness for its own sake.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {radii.map((r) => (
              <div key={r.token} className="space-y-3">
                <div
                  className="h-20 w-full border-2 border-[var(--color-primary-500)] bg-[var(--color-primary-50)]"
                  style={{ borderRadius: r.value }}
                />
                <div className="space-y-0.5">
                  <p className="text-[0.8125rem] font-medium text-[var(--color-ink)]">{r.value}</p>
                  <p className="text-[0.6875rem] font-mono text-[var(--color-muted)]">{r.token}</p>
                  <p className="text-[0.75rem] text-[var(--color-muted)]">{r.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Content widths */}
      <Card>
        <CardHeader>
          <CardTitle>Content Widths</CardTitle>
          <CardDescription>Spatial constraints for layout consistency.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-1 rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-border)]">
            {spacing.map((s) => (
              <div
                key={s.element}
                className="flex items-center justify-between px-4 py-3 bg-[var(--color-surface)]"
              >
                <span className="text-[0.8125rem] font-medium text-[var(--color-ink)]">{s.element}</span>
                <span className="text-[0.75rem] font-mono text-[var(--color-muted)]">{s.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
