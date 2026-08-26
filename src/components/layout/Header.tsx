import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import { Button } from '../ui/Button'

function scrollToHash(hash: string) {
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const navTextClass =
  'text-[0.72rem] font-medium uppercase tracking-[0.2em] text-ivory transition-opacity hover:opacity-70'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!mobileOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

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
      <div className="relative flex h-20 w-full items-center px-4 sm:px-6 lg:px-8">
        <Link to="/" className="shrink-0" onClick={() => setMobileOpen(false)}>
          <img
            src="/SJF_logo_dark.png"
            alt="SJF Fitness"
            className="h-7 w-auto sm:h-8"
            width={642}
            height={160}
          />
        </Link>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-9 md:flex"
          aria-label="Main navigation"
        >
          {siteConfig.navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={navTextClass}
              end={link.href === '/'}
              onClick={(event) => handleNavClick(event, link.href)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-6">
          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-2 text-[0.72rem] font-medium tracking-wide text-ivory transition-opacity hover:opacity-70 md:flex"
          >
            <Phone className="h-3.5 w-3.5" />
            {siteConfig.phone}
          </a>
          <Button to="/contact" size="sm" className="hidden md:inline-flex">
            Contact Us
          </Button>
          <button
            type="button"
            className="-mr-2 flex min-h-11 min-w-11 items-center justify-center text-ivory transition-opacity hover:opacity-70 md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 bg-obsidian px-5 py-7 sm:px-6 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-5">
            {siteConfig.navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={navTextClass}
                end={link.href === '/'}
                onClick={(event) => handleNavClick(event, link.href)}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={siteConfig.phoneHref}
              className="mt-1 flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-ivory"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <Button to="/contact" className="mt-2 w-full" onClick={() => setMobileOpen(false)}>
              Contact Us
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
