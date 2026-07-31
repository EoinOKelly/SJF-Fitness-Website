import { services } from '../../data/services'

interface ServiceSelectProps {
  selectedId: string
  onSelect: (id: string) => void
}

export function ServiceSelect({ selectedId, onSelect }: ServiceSelectProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {services.map((service) => {
        const Icon = service.icon
        const isSelected = selectedId === service.id

        return (
          <button
            key={service.id}
            type="button"
            onClick={() => onSelect(service.id)}
            className={`border p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-graphite ${
              isSelected
                ? 'border-brand bg-brand/5'
                : 'border-white/10 hover:border-brand/40'
            }`}
            aria-pressed={isSelected}
          >
            <div className="flex items-start gap-3">
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center border ${
                  isSelected ? 'border-brand text-brand' : 'border-white/15 text-ash'
                }`}
              >
                <Icon className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-ivory">{service.title}</h3>
                <p className="mt-1 text-[0.72rem] leading-relaxed text-ash-dim">
                  {service.description}
                </p>
              </div>
            </div>
          </button>
        )
      })}
    </div>
  )
}
