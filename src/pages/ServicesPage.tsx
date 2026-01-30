import PageShell from '../components/blocks/PageShell'
import StatCard from '../components/blocks/StatCard'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

export default function ServicesPage() {
  return (
    <PageShell title="Services">
      <div className="grid grid-cols-12 gap-8">
        <section className="col-span-12">
          <div className="grid gap-6 lg:grid-cols-3">
            <StatCard
              iconBg="#E7EDFF"
              label="Life Insurance"
              value="Unlimited protection"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#396AFF]">
                  <path d="M12 21s-7-4.4-7-10V6l7-3 7 3v5c0 5.6-7 10-7 10Z" fill="currentColor" opacity="0.9" />
                  <path d="M9 12l2 2 4-5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
            />
            <StatCard
              iconBg="#FFF4D9"
              label="Shopping"
              value="Buy. Think. Grow."
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#FFBB38]">
                  <path d="M7 8V6a5 5 0 0 1 10 0v2h3v13H4V8h3Zm2 0h6V6a3 3 0 0 0-6 0v2Z" fill="currentColor" />
                </svg>
              }
            />
            <StatCard
              iconBg="#DFFFF5"
              label="Safety"
              value="We are your allies"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#16DBCC]">
                  <path d="M12 21s-7-4.4-7-10V6l7-3 7 3v5c0 5.6-7 10-7 10Z" fill="currentColor" opacity="0.9" />
                  <path d="M12 7v7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
            />
          </div>
        </section>

        <section className="col-span-12">
          <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">Bank Services List</h2>
          <div className="mt-5 space-y-6">
            {[
              { name: 'Business loans', subtitle: 'It is a long established', active: false, bg: '#FFE7F0' },
              { name: 'Checking accounts', subtitle: 'It is a long established', active: false, bg: '#FFF4D9' },
              { name: 'Savings accounts', subtitle: 'It is a long established', active: true, bg: '#FFE7F0' },
              { name: 'Debit and credit cards', subtitle: 'It is a long established', active: false, bg: '#E7EDFF' },
              { name: 'Life Insurance', subtitle: 'It is a long established', active: false, bg: '#DFFFF5' },
              { name: 'Business loans', subtitle: 'It is a long established', active: false, bg: '#FFE7F0' },
            ].map((r, idx) => (
              <Card key={`${r.name}-${idx}`} className="flex items-center gap-8 px-6 py-6 shadow-none">
                <div className="grid h-16 w-16 place-items-center rounded-[20px]" style={{ background: r.bg }} aria-hidden="true">
                  <span className="h-7 w-7 rounded-md bg-white/70" />
                </div>
                <div className="min-w-0">
                  <div className="text-[15px] font-semibold text-[var(--color-heading)]">{r.name}</div>
                  <div className="mt-1 text-[13px] text-[var(--color-muted)]">{r.subtitle}</div>
                </div>
                <div className="ml-auto hidden grid-cols-3 gap-14 text-[13px] font-medium text-[var(--color-muted)] xl:grid">
                  <div>
                    <div className="font-semibold text-[var(--color-heading)]">Lorem Ipsum</div>
                    <div className="mt-1">Many publishing</div>
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--color-heading)]">Lorem Ipsum</div>
                    <div className="mt-1">Many publishing</div>
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--color-heading)]">Lorem Ipsum</div>
                    <div className="mt-1">Many publishing</div>
                  </div>
                </div>
                <Button variant={r.active ? 'outline' : 'outline'} size="sm" className={r.active ? 'border-[var(--color-primary)] text-[var(--color-primary)]' : ''}>
                  View Details
                </Button>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  )
}

