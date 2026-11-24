import { useEffect, useState } from 'react'
import { siteConfig } from '../../data/siteConfig'
import { Button } from '../ui/Button'

export function Hero() {
  const [playVideo, setPlayVideo] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const connection = navigator as Navigator & {
      connection?: { saveData?: boolean }
    }

    const updateVideoPreference = () => {
      setPlayVideo(!reducedMotion.matches && !connection.connection?.saveData)
    }

    updateVideoPreference()
    reducedMotion.addEventListener('change', updateVideoPreference)

    return () => {
      reducedMotion.removeEventListener('change', updateVideoPreference)
    }
  }, [])

  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] w-full flex-col overflow-hidden bg-obsidian">
      {/* Warm fallback tone shown before/behind the video */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_18%,rgba(201,47,18,0.10),transparent_55%)]" />

      {/*
        Full-bleed landing video.
        Drop the file in as: public/hero.mp4  (optional still: public/hero-poster.jpg)
      */}
      {playVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          poster="/hero-poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src="/hero-poster.jpg"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
      )}

      {/* Legibility washes */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/55 to-obsidian/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 via-obsidian/25 to-transparent" />

      <div className="container-page relative flex flex-1 flex-col justify-center py-16 sm:py-24 lg:py-28">
        <div className="hero-enter max-w-3xl">
          <h1 className="font-display text-[clamp(2.75rem,12vw,4.5rem)] font-bold leading-[1.02] tracking-tight text-ivory sm:text-6xl lg:text-7xl">
            {siteConfig.owner}
          </h1>
          <a
            href={siteConfig.phoneHref}
            className="mt-6 inline-flex min-h-11 items-center text-xl font-medium text-ivory transition-colors hover:text-brand-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:text-2xl"
          >
            {siteConfig.phone}
          </a>
          <div className="mt-8">
            <Button to="/contact" size="lg" className="w-full sm:w-auto">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
