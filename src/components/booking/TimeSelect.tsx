import { generateTimeSlots } from '../../lib/timeSlots'

interface TimeSelectProps {
  selected: string
  onSelect: (time: string) => void
}

const timeSlots = generateTimeSlots()

export function TimeSelect({ selected, onSelect }: TimeSelectProps) {
  return (
    <div>
      <p className="mb-5 text-sm text-ash">
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
              className={`border px-3 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-graphite ${
                isSelected
                  ? 'border-brand bg-brand text-obsidian'
                  : 'border-white/10 text-ash hover:border-brand/50 hover:text-ivory'
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
