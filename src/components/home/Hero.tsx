import { ArrowRight } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] w-full flex-col overflow-hidden bg-obsidian">
      {/* Warm fallback tone shown before/behind the video */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_18%,rgba(201,47,18,0.10),transparent_55%)]" />

      {/*
        Full-bleed landing video.
        Drop the file in as: public/hero.mp4  (optional still: public/hero-poster.jpg)
      */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        poster="/hero-poster.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Legibility washes */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/55 to-obsidian/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 via-obsidian/25 to-transparent" />

      <div className="container-page relative flex flex-1 flex-col justify-center py-28">
        <div className="hero-enter max-w-3xl">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-brand/45" />
            <span className="eyebrow">Private Personal Training · Portlaoise</span>
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-ivory sm:text-6xl lg:text-7xl">
            Your strongest self,
            <span className="block text-brand-dark">in private.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ash">
            One-to-one personal training, nutrition and real cooking know-how with{' '}
            {siteConfig.owner}, a certified trainer and trained chef. By appointment, in a discreet
            studio that is yours alone.
          </p>

          <div className="mt-11 flex flex-wrap gap-4">
            <Button to="/book" size="lg">
              Book Your Session
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Enquire
            </Button>
          </div>
        </div>
      </div>

      {/* Discipline strip */}
      <div className="hero-enter-strip relative border-t border-white/10 bg-obsidian/50 backdrop-blur-sm">
        <div className="container-page flex flex-wrap items-center gap-x-5 gap-y-2 py-4">
          {siteConfig.highlights.map((item, index) => (
            <span key={item} className="flex items-center gap-5">
              {index > 0 && <span className="h-1 w-1 rotate-45 bg-brand/70" />}
              <span className="text-[0.68rem] uppercase tracking-[0.22em] text-ash">
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
