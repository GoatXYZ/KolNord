import { Card, CardContent } from '@/components/ui/card'

type StackItem = {
  name: string
  role: string
  description: string
}

const core: StackItem[] = [
  {
    name: 'React 19',
    role: 'UI Framework',
    description: 'Component model with concurrent features.',
  },
  {
    name: 'TypeScript',
    role: 'Language',
    description: 'Strict type-checking across components, tokens, and props.',
  },
  {
    name: 'Vite 7',
    role: 'Build',
    description: 'Dev server + production bundler with native ESM and HMR.',
  },
  {
    name: 'Tailwind CSS v4',
    role: 'Styling',
    description: 'Utility-first CSS via @theme token definitions in globals.css.',
  },
  {
    name: 'pnpm',
    role: 'Package Manager',
    description: 'Workspace-aware dependency and script runner.',
  },
  {
    name: 'Radix UI',
    role: 'Primitives',
    description: 'Accessible, unstyled primitives for interaction-heavy components.',
  },
  {
    name: 'shadcn/ui',
    role: 'Scaffolding',
    description: 'Component scaffolding conventions with copied local UI components.',
  },
]

const extra: StackItem[] = [
  {
    name: 'class-variance-authority (cva)',
    role: 'Variants',
    description: 'Variant matrix helper for component APIs.',
  },
  {
    name: 'tailwind-merge',
    role: 'Class Resolution',
    description: 'Resolves conflicting Tailwind utilities.',
  },
  {
    name: 'clsx',
    role: 'Class Builder',
    description: 'Conditional class composition helper.',
  },
  {
    name: 'lucide-react',
    role: 'Icons',
    description: 'Consistent icon system with tree-shakeable imports.',
  },
  {
    name: 'Turborepo',
    role: 'Monorepo',
    description: 'Task orchestration for dev/build/lint/typecheck.',
  },
  {
    name: 'ESLint',
    role: 'Static Analysis',
    description: 'Code-quality checks for TypeScript and React patterns.',
  },
  {
    name: 'Prettier or Biome',
    role: 'Formatting',
    description: 'Deterministic formatting and reduced review noise.',
  },
  {
    name: 'lint-staged + Husky',
    role: 'Git Hooks',
    description: 'Pre-commit quality gates on staged files.',
  },
  {
    name: 'React Router',
    role: 'Routing',
    description: 'Nested client-side layouts and URL-driven state.',
  },
  {
    name: 'cmdk',
    role: 'Command Palette',
    description: 'Keyboard-first command and navigation UI.',
  },
  {
    name: 'Vitest',
    role: 'Unit Testing',
    description: 'Fast Vite-native test runner for component and utility tests.',
  },
  {
    name: '@testing-library/react + jsdom',
    role: 'Component Testing',
    description: 'User-centric behavioral tests in a DOM-like environment.',
  },
  {
    name: 'Playwright',
    role: 'E2E Testing',
    description: 'Browser-level regression coverage for critical flows.',
  },
  {
    name: 'axe-core / @axe-core/playwright',
    role: 'A11y Testing',
    description: 'Automated accessibility checks in component and E2E layers.',
  },
  {
    name: 'Storybook',
    role: 'Component Docs',
    description: 'Isolated development and documentation surface for UI components.',
  },
  {
    name: 'Chromatic or Loki',
    role: 'Visual Regression',
    description: 'Detects unintended UI drift between changes.',
  },
  {
    name: 'Express v5',
    role: 'API',
    description: 'Reference backend service for product-flow dogfooding.',
  },
  {
    name: 'Zod + OpenAPI or ts-rest',
    role: 'Contracts',
    description: 'Runtime validation and contract-safe API typing.',
  },
  {
    name: 'Drizzle ORM + drizzle-kit',
    role: 'Data Layer',
    description: 'Type-safe schema access with migration tooling.',
  },
  {
    name: 'SQLite (better-sqlite3)',
    role: 'Database',
    description: 'Zero-server local persistence for API and tooling workflows.',
  },
  {
    name: 'Electron',
    role: 'Desktop',
    description: 'Desktop packaging and OS-level capability bridge.',
  },
]

function StackGrid({ items }: { items: StackItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <Card key={item.name} className="group h-full">
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
            <p className="text-[0.8125rem] leading-[1.6] text-[var(--color-muted)]">{item.description}</p>
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
          Required foundation first, optional ecosystem second. Source: Tooling Reference in KolNord.md.
        </p>
      </div>

      <div className="space-y-3">
        <p className="label-mono">Core (Required)</p>
        <StackGrid items={core} />
      </div>

      <div className="space-y-3">
        <p className="label-mono">Extra (Optional)</p>
        <p className="text-[0.75rem] text-[var(--color-muted-light)]">
          Add these only when your product scope calls for them.
        </p>
        <StackGrid items={extra} />
      </div>
    </section>
  )
}
