import * as React from 'react'
import clsx from 'clsx'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Input from '../ui/Input'

type Person = {
  name: string
  role: string
  avatarBg: string
}

export default function QuickTransfer({ className }: { className?: string }) {
  const people: Person[] = [
    { name: 'Livia Bator', role: 'CEO', avatarBg: '#DFEAF2' },
    { name: 'Randy Press', role: 'Director', avatarBg: '#E7EDFF' },
    { name: 'Workman', role: 'Designer', avatarBg: '#FFE7F0' },
  ]

  const [amount, setAmount] = React.useState('525.50')
  const [isSending, setIsSending] = React.useState(false)

  async function onSend() {
    setIsSending(true)
    await new Promise((r) => setTimeout(r, 650))
    setIsSending(false)
  }

  return (
    <Card className={clsx('p-6', className)}>
      <div className="flex items-center justify-between">
        <div className="text-[22px] font-semibold text-[var(--color-heading)]">Quick Transfer</div>
      </div>

      <div className="mt-5 flex items-center gap-6">
        {people.map((p) => (
          <div key={p.name} className="flex flex-col items-center text-center">
            <div
              className="h-16 w-16 rounded-full"
              style={{ background: p.avatarBg }}
              aria-hidden="true"
            />
            <div className="mt-3 text-[14px] font-semibold text-[var(--color-heading)]">{p.name}</div>
            <div className="mt-1 text-[12px] font-medium text-[var(--color-muted)]">{p.role}</div>
          </div>
        ))}
        <button
          type="button"
          className="ml-auto grid h-12 w-12 place-items-center rounded-full bg-white shadow-[var(--shadow-card)] transition-transform duration-150 hover:-translate-y-0.5"
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-[var(--color-muted)]">
            <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <div className="text-[14px] font-medium text-[var(--color-muted)]">Write Amount</div>
        <div className="flex-1">
          <Input
            aria-label="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="text-center"
          />
        </div>
        <Button onClick={onSend} isLoading={isSending} className="min-w-[120px] rounded-[var(--radius-pill)]">
          Send
          <svg viewBox="0 0 24 24" className="h-5 w-5">
            <path
              d="M3.4 11.3 20.6 4.4c.9-.3 1.7.5 1.4 1.4l-6.9 17.2c-.3.8-1.4.8-1.7 0l-2.1-5.2-5.2-2.1c-.8-.3-.8-1.4 0-1.7ZM10.8 13.2l4.8 1.9 1.9-4.8-6.7 2.9Z"
              fill="currentColor"
            />
          </svg>
        </Button>
      </div>
    </Card>
  )
}

