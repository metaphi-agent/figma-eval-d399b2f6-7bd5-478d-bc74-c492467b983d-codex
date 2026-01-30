import * as React from 'react'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
}

export default function Button({
  className,
  variant = 'primary',
  size = 'md',
  isLoading,
  disabled,
  children,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || isLoading

  return (
    <button
      {...rest}
      disabled={isDisabled}
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-[var(--radius-input)] font-semibold',
        'transition-colors duration-150 select-none',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--color-primary)_70%,white)]',
        size === 'md' && 'h-12 px-6 text-[15px] leading-none',
        size === 'sm' && 'h-10 px-4 text-[14px] leading-none',
        variant === 'primary' && [
          'bg-[var(--color-primary)] text-white',
          'hover:bg-[color-mix(in_oklab,var(--color-primary)_92%,black)]',
          'active:bg-[color-mix(in_oklab,var(--color-primary)_85%,black)]',
          isDisabled && 'opacity-60 hover:bg-[var(--color-primary)] active:bg-[var(--color-primary)]',
        ],
        variant === 'outline' && [
          'border border-[var(--color-primary)] text-[var(--color-primary)] bg-white',
          'hover:bg-[color-mix(in_oklab,var(--color-primary)_6%,white)]',
          'active:bg-[color-mix(in_oklab,var(--color-primary)_10%,white)]',
          isDisabled && 'opacity-50 hover:bg-white active:bg-white',
        ],
        variant === 'ghost' && [
          'bg-transparent text-[var(--color-heading)]',
          'hover:bg-[color-mix(in_oklab,var(--color-border)_60%,transparent)]',
          'active:bg-[color-mix(in_oklab,var(--color-border)_85%,transparent)]',
          isDisabled && 'opacity-50',
        ],
        className,
      )}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <span
            aria-hidden="true"
            className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
          />
          <span className="sr-only">Loading</span>
        </span>
      ) : null}
      <span className={clsx(isLoading && 'opacity-70')}>{children}</span>
    </button>
  )
}

