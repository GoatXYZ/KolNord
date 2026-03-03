import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const typeScale = [
  { label: 'Display / Page Title',  size: 'clamp(1.5rem, 2.5vw, 1.75rem)', weight: '600', font: 'display', sample: 'Northern Precision' },
  { label: 'Section Heading',       size: '1.125rem (18px)',                 weight: '600', font: 'display', sample: 'Component Library' },
  { label: 'Card Title',            size: '1rem (16px)',                     weight: '600', font: 'display', sample: 'Design Tokens' },
  { label: 'Stat Value',            size: '2.75rem (44px)',                  weight: '600', font: 'display', sample: '42' },
  { label: 'Stat Value Dense',      size: '2.25rem (36px)',                  weight: '600', font: 'display', sample: '128' },
  { label: 'Body Base',             size: '0.875rem (14px)',                 weight: '400', font: 'body',    sample: 'The quick brown fox jumps over the lazy dog.' },
  { label: 'Page Subtitle',         size: '0.9375rem (15px)',                weight: '400', font: 'body',    sample: 'Nordic-inspired, minimal, precise.' },
  { label: 'Description',           size: '0.8125rem (13px)',                weight: '400', font: 'body',    sample: 'Cards and panels distinguished by border, not shadow.' },
  { label: 'Nav Link / Button',     size: '0.8125rem (13px)',                weight: '500', font: 'body',    sample: 'Dashboard · Quotes · Operations' },
  { label: 'Badge',                 size: '0.6875rem (11px)',                weight: '600', font: 'body',    sample: 'ACTIVE' },
  { label: 'Uppercase Label',       size: '0.75rem (12px)',                  weight: '500', font: 'body',    sample: 'SECTION HEADER' },
  { label: 'Hint Text',             size: '0.75rem (12px)',                  weight: '400', font: 'body',    sample: 'Required field, max 255 characters.' },
]

const fontStyleMap: Record<string, React.CSSProperties> = {
  display: { fontFamily: 'var(--font-display)' },
  body:    { fontFamily: 'var(--font-body)' },
}

export function TypographySection() {
  return (
    <section id="typography" className="space-y-6">
      <div>
        <h2 className="page-title text-2xl mb-1">Typography</h2>
        <p className="text-[0.9375rem] text-[var(--color-muted)]">
          Two fonts, strict weight/size ladder. Typography carries hierarchy.
        </p>
      </div>

      {/* Font stacks */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Display — Space Grotesk</CardTitle>
            <CardDescription>Headings, stat values, card titles, brand</CardDescription>
          </CardHeader>
          <CardContent>
            <p
              style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.2, color: 'var(--color-ink)' }}
            >
              Space Grotesk
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 400, color: 'var(--color-muted)', marginTop: '0.5rem' }}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              0123456789 !@#$%&
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Body — Instrument Sans</CardTitle>
            <CardDescription>Text, labels, form controls, buttons</CardDescription>
          </CardHeader>
          <CardContent>
            <p
              style={{ fontFamily: 'var(--font-body)', fontSize: '2rem', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--color-ink)' }}
            >
              Instrument Sans
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 400, color: 'var(--color-muted)', marginTop: '0.5rem' }}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              0123456789 !@#$%&
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Type scale */}
      <Card>
        <CardHeader>
          <CardTitle>Type Scale</CardTitle>
          <CardDescription>Strict size/weight ladder — no rounding, no softness for its own sake.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-[var(--color-border-light)]">
            {typeScale.map((row) => (
              <div key={row.label} className="px-6 py-4 flex items-center gap-6">
                <div className="w-44 shrink-0">
                  <p className="text-[0.75rem] font-medium text-[var(--color-ink)]">{row.label}</p>
                  <p className="text-[0.6875rem] font-mono text-[var(--color-muted)] mt-0.5">{row.size} · {row.weight}</p>
                </div>
                <p
                  style={{
                    ...fontStyleMap[row.font],
                    fontSize: row.size.split(' ')[0],
                    fontWeight: parseInt(row.weight),
                    color: 'var(--color-ink)',
                    lineHeight: 1.2,
                  }}
                  className="truncate"
                >
                  {row.sample}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
