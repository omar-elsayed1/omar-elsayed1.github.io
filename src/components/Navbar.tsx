import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Container } from './ui'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-colors ${
        scrolled ? 'border-ink-700 bg-ink-950/90 backdrop-blur' : 'border-transparent bg-transparent'
      }`}
    >
      <Container className="section-px flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-semibold text-paper-100">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gold-400 text-ink-950">OM</span>
          <span className="hidden sm:inline">Omar Elsayed</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-paper-400 transition-colors hover:text-paper-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-md bg-gold-400 px-4 py-2 text-sm font-medium text-ink-950 transition-colors hover:bg-gold-300"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          className="text-paper-200 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <nav className="border-t border-ink-700 bg-ink-950 md:hidden">
          <Container className="section-px flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-paper-300 hover:bg-ink-800 hover:text-paper-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-gold-400 px-4 py-3 text-center font-medium text-ink-950"
            >
              Hire Me
            </a>
          </Container>
        </nav>
      )}
    </header>
  )
}
