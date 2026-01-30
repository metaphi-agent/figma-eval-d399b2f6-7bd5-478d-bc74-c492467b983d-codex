import * as React from 'react'
import clsx from 'clsx'

export type SegmentedTab = {
  key: string
  label: string
}

export default function SegmentedTabs({
  tabs,
  activeKey,
  onChange,
  className,
}: {
  tabs: SegmentedTab[]
  activeKey: string
  onChange: (key: string) => void
  className?: string
}) {
  return (
    <div className={clsx('flex items-center gap-10 border-b border-[var(--color-border)]', className)}>
      {tabs.map((t) => {
        const active = t.key === activeKey
        return (
          <button
            key={t.key}
            type="button"
            onClick={() => onChange(t.key)}
            className={clsx(
              'relative py-4 text-[15px] font-semibold transition-colors duration-150',
              active ? 'text-[var(--color-primary)]' : 'text-[color-mix(in_oklab,var(--color-muted)_80%,white)]',
              'hover:text-[var(--color-primary)]',
            )}
          >
            {t.label}
            <span
              aria-hidden="true"
              className={clsx(
                'absolute inset-x-0 -bottom-px h-[3px] rounded-t-full bg-[var(--color-primary)] transition-opacity duration-150',
                active ? 'opacity-100' : 'opacity-0',
              )}
            />
          </button>
        )
      })}
    </div>
  )
}

