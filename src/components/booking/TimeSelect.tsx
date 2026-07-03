import { generateTimeSlots } from '../../lib/timeSlots'

interface TimeSelectProps {
  selected: string
  onSelect: (time: string) => void
}

const timeSlots = generateTimeSlots()

export function TimeSelect({ selected, onSelect }: TimeSelectProps) {
  return (
    <div>
      <p className="mb-4 text-sm text-muted">
        Select a preferred time. Sandra will confirm availability after you submit.
      </p>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
        {timeSlots.map((slot) => {
          const isSelected = selected === slot
          return (
            <button
              key={slot}
              type="button"
              onClick={() => onSelect(slot)}
              className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                isSelected
                  ? 'border-teal bg-teal text-white'
                  : 'border-cream-dark bg-white text-charcoal hover:border-teal hover:text-teal'
              }`}
              aria-pressed={isSelected}
            >
              {slot}
            </button>
          )
        })}
      </div>
    </div>
  )
}
