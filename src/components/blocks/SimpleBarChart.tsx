import clsx from 'clsx'

type SeriesPoint = { label: string; a: number; b: number }

export default function SimpleBarChart({
  data,
  aLabel,
  bLabel,
  aColor = 'bg-[var(--color-primary)]',
  bColor = 'bg-[var(--color-success)]',
  className,
}: {
  data: SeriesPoint[]
  aLabel: string
  bLabel: string
  aColor?: string
  bColor?: string
  className?: string
}) {
  const maxValue = Math.max(...data.flatMap((d) => [d.a, d.b, 1]))

  return (
    <div className={clsx('rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)]', className)}>
      <div className="flex items-center justify-between">
        <div />
        <div className="flex items-center gap-6 text-[13px] text-[var(--color-muted)]">
          <span className="inline-flex items-center gap-2">
            <span className={clsx('h-2.5 w-2.5 rounded-full', aColor)} aria-hidden="true" />
            {aLabel}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className={clsx('h-2.5 w-2.5 rounded-full', bColor)} aria-hidden="true" />
            {bLabel}
          </span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-7 items-end gap-6 px-2">
        {data.map((d) => {
          const aH = Math.max(6, Math.round((d.a / maxValue) * 180))
          const bH = Math.max(6, Math.round((d.b / maxValue) * 180))
          return (
            <div key={d.label} className="flex flex-col items-center gap-3">
              <div className="flex h-[190px] items-end gap-2">
                <div className={clsx('w-2.5 rounded-full', aColor)} style={{ height: aH }} />
                <div className={clsx('w-2.5 rounded-full', bColor)} style={{ height: bH }} />
              </div>
              <div className="text-[12px] text-[var(--color-muted)]">{d.label}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

