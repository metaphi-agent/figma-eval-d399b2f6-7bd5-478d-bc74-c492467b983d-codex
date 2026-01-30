import * as React from 'react'
import PageShell from '../components/blocks/PageShell'
import CreditCard from '../components/blocks/CreditCard'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import SegmentedTabs from '../components/ui/SegmentedTabs'
import Table from '../components/ui/Table'
import clsx from 'clsx'

type Tx = {
  description: string
  id: string
  type: string
  card: string
  date: string
  amount: string
  isPositive: boolean
}

export default function TransactionsPage() {
  const [activeTab, setActiveTab] = React.useState<'all' | 'income' | 'expense'>('all')

  const rows: Tx[] = [
    { description: 'Spotify Subscription', id: '#12548796', type: 'Shopping', card: '1234 ****', date: '28 Jan, 12.30 AM', amount: '-$2,500', isPositive: false },
    { description: 'Freepik Sales', id: '#12548796', type: 'Transfer', card: '1234 ****', date: '25 Jan, 10.40 PM', amount: '+$750', isPositive: true },
    { description: 'Mobile Service', id: '#12548796', type: 'Service', card: '1234 ****', date: '20 Jan, 10.40 PM', amount: '-$150', isPositive: false },
    { description: 'Wilson', id: '#12548796', type: 'Transfer', card: '1234 ****', date: '15 Jan, 03.29 PM', amount: '-$1050', isPositive: false },
    { description: 'Emilly', id: '#12548796', type: 'Transfer', card: '1234 ****', date: '14 Jan, 10.40 PM', amount: '+$840', isPositive: true },
  ]

  return (
    <PageShell title="Transactions">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between">
                <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">My Cards</h2>
                <button className="text-[15px] font-semibold text-[var(--color-heading)] transition-colors duration-150 hover:text-[var(--color-primary)]">
                  + Add Card
                </button>
              </div>
              <div className="mt-5 grid gap-6 md:grid-cols-2">
                <CreditCard variant="secondary" />
                <CreditCard variant="light" className="shadow-none" />
              </div>
            </div>
            <Card className="p-6 shadow-none">
              <div className="text-[22px] font-semibold text-[var(--color-heading)]">My Expense</div>
              <div className="mt-4 flex items-end justify-between">
                <div className="flex h-[150px] items-end gap-3">
                  {[40, 60, 55, 80, 30, 95, 45].map((h, idx) => (
                    <div
                      key={idx}
                      className={clsx(
                        'w-6 rounded-[12px]',
                        idx === 5 ? 'bg-[var(--color-success)]' : 'bg-[color-mix(in_oklab,var(--color-border)_70%,white)]',
                      )}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-medium text-[var(--color-muted)]">$12,500</div>
                  <div className="mt-1 text-[12px] text-[var(--color-muted)]">Dec</div>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-[12px] text-[var(--color-muted)]">
                {['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="col-span-12">
          <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">Recent Transactions</h2>
          <SegmentedTabs
            className="mt-4"
            tabs={[
              { key: 'all', label: 'All Transactions' },
              { key: 'income', label: 'Income' },
              { key: 'expense', label: 'Expense' },
            ]}
            activeKey={activeTab}
            onChange={(k) => setActiveTab(k as any)}
          />

          <div className="mt-6">
            <Table>
              <thead>
                <tr className="text-left text-[13px] font-semibold text-[var(--color-muted)]">
                  <th className="px-6 py-4">Description</th>
                  <th className="px-6 py-4">Transaction ID</th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4">Card</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4 text-right">Amount</th>
                  <th className="px-6 py-4 text-right">Receipt</th>
                </tr>
              </thead>
              <tbody className="text-[14px] text-[var(--color-heading)]">
                {rows
                  .filter((r) => {
                    if (activeTab === 'all') return true
                    return activeTab === 'income' ? r.isPositive : !r.isPositive
                  })
                  .map((r) => (
                    <tr key={r.description} className="border-t border-[var(--color-border)]">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border)]">
                            <svg viewBox="0 0 24 24" className="h-4 w-4 text-[var(--color-muted)]">
                              <path d="M12 5v14m0 0l-6-6m6 6l6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          </div>
                          <span className="font-medium">{r.description}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-[13px] text-[var(--color-muted)]">{r.id}</td>
                      <td className="px-6 py-5 text-[13px] text-[var(--color-heading)]">{r.type}</td>
                      <td className="px-6 py-5 text-[13px] text-[var(--color-heading)]">{r.card}</td>
                      <td className="px-6 py-5 text-[13px] text-[var(--color-muted)]">{r.date}</td>
                      <td className={clsx('px-6 py-5 text-right font-semibold', r.isPositive ? 'text-[var(--color-success)]' : 'text-[var(--color-danger)]')}>
                        {r.amount}
                      </td>
                      <td className="px-6 py-5 text-right">
                        <Button variant="outline" size="sm" className="rounded-[var(--radius-pill)]">
                          Download
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>

          <div className="mt-6 flex items-center justify-end gap-4 text-[13px] font-semibold text-[var(--color-heading)]">
            <button className="text-[var(--color-primary)]">‹ Previous</button>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-[10px] bg-[var(--color-primary)] text-white">1</span>
              {[2, 3, 4].map((n) => (
                <span key={n} className="grid h-10 w-10 place-items-center rounded-[10px] text-[var(--color-primary)]">
                  {n}
                </span>
              ))}
            </div>
            <button className="text-[var(--color-primary)]">Next ›</button>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

