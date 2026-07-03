import { siteConfig } from '../../data/siteConfig'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section className="py-16 lg:py-24" id="about">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-cream-dark to-teal/20">
            <div className="flex h-full items-center justify-center p-8 text-center text-muted">
              <p className="text-sm">Add Sandra&apos;s photo to /public/about.jpg</p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About"
              title={`Welcome to ${siteConfig.name.split(' ')[0]} ${siteConfig.name.split(' ')[1]}`}
              subtitle="Your personal path to a healthier, stronger you."
            />
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Welcome to SJF Fitness. {siteConfig.owner} is a female personal trainer based in a
                private training studio on Portlaoise Main Street.
              </p>
              <p>
                Do you want to lose weight, get fitter, stronger and healthier? You have come to the
                right place.
              </p>
              <p>
                Sandra is a certified Personal Trainer, Nutrition Expert and Qualified Chef. Contact
                her now to book an appointment.
              </p>
            </div>
            <Button to="/contact" variant="secondary" className="mt-8">
              Contact Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
