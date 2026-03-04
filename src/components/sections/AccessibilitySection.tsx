import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const focusRings = [
  {
    context: 'Input focus',
    light: '0 0 0 3px rgba(0,120,185,0.08)',
    dark: '0 0 0 3px rgba(88,166,255,0.15)',
  },
  {
    context: 'Error focus',
    light: '0 0 0 3px rgba(196,32,10,0.06)',
    dark: '0 0 0 3px rgba(248,81,73,0.15)',
  },
  {
    context: 'Keyboard focus-visible',
    light: 'ring-2 ring-primary-300 ring-offset-2',
    dark: 'Same pattern, offset adapts',
  },
]

const a11yFeatures = [
  {
    feature: 'Skip Link',
    spec: 'sr-only, visible on :focus, styled as primary-500 pill',
    status: 'Implemented',
  },
  {
    feature: 'Focus-visible Ring',
    spec: 'ring-2 ring-primary-300 ring-offset-2 via Tailwind modifiers',
    status: 'Implemented',
  },
  {
    feature: 'Reduced Motion',
    spec: 'page-enter and loading-pulse disabled under prefers-reduced-motion',
    status: 'Implemented',
  },
  {
    feature: 'Dialog ARIA',
    spec: 'role="dialog", aria-modal, aria-labelledby, aria-describedby',
    status: 'Implemented',
  },
  {
    feature: 'Focus Trap',
    spec: 'Tab cycles within dialog panel, focus returns on close',
    status: 'Implemented',
  },
  {
    feature: 'Color Contrast',
    spec: 'All text meets WCAG AA in both themes',
    status: 'Verified',
  },
]

export function AccessibilitySection() {
  return (
    <section id="accessibility" className="scroll-mt-20 space-y-6">
      <div>
        <h2 className="page-title text-2xl mb-1">Accessibility</h2>
        <p className="text-[0.9375rem] text-[var(--color-muted)]">
          Focus management, motion preferences, ARIA patterns, and print styles.
        </p>
      </div>

      {/* Focus Rings */}
      <Card>
        <CardHeader>
          <CardTitle>Focus Rings</CardTitle>
          <CardDescription>Theme-specific focus indicators with appropriate alpha values.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-1 rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-border)]">
            <div className="grid grid-cols-3 px-4 py-2 bg-[var(--color-surface-soft)]">
              <span className="label-mono">Context</span>
              <span className="label-mono">Light</span>
              <span className="label-mono">Dark</span>
            </div>
            {focusRings.map((r) => (
              <div key={r.context} className="grid grid-cols-3 px-4 py-3 bg-[var(--color-surface)]">
                <span className="text-[0.8125rem] font-medium text-[var(--color-ink)]">{r.context}</span>
                <span className="text-[0.75rem] font-mono text-[var(--color-muted)]">{r.light}</span>
                <span className="text-[0.75rem] font-mono text-[var(--color-muted)]">{r.dark}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Live focus demo */}
      <Card>
        <CardHeader>
          <CardTitle>Focus Demo</CardTitle>
          <CardDescription>Tab into these controls to see focus ring behavior.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <input
              type="text"
              placeholder="Focus me"
              className="h-11 px-3.5 text-sm bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] text-[var(--color-ink)] placeholder:text-[var(--color-muted-light)] transition-all duration-150 focus:outline-none focus:border-[var(--color-primary-500)] focus:shadow-[0_0_0_3px_rgba(0,120,185,0.08)]"
            />
            <button className="h-11 px-5 text-[0.8125rem] font-medium bg-[var(--color-primary-500)] text-white rounded-[var(--radius-md)] border border-[var(--color-primary-500)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-300)] focus-visible:ring-offset-2 transition-all duration-150">
              Focus me
            </button>
            <button className="h-11 px-5 text-[0.8125rem] font-medium bg-[var(--color-surface)] text-[var(--color-ink)] rounded-[var(--radius-md)] border border-[var(--color-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-300)] focus-visible:ring-offset-2 transition-all duration-150">
              Secondary
            </button>
          </div>
        </CardContent>
      </Card>

      {/* A11y checklist */}
      <Card>
        <CardHeader>
          <CardTitle>Accessibility Checklist</CardTitle>
          <CardDescription>Built-in accessibility features across the design system.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-1 rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-border)]">
            {a11yFeatures.map((f) => (
              <div key={f.feature} className="flex items-center justify-between px-4 py-3 bg-[var(--color-surface)]">
                <div className="space-y-0.5">
                  <p className="text-[0.8125rem] font-medium text-[var(--color-ink)]">{f.feature}</p>
                  <p className="text-[0.75rem] text-[var(--color-muted)]">{f.spec}</p>
                </div>
                <span className="shrink-0 inline-flex items-center px-2 py-0.5 text-[0.6875rem] font-semibold rounded-[10px] bg-[var(--color-success-bg)] text-[var(--color-success)]">
                  {f.status}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Print */}
      <Card>
        <CardHeader>
          <CardTitle>Print Styles</CardTitle>
          <CardDescription>Utility classes for controlling print visibility.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="nordic-panel p-4 space-y-1">
              <p className="text-[0.8125rem] font-semibold text-[var(--color-ink)]" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace' }}>
                .no-print
              </p>
              <p className="text-[0.75rem] text-[var(--color-muted)]">
                Hidden in @media print via display: none !important
              </p>
            </div>
            <div className="nordic-panel p-4 space-y-1">
              <p className="text-[0.8125rem] font-semibold text-[var(--color-ink)]" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace' }}>
                .print-only
              </p>
              <p className="text-[0.75rem] text-[var(--color-muted)]">
                Hidden on screen, shown in @media print via display: block
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
