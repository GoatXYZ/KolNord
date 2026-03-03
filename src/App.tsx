import { useState, useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { ColorsSection }     from '@/components/sections/ColorsSection'
import { TypographySection } from '@/components/sections/TypographySection'
import { ComponentsSection } from '@/components/sections/ComponentsSection'
import { TokensSection }     from '@/components/sections/TokensSection'

const STORAGE_KEY = 'kolnord-theme'

export default function App() {
  const [dark, setDark] = useState<boolean>(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-[var(--color-primary-500)] focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <Navbar dark={dark} onToggleDark={() => setDark((d) => !d)} />

      <main id="main-content" className="page-enter">
        {/* Hero */}
        <div
          className="border-b border-[var(--color-border)]"
          style={{ background: 'var(--color-surface)' }}
        >
          <div className="mx-auto max-w-[1400px] px-4 sm:px-8 py-12">
            <div className="max-w-2xl">
              <p className="label-mono mb-3">Design System</p>
              <h1 className="page-title mb-3">
                Kol<span style={{ color: 'var(--color-primary-500)' }}>Nord</span>
              </h1>
              <p className="text-[0.9375rem] text-[var(--color-muted)] leading-[1.7] max-w-xl">
                A Nordic-inspired, minimal design system built for precision and restraint.
                Two modes: <strong className="text-[var(--color-ink)] font-medium">KolNord</strong> (light) and{' '}
                <strong className="text-[var(--color-ink)] font-medium">KolNord Dark</strong>.
                Shared structure, typography, spacing, and component patterns.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {['React 19', 'TypeScript', 'Tailwind CSS v4', 'Radix UI', 'lucide-react', 'cva'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-1 text-[0.75rem] font-medium rounded-[var(--radius-md)] border border-[var(--color-border)] text-[var(--color-muted)] bg-[var(--color-background)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main content sections */}
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 py-8 space-y-14">
          <ComponentsSection />
          <ColorsSection />
          <TypographySection />
          <TokensSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] mt-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 py-6 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-[0.8125rem] text-[var(--color-muted)]">
            <span style={{ fontFamily: 'var(--font-display)' }} className="font-semibold text-[var(--color-ink)]">
              Kol<span style={{ color: 'var(--color-primary-500)' }}>Nord</span>
            </span>
            {' '}Design System · Built with precision and restraint
          </p>
          <p className="text-[0.75rem] text-[var(--color-muted-light)]">
            Nordic Clean + Nordic Night · v1.0.0
          </p>
        </div>
      </footer>
    </div>
  )
}
