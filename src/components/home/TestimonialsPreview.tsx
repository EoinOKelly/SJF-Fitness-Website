import { Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

export function TestimonialsPreview() {
  const featured = testimonials.slice(0, 2)

  return (
    <section className="bg-onyx py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading eyebrow="Testimonials" title="What clients say" align="center" />

        <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
          {featured.map((testimonial) => (
            <figure key={testimonial.name} className="flex flex-col bg-obsidian p-9">
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
            </figure>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button to="/testimonials" variant="outline">
            Read More Testimonials
          </Button>
        </div>
      </div>
    </section>
  )
}
