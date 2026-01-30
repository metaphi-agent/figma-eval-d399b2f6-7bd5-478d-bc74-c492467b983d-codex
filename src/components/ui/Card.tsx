import * as React from 'react'
import clsx from 'clsx'

export default function Card({
  className,
  children,
}: React.PropsWithChildren<{
  className?: string
}>) {
  return (
    <div
      className={clsx(
        'rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-card)]',
        className,
      )}
    >
      {children}
    </div>
  )
}

