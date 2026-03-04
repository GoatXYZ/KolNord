import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const timeline = [
  {
    stage: 'Exploration Phase',
    detail:
      'KolNord was selected as the production direction from 10 exploration tracks, balancing restraint with operational clarity.',
    source: 'KolNord.md intro',
  },
  {
    stage: 'Prototype Phase',
    detail:
      'The system was first prototyped as two standalone HTML files: Nordic Clean (light) and Nordic Night (dark).',
    source: 'KolNord.md §15',
  },
  {
    stage: 'Current Baseline',
    detail:
      'Now implemented as a React + Vite system with documented tokens, component contracts, utilities, accessibility rules, and stack guidance.',
    source: 'KolNord.md §3-§14',
  },
]

const versionPolicy = [
  'KolNord.md is the canonical contract; implement UI changes from it, not the other way around.',
  'Each change should preserve parity across KolNord and KolNord Dark unless explicitly scoped to one theme.',
  'Behavioral updates should cite affected sections (tokens, components, layout, utilities, or accessibility).',
]

export function ChangelogSection() {
  return (
    <section id="changelog" className="scroll-mt-20 space-y-6">
      <div>
        <h2 className="page-title text-2xl mb-1">Changelog & Versioning</h2>
        <p className="text-[0.9375rem] text-[var(--color-muted)]">
          Historical context and change-control rules derived from the source document.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Timeline</CardTitle>
          <CardDescription>Design evolution captured directly from the documented origins.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {timeline.map((item, index) => (
              <div key={item.stage} className="nordic-panel p-4 space-y-1">
                <p className="text-[0.8125rem] font-semibold text-[var(--color-ink)]">
                  {index + 1}. {item.stage}
                </p>
                <p className="text-[0.8125rem] leading-[1.6] text-[var(--color-muted)]">{item.detail}</p>
                <p className="text-[0.6875rem] font-mono text-[var(--color-muted-light)]">{item.source}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Versioning Rules</CardTitle>
          <CardDescription>Use these rules to keep future changes coherent.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {versionPolicy.map((rule, index) => (
            <p key={rule} className="text-[0.8125rem] leading-[1.6] text-[var(--color-muted)]">
              <span className="text-[var(--color-ink)] font-medium">{index + 1}.</span> {rule}
            </p>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
