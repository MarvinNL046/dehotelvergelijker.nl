import ButtonPrimary from '@/shared/ButtonPrimary'
import { Divider } from '@/shared/divider'
import { Metadata } from 'next'
import { 
  BellIcon, 
  TagIcon, 
  CurrencyEuroIcon, 
  CalendarIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Meldingsinstellingen - DeHotelVergelijker.nl',
  description: 'Beheer je meldingsvoorkeuren voor prijsalerts, nieuwe deals en boekingsherinneringen',
}

const NotificationSettingsPage = () => {
  return (
    <div>
      {/* HEADING */}
      <h1 className="text-3xl font-semibold">Meldingsinstellingen</h1>

      <Divider className="my-8 w-14!" />

      <div className="max-w-3xl space-y-8">
        {/* Notification Types */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Type meldingen</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                  <CurrencyEuroIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Prijsalerts</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Ontvang meldingen wanneer hotelprijzen dalen
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400">
                  <TagIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Nieuwe deals</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Krijg de beste aanbiedingen voor jouw favoriete bestemmingen
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400">
                  <CalendarIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Boekingsherinneringen</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Herinneringen voor aankomende reizen
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Delivery Methods */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Hoe wil je meldingen ontvangen?</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                  <BellIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Website meldingen</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Meldingen in je account dashboard
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
                  <EnvelopeIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">E-mail meldingen</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Belangrijke updates naar je inbox
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 dark:bg-gray-900/20 dark:text-gray-400">
                  <DevicePhoneMobileIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Push meldingen</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Direct op je mobiel (binnenkort beschikbaar)
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" disabled className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 cursor-not-allowed opacity-50 rounded-full dark:bg-gray-700"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <ButtonPrimary type="button">
            Instellingen opslaan
          </ButtonPrimary>
        </div>
      </div>
    </div>
  )
}

export default NotificationSettingsPage