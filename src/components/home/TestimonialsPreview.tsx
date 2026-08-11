import { Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function TestimonialsPreview() {
  const featured = testimonials.slice(0, 2)

  return (
    <section className="bg-onyx py-24 lg:py-32">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="Testimonials" title="What clients say" align="center" />
        </Reveal>

        <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
          {featured.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              as="figure"
              delay={index * 100}
              className="flex flex-col bg-obsidian p-9"
            >
              <Quote className="h-6 w-6 text-brand" aria-hidden="true" />
              <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-ivory">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-7 border-t border-white/10 pt-5">
                <p className="font-display text-lg text-ivory">{testimonial.name}</p>
                <p className="mt-1 text-[0.66rem] uppercase tracking-[0.2em] text-brand">
                  {testimonial.detail}
                </p>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center" delay={120}>
          <Button to="/testimonials" variant="outline">
            Read More Testimonials
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
