import PageShell from '../components/blocks/PageShell'
import StatCard from '../components/blocks/StatCard'
import Card from '../components/ui/Card'
import LineChart from '../components/blocks/LineChart'

export default function InvestmentsPage() {
  return (
    <PageShell title="Investments">
      <div className="grid grid-cols-12 gap-8">
        <section className="col-span-12">
          <div className="grid gap-6 lg:grid-cols-3">
            <StatCard
              iconBg="#DFFFF5"
              label="Total Invested Amount"
              value="$150,000"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#16DBCC]">
                  <path d="M12 2c4.4 0 8 2.7 8 6v5c0 3.3-3.6 6-8 6s-8-2.7-8-6V8c0-3.3 3.6-6 8-6Z" fill="currentColor" opacity="0.9" />
                  <path d="M8 10h8M10 14h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
            />
            <StatCard
              iconBg="#FFE7F0"
              label="Number of Investments"
              value="1,250"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#FE5C73]">
                  <path d="M12 4a8 8 0 1 0 8 8h-2a6 6 0 1 1-6-6V4Z" fill="currentColor" opacity="0.9" />
                  <path d="M12 2v9h9" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
            />
            <StatCard
              iconBg="#E7EDFF"
              label="Rate of Return"
              value="+5.80%"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#396AFF]">
                  <path d="M4 12h10l-3-3 1.4-1.4L18.8 14l-6.4 6.4L11 19l3-3H4v-4Z" fill="currentColor" opacity="0.9" />
                </svg>
              }
            />
          </div>
        </section>

        <section className="col-span-12 lg:col-span-7">
          <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">Yearly Total Investment</h2>
          <LineChart className="mt-5" labels={['2016', '2017', '2018', '2019', '2020', '2021']} values={[60, 260, 180, 420, 240, 320]} />
        </section>

        <section className="col-span-12 lg:col-span-5">
          <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">Monthly Revenue</h2>
          <LineChart className="mt-5" labels={['2016', '2017', '2018', '2019', '2020', '2021']} values={[120, 200, 160, 320, 240, 360]} />
        </section>

        <section className="col-span-12 lg:col-span-7">
          <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">My Investment</h2>
          <Card className="mt-5 p-6 shadow-none">
            <div className="space-y-5">
              {[
                { name: 'Apple Store', desc: 'E-commerce, Marketplace', value: '$54,000', change: '+16%', bg: '#FFE7F0' },
                { name: 'Samsung Mobile', desc: 'E-commerce, Marketplace', value: '$25,300', change: '-4%', bg: '#E7EDFF' },
                { name: 'Tesla Motors', desc: 'Electric Vehicles', value: '$8,200', change: '+25%', bg: '#FFF4D9' },
              ].map((r) => (
                <div key={r.name} className="flex items-center justify-between gap-4 rounded-[20px] bg-white px-6 py-5 shadow-[var(--shadow-card)]">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-full" style={{ background: r.bg }} aria-hidden="true">
                      <span className="h-6 w-6 rounded-md bg-white/70" />
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold text-[var(--color-heading)]">{r.name}</div>
                      <div className="mt-1 text-[13px] text-[var(--color-muted)]">{r.desc}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[15px] font-semibold text-[var(--color-heading)]">{r.value}</div>
                    <div className="mt-1 text-[13px] text-[var(--color-muted)]">Investment Value</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[15px] font-semibold" style={{ color: r.change.startsWith('+') ? 'var(--color-success)' : 'var(--color-danger)' }}>
                      {r.change}
                    </div>
                    <div className="mt-1 text-[13px] text-[var(--color-muted)]">Return Value</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <aside className="col-span-12 lg:col-span-5">
          <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">Trending Stock</h2>
          <Card className="mt-5 p-6 shadow-none">
            <div className="grid grid-cols-[50px_1fr_90px_70px] gap-4 text-[13px] font-semibold text-[var(--color-muted)]">
              <div>SL No</div>
              <div>Name</div>
              <div>Price</div>
              <div className="text-right">Return</div>
            </div>
            <div className="mt-4 space-y-4 text-[14px] text-[var(--color-heading)]">
              {[
                { no: '01.', name: 'Trivago', price: '$520', ret: '+5%' },
                { no: '02.', name: 'Canon', price: '$480', ret: '+10%' },
                { no: '03.', name: 'Uber Food', price: '$350', ret: '-3%' },
                { no: '04.', name: 'Nokia', price: '$940', ret: '+2%' },
                { no: '05.', name: 'Tiktok', price: '$670', ret: '-12%' },
              ].map((r) => (
                <div key={r.no} className="grid grid-cols-[50px_1fr_90px_70px] items-center gap-4">
                  <div>{r.no}</div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-[13px] text-[var(--color-heading)]">{r.price}</div>
                  <div className="text-right font-semibold" style={{ color: r.ret.startsWith('+') ? 'var(--color-success)' : 'var(--color-danger)' }}>
                    {r.ret}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </aside>
      </div>
    </PageShell>
  )
}

