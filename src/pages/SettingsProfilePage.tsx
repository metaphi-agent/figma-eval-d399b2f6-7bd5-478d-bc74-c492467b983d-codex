import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PageShell from '../components/blocks/PageShell'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import SegmentedTabs from '../components/ui/SegmentedTabs'

type FormState = {
  name: string
  username: string
  email: string
  password: string
  dob: string
  present: string
  permanent: string
  city: string
  postal: string
  country: string
}

const tabs = [
  { key: '/settings/profile', label: 'Edit Profile' },
  { key: '/settings/preferences', label: 'Preferences' },
  { key: '/settings/security', label: 'Security' },
]

export default function SettingsProfilePage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isSaving, setIsSaving] = React.useState(false)
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [form, setForm] = React.useState<FormState>({
    name: 'Charlene Reed',
    username: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    password: '**********',
    dob: '25 January 1990',
    present: 'San Jose, California, USA',
    permanent: 'San Jose, California, USA',
    city: 'San Jose',
    postal: '45962',
    country: 'USA',
  })

  const validateField = (field: keyof FormState, value: string) => {
    if (!value.trim()) return 'Required'
    if (field === 'email' && !/^[^@]+@[^@]+\.[^@]+$/.test(value)) return 'Enter a valid email'
    return ''
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const nextErrors: Record<string, string> = {}
    ;(Object.keys(form) as (keyof FormState)[]).forEach((k) => {
      const err = validateField(k, form[k])
      if (err) nextErrors[k] = err
    })
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setIsSaving(true)
    await new Promise((r) => setTimeout(r, 700))
    setIsSaving(false)
  }

  return (
    <PageShell title="Setting">
      <Card className="p-0 shadow-none">
        <div className="px-8 pt-2">
          <SegmentedTabs
            tabs={tabs.map((t) => ({ key: t.key, label: t.label }))}
            activeKey={location.pathname}
            onChange={(k) => navigate(k)}
          />
        </div>

        <div className="px-8 pb-8 pt-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-3">
              <div className="relative w-fit">
                <img src="./assets/images/avatar.svg" alt="Profile" className="h-[110px] w-[110px] rounded-full object-cover" loading="lazy" />
                <button
                  type="button"
                  aria-label="Edit profile photo"
                  className="absolute bottom-1 right-1 grid h-8 w-8 place-items-center rounded-full bg-[var(--color-primary)] text-white shadow-[var(--shadow-card)] transition-transform duration-150 hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4">
                    <path
                      d="M3 17.2V21h3.8l11-11-3.8-3.8-11 11ZM20.7 7.04a1 1 0 0 0 0-1.41l-2.33-2.33a1 1 0 0 0-1.41 0l-1.83 1.83 3.8 3.8 1.77-1.89Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <form onSubmit={onSubmit} className="col-span-12 lg:col-span-9">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                  label="Your Name"
                  value={form.name}
                  onChange={(e) => {
                    const v = e.target.value
                    setForm((s) => ({ ...s, name: v }))
                    setErrors((p) => ({ ...p, name: validateField('name', v) }))
                  }}
                  error={errors.name}
                />
                <Input
                  label="User Name"
                  value={form.username}
                  onChange={(e) => {
                    const v = e.target.value
                    setForm((s) => ({ ...s, username: v }))
                    setErrors((p) => ({ ...p, username: validateField('username', v) }))
                  }}
                  error={errors.username}
                />
                <Input
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    const v = e.target.value
                    setForm((s) => ({ ...s, email: v }))
                    setErrors((p) => ({ ...p, email: validateField('email', v) }))
                  }}
                  error={errors.email}
                />
                <Input
                  label="Password"
                  type="password"
                  value={form.password}
                  onChange={(e) => {
                    const v = e.target.value
                    setForm((s) => ({ ...s, password: v }))
                    setErrors((p) => ({ ...p, password: validateField('password', v) }))
                  }}
                  error={errors.password}
                />
                <Input
                  label="Date of Birth"
                  value={form.dob}
                  onChange={(e) => setForm((s) => ({ ...s, dob: e.target.value }))}
                  rightAdornment={
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[var(--color-muted)]">
                      <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  }
                />
                <Input
                  label="Present Address"
                  value={form.present}
                  onChange={(e) => setForm((s) => ({ ...s, present: e.target.value }))}
                />
                <Input
                  label="Permanent Address"
                  value={form.permanent}
                  onChange={(e) => setForm((s) => ({ ...s, permanent: e.target.value }))}
                />
                <Input label="City" value={form.city} onChange={(e) => setForm((s) => ({ ...s, city: e.target.value }))} />
                <Input
                  label="Postal Code"
                  value={form.postal}
                  onChange={(e) => setForm((s) => ({ ...s, postal: e.target.value }))}
                />
                <Input
                  label="Country"
                  value={form.country}
                  onChange={(e) => setForm((s) => ({ ...s, country: e.target.value }))}
                />
              </div>

              <div className="mt-10 flex justify-end">
                <Button type="submit" isLoading={isSaving} className="h-12 w-[190px] rounded-[12px]">
                  Save
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </PageShell>
  )
}
