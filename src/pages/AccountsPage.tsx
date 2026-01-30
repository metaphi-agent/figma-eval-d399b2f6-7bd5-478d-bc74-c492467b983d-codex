import PageShell from '../components/blocks/PageShell'
import StatCard from '../components/blocks/StatCard'
import Card from '../components/ui/Card'
import SimpleBarChart from '../components/blocks/SimpleBarChart'
import CreditCard from '../components/blocks/CreditCard'

export default function AccountsPage() {
  return (
    <PageShell title="Accounts">
      <div className="grid grid-cols-12 gap-8">
        <section className="col-span-12">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
              iconBg="#FFF4D9"
              label="My Balance"
              value="$12,750"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#FFBB38]">
                  <path
                    d="M12 2a7 7 0 0 0-7 7v2.2c0 .5-.2 1-.6 1.3l-.7.6c-.5.4-.7 1-.5 1.6l.7 2c.2.6.8 1 1.4 1h13.4c.6 0 1.2-.4 1.4-1l.7-2c.2-.6 0-1.2-.5-1.6l-.7-.6c-.4-.3-.6-.8-.6-1.3V9a7 7 0 0 0-7-7Z"
                    fill="currentColor"
                    opacity="0.9"
                  />
                </svg>
              }
            />
            <StatCard
              iconBg="#E7EDFF"
              label="Income"
              value="$5,600"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#396AFF]">
                  <path d="M12 3l4 4-4 4-4-4 4-4Zm0 10l7 7H5l7-7Z" fill="currentColor" />
                </svg>
              }
            />
            <StatCard
              iconBg="#FFE7F0"
              label="Expense"
              value="$3,460"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#FE5C73]">
                  <path d="M7 4h10v6H7V4Zm-2 8h14v8H5v-8Z" fill="currentColor" />
                </svg>
              }
            />
            <StatCard
              iconBg="#DFFFF5"
              label="Total Saving"
              value="$7,920"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#16DBCC]">
                  <path d="M12 2c4.4 0 8 2.7 8 6v5c0 3.3-3.6 6-8 6s-8-2.7-8-6V8c0-3.3 3.6-6 8-6Z" fill="currentColor" opacity="0.9" />
                  <path d="M8 9h8M9 13h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
            />
          </div>
        </section>

        <section className="col-span-12 xl:col-span-8">
          <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">Last Transaction</h2>
          <Card className="mt-5 p-6 shadow-none">
            <div className="grid gap-6">
              {[
                { title: 'Spotify Subscription', date: '25 Jan 2021', category: 'Shopping', card: '1234 ****', status: 'Pending', amount: '-$150', color: 'var(--color-danger)' },
                { title: 'Mobile Service', date: '25 Jan 2021', category: 'Service', card: '1234 ****', status: 'Completed', amount: '-$340', color: 'var(--color-danger)' },
                { title: 'Emilly Wilson', date: '25 Jan 2021', category: 'Transfer', card: '1234 ****', status: 'Completed', amount: '+$780', color: 'var(--color-success)' },
              ].map((t) => (
                <div key={t.title} className="grid grid-cols-[52px_1fr_1fr_110px_110px_90px] items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[color-mix(in_oklab,var(--color-border)_70%,white)]">
                    <span className="h-6 w-6 rounded-md bg-[color-mix(in_oklab,var(--color-primary)_12%,white)]" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-[15px] font-semibold text-[var(--color-heading)]">{t.title}</div>
                    <div className="mt-1 text-[13px] text-[var(--color-muted)]">{t.date}</div>
                  </div>
                  <div className="text-[13px] text-[var(--color-muted)]">{t.category}</div>
                  <div className="text-[13px] text-[var(--color-muted)]">{t.card}</div>
                  <div className="text-[13px] text-[var(--color-muted)]">{t.status}</div>
                  <div className="text-right text-[15px] font-semibold" style={{ color: t.color }}>
                    {t.amount}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="mt-8">
            <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">Debit &amp; Credit Overview</h2>
            <div className="mt-5 rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-center justify-between">
                <div className="text-[13px] text-[var(--color-muted)]">
                  <span className="font-semibold text-[var(--color-heading)]">$7,560</span> Debited &amp;{' '}
                  <span className="font-semibold text-[var(--color-heading)]">$5,420</span> Credited in this Week
                </div>
                <div className="flex items-center gap-6 text-[13px] text-[var(--color-muted)]">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#1814F3]" aria-hidden="true" />
                    Debit
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FE5C73]" aria-hidden="true" />
                    Credit
                  </span>
                </div>
              </div>
              <SimpleBarChart
                className="mt-2 shadow-none"
                aLabel="Debit"
                bLabel="Credit"
                aColor="bg-[#FFB500]"
                bColor="bg-[#1814F3]"
                data={[
                  { label: 'Sat', a: 240, b: 400 },
                  { label: 'Sun', a: 180, b: 320 },
                  { label: 'Mon', a: 190, b: 260 },
                  { label: 'Tue', a: 420, b: 220 },
                  { label: 'Wed', a: 260, b: 380 },
                  { label: 'Thu', a: 300, b: 190 },
                  { label: 'Fri', a: 340, b: 420 },
                ]}
              />
            </div>
          </div>
        </section>

        <aside className="col-span-12 xl:col-span-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">My Card</h2>
            <button className="text-[15px] font-semibold text-[var(--color-heading)] transition-colors duration-150 hover:text-[var(--color-primary)]">
              See All
            </button>
          </div>
          <div className="mt-5">
            <CreditCard variant="primary" />
          </div>

          <div className="mt-8">
            <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">Invoices Sent</h2>
            <Card className="mt-5 p-6 shadow-none">
              <div className="space-y-5">
                {[
                  { name: 'Apple Store', when: '5h ago', amount: '$450', bg: '#DFFFF5' },
                  { name: 'Michael', when: '2 days ago', amount: '$160', bg: '#FFF4D9' },
                  { name: 'Playstation', when: '5 days ago', amount: '$1085', bg: '#E7EDFF' },
                  { name: 'William', when: '10 days ago', amount: '$90', bg: '#FFE7F0' },
                ].map((i) => (
                  <div key={i.name} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-full" style={{ background: i.bg }} aria-hidden="true">
                        <span className="h-5 w-5 rounded-md bg-white/70" />
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-[var(--color-heading)]">{i.name}</div>
                        <div className="mt-1 text-[13px] text-[var(--color-muted)]">{i.when}</div>
                      </div>
                    </div>
                    <div className="text-[15px] font-semibold text-[var(--color-muted)]">{i.amount}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </aside>
      </div>
    </PageShell>
  )
}

