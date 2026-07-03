import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'

export function Footer() {
  return (
    <footer className="border-t border-cream-dark bg-charcoal text-white">
      <div className="container-page py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold">SJF Fitness</p>
            <p className="mt-2 text-sm text-white/70">{siteConfig.subtitle}</p>
            <p className="mt-4 text-sm text-white/70">{siteConfig.copyright}</p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">
              Quick Links
            </p>
            <ul className="space-y-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-teal"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.emailHref}
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-teal"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{siteConfig.address.full}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
