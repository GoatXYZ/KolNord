import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const workflow = [
  {
    step: 'Update the spec first',
    detail: 'Write the design decision into the relevant section of KolNord.md before touching implementation.',
  },
  {
    step: 'Implement with token fidelity',
    detail: 'Map implementation back to documented token names, component contracts, and layout dimensions.',
  },
  {
    step: 'Validate both themes',
    detail: 'Check KolNord and KolNord Dark behaviors, including hover, focus, and surface differences.',
  },
  {
    step: 'Run the accessibility pass',
    detail: 'Preserve skip link behavior, focus-visible rings, reduced-motion handling, and WCAG AA contrast targets.',
  },
]

const guardrails = [
  'Restrained color: keep a single primary blue and semantic status colors only where meaning requires it.',
  'Precision over decoration: preserve 4px radii, 1px borders, and exact typography values.',
  'Quiet surfaces: differentiate layers with border and spacing before adding visual effects.',
  'Consistent interactions: maintain 150ms timing and shared focus ring patterns.',
]

export function ContributingSection() {
  return (
    <section id="contributing" className="scroll-mt-20 space-y-6">
      <div>
        <h2 className="page-title text-2xl mb-1">Contributing</h2>
        <p className="text-[0.9375rem] text-[var(--color-muted)]">
          Doc-first workflow for extending KolNord without breaking its visual contract.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contribution Workflow</CardTitle>
          <CardDescription>Changes stay stable when spec updates and implementation move together.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {workflow.map((item, index) => (
            <div key={item.step} className="nordic-panel p-4 space-y-1">
              <p className="text-[0.8125rem] font-semibold text-[var(--color-ink)]">
                {index + 1}. {item.step}
              </p>
              <p className="text-[0.8125rem] leading-[1.6] text-[var(--color-muted)]">{item.detail}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Design Guardrails</CardTitle>
          <CardDescription>Hard constraints derived from the Design Principles section.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {guardrails.map((rule, index) => (
            <p key={rule} className="text-[0.8125rem] leading-[1.6] text-[var(--color-muted)]">
              <span className="text-[var(--color-ink)] font-medium">{index + 1}.</span> {rule}
            </p>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
