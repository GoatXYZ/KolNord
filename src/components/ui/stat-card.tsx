import * as React from 'react'
import { cn } from '@/lib/utils'

type AccentColor = 'primary' | 'success' | 'warning' | 'danger'

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: string | number
  detail?: string
  accent?: AccentColor
  dense?: boolean
}

const accentColorMap: Record<AccentColor, string> = {
  primary: 'var(--color-primary-500)',
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  danger:  'var(--color-danger)',
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, label, value, detail, accent = 'primary', dense = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative overflow-hidden nordic-panel transition-all duration-150 hover:shadow-[var(--shadow-hover)] hover:-translate-y-px',
        dense ? 'p-5 pl-6' : 'p-6 pl-[27px]',
        className,
      )}
      {...props}
    >
      {/* Accent stripe */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-sm"
        style={{ background: accentColorMap[accent] }}
      />

      <p className="label-mono mb-1">{label}</p>
      <p
        style={{ fontFamily: 'var(--font-display)' }}
        className={cn(
          'font-semibold text-[var(--color-ink)] leading-[1.1] tracking-[-0.03em] mt-1.5',
          dense ? 'text-[2.25rem]' : 'text-[2.75rem]',
        )}
      >
        {value}
      </p>
      {detail && (
        <p className="mt-1.5 text-[0.8125rem] text-[var(--color-muted)] leading-[1.6]">{detail}</p>
      )}
    </div>
  ),
)
StatCard.displayName = 'StatCard'

export { StatCard }
