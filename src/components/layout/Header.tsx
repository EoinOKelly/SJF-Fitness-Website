import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import { Button } from '../ui/Button'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? 'text-teal' : 'text-charcoal hover:text-teal'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-cream-dark bg-cream/95 backdrop-blur-sm">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="group flex flex-col leading-tight" onClick={() => setMobileOpen(false)}>
          <span className="font-display text-lg font-bold text-charcoal group-hover:text-teal">
            SJF Fitness
          </span>
          <span className="text-xs text-muted">Portlaoise</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {siteConfig.navLinks.map((link) => (
            <NavLink key={link.href} to={link.href} className={navLinkClass} end={link.href === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-teal"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Button to="/book" size="sm">
            Book Now
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-charcoal hover:bg-cream-dark md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-cream-dark bg-cream px-4 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {siteConfig.navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={navLinkClass}
                end={link.href === '/'}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={siteConfig.phoneHref}
              className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-teal"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <Button to="/book" className="mt-3 w-full" onClick={() => setMobileOpen(false)}>
              Book Now
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
