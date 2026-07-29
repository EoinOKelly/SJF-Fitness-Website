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
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Contact"
            title="Begin the conversation"
            subtitle="Ready to start? Send Sandra a note to arrange a session or ask a question — she answers personally."
            align="center"
          />

          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <ContactForm />

              <div className="mt-8 space-y-5 border border-white/10 bg-graphite p-8">
                <h3 className="eyebrow">Direct contact</h3>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-3 text-ash transition-colors hover:text-gold"
                >
                  <Phone className="h-5 w-5 shrink-0 text-gold" />
                  {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.emailHref}
                  className="flex items-center gap-3 text-ash transition-colors hover:text-gold"
                >
                  <Mail className="h-5 w-5 shrink-0 text-gold" />
                  {siteConfig.email}
                </a>
                <div className="flex items-start gap-3 text-ash">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <address className="not-italic">{siteConfig.address.full}</address>
                </div>
              </div>
            </div>

            <div className="overflow-hidden border border-white/10">
              <iframe
                title="SJF Fitness location map"
                src={siteConfig.mapEmbedUrl}
                className="h-full min-h-80 w-full border-0 grayscale sm:min-h-96"
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
