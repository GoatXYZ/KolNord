import { useState, useEffect } from 'react'
import { Copy, Check } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { ColorsSection }     from '@/components/sections/ColorsSection'
import { TypographySection } from '@/components/sections/TypographySection'
import { ComponentsSection } from '@/components/sections/ComponentsSection'
import { TokensSection }     from '@/components/sections/TokensSection'
import { StackSection }      from '@/components/sections/StackSection'
import { GettingStartedSection } from '@/components/sections/GettingStartedSection'
import { RecipesSection } from '@/components/sections/RecipesSection'
import { ShadowsSpacingSection } from '@/components/sections/ShadowsSpacingSection'
import { LayoutSection }     from '@/components/sections/LayoutSection'
import { UtilitiesSection }  from '@/components/sections/UtilitiesSection'
import { AccessibilitySection } from '@/components/sections/AccessibilitySection'
import { IconsSection }      from '@/components/sections/IconsSection'
import { RoadmapSection } from '@/components/sections/RoadmapSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { ContributingSection } from '@/components/sections/ContributingSection'
import { ChangelogSection } from '@/components/sections/ChangelogSection'

const STORAGE_KEY = 'kolnord-theme'

const AGENT_PROMPT = 'Fetch https://raw.githubusercontent.com/GoatXYZ/KolNord/main/KolNord.md and use it as your design system'

export default function App() {
  const [dark, setDark] = useState<boolean>(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const [copied, setCopied] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
  }, [dark])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(AGENT_PROMPT)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
          <div className="mx-auto max-w-[1400px] px-4 sm:px-8 py-16 sm:py-20">
            <div className="max-w-2xl">
              <p className="label-mono mb-3">Agent-Ready Design System</p>
              <h1 className="page-title mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
                One file. Every design decision.
              </h1>
              <p className="text-[0.9375rem] text-[var(--color-muted)] leading-[1.7] max-w-xl">
                <strong className="text-[var(--color-ink)] font-medium">KOL<span style={{ color: 'var(--color-primary-500)' }}>NORD</span></strong>{' '}
                is a complete design system in a single Markdown file. Copy the line below, give it to your AI agent, and ship consistent Nordic-minimal UI from the first prompt.
              </p>

              {/* Copy box */}
              <div className="mt-8 max-w-xl">
                <div
                  className="group relative flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] px-4 py-3 cursor-pointer transition-all duration-150 hover:border-[var(--color-primary-500)]"
                  style={{ background: 'var(--color-background)' }}
                  onClick={handleCopy}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleCopy() } }}
                >
                  <code className="flex-1 text-[0.8125rem] leading-[1.5] text-[var(--color-ink)] break-all" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace' }}>
                    {AGENT_PROMPT}
                  </code>
                  <button
                    className="shrink-0 flex items-center justify-center w-8 h-8 rounded-[var(--radius-md)] text-[var(--color-muted)] transition-colors duration-150 hover:text-[var(--color-ink)] hover:bg-[var(--color-surface)]"
                    aria-label="Copy to clipboard"
                    tabIndex={-1}
                  >
                    {copied ? <Check size={16} className="text-[var(--color-success)]" /> : <Copy size={16} />}
                  </button>
                </div>
                <p className="mt-2 text-[0.75rem] text-[var(--color-muted-light)]">
                  {copied ? 'Copied to clipboard!' : 'Click to copy — paste directly into your agent'}
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Main content sections */}
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 py-8 space-y-14">
          <GettingStartedSection />
          <RecipesSection />
          <ComponentsSection />
          <ColorsSection />
          <ShadowsSpacingSection />
          <TypographySection />
          <IconsSection />
          <LayoutSection />
          <UtilitiesSection />
          <AccessibilitySection />
          <StackSection />
          <RoadmapSection />
          <FaqSection />
          <ContributingSection />
          <ChangelogSection />
          <TokensSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] mt-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 py-6 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-[0.8125rem] text-[var(--color-muted)]">
            <span style={{ fontFamily: 'var(--font-display)' }} className="font-semibold text-[var(--color-ink)]">
              KOL<span style={{ color: 'var(--color-primary-500)' }}>NORD</span>
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
