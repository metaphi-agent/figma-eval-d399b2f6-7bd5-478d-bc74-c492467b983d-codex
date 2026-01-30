import clsx from 'clsx'

type Slice = { label: string; value: number; color: string }

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const a = ((angle - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }
}

function arcPath(cx: number, cy: number, rOuter: number, rInner: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, rOuter, endAngle)
  const end = polarToCartesian(cx, cy, rOuter, startAngle)
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1
  const startInner = polarToCartesian(cx, cy, rInner, startAngle)
  const endInner = polarToCartesian(cx, cy, rInner, endAngle)

  return [
    `M ${start.x} ${start.y}`,
    `A ${rOuter} ${rOuter} 0 ${largeArc} 0 ${end.x} ${end.y}`,
    `L ${startInner.x} ${startInner.y}`,
    `A ${rInner} ${rInner} 0 ${largeArc} 1 ${endInner.x} ${endInner.y}`,
    'Z',
  ].join(' ')
}

export default function PieDonut({
  slices,
  className,
}: {
  slices: Slice[]
  className?: string
}) {
  const total = slices.reduce((sum, s) => sum + s.value, 0) || 1
  let angle = 0

  return (
    <div className={clsx('rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)]', className)}>
      <div className="flex items-center justify-center">
        <svg viewBox="0 0 220 220" className="h-[220px] w-[220px]">
          <circle cx="110" cy="110" r="86" fill="white" />
          {slices.map((s) => {
            const start = angle
            const sweep = (s.value / total) * 360
            angle += sweep
            const path = arcPath(110, 110, 95, 45, start, angle)
            return <path key={s.label} d={path} fill={s.color} stroke="white" strokeWidth="6" />
          })}
        </svg>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-3 text-[12px] font-semibold text-[var(--color-heading)]">
        {slices.map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} aria-hidden="true" />
            <span className="text-[color-mix(in_oklab,var(--color-muted)_85%,white)]">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

