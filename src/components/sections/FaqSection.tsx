import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const faqs = [
  {
    q: 'Should dark mode be class-based or media-query based?',
    a: 'Production KolNord uses a .dark class on the root element toggled by JavaScript. The prefers-color-scheme token block is documented as an alternative pattern.',
    source: 'KolNord.md §6 + §14',
  },
  {
    q: 'Why are there short tokens and --color-* tokens?',
    a: 'Short tokens exist for standalone quick-start CSS. Tailwind v4 utility generation in production relies on --color-* prefixed tokens; both sets map to the same values.',
    source: 'KolNord.md §14 note',
  },
  {
    q: 'Why do shadows look stronger in dark mode?',
    a: 'Dark surfaces require much higher alpha values for shadows to register. KolNord Dark intentionally increases shadow intensity compared with light mode.',
    source: 'KolNord.md §4',
  },
  {
    q: 'Is a Select component already scaffolded?',
    a: 'Not yet. The Radix Select dependency is present, and native select styling is documented, but a full React Select component is still pending.',
    source: 'KolNord.md §7.6',
  },
  {
    q: 'What accessibility baseline is included?',
    a: 'Skip link, focus-visible rings, reduced-motion handling, Radix dialog focus management, and AA contrast targets are part of the documented baseline.',
    source: 'KolNord.md §11',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 space-y-6">
      <div>
        <h2 className="page-title text-2xl mb-1">FAQ & Troubleshooting</h2>
        <p className="text-[0.9375rem] text-[var(--color-muted)]">
          Frequent implementation questions resolved directly from the spec.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Common Questions</CardTitle>
          <CardDescription>Use these answers before introducing local deviations.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="nordic-panel px-4 py-3">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-3 text-[0.8125rem] font-semibold text-[var(--color-ink)]">
                <span>{item.q}</span>
                <span className="text-[var(--color-muted)]">+</span>
              </summary>
              <div className="pt-3 space-y-2">
                <p className="text-[0.8125rem] leading-[1.6] text-[var(--color-muted)]">{item.a}</p>
                <p className="text-[0.6875rem] font-mono text-[var(--color-muted-light)]">{item.source}</p>
              </div>
            </details>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
