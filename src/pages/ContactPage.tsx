import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '../components/contact/ContactForm'
import { PageMeta } from '../components/ui/PageMeta'
import { SectionHeading } from '../components/ui/SectionHeading'
import { siteConfig } from '../data/siteConfig'

export function ContactPage() {
  return (
    <PageMeta
      title="Contact"
      description="Contact Sandra Furney at SJF Fitness Portlaoise. Phone, email and studio location."
    >
      <section className="py-12 lg:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch"
            subtitle="Ready to start your fitness journey? Contact Sandra to book an appointment or ask a question."
            align="center"
          />

          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <ContactForm />

              <div className="mt-8 space-y-4 rounded-2xl border border-cream-dark bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-charcoal">Direct contact</h3>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-3 text-muted hover:text-teal"
                >
                  <Phone className="h-5 w-5 shrink-0 text-teal" />
                  {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.emailHref}
                  className="flex items-center gap-3 text-muted hover:text-teal"
                >
                  <Mail className="h-5 w-5 shrink-0 text-teal" />
                  {siteConfig.email}
                </a>
                <div className="flex items-start gap-3 text-muted">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <address className="not-italic">{siteConfig.address.full}</address>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-cream-dark bg-white shadow-sm">
              <iframe
                title="SJF Fitness location map"
                src={siteConfig.mapEmbedUrl}
                className="h-full min-h-80 w-full border-0 sm:min-h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </PageMeta>
  )
}
