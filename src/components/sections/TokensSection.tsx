import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const tokens = [
  {
    category: 'Primary',
    rows: [
      ['--color-primary-500', '#0078b9', 'Primary action blue'],
      ['--color-primary-600', '#006aa5', 'Primary hover'],
      ['--color-primary-50',  '#eef6fb', 'Tinted backgrounds'],
      ['--color-primary-100', '#d4eaf5', 'Badge/input tints'],
    ],
  },
  {
    category: 'Ink / Text',
    rows: [
      ['--color-ink',        '#1e293b', 'Primary text'],
      ['--color-ink-light',  '#334155', 'Secondary text'],
      ['--color-muted',      '#8993a4', 'Tertiary / labels'],
      ['--color-muted-light','#a3adb8', 'Placeholder / disabled'],
    ],
  },
  {
    category: 'Surfaces',
    rows: [
      ['--color-surface',      '#ffffff', 'Card / panel / nav background'],
      ['--color-surface-soft', '#f7f8fa', 'Table header, soft fills'],
      ['--color-background',   '#f7f8fa', 'Page background'],
    ],
  },
  {
    category: 'Borders',
    rows: [
      ['--color-border',       '#e2e6ed', 'Primary border'],
      ['--color-border-light', '#eef0f4', 'Dividers, separators'],
    ],
  },
  {
    category: 'Semantic',
    rows: [
      ['--color-success',    '#1a7a3a', 'Success text'],
      ['--color-success-bg', '#edf7f0', 'Success background'],
      ['--color-danger',     '#c4200a', 'Danger / error text'],
      ['--color-danger-bg',  '#fef2f0', 'Danger background'],
      ['--color-warning',    '#d4a017', 'Warning text'],
      ['--color-warning-bg', '#fefce8', 'Warning background'],
    ],
  },
  {
    category: 'Radius',
    rows: [
      ['--radius-sm', '4px', 'Dropdown items, inner elements'],
      ['--radius-md', '4px', 'Cards, buttons, inputs'],
      ['--radius-lg', '6px', 'Dialog panels'],
      ['--radius-xl', '8px', 'Reserved'],
    ],
  },
  {
    category: 'Shadows',
    rows: [
      ['--shadow-sm',    '0 1px 2px rgba(0,0,0,0.04)',  'Default card shadow'],
      ['--shadow-md',    '0 2px 8px rgba(0,0,0,0.06)',  'Elevated / hover'],
      ['--shadow-hover', '0 2px 12px rgba(0,0,0,0.08)', 'Stat card hover'],
      ['--shadow-lg',    '0 4px 16px rgba(0,0,0,0.08)', 'Dialog'],
    ],
  },
]

const isColor = (v: string) => v.startsWith('#')

export function TokensSection() {
  return (
    <section id="tokens" className="space-y-6">
      <div>
        <h2 className="page-title text-2xl mb-1">Design Tokens</h2>
        <p className="text-[0.9375rem] text-[var(--color-muted)]">
          CSS custom properties powering both KolNord (light) and KolNord Dark themes.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {tokens.map((group) => (
          <Card key={group.category}>
            <CardHeader>
              <CardTitle>{group.category}</CardTitle>
              <CardDescription>{group.rows.length} tokens</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-[var(--color-border-light)]">
                {group.rows.map(([token, value, desc]) => (
                  <div key={token} className="flex items-center gap-3 px-6 py-2.5">
                    {isColor(value) ? (
                      <div
                        className="h-5 w-5 shrink-0 rounded border border-[var(--color-border-light)]"
                        style={{ background: value }}
                      />
                    ) : (
                      <div className="h-5 w-5 shrink-0 flex items-center justify-center text-[0.6rem] text-[var(--color-muted)] font-mono border border-[var(--color-border-light)] rounded">
                        px
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-[0.75rem] font-mono text-[var(--color-ink)] truncate">{token}</p>
                      <p className="text-[0.6875rem] text-[var(--color-muted)] truncate">{desc}</p>
                    </div>
                    <span className="text-[0.6875rem] font-mono text-[var(--color-muted-light)] shrink-0">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick start block */}
      <Card>
        <CardHeader>
          <CardTitle>Quick-Start CSS Block</CardTitle>
          <CardDescription>Drop into any project to bootstrap the KolNord light theme.</CardDescription>
        </CardHeader>
        <CardContent>
          <pre
            className="text-[0.75rem] font-mono text-[var(--color-ink)] bg-[var(--color-background)] border border-[var(--color-border)] rounded-[var(--radius-md)] p-4 overflow-x-auto leading-[1.8] whitespace-pre-wrap"
          >
{`:root {
  --font-display: 'Space Grotesk', 'Instrument Sans', sans-serif;
  --font-body: 'Instrument Sans', -apple-system, sans-serif;

  --color-primary-500: #0078b9;
  --color-primary-600: #006aa5;
  --color-primary-50:  #eef6fb;

  --color-ink:        #1e293b;
  --color-muted:      #8993a4;
  --color-surface:    #ffffff;
  --color-background: #f7f8fa;
  --color-border:     #e2e6ed;

  --radius-md: 4px;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
}`}
          </pre>
        </CardContent>
      </Card>
    </section>
  )
}
