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
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Contact"
            title="Begin the conversation"
            subtitle="Ready to start? Send Sandra a note to arrange a session or ask a question. She answers personally."
            align="center"
          />

          <div className="grid min-w-0 gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="min-w-0">
              <ContactForm />

              <div className="mt-6 space-y-2 border border-white/10 bg-graphite p-5 sm:mt-8 sm:p-8">
                <h3 className="eyebrow">Direct contact</h3>
                <a
                  href={siteConfig.phoneHref}
                  className="flex min-h-11 items-center gap-3 text-ash transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
                >
                  <Phone className="h-5 w-5 shrink-0 text-brand" />
                  {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.emailHref}
                  className="flex min-h-11 min-w-0 items-center gap-3 text-ash transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
                >
                  <Mail className="h-5 w-5 shrink-0 text-brand" />
                  <span className="min-w-0 break-all">{siteConfig.email}</span>
                </a>
                <div className="flex min-h-11 items-start gap-3 py-2 text-ash">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <address className="not-italic">{siteConfig.address.full}</address>
                </div>
              </div>
            </div>

            <div className="min-w-0 overflow-hidden border border-white/10">
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
