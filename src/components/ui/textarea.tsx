import * as React from 'react'
import { cn } from '@/lib/utils'

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[100px] w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-3 text-sm text-[var(--color-ink)] leading-[1.6] resize-vertical transition-[border-color,box-shadow] duration-150',
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
Textarea.displayName = 'Textarea'

export { Textarea }
