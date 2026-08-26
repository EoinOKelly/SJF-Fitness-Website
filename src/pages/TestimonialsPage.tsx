import { Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import { PageMeta } from '../components/ui/PageMeta'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'

export function TestimonialsPage() {
  return (
    <PageMeta
      title="Testimonials"
      description="What clients say about training with Sandra Furney at SJF Fitness Portlaoise: personal one-to-one coaching, nutrition and real cooking knowledge."
    >
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Testimonials"
            title="In their own words"
            subtitle="Real results from real people who train privately with Sandra."
            align="center"
          />

          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
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
              </figure>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button to="/contact" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </PageMeta>
  )
}
