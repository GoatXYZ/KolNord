import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1.5 rounded-[var(--radius-md)] text-[0.8125rem] font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-300)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-45 whitespace-nowrap',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--color-primary-500)] text-white border border-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] hover:border-[var(--color-primary-600)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]',
        secondary:
          'bg-[var(--color-surface)] text-[var(--color-ink)] border border-[var(--color-border)] hover:border-[var(--color-muted-light)] hover:bg-[var(--color-surface-soft)]',
        ghost:
          'bg-transparent text-[var(--color-muted)] border border-transparent hover:text-[var(--color-ink)] hover:bg-[var(--color-surface-soft)]',
        outline:
          'bg-transparent text-[var(--color-primary-600)] border border-[var(--color-primary-500)] hover:bg-[var(--color-primary-50)]',
        destructive:
          'bg-[var(--color-surface)] text-[var(--color-danger)] border border-[var(--color-border)] hover:bg-[var(--color-danger-bg)] hover:border-[var(--color-danger)]',
        success:
          'bg-[var(--color-success)] text-white border border-[var(--color-success)] hover:bg-[#15682f] hover:shadow-[var(--shadow-md)] dark:text-[#0d1117] dark:hover:bg-[#2ea043]',
      },
      size: {
        sm:      'h-[34px] px-3.5 text-xs',
        default: 'h-10 px-5',
        lg:      'h-[46px] px-7 text-sm font-semibold',
        icon:    'h-10 w-10',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
