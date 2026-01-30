import PageShell from '../components/blocks/PageShell'
import CreditCard from '../components/blocks/CreditCard'
import SimpleBarChart from '../components/blocks/SimpleBarChart'
import PieDonut from '../components/blocks/PieDonut'
import QuickTransfer from '../components/blocks/QuickTransfer'
import LineChart from '../components/blocks/LineChart'
import Card from '../components/ui/Card'

export default function DashboardPage() {
  return (
    <PageShell title="Overview">
      <div className="grid grid-cols-12 gap-8">
        <section className="col-span-12 xl:col-span-8">
          <div className="flex items-center justify-between">
            <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">My Cards</h2>
            <button className="text-[15px] font-semibold text-[var(--color-heading)] transition-colors duration-150 hover:text-[var(--color-primary)]">
              See All
            </button>
          </div>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <CreditCard variant="secondary" />
            <CreditCard variant="light" className="shadow-none" />
          </div>

          <div className="mt-8">
            <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">Weekly Activity</h2>
            <SimpleBarChart
              className="mt-5"
              aLabel="Deposit"
              bLabel="Withdraw"
              aColor="bg-[var(--color-primary)]"
              bColor="bg-[var(--color-success)]"
              data={[
                { label: 'Sat', a: 480, b: 260 },
                { label: 'Sun', a: 360, b: 140 },
                { label: 'Mon', a: 340, b: 280 },
                { label: 'Tue', a: 490, b: 380 },
                { label: 'Wed', a: 160, b: 260 },
                { label: 'Thu', a: 410, b: 250 },
                { label: 'Fri', a: 400, b: 350 },
              ]}
            />
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <QuickTransfer />
            <div>
              <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">Balance History</h2>
              <LineChart
                className="mt-5"
                labels={['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan']}
                values={[240, 320, 280, 780, 240, 560, 620]}
              />
            </div>
          </div>
        </section>

        <aside className="col-span-12 xl:col-span-4">
          <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">Recent Transaction</h2>
          <Card className="mt-5 p-6 shadow-none">
            <div className="space-y-6">
              {[
                { title: 'Deposit from my Card', date: '28 January 2021', amount: '-$850', color: 'var(--color-danger)' },
                { title: 'Deposit Paypal', date: '25 January 2021', amount: '+$2,500', color: 'var(--color-success)' },
                { title: 'Jemi Wilson', date: '21 January 2021', amount: '+$5,400', color: 'var(--color-success)' },
              ].map((t) => (
                <div key={t.title} className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[color-mix(in_oklab,var(--color-border)_70%,white)]">
                    <span className="h-6 w-6 rounded-md bg-[color-mix(in_oklab,var(--color-primary)_15%,white)]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[15px] font-semibold text-[var(--color-heading)]">{t.title}</div>
                    <div className="mt-1 text-[13px] text-[var(--color-muted)]">{t.date}</div>
                  </div>
                  <div className="text-[15px] font-semibold" style={{ color: t.color }}>
                    {t.amount}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="mt-8">
            <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">Expense Statistics</h2>
            <PieDonut
              className="mt-5"
              slices={[
                { label: 'DBL Bank', value: 35, color: '#1814F3' },
                { label: 'BRC Bank', value: 30, color: '#343C6A' },
                { label: 'ABM Bank', value: 20, color: '#FF00FF' },
                { label: 'MCP Bank', value: 15, color: '#FF7A00' },
              ]}
            />
          </div>
        </aside>
      </div>
    </PageShell>
  )
}

