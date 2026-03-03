import * as React from 'react'
import { cn } from '@/lib/utils'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-11 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 text-sm text-[var(--color-ink)] transition-[border-color,box-shadow] duration-150',
          'placeholder:text-[var(--color-muted-light)]',
          'focus:outline-none focus:border-[var(--color-primary-500)] focus:shadow-[0_0_0_3px_rgba(0,120,185,0.08)]',
          'dark:bg-[var(--color-background)] dark:focus:shadow-[0_0_0_3px_rgba(88,166,255,0.15)]',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
