import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center px-2 py-0.5 text-[0.6875rem] font-semibold rounded-[10px] tracking-[0.02em] whitespace-nowrap leading-relaxed',
  {
    variants: {
      variant: {
        secondary:   'bg-[var(--color-surface-soft)] text-[var(--color-muted)]',
        default:     'bg-[var(--color-primary-50)] text-[var(--color-primary-600)]',
        success:     'bg-[var(--color-success-bg)] text-[var(--color-success)]',
        destructive: 'bg-[var(--color-danger-bg)] text-[var(--color-danger)]',
        warning:     'bg-[var(--color-warning-bg)] text-[var(--color-warning)]',
      },
    },
    defaultVariants: { variant: 'secondary' },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
