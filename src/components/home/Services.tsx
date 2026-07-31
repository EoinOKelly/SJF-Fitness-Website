import { services } from '../../data/services'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

export function Services() {
  return (
    <section className="py-24 lg:py-32" id="services">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="Tailored to every goal"
          subtitle="Every session is built around you, whether you are training for weight loss, building strength, or preparing for a moment that matters."
          align="center"
        />

        <div className="border-t border-white/10">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group flex gap-5 border-b border-white/10 py-9 transition-colors"
              >
                <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 text-brand transition-colors group-hover:border-brand/60">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-2xl text-ivory">{service.title}</h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-ash">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-14 text-center">
          <Button to="/book" size="lg">
            Book an Appointment
          </Button>
        </div>
      </div>
    </section>
  )
}
