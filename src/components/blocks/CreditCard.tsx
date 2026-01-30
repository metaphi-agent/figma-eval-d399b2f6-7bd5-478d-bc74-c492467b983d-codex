import clsx from 'clsx'

export default function CreditCard({
  variant = 'primary',
  className,
}: {
  variant?: 'primary' | 'secondary' | 'light'
  className?: string
}) {
  const isLight = variant === 'light'
  const baseBg =
    variant === 'primary'
      ? 'bg-[linear-gradient(135deg,#2D60FF_0%,#539BFF_100%)]'
      : variant === 'secondary'
        ? 'bg-[linear-gradient(135deg,#4C49ED_0%,#0A06F4_100%)]'
        : 'bg-white border border-[var(--color-border)]'

  return (
    <div
      className={clsx(
        'relative h-[235px] w-full rounded-[25px] p-6',
        baseBg,
        'shadow-[var(--shadow-card)]',
        className,
      )}
    >
      <div className={clsx('flex items-start justify-between', isLight ? 'text-[var(--color-heading)]' : 'text-white')}>
        <div>
          <div className={clsx('text-[12px] font-medium opacity-80')}>Balance</div>
          <div className="mt-1 text-[20px] font-semibold">$5,756</div>
        </div>
        <div className={clsx('h-9 w-12 rounded-md', isLight ? 'bg-black/10' : 'bg-white/15')} />
      </div>

      <div className={clsx('mt-8 grid grid-cols-2 gap-10', isLight ? 'text-[var(--color-heading)]' : 'text-white')}>
        <div>
          <div className={clsx('text-[10px] font-semibold tracking-wider opacity-70')}>CARD HOLDER</div>
          <div className="mt-1 text-[13px] font-medium">Eddy Cusuma</div>
        </div>
        <div className="text-right">
          <div className={clsx('text-[10px] font-semibold tracking-wider opacity-70')}>VALID THRU</div>
          <div className="mt-1 text-[13px] font-medium">12/22</div>
        </div>
      </div>

      <div className={clsx('absolute inset-x-6 bottom-6 flex items-center justify-between', isLight ? 'text-[var(--color-heading)]' : 'text-white')}>
        <div className="text-[18px] font-semibold tracking-wide">3778 **** **** 1234</div>
        <div className="flex items-center gap-2">
          <span className={clsx('h-5 w-5 rounded-full', isLight ? 'bg-black/15' : 'bg-white/30')} />
          <span className={clsx('-ml-3 h-5 w-5 rounded-full', isLight ? 'bg-black/25' : 'bg-white/20')} />
        </div>
      </div>
    </div>
  )
}

