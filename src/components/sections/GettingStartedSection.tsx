import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const setupSteps = [
  {
    title: 'Load the approved font stack',
    description:
      'Use Instrument Sans (body) and Space Grotesk (display) exactly as defined in Typography. Keep the fallback stacks unchanged for consistency.',
    source: 'KolNord.md §2',
  },
  {
    title: 'Install the token foundation',
    description:
      'Start from the Quick-Start Token Block. Choose KolNord (Light), KolNord Dark, or the prefers-color-scheme variant based on project needs.',
    source: 'KolNord.md §14',
  },
  {
    title: 'Keep Tailwind token naming in sync',
    description:
      'For production Tailwind v4 utilities, use --color-* prefixed tokens. The short token names in quick-start CSS map to the same values.',
    source: 'KolNord.md §14 note',
  },
  {
    title: 'Apply theme behavior correctly',
    description:
      'Production uses class-based dark mode (.dark on root, toggled by JavaScript). The media-query route is an alternative, not the production default.',
    source: 'KolNord.md §6 + §14',
  },
  {
    title: 'Build with the core stack only',
    description:
      'Treat React, TypeScript, Vite, Tailwind CSS v4, pnpm, Radix UI, and shadcn/ui as required. Add everything else only if scope demands it.',
    source: 'KolNord.md §13',
  },
]

const themePaths = [
  {
    name: 'KolNord (Light)',
    useCase: 'Bright, restrained default for docs and product surfaces.',
  },
  {
    name: 'KolNord Dark',
    useCase: 'Class-based dark UI with stronger shadow alpha and glass nav treatment.',
  },
  {
    name: 'Both via prefers-color-scheme',
    useCase: 'Automatic OS-driven switching for projects that avoid manual theme toggles.',
  },
]

export function GettingStartedSection() {
  return (
    <section id="getting-started" className="scroll-mt-20 space-y-6">
      <div>
        <h2 className="page-title text-2xl mb-1">Getting Started</h2>
        <p className="text-[0.9375rem] text-[var(--color-muted)]">
          Minimal boot sequence for adopting KolNord without drifting from the source spec.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Bootstrap Order</CardTitle>
          <CardDescription>Follow this order to keep typography, tokens, and theme behavior aligned.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {setupSteps.map((step, index) => (
              <div key={step.title} className="nordic-panel p-4 space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[0.875rem] font-semibold text-[var(--color-ink)]">
                    {index + 1}. {step.title}
                  </p>
                  <span className="shrink-0 text-[0.6875rem] font-mono text-[var(--color-muted-light)]">
                    {step.source}
                  </span>
                </div>
                <p className="text-[0.8125rem] leading-[1.6] text-[var(--color-muted)]">{step.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Theme Paths</CardTitle>
          <CardDescription>All three approaches are documented; choose one intentionally per project.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {themePaths.map((path) => (
              <div key={path.name} className="nordic-panel p-4 space-y-2">
                <p className="text-[0.8125rem] font-semibold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                  {path.name}
                </p>
                <p className="text-[0.75rem] leading-[1.6] text-[var(--color-muted)]">{path.useCase}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
