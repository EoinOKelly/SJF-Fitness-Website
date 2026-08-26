import { services } from '../../data/services'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Services() {
  return (
    <section className="py-24 lg:py-32" id="services">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Personal Coaching"
            title="One complete service, tailored to you"
            subtitle="Personal training and practical nutrition advice work together in one plan built around your goals, your lifestyle, and your progress."
            align="center"
          />
        </Reveal>

        <div className="border-t border-white/10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.id} delay={Math.min(index * 80, 240)}>
                <div className="group flex gap-5 border-b border-white/10 py-9 transition-colors">
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
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-14 text-center" delay={120}>
          <Button to="/contact" size="lg">
            Contact Us
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
