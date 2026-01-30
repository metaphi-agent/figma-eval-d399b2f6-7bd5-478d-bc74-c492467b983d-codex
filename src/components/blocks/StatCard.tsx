import Card from '../ui/Card'

export default function StatCard({
  iconBg,
  icon,
  label,
  value,
}: {
  iconBg: string
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <Card className="flex items-center gap-5 px-8 py-7 shadow-none">
      <div className="grid h-14 w-14 place-items-center rounded-full" style={{ background: iconBg }}>
        {icon}
      </div>
      <div>
        <div className="text-[13px] font-medium text-[var(--color-muted)]">{label}</div>
        <div className="mt-1 text-[20px] font-semibold text-[var(--color-heading)]">{value}</div>
      </div>
    </Card>
  )
}

