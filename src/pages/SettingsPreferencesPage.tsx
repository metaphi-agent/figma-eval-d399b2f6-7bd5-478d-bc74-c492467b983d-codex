import { useLocation, useNavigate } from 'react-router-dom'
import PageShell from '../components/blocks/PageShell'
import Card from '../components/ui/Card'
import SegmentedTabs from '../components/ui/SegmentedTabs'

const tabs = [
  { key: '/settings/profile', label: 'Edit Profile' },
  { key: '/settings/preferences', label: 'Preferences' },
  { key: '/settings/security', label: 'Security' },
]

export default function SettingsPreferencesPage() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <PageShell title="Setting">
      <Card className="p-0 shadow-none">
        <div className="px-8 pt-2">
          <SegmentedTabs tabs={tabs} activeKey={location.pathname} onChange={(k) => navigate(k)} />
        </div>
        <div className="px-8 pb-8 pt-10">
          <div className="text-[15px] font-semibold text-[var(--color-heading)]">Preferences</div>
          <p className="mt-2 text-[13px] leading-6 text-[var(--color-muted)]">
            This screen is included to match the Figma routes. Hook up real preference controls here.
          </p>
        </div>
      </Card>
    </PageShell>
  )
}

