import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-obsidian text-ivory">
      <div className="container-page py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <img
              src="/SJF_logo_dark.png"
              alt="SJF Fitness"
              className="h-9 w-auto"
              width={642}
              height={160}
            />
            <p className="mt-3 text-[0.62rem] uppercase tracking-[0.32em] text-brand">Portlaoise</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ash">
              {siteConfig.subtitle}
            </p>
          </div>

          <div>
            <p className="eyebrow mb-6">Explore</p>
            <ul className="space-y-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-ash transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6">Contact</p>
            <ul className="space-y-4">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-3 text-sm text-ash transition-colors hover:text-brand"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.emailHref}
                  className="flex items-center gap-3 text-sm text-ash transition-colors hover:text-brand"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ash">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{siteConfig.address.full}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-xs tracking-wide text-ash-dim">
          {siteConfig.copyright}
        </div>
      </div>
    </footer>
  )
}
