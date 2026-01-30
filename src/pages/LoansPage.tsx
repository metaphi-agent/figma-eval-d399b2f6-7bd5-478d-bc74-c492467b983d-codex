import PageShell from '../components/blocks/PageShell'
import StatCard from '../components/blocks/StatCard'
import Table from '../components/ui/Table'
import Button from '../components/ui/Button'

export default function LoansPage() {
  return (
    <PageShell title="Loans">
      <div className="grid grid-cols-12 gap-8">
        <section className="col-span-12">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
              iconBg="#E7EDFF"
              label="Personal Loans"
              value="$50,000"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#396AFF]">
                  <path d="M12 12a4 4 0 1 0-4-4a4 4 0 0 0 4 4Zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5Z" fill="currentColor" />
                </svg>
              }
            />
            <StatCard
              iconBg="#FFF4D9"
              label="Corporate Loans"
              value="$100,000"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#FFBB38]">
                  <path d="M7 7h10v14H7V7Zm2-4h6v3H9V3Z" fill="currentColor" />
                </svg>
              }
            />
            <StatCard
              iconBg="#FFE7F0"
              label="Business Loans"
              value="$500,000"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#FE5C73]">
                  <path d="M4 20V10h4v10H4Zm6 0V4h4v16h-4Zm6 0v-7h4v7h-4Z" fill="currentColor" />
                </svg>
              }
            />
            <StatCard
              iconBg="#DFFFF5"
              label="Custom Loans"
              value="Choose Money"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#16DBCC]">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 5v4h4v2h-6V7h2Z" fill="currentColor" />
                </svg>
              }
            />
          </div>
        </section>

        <section className="col-span-12">
          <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">Active Loans Overview</h2>
          <div className="mt-5">
            <Table>
              <thead>
                <tr className="text-left text-[13px] font-semibold text-[var(--color-muted)]">
                  <th className="px-6 py-4">SL No</th>
                  <th className="px-6 py-4">Loan Money</th>
                  <th className="px-6 py-4">Left to repay</th>
                  <th className="px-6 py-4">Duration</th>
                  <th className="px-6 py-4">Interest rate</th>
                  <th className="px-6 py-4">Installment</th>
                  <th className="px-6 py-4 text-right">Repay</th>
                </tr>
              </thead>
              <tbody className="text-[14px] text-[var(--color-heading)]">
                {[
                  { no: '01.', money: '$100,000', left: '$40,500', duration: '8 Months', rate: '12%', inst: '$2,000 / month', primary: true },
                  { no: '02.', money: '$500,000', left: '$250,000', duration: '36 Months', rate: '10%', inst: '$8,000 / month', primary: false },
                  { no: '03.', money: '$900,000', left: '$40,500', duration: '12 Months', rate: '12%', inst: '$5,000 / month', primary: false },
                  { no: '04.', money: '$50,000', left: '$40,500', duration: '25 Months', rate: '5%', inst: '$2,000 / month', primary: false },
                  { no: '05.', money: '$50,000', left: '$40,500', duration: '5 Months', rate: '16%', inst: '$10,000 / month', primary: false },
                  { no: '06.', money: '$80,000', left: '$25,500', duration: '14 Months', rate: '8%', inst: '$2,000 / month', primary: false },
                  { no: '07.', money: '$12,000', left: '$5,500', duration: '9 Months', rate: '13%', inst: '$500 / month', primary: false },
                  { no: '08.', money: '$160,000', left: '$100,800', duration: '3 Months', rate: '12%', inst: '$900 / month', primary: false },
                ].map((r) => (
                  <tr key={r.no} className="border-t border-[var(--color-border)]">
                    <td className="px-6 py-5">{r.no}</td>
                    <td className="px-6 py-5">{r.money}</td>
                    <td className="px-6 py-5">{r.left}</td>
                    <td className="px-6 py-5">{r.duration}</td>
                    <td className="px-6 py-5">{r.rate}</td>
                    <td className="px-6 py-5">{r.inst}</td>
                    <td className="px-6 py-5 text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        className="min-w-[92px] rounded-[var(--radius-pill)]"
                      >
                        Repay
                      </Button>
                    </td>
                  </tr>
                ))}
                <tr className="border-t border-[var(--color-border)] text-[13px] font-semibold">
                  <td className="px-6 py-5 text-[var(--color-danger)]">Total</td>
                  <td className="px-6 py-5 text-[var(--color-danger)]">$125,0000</td>
                  <td className="px-6 py-5 text-[var(--color-danger)]">$750,000</td>
                  <td className="px-6 py-5" />
                  <td className="px-6 py-5" />
                  <td className="px-6 py-5 text-[var(--color-danger)]">$50,000 / month</td>
                  <td className="px-6 py-5" />
                </tr>
              </tbody>
            </Table>
          </div>
        </section>
      </div>
    </PageShell>
  )
}

