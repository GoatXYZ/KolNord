import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const primaryScale = [
  { name: '50',  value: '#eef6fb', dark: false },
  { name: '100', value: '#d4eaf5', dark: false },
  { name: '200', value: '#a8d5eb', dark: false },
  { name: '300', value: '#6bb8dc', dark: false },
  { name: '400', value: '#339bcc', dark: false },
  { name: '500', value: '#0078b9', dark: true  },
  { name: '600', value: '#006aa5', dark: true  },
  { name: '700', value: '#004f7a', dark: true  },
  { name: '800', value: '#003552', dark: true  },
  { name: '900', value: '#001a29', dark: true  },
]

const semantic = [
  { name: 'success',    bg: '#edf7f0', text: '#1a7a3a', label: 'Success' },
  { name: 'danger',     bg: '#fef2f0', text: '#c4200a', label: 'Danger'  },
  { name: 'warning',    bg: '#fefce8', text: '#d4a017', label: 'Warning' },
  { name: 'info',       bg: '#eff6ff', text: '#2563eb', label: 'Info'    },
]

const surfaces = [
  { label: 'background',   value: 'var(--color-background)', token: '--color-background' },
  { label: 'surface-soft', value: 'var(--color-surface-soft)', token: '--color-surface-soft' },
  { label: 'surface',      value: 'var(--color-surface)', token: '--color-surface' },
  { label: 'border-light', value: 'var(--color-border-light)', token: '--color-border-light' },
  { label: 'border',       value: 'var(--color-border)', token: '--color-border' },
]

export function ColorsSection() {
  return (
    <section id="colors" className="space-y-6">
      <div>
        <h2 className="page-title text-2xl mb-1">Color System</h2>
        <p className="text-[0.9375rem] text-[var(--color-muted)]">
          One blue primary, semantic colors only where meaning demands it. Restrained and precise.
        </p>
      </div>

      {/* Primary scale */}
      <Card>
        <CardHeader>
          <CardTitle>Primary Scale</CardTitle>
          <CardDescription>10-step scale from 50–900. Primary action blue.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-1 rounded-[var(--radius-md)] overflow-hidden">
            {primaryScale.map((step) => (
              <div key={step.name} className="group">
                <div
                  className="h-16 w-full transition-transform duration-150 group-hover:scale-105"
                  style={{ background: step.value }}
                />
                <div className="mt-1.5 space-y-0.5">
                  <p className="label-mono">{step.name}</p>
                  <p className="text-[0.6875rem] text-[var(--color-muted-light)] font-mono">{step.value}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Semantic */}
      <Card>
        <CardHeader>
          <CardTitle>Semantic Colors</CardTitle>
          <CardDescription>Status and feedback colors with tinted backgrounds.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {semantic.map((s) => (
              <div key={s.name} className="space-y-2">
                <div
                  className="h-12 rounded-[var(--radius-md)] border border-[var(--color-border-light)]"
                  style={{ background: s.bg }}
                />
                <div
                  className="h-12 rounded-[var(--radius-md)]"
                  style={{ background: s.text }}
                />
                <p className="text-[0.8125rem] font-medium text-[var(--color-ink)]">{s.label}</p>
                <div className="space-y-0.5">
                  <p className="text-[0.6875rem] font-mono text-[var(--color-muted)]">{s.bg}</p>
                  <p className="text-[0.6875rem] font-mono text-[var(--color-muted)]">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Surfaces */}
      <Card>
        <CardHeader>
          <CardTitle>Surfaces & Borders</CardTitle>
          <CardDescription>Quiet surfaces — differentiated by border, not shadow.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-1 rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-border)]">
            {surfaces.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-between px-4 py-3"
                style={{ background: s.value }}
              >
                <span className="text-[0.8125rem] font-medium text-[var(--color-ink)]">{s.label}</span>
                <span className="text-[0.75rem] font-mono text-[var(--color-muted)]">{s.token}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
