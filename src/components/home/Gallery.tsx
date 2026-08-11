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

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[220px]">
          {galleryImages.map((image, index) => (
            <Reveal
              key={image.src}
              as="figure"
              delay={Math.min(index * 70, 280)}
              className={`group relative overflow-hidden border border-white/10 bg-graphite ${image.className ?? ''}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full min-h-[220px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian/80 to-transparent p-4 pt-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
