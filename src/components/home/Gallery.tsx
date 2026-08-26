import { galleryImages } from '../../data/gallery'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Gallery() {
  return (
    <section className="bg-onyx py-24 lg:py-32" id="gallery">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="Inside the studio"
            subtitle="A glimpse of private training with Sandra — calm space, focused work, real results."
            align="center"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[230px]">
          {galleryImages.map((image, index) => (
            <Reveal
              key={image.src}
              as="figure"
              delay={Math.min(index * 55, 275)}
              className={`gallery-card group relative min-h-[240px] overflow-hidden border border-white/10 bg-graphite sm:min-h-[260px] lg:min-h-0 ${image.className ?? ''}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                width={image.width}
                height={image.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                style={{ objectPosition: image.objectPosition }}
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025] group-hover:saturate-[1.06]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-white/[0.03] opacity-80 transition-opacity duration-500 sm:opacity-35 sm:group-hover:opacity-90" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-0 p-4 pt-12 transition duration-500 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                <span className="text-[0.66rem] uppercase tracking-[0.18em] text-ivory/90">
                  {image.alt}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
