import { MapPin } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Studio() {
  return (
    <section className="bg-onyx py-24 lg:py-32" id="studio">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="The Studio"
            title="A space that is yours alone"
            subtitle="Our studio at The Office Box, Kealew Business Park is a calm, private setting with no crowds, no waiting and no audience. Just you and the work."
            align="center"
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="overflow-hidden border border-white/10 lg:col-span-3" delay={80}>
            <iframe
              title="SJF Fitness studio location map"
              src={siteConfig.mapEmbedUrl}
              className="h-80 w-full border-0 grayscale sm:h-96 lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>

          <Reveal
            className="flex flex-col justify-center border border-white/10 bg-graphite p-10 lg:col-span-2"
            delay={160}
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center border border-brand/40 text-brand">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="font-display text-2xl text-ivory">Find the Studio</h3>
            </div>
            <address className="mt-8 not-italic leading-loose text-ash">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
              <br />
              {siteConfig.address.city}
              <br />
              <span className="text-ivory">Eircode: {siteConfig.address.eircode}</span>
            </address>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-brand transition-colors hover:text-brand-light"
            >
              Open in Google Maps →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
