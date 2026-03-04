import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const recipes = [
  {
    name: 'Documentation Surface',
    objective: 'Ship a readable system spec page with strong scanning rhythm.',
    blocks: [
      'Sticky navbar (`h-14`) + skip link for keyboard-first navigation.',
      'Constrained content shell (`max-w-[1400px]`, `px-4 sm:px-8`) with section spacing.',
      'Section headings via `.page-title` and micro labels via `.label-mono`.',
      'Cards/panels separated primarily by borders, not heavy decoration.',
    ],
    source: 'KolNord.md §8 + §9 + §10 + §11',
  },
  {
    name: 'Operations Dashboard',
    objective: 'Build dense information views while preserving calm visual hierarchy.',
    blocks: [
      'Use Stat Cards with accent stripes and display typography for metrics.',
      'Apply desktop `repeat(4, 1fr)` grid and 2-column fallback below 800px.',
      'Keep hover feedback subtle: light lift in light mode, glow ring in dark mode.',
      'Reserve semantic color badges for status meaning only.',
    ],
    source: 'KolNord.md §5 + §6 + §7.2 + §7.4',
  },
  {
    name: 'Form + Validation Flow',
    objective: 'Create trustworthy data-entry flows with predictable focus and errors.',
    blocks: [
      'Input/select/textarea follow shared 44px control rhythm and 150ms transitions.',
      'Reuse focus ring alpha patterns per theme, including danger focus treatment.',
      'Keep labels at 13px/500 and helper text muted for hierarchy control.',
      'Use Dialog for confirmation actions and Dropdown Menu for low-priority actions.',
    ],
    source: 'KolNord.md §6 + §7.5-§7.10 + §11',
  },
]

export function RecipesSection() {
  return (
    <section id="recipes" className="scroll-mt-20 space-y-6">
      <div>
        <h2 className="page-title text-2xl mb-1">Usage Recipes</h2>
        <p className="text-[0.9375rem] text-[var(--color-muted)]">
          Composition patterns assembled from the KolNord spec for common product surfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <Card key={recipe.name} className="h-full">
            <CardHeader>
              <CardTitle>{recipe.name}</CardTitle>
              <CardDescription>{recipe.objective}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {recipe.blocks.map((block, index) => (
                  <p key={block} className="text-[0.8125rem] leading-[1.6] text-[var(--color-muted)]">
                    <span className="text-[var(--color-ink)] font-medium">{index + 1}.</span> {block}
                  </p>
                ))}
              </div>
              <p className="text-[0.6875rem] font-mono text-[var(--color-muted-light)]">{recipe.source}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
