import { MapPin } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import { SectionHeading } from '../ui/SectionHeading'

export function Studio() {
  return (
    <section className="bg-cream-dark py-16 lg:py-24" id="studio">
      <div className="container-page">
        <SectionHeading
          eyebrow="The Studio"
          title="A comfortable space for one-on-one training"
          subtitle="We have a brand new premises at The Office Box in Kealew Business Park, Portlaoise. The new studio is a comfortable space where you will get the one on one attention you deserve."
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-cream-dark bg-white shadow-sm">
            <iframe
              title="SJF Fitness studio location map"
              src={siteConfig.mapEmbedUrl}
              className="h-72 w-full border-0 sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-2xl border border-cream-dark bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-teal/10 p-3">
                  <MapPin className="h-6 w-6 text-teal" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-charcoal">Find Us</h3>
                  <address className="mt-3 not-italic leading-relaxed text-muted">
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                    <br />
                    {siteConfig.address.city}
                    <br />
                    <span className="font-semibold text-charcoal">
                      Eircode: {siteConfig.address.eircode}
                    </span>
                  </address>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-teal hover:text-teal-dark"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
