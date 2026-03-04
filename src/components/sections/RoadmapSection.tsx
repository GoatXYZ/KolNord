import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const implemented = [
  'Button',
  'Badge',
  'Card',
  'Stat Card',
  'Input',
  'Textarea',
  'Dialog',
  'Label',
  'Dropdown Menu',
  'Switch',
  'Progress',
  'Avatar',
  'Separator',
  'Tabs',
]

const pending = ['Select (Radix dependency available, scaffold not yet shipped)']

const roadmap = [
  {
    title: 'Complete the component set',
    detail: 'Ship a full Select component aligned with Input/Textarea sizing, focus states, and token usage.',
    source: 'KolNord.md §7.6',
  },
  {
    title: 'Strengthen validation and contracts',
    detail: 'Adopt optional runtime/API contract tooling such as Zod + OpenAPI generation (or ts-rest).',
    source: 'KolNord.md §13 Extra',
  },
  {
    title: 'Harden quality automation',
    detail: 'Add optional testing and quality layers: Vitest, Testing Library, Playwright, axe checks, visual regression, and formatter gates.',
    source: 'KolNord.md §13 Extra',
  },
]

export function RoadmapSection() {
  return (
    <section id="roadmap" className="scroll-mt-20 space-y-6">
      <div>
        <h2 className="page-title text-2xl mb-1">Roadmap & Component Status</h2>
        <p className="text-[0.9375rem] text-[var(--color-muted)]">
          What is complete now and what is next, based on the documented component and tooling sections.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Current Status</CardTitle>
            <CardDescription>Component coverage from the Components section.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="label-mono">Implemented</p>
              <div className="flex flex-wrap gap-2">
                {implemented.map((name) => (
                  <span
                    key={name}
                    className="inline-flex items-center px-2 py-0.5 text-[0.6875rem] font-semibold rounded-[10px] bg-[var(--color-success-bg)] text-[var(--color-success)]"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="label-mono">Pending</p>
              <div className="flex flex-wrap gap-2">
                {pending.map((name) => (
                  <span
                    key={name}
                    className="inline-flex items-center px-2 py-0.5 text-[0.6875rem] font-semibold rounded-[10px] bg-[var(--color-warning-bg)] text-[var(--color-warning)]"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Suggested Next Milestones</CardTitle>
            <CardDescription>Optional investments already documented in the stack guidance.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {roadmap.map((item, index) => (
              <div key={item.title} className="nordic-panel p-4 space-y-1">
                <p className="text-[0.8125rem] font-semibold text-[var(--color-ink)]">
                  {index + 1}. {item.title}
                </p>
                <p className="text-[0.8125rem] leading-[1.6] text-[var(--color-muted)]">{item.detail}</p>
                <p className="text-[0.6875rem] font-mono text-[var(--color-muted-light)]">{item.source}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
