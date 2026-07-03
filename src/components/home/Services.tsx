import { services } from '../../data/services'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

export function Services() {
  return (
    <section className="py-16 lg:py-24" id="services">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services & Pricing"
          title="Personalised training for every goal"
          subtitle="Every session is tailored to you — whether you are training solo, with a friend, or preparing for a special occasion."
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.id} hover className="flex flex-col">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="rounded-xl bg-teal/10 p-3">
                    <Icon className="h-6 w-6 text-teal" />
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl font-bold text-coral">{service.price}</p>
                    {service.priceNote && (
                      <p className="text-xs text-muted">{service.priceNote}</p>
                    )}
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button to="/book" size="lg">
            Book An Appointment Now
          </Button>
        </div>
      </div>
    </section>
  )
}
