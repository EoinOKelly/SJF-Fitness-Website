import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-teal)_0%,_transparent_50%)] opacity-20" />
      <div className="container-page relative grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal">
            Private Premises · Portlaoise
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {siteConfig.owner}
          </h1>
          <p className="mt-4 text-xl text-white/90">{siteConfig.tagline}</p>
          <p className="mt-2 text-white/70">{siteConfig.subtitle}</p>

          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {siteConfig.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-white/85">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/book" size="lg">
              Book Now
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-charcoal">
              Contact Sandra
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-teal/40 to-coral/30 lg:aspect-square">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <p className="font-display text-2xl font-bold text-white">Private Training Studio</p>
            <p className="mt-2 text-sm text-white/80">
              One-on-one attention in a comfortable, private space
            </p>
            <p className="mt-6 rounded-full bg-white/10 px-4 py-2 text-xs text-white/70">
              Replace with studio photo in /public/hero.jpg
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
