import clsx from 'clsx'

type Point = { x: number; y: number }

function pathFrom(points: Point[]) {
  if (points.length === 0) return ''
  const d = [`M ${points[0].x} ${points[0].y}`]
  for (let i = 1; i < points.length; i++) d.push(`C ${points[i - 1].x + 20} ${points[i - 1].y} ${points[i].x - 20} ${points[i].y} ${points[i].x} ${points[i].y}`)
  return d.join(' ')
}

export default function LineChart({
  values,
  labels,
  className,
}: {
  values: number[]
  labels: string[]
  className?: string
}) {
  const w = 640
  const h = 240
  const padX = 40
  const padY = 20
  const max = Math.max(...values, 1)
  const min = Math.min(...values, 0)
  const span = Math.max(1, max - min)

  const pts: Point[] = values.map((v, i) => {
    const x = padX + (i * (w - padX * 2)) / Math.max(1, values.length - 1)
    const y = padY + ((max - v) * (h - padY * 2)) / span
    return { x, y }
  })

  return (
    <div className={clsx('rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)]', className)}>
      <svg viewBox={`0 0 ${w} ${h}`} className="h-[240px] w-full">
        {[0.2, 0.4, 0.6, 0.8].map((t) => {
          const y = padY + t * (h - padY * 2)
          return <line key={t} x1={padX} y1={y} x2={w - padX} y2={y} stroke="#E6EFF5" strokeDasharray="4 6" />
        })}
        <path d={pathFrom(pts)} fill="none" stroke="#1814F3" strokeWidth="3" />
        <path
          d={`${pathFrom(pts)} L ${pts[pts.length - 1]?.x ?? padX} ${h - padY} L ${pts[0]?.x ?? padX} ${h - padY} Z`}
          fill="rgba(24, 20, 243, 0.06)"
        />
        {pts.map((p, idx) => (
          <circle key={idx} cx={p.x} cy={p.y} r="4" fill="#1814F3" />
        ))}
        {labels.map((l, i) => {
          const x = padX + (i * (w - padX * 2)) / Math.max(1, labels.length - 1)
          return (
            <text key={l} x={x} y={h - 6} textAnchor="middle" fontSize="12" fill="#8BA3CB">
              {l}
            </text>
          )
        })}
      </svg>
    </div>
  )
}

