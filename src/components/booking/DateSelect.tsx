import { DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'
import { siteConfig } from '../../data/siteConfig'

interface DateSelectProps {
  selected: Date | undefined
  onSelect: (date: Date | undefined) => void
}

export function DateSelect({ selected, onSelect }: DateSelectProps) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <div className="flex justify-center">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={onSelect}
        disabled={{ before: today }}
        showOutsideDays
        className="rounded-2xl border border-cream-dark bg-white p-4 shadow-sm"
      />
    </div>
  )
}

export function isDateDisabled(date: Date): boolean {
  if (!siteConfig.booking.allowWeekends) {
    const day = date.getDay()
    if (day === 0 || day === 6) return true
  }
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return date < today
}
