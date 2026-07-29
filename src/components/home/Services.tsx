import { services } from '../../data/services'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

export function Services() {
  return (
    <section className="py-24 lg:py-32" id="services">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services & Pricing"
          title="Tailored to every goal"
          subtitle="Every session is built around you — training solo, alongside a friend, or preparing for a moment that matters."
          align="center"
        />

        <div className="border-t border-white/10">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group grid gap-6 border-b border-white/10 py-9 transition-colors sm:grid-cols-[1fr_auto] sm:items-start"
              >
                <div className="flex gap-5">
                  <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 text-gold transition-colors group-hover:border-gold/60">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-ivory">{service.title}</h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-ash">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="pl-16 sm:pl-8 sm:text-right">
                  <p className="font-display text-3xl text-gold">{service.price}</p>
                  {service.priceNote && (
                    <p className="mt-2 text-[0.66rem] uppercase tracking-[0.2em] text-ash-dim">
                      {service.priceNote}
                    </p>
                  )}
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
