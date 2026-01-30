import * as React from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import Input from '../ui/Input'
import Icon, { type IconName } from '../ui/Icon'

const navItems: Array<{ to: string; label: string; icon: IconName }> = [
  { to: '/', label: 'Dashboard', icon: 'dashboard' },
  { to: '/transactions', label: 'Transactions', icon: 'transactions' },
  { to: '/accounts', label: 'Accounts', icon: 'accounts' },
  { to: '/investments', label: 'Investments', icon: 'investments' },
  { to: '/credit-cards', label: 'Credit Cards', icon: 'credit-cards' },
  { to: '/loans', label: 'Loans', icon: 'loans' },
  { to: '/services', label: 'Services', icon: 'services' },
  { to: '/settings/profile', label: 'Setting', icon: 'settings' },
]

function SidebarNav() {
  return (
    <aside className="hidden w-[250px] shrink-0 border-r border-[var(--color-border)] bg-white lg:block">
      <div className="px-10 pt-8">
        <div className="flex items-center gap-3">
          <img src="./assets/bankdash-logo.svg" alt="BankDash" className="h-7 w-auto" />
        </div>
      </div>
      <nav className="mt-14">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  clsx(
                    'group relative flex items-center gap-5 py-3 pl-10 pr-6 text-[15px] font-medium transition-colors duration-150',
                    isActive ? 'text-[var(--color-primary)]' : 'text-[color-mix(in_oklab,var(--color-muted)_90%,white)]',
                    'hover:text-[var(--color-primary)]',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={clsx(
                        'absolute left-0 top-1/2 h-14 w-[6px] -translate-y-1/2 rounded-r-full bg-[var(--color-primary)] transition-opacity duration-150',
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-30',
                      )}
                      aria-hidden="true"
                    />
                    <Icon
                      name={item.icon}
                      className={clsx(
                        'text-[color-mix(in_oklab,var(--color-muted)_70%,white)]',
                        isActive && 'text-[var(--color-primary)]',
                        'group-hover:text-[var(--color-primary)]',
                      )}
                    />
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

function Header({ title }: { title: string }) {
  return (
    <header className="flex h-[100px] items-center justify-between gap-6 border-b border-[var(--color-border)] bg-white px-6 lg:px-10">
      <h1 className="text-[28px] font-semibold tracking-tight text-[var(--color-heading)]">{title}</h1>
      <div className="flex items-center gap-6">
        <div className="hidden w-[350px] xl:block">
          <Input
            aria-label="Search for something"
            placeholder="Search for something"
            rightAdornment={
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[color-mix(in_oklab,var(--color-muted)_85%,white)]">
                <path
                  d="M10.5 3a7.5 7.5 0 1 0 4.56 13.5l3.72 3.72a1 1 0 0 0 1.42-1.42l-3.72-3.72A7.5 7.5 0 0 0 10.5 3Zm0 2a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11Z"
                  fill="currentColor"
                />
              </svg>
            }
          />
        </div>
        <button
          type="button"
          aria-label="Settings"
          className="grid h-10 w-10 place-items-center rounded-full bg-[color-mix(in_oklab,var(--color-border)_70%,white)] text-[color-mix(in_oklab,var(--color-muted)_90%,white)] transition-colors duration-150 hover:bg-[color-mix(in_oklab,var(--color-border)_100%,white)]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5">
            <path
              d="M12 15.25a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5ZM19.4 13a8.3 8.3 0 0 0 .06-1l1.53-1.19a1 1 0 0 0 .23-1.3l-1.45-2.51a1 1 0 0 0-1.2-.45l-1.8.73c-.53-.4-1.1-.74-1.72-1.01L14.8 3.4a1 1 0 0 0-1-.9h-2.9a1 1 0 0 0-1 .9l-.25 1.88c-.62.27-1.2.61-1.72 1.01l-1.8-.73a1 1 0 0 0-1.2.45L2.48 9.52a1 1 0 0 0 .23 1.3L4.24 12c-.03.33-.04.67-.04 1c0 .33.01.67.04 1l-1.53 1.19a1 1 0 0 0-.23 1.3l1.45 2.51a1 1 0 0 0 1.2.45l1.8-.73c.53.4 1.1.74 1.72 1.01l.25 1.88a1 1 0 0 0 1 .9h2.9a1 1 0 0 0 1-.9l.25-1.88c.62-.27 1.2-.61 1.72-1.01l1.8.73a1 1 0 0 0 1.2-.45l1.45-2.51a1 1 0 0 0-.23-1.3L19.46 13Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Notifications"
          className="relative grid h-10 w-10 place-items-center rounded-full bg-[color-mix(in_oklab,var(--color-border)_70%,white)] text-[color-mix(in_oklab,var(--color-muted)_90%,white)] transition-colors duration-150 hover:bg-[color-mix(in_oklab,var(--color-border)_100%,white)]"
        >
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[var(--color-danger)]" aria-hidden="true" />
          <svg viewBox="0 0 24 24" className="h-5 w-5">
            <path
              d="M12 22a2.6 2.6 0 0 0 2.5-2h-5A2.6 2.6 0 0 0 12 22Zm7-6V11a7 7 0 0 0-5-6.7V3a2 2 0 0 0-4 0v1.3A7 7 0 0 0 5 11v5l-1.2 1.2a1 1 0 0 0 .7 1.8h15a1 1 0 0 0 .7-1.8L19 16Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <img
          src="./assets/images/avatar.svg"
          alt="User avatar"
          className="h-11 w-11 rounded-full object-cover"
          loading="lazy"
        />
      </div>
    </header>
  )
}

export default function PageShell({
  title,
  children,
}: React.PropsWithChildren<{
  title: string
}>) {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <div className="mx-auto flex min-h-screen max-w-[1440px] bg-[var(--color-bg)]">
        <SidebarNav />
        <div className="flex min-w-0 flex-1 flex-col">
          <Header title={title} />
          <main className="flex-1 px-6 py-8 lg:px-10">{children}</main>
        </div>
      </div>
    </div>
  )
}
