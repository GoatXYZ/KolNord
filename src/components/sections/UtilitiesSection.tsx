import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const utilities = [
  {
    name: 'nordic-panel',
    description: 'Card-like container with hover shadow escalation.',
    demo: 'panel' as const,
  },
  {
    name: 'accent-stripe',
    description: 'Left 3px primary accent bar via ::before pseudo-element.',
    demo: 'stripe' as const,
  },
  {
    name: 'label-mono',
    description: 'Uppercase micro-label for section headers.',
    demo: 'label' as const,
  },
  {
    name: 'page-title',
    description: 'Responsive title with clamp() fluid sizing.',
    demo: 'title' as const,
  },
  {
    name: 'nordic-divider',
    description: 'Thin 1px separator using border-light color.',
    demo: 'divider' as const,
  },
]

const animations = [
  {
    name: 'page-enter',
    keyframes: 'fade-up 250ms ease-out',
    description: 'Fade + translateY(8px) entrance for page content.',
  },
  {
    name: 'loading-pulse',
    keyframes: 'gentle-pulse 1.5s ease-in-out infinite',
    description: 'Subtle opacity pulse for loading placeholders.',
  },
]

function UtilityDemo({ demo }: { demo: typeof utilities[number]['demo'] }) {
  switch (demo) {
    case 'panel':
      return (
        <div className="nordic-panel p-4">
          <p className="text-[0.8125rem] text-[var(--color-ink)]">Hover me for shadow</p>
        </div>
      )
    case 'stripe':
      return (
        <div className="accent-stripe nordic-panel p-4 pl-5">
          <p className="text-[0.8125rem] text-[var(--color-ink)]">Accent stripe left</p>
        </div>
      )
    case 'label':
      return <p className="label-mono">Section Label</p>
    case 'title':
      return <p className="page-title">Page Title</p>
    case 'divider':
      return (
        <div className="space-y-2">
          <p className="text-[0.8125rem] text-[var(--color-muted)]">Above</p>
          <hr className="nordic-divider" />
          <p className="text-[0.8125rem] text-[var(--color-muted)]">Below</p>
        </div>
      )
  }
}

export function UtilitiesSection() {
  return (
    <section id="utilities" className="scroll-mt-20 space-y-6">
      <div>
        <h2 className="page-title text-2xl mb-1">Utilities</h2>
        <p className="text-[0.9375rem] text-[var(--color-muted)]">
          Production CSS utilities defined in @layer utilities. Reusable patterns for panels, labels, and motion.
        </p>
      </div>

      {/* Live utility demos */}
      <Card>
        <CardHeader>
          <CardTitle>Utility Classes</CardTitle>
          <CardDescription>Live previews of each utility. Hover the panel demo to see the shadow.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {utilities.map((u) => (
              <div key={u.name} className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-4 items-start">
                <div className="space-y-0.5">
                  <p
                    className="text-[0.875rem] font-semibold text-[var(--color-ink)]"
                    style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace', fontSize: '0.8125rem' }}
                  >
                    .{u.name}
                  </p>
                  <p className="text-[0.75rem] text-[var(--color-muted)]">{u.description}</p>
                </div>
                <div className="min-h-[48px] flex items-center">
                  <UtilityDemo demo={u.demo} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Animations */}
      <Card>
        <CardHeader>
          <CardTitle>Animations</CardTitle>
          <CardDescription>Both animations respect prefers-reduced-motion: reduce.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {animations.map((a) => (
              <div key={a.name} className="nordic-panel p-4 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <p
                    className="text-[0.8125rem] font-semibold text-[var(--color-ink)]"
                    style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace' }}
                  >
                    .{a.name}
                  </p>
                  <span className="text-[0.6875rem] font-mono text-[var(--color-muted-light)]">{a.keyframes}</span>
                </div>
                <p className="text-[0.75rem] text-[var(--color-muted)]">{a.description}</p>
                <div
                  className={`h-8 rounded-[var(--radius-sm)] bg-[var(--color-primary-50)] border border-[var(--color-primary-200)] ${a.name}`}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
