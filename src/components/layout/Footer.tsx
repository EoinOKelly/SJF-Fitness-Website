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

            <div className="mt-6 flex items-center gap-4">
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="SJF Fitness on Instagram"
                className="text-ash transition-colors hover:text-brand"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="SJF Fitness on Facebook"
                className="text-ash transition-colors hover:text-brand"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14 8.5V7c0-.8.5-1 1-1h2V2.2c-.7-.1-1.8-.2-3.1-.2C10.8 2 9 3.8 9 7.2v1.3H6V13h3v9h4.5v-9h3l.5-4.5h-3Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-xs tracking-wide text-ash-dim">
          {siteConfig.copyright}
        </div>
      </div>
    </footer>
  )
}
