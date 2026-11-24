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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,12,12,.55),transparent_70%)]" />

      <div className="container-page relative flex flex-1 items-center justify-center py-16">
        <div className="hero-enter flex w-full flex-col items-center gap-6 sm:gap-8">
          <h1 className="w-full max-w-[min(80vw,32rem)]">
            <img src="/SJF_logo_dark.png" alt={siteConfig.name} width={642} height={160} className="h-auto w-full" />
          </h1>
          <div className="flex items-center justify-center gap-5 sm:gap-7">
            <div className="flex flex-col items-start text-sm text-ivory sm:flex-row sm:items-center sm:gap-4">
              <span className="font-medium">{siteConfig.owner}</span>
              <span aria-hidden="true" className="hidden h-4 w-px bg-white/40 sm:block" />
              <a href={siteConfig.phoneHref} className="inline-flex min-h-11 items-center whitespace-nowrap tabular-nums hover:underline focus-visible:outline-brand">
                {siteConfig.phone}
              </a>
            </div>
            <Button to="/contact" size="sm" className="whitespace-nowrap">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
