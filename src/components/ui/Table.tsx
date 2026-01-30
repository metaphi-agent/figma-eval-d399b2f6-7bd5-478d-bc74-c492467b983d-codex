import * as React from 'react'
import clsx from 'clsx'

export default function Table({
  className,
  children,
}: React.PropsWithChildren<{
  className?: string
}>) {
  return (
    <div className={clsx('overflow-x-auto rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-card)]', className)}>
      <table className="min-w-full border-collapse">{children}</table>
    </div>
  )
}

