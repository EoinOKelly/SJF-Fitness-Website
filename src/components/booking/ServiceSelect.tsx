import { services } from '../../data/services'
import { Card } from '../ui/Card'

interface ServiceSelectProps {
  selectedId: string
  onSelect: (id: string) => void
}

export function ServiceSelect({ selectedId, onSelect }: ServiceSelectProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {services.map((service) => {
        const Icon = service.icon
        const isSelected = selectedId === service.id

        return (
          <button
            key={service.id}
            type="button"
            onClick={() => onSelect(service.id)}
            className="text-left"
            aria-pressed={isSelected}
          >
            <Card
              className={`cursor-pointer transition-all ${
                isSelected
                  ? 'border-teal ring-2 ring-teal ring-offset-2'
                  : 'hover:border-teal/50'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`rounded-lg p-2 ${isSelected ? 'bg-teal text-white' : 'bg-teal/10 text-teal'}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-charcoal">{service.title}</h3>
                    <span className="shrink-0 font-display text-lg font-bold text-coral">
                      {service.price}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted">{service.priceNote}</p>
                </div>
              </div>
            </Card>
          </button>
        )
      })}
    </div>
  )
}
