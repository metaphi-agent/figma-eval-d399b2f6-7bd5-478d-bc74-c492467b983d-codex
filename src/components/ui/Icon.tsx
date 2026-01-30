import * as React from 'react'
import clsx from 'clsx'

export type IconName =
  | 'dashboard'
  | 'transactions'
  | 'accounts'
  | 'investments'
  | 'credit-cards'
  | 'loans'
  | 'services'
  | 'settings'

const pathByName: Record<Exclude<IconName, 'dashboard' | 'accounts'>, string> = {
  transactions: './assets/icons/nav-transactions.svg',
  investments: './assets/icons/nav-investments.svg',
  'credit-cards': './assets/icons/nav-credit-cards.svg',
  loans: './assets/icons/nav-loans.svg',
  services: './assets/icons/nav-services.svg',
  settings: './assets/icons/nav-settings.svg',
}

function InlineIcon({ name, className }: { name: IconName; className?: string }) {
  if (name === 'dashboard') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          d="M10.5 3h-7A.5.5 0 0 0 3 3.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7A.5.5 0 0 0 10.5 3Zm10 0h-7a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5ZM10.5 13h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm10 0h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 2a7 7 0 0 0-7 7v2.2c0 .5-.2 1-.6 1.3l-.7.6c-.5.4-.7 1-.5 1.6l.7 2c.2.6.8 1 1.4 1h13.4c.6 0 1.2-.4 1.4-1l.7-2c.2-.6 0-1.2-.5-1.6l-.7-.6c-.4-.3-.6-.8-.6-1.3V9a7 7 0 0 0-7-7Zm0 20a3.2 3.2 0 0 0 3.1-2H8.9A3.2 3.2 0 0 0 12 22Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  )
}

export default function Icon({
  name,
  className,
  alt = '',
}: {
  name: IconName
  className?: string
  alt?: string
}) {
  if (name === 'dashboard' || name === 'accounts') {
    return <InlineIcon name={name} className={clsx('h-5 w-5', className)} />
  }

  const src = pathByName[name as Exclude<IconName, 'dashboard' | 'accounts'>]
  return <img src={src} alt={alt} className={clsx('h-5 w-5', className)} />
}

