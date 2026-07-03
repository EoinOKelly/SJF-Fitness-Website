import { siteConfig } from '../data/siteConfig'

export function generateTimeSlots(): string[] {
  const { startHour, endHour, slotDurationMinutes } = siteConfig.booking
  const slots: string[] = []

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += slotDurationMinutes) {
      const endMinutes = hour * 60 + minute + slotDurationMinutes
      if (endMinutes > endHour * 60) break
      slots.push(
        `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`,
      )
    }
  }

  return slots
}
