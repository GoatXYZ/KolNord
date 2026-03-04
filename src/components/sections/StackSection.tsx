import { Card, CardContent } from '@/components/ui/card'

const core = [
  {
    name: 'React 19',
    role: 'UI Framework',
    description: 'Component model, concurrent features, and the latest React Server Components support.',
  },
  {
    name: 'TypeScript',
    role: 'Language',
    description: 'Strict type-checking across components, tokens, and props for zero-ambiguity contracts.',
  },
  {
    name: 'Vite 7',
    role: 'Build',
    description: 'Lightning-fast dev server and production bundler with native ESM and HMR.',
  },
  {
    name: 'Tailwind CSS v4',
    role: 'Styling',
    description: 'Utility-first CSS with @theme token injection — no config file, zero-runtime.',
  },
  {
    name: 'Radix UI',
    role: 'Primitives',
    description: 'Accessible, unstyled primitives for dialogs, dropdowns, tooltips, and more.',
  },
  {
    name: 'shadcn/ui',
    role: 'Components',
    description: 'Copy-paste component scaffolding. New York style, slate base, CSS variables enabled.',
  },
]

const utilities = [
  {
    name: 'cva',
    role: 'Variants',
    description: 'Class Variance Authority for type-safe component variant maps with Tailwind.',
  },
  {
    name: 'tailwind-merge',
    role: 'Class Resolution',
    description: 'Resolves Tailwind class conflicts so overrides work predictably in cn().',
  },
  {
    name: 'clsx',
    role: 'Class Builder',
    description: 'Conditional class string builder — the other half of the cn() utility.',
  },
  {
    name: 'lucide-react',
    role: 'Icons',
    description: 'Consistent 24x24 stroke icons. MIT licensed, tree-shakeable, 1 500+ glyphs.',
  },
  {
    name: 'pnpm',
    role: 'Package Manager',
    description: 'Fast, disk-efficient package manager with workspace support for monorepos.',
  },
  {
    name: 'ESLint',
    role: 'Linting',
    description: 'Flat config with typescript-eslint, react-hooks, and react-refresh plugins.',
  },
]

const ecosystem = [
  {
    name: 'React Router',
    role: 'Routing',
    description: 'Declarative client-side routing with nested layouts, loaders, and URL-driven state.',
  },
  {
    name: 'cmdk',
    role: 'Command Menu',
    description: 'Fast, composable command palette for keyboard-driven search and navigation.',
  },
  {
    name: 'Express v5',
    role: 'Backend',
    description: 'Minimal HTTP server framework for REST APIs with async middleware support.',
  },
  {
    name: 'SQLite',
    role: 'Database',
    description: 'Embedded relational database via better-sqlite3 — zero-server, single-file persistence.',
  },
  {
    name: 'Electron',
    role: 'Desktop',
    description: 'Wraps web apps into native desktop binaries with OS-level APIs and IPC.',
  },
  {
    name: 'Vitest',
    role: 'Testing',
    description: 'Vite-native unit test runner with instant HMR re-runs and ESM-first architecture.',
  },
]

function StackGrid({ items }: { items: typeof core }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <Card key={item.name} className="group">
          <CardContent className="pt-5 pb-5 space-y-2">
            <div className="flex items-center justify-between gap-3">
              <h3
                className="text-[0.9375rem] font-semibold text-[var(--color-ink)]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {item.name}
              </h3>
              <span className="shrink-0 inline-flex items-center px-2 py-0.5 text-[0.6875rem] font-medium rounded-[var(--radius-sm)] border border-[var(--color-border)] text-[var(--color-muted)] bg-[var(--color-background)]">
                {item.role}
              </span>
            </div>
            <p className="text-[0.8125rem] leading-[1.6] text-[var(--color-muted)]">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function StackSection() {
  return (
    <section id="stack" className="scroll-mt-20 space-y-6">
      <div>
        <h2 className="page-title text-2xl mb-1">Stack</h2>
        <p className="text-[0.9375rem] text-[var(--color-muted)]">
          The tooling behind KOLNORD — each dependency chosen for precision, not novelty.
        </p>
      </div>

      {/* Core */}
      <div className="space-y-3">
        <p className="label-mono">Core</p>
        <StackGrid items={core} />
      </div>

      {/* Utilities & Tooling */}
      <div className="space-y-3">
        <p className="label-mono">Utilities & Tooling</p>
        <StackGrid items={utilities} />
      </div>

      {/* Ecosystem */}
      <div className="space-y-3">
        <p className="label-mono">Ecosystem</p>
        <StackGrid items={ecosystem} />
      </div>
    </section>
  )
}
