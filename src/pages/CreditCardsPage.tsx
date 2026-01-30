import * as React from 'react'
import PageShell from '../components/blocks/PageShell'
import CreditCard from '../components/blocks/CreditCard'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'

export default function CreditCardsPage() {
  const [form, setForm] = React.useState({
    type: 'Classic',
    name: 'My Cards',
    number: '',
    expiry: '25 January 2025',
  })
  const [isAdding, setIsAdding] = React.useState(false)

  async function onAddCard(e: React.FormEvent) {
    e.preventDefault()
    setIsAdding(true)
    await new Promise((r) => setTimeout(r, 650))
    setIsAdding(false)
  }

  return (
    <PageShell title="Credit Cards">
      <div className="grid grid-cols-12 gap-8">
        <section className="col-span-12">
          <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">My Cards</h2>
          <div className="mt-5 grid gap-6 lg:grid-cols-3">
            <CreditCard variant="primary" />
            <CreditCard variant="secondary" />
            <CreditCard variant="light" className="shadow-none" />
          </div>
        </section>

        <section className="col-span-12 lg:col-span-5">
          <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">Card Expense Statistics</h2>
          <Card className="mt-5 p-6 shadow-none">
            <div className="flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="h-[220px] w-[220px]">
                <circle cx="100" cy="100" r="80" fill="none" stroke="#E6EFF5" strokeWidth="26" />
                <path d="M100 20a80 80 0 0 1 80 80" stroke="#16DBCC" strokeWidth="26" fill="none" strokeLinecap="round" />
                <path d="M180 100a80 80 0 0 1-50 74" stroke="#FFBB38" strokeWidth="26" fill="none" strokeLinecap="round" />
                <path d="M130 174a80 80 0 0 1-95-35" stroke="#FE5C73" strokeWidth="26" fill="none" strokeLinecap="round" />
                <path d="M35 139a80 80 0 0 1 65-119" stroke="#1814F3" strokeWidth="26" fill="none" strokeLinecap="round" />
                <circle cx="100" cy="100" r="48" fill="white" />
              </svg>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-[12px] font-semibold">
              {[
                { label: 'DBL Bank', color: '#1814F3' },
                { label: 'BRC Bank', color: '#FE5C73' },
                { label: 'ABM Bank', color: '#16DBCC' },
                { label: 'MCP Bank', color: '#FFBB38' },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-2 text-[var(--color-muted)]">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: l.color }} aria-hidden="true" />
                  {l.label}
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-7">
          <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">Card List</h2>
          <Card className="mt-5 p-6 shadow-none">
            <div className="space-y-4">
              {[
                { type: 'Secondary', bank: 'DBL Bank', num: '**** **** 5600', name: 'William', badge: '#E7EDFF' },
                { type: 'Secondary', bank: 'BRC Bank', num: '**** **** 4300', name: 'Michel', badge: '#FFE7F0' },
                { type: 'Secondary', bank: 'ABM Bank', num: '**** **** 7560', name: 'Edward', badge: '#FFF4D9' },
              ].map((r) => (
                <div key={r.bank} className="flex items-center justify-between gap-4 rounded-[20px] bg-white px-6 py-5 shadow-[var(--shadow-card)]">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-full" style={{ background: r.badge }} aria-hidden="true">
                      <span className="h-6 w-6 rounded-md bg-white/70" />
                    </div>
                    <div className="grid grid-cols-4 gap-8">
                      <div>
                        <div className="text-[13px] font-semibold text-[var(--color-muted)]">Card Type</div>
                        <div className="mt-1 text-[13px] font-semibold text-[var(--color-heading)]">{r.type}</div>
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-[var(--color-muted)]">Bank</div>
                        <div className="mt-1 text-[13px] font-semibold text-[var(--color-heading)]">{r.bank}</div>
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-[var(--color-muted)]">Card Number</div>
                        <div className="mt-1 text-[13px] font-semibold text-[var(--color-heading)]">{r.num}</div>
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-[var(--color-muted)]">Namein Card</div>
                        <div className="mt-1 text-[13px] font-semibold text-[var(--color-heading)]">{r.name}</div>
                      </div>
                    </div>
                  </div>
                  <button className="text-[13px] font-semibold text-[var(--color-primary)] hover:underline">View Details</button>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-8">
          <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">Add New Card</h2>
          <Card className="mt-5 p-6 shadow-none">
            <p className="text-[13px] leading-6 text-[var(--color-muted)]">
              Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit,
              that can be used to purchase goods and services on credit or obtain cash advances.
            </p>

            <form onSubmit={onAddCard} className="mt-6 grid gap-5 md:grid-cols-2">
              <Input
                label="Card Type"
                value={form.type}
                onChange={(e) => setForm((s) => ({ ...s, type: e.target.value }))}
                placeholder="Classic"
              />
              <Input
                label="Name On Card"
                value={form.name}
                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                placeholder="My Cards"
              />
              <Input
                label="Card Number"
                value={form.number}
                onChange={(e) => setForm((s) => ({ ...s, number: e.target.value }))}
                placeholder="**** **** **** ****"
              />
              <Input
                label="Expiration Date"
                value={form.expiry}
                onChange={(e) => setForm((s) => ({ ...s, expiry: e.target.value }))}
              />
              <div className="md:col-span-2 pt-2">
                <Button type="submit" isLoading={isAdding} className="h-12 min-w-[180px] rounded-[12px]">
                  Add Card
                </Button>
              </div>
            </form>
          </Card>
        </section>

        <aside className="col-span-12 lg:col-span-4">
          <h2 className="text-[22px] font-semibold text-[var(--color-heading)]">Card Setting</h2>
          <Card className="mt-5 p-6 shadow-none">
            <div className="space-y-5">
              {[
                { title: 'Block Card', desc: 'Instantly block your card', bg: '#FFF4D9' },
                { title: 'Change Pin Code', desc: 'Choose another pin code', bg: '#E7EDFF' },
                { title: 'Add to Google Pay', desc: 'Withdraw without any card', bg: '#FFE7F0' },
                { title: 'Add to Apple Pay', desc: 'Withdraw without any card', bg: '#DFFFF5' },
                { title: 'Add to Apple Store', desc: 'Withdraw without any card', bg: '#DFFFF5' },
              ].map((r) => (
                <div key={r.title} className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-[18px]" style={{ background: r.bg }} aria-hidden="true">
                    <span className="h-6 w-6 rounded-md bg-white/70" />
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-[var(--color-heading)]">{r.title}</div>
                    <div className="mt-1 text-[13px] text-[var(--color-muted)]">{r.desc}</div>
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

