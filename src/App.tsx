import { Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import TransactionsPage from './pages/TransactionsPage'
import AccountsPage from './pages/AccountsPage'
import InvestmentsPage from './pages/InvestmentsPage'
import CreditCardsPage from './pages/CreditCardsPage'
import LoansPage from './pages/LoansPage'
import ServicesPage from './pages/ServicesPage'
import SettingsProfilePage from './pages/SettingsProfilePage'
import SettingsPreferencesPage from './pages/SettingsPreferencesPage'
import SettingsSecurityPage from './pages/SettingsSecurityPage'

export default function App() {
  return (
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
    </Routes>
  )
}
