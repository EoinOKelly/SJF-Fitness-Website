import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import { Button } from '../ui/Button'

function scrollToHash(hash: string) {
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[0.72rem] font-medium uppercase tracking-[0.2em] transition-colors ${
      isActive ? 'text-brand' : 'text-ash hover:text-ivory'
    }`

  function handleNavClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    setMobileOpen(false)
    if (!href.includes('#')) return

    const [path, hash] = href.split('#')
    const targetPath = path || '/'
    if (location.pathname === targetPath) {
      event.preventDefault()
      scrollToHash(`#${hash}`)
    } else {
      event.preventDefault()
      navigate(href)
      window.setTimeout(() => scrollToHash(`#${hash}`), 80)
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-obsidian/80 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="/SJF_logo_dark.png"
            alt="SJF Fitness"
            className="h-7 w-auto sm:h-8"
            width={642}
            height={160}
          />
          <span className="hidden text-[0.6rem] uppercase tracking-[0.32em] text-ash-dim sm:inline">
            Portlaoise
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {siteConfig.navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={navLinkClass}
              end={link.href === '/'}
              onClick={(event) => handleNavClick(event, link.href)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-[0.72rem] font-medium tracking-wide text-ash transition-colors hover:text-brand"
          >
            <Phone className="h-3.5 w-3.5" />
            {siteConfig.phone}
          </a>
          <Button to="/book" size="sm">
            Book Now
          </Button>
        </div>

        <button
          type="button"
          className="p-2 text-ivory transition-colors hover:text-brand md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-white/10 bg-obsidian px-5 py-6 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-5">
            {siteConfig.navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={navLinkClass}
                end={link.href === '/'}
                onClick={(event) => handleNavClick(event, link.href)}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={siteConfig.phoneHref}
              className="mt-1 flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-brand"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <Button to="/book" className="mt-2 w-full" onClick={() => setMobileOpen(false)}>
              Book Now
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
