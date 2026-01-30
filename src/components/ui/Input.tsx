import * as React from 'react'
import clsx from 'clsx'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  rightAdornment?: React.ReactNode
}

export default function Input({ className, label, error, rightAdornment, id, ...rest }: InputProps) {
  const inputId = id ?? React.useId()
  const describedBy = error ? `${inputId}-error` : undefined

  return (
    <label className="block">
      {label ? (
        <span className="block text-[13px] font-medium text-[var(--color-heading)]">{label}</span>
      ) : null}
      <span className={clsx('relative mt-2 block', !label && 'mt-0')}>
        <input
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={clsx(
            'h-12 w-full rounded-[var(--radius-input)] border bg-white px-5 text-[14px] text-[var(--color-heading)]',
            'placeholder:text-[color-mix(in_oklab,var(--color-muted)_70%,white)]',
            'border-[var(--color-border)]',
            'focus:border-[color-mix(in_oklab,var(--color-primary)_55%,white)] focus:outline-none',
            'transition-colors duration-150',
            rightAdornment && 'pr-12',
            error && 'border-[color-mix(in_oklab,var(--color-danger)_60%,white)]',
            className,
          )}
          {...rest}
        />
        {rightAdornment ? (
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            {rightAdornment}
          </span>
        ) : null}
      </span>
      {error ? (
        <span id={describedBy} className="mt-1 block text-[12px] text-[var(--color-danger)]">
          {error}
        </span>
      ) : null}
    </label>
  )
}

