import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

const Navbar = ({ theme, onToggleTheme }) => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-sand-50/90 backdrop-blur border-b border-ink-100">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#home" className="font-display text-lg font-semibold text-ink-900">
          Cheran V | AI/ML Portfolio
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-ink-600 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-ink-900">
              {link.label}
            </a>
          ))}
          <button
            onClick={onToggleTheme}
            className="rounded-full border border-ink-200 bg-white px-4 py-2 text-xs font-semibold text-ink-700 shadow-sm transition hover:border-ink-300 hover:text-ink-900"
          >
            {theme === 'dark' ? '☀ Light' : '🌙 Dark'}
          </button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-ink-200 bg-white p-2 text-ink-700 shadow-sm transition hover:text-ink-900 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden">
          <div className="mx-4 mb-4 rounded-2xl bg-white shadow-card border border-ink-100 p-4">
            <div className="flex flex-col gap-3 text-sm font-medium text-ink-700">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 transition hover:bg-ink-50 hover:text-ink-900"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  onToggleTheme()
                  setOpen(false)
                }}
                className="rounded-lg border border-ink-200 bg-white px-3 py-2 text-left text-xs font-semibold text-ink-700 shadow-sm transition hover:border-ink-300 hover:text-ink-900"
              >
                {theme === 'dark' ? '☀ Light' : '🌙 Dark'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
