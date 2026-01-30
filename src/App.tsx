import * as React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const DashboardPage = React.lazy(() => import('./pages/DashboardPage'))
const TransactionsPage = React.lazy(() => import('./pages/TransactionsPage'))
const AccountsPage = React.lazy(() => import('./pages/AccountsPage'))
const InvestmentsPage = React.lazy(() => import('./pages/InvestmentsPage'))
const CreditCardsPage = React.lazy(() => import('./pages/CreditCardsPage'))
const LoansPage = React.lazy(() => import('./pages/LoansPage'))
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'))
const SettingsProfilePage = React.lazy(() => import('./pages/SettingsProfilePage'))
const SettingsPreferencesPage = React.lazy(() => import('./pages/SettingsPreferencesPage'))
const SettingsSecurityPage = React.lazy(() => import('./pages/SettingsSecurityPage'))

function RouteFallback() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <div className="mx-auto max-w-[1440px] px-4 py-10 text-[15px] text-[var(--color-muted)]">
        Loading…
      </div>
    </div>
  )
}

export default function App() {
  return (
    <React.Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/investments" element={<InvestmentsPage />} />
        <Route path="/credit-cards" element={<CreditCardsPage />} />
        <Route path="/loans" element={<LoansPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/settings/profile" element={<SettingsProfilePage />} />
        <Route path="/settings/preferences" element={<SettingsPreferencesPage />} />
        <Route path="/settings/security" element={<SettingsSecurityPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </React.Suspense>
  )
}
