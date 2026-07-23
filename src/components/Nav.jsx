import { useEffect, useState } from 'react'
import Button from './Button'
import { profile } from '../data/content'

const links = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`bg-base/90 sticky top-0 z-50 backdrop-blur-sm transition-colors duration-150 ease-out ${
        scrolled ? 'border-line border-b' : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-8"
      >
        <a
          href="#top"
          className="hover:text-accent font-mono text-sm font-medium transition-colors duration-150 ease-out"
        >
          {profile.name.toLowerCase().replace(/\s+/g, '')}
          <span className="text-accent">.dev</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-secondary hover:text-primary text-sm transition-colors duration-150 ease-out"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume ต้องหาเจอง่ายเสมอ — วางไว้ใน Nav ตลอดเวลา */}
        <Button
          href={profile.resumeUrl}
          download
          variant="secondary"
          className="shrink-0 px-3.5 py-2 text-xs md:px-5 md:py-2.5 md:text-sm"
        >
          Resume
          <DownloadIcon />
        </Button>
      </nav>
    </header>
  )
}

function DownloadIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="m7 12 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  )
}
