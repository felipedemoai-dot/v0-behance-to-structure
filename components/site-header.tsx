'use client'

import { useState, useEffect } from 'react'

const NAV = [
  { label: 'Inicio', href: '#inicio', index: '01' },
  { label: 'Proyectos', href: '#proyectos', index: '02' },
  { label: 'Servicios', href: '#servicios', index: '03' },
  { label: 'Sobre mí', href: '#sobre', index: '04' },
  { label: 'Contacto', href: '#contacto', index: '05' },
]

const LINKS = [
  { label: 'Email', href: 'mailto:felipegaetevilches@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Behance', href: 'https://www.behance.net/' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="flex items-center justify-between px-5 py-5 md:px-8 md:py-6">
          <a
            href="#inicio"
            onClick={() => setOpen(false)}
            className="text-sm font-bold tracking-tight text-foreground mix-blend-difference"
          >
            felipe gaete<span className="text-change">.</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-[60] text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-60"
            aria-expanded={open}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? 'Cerrar' : 'Menú'}
          </button>
        </div>
      </header>

      {/* Overlay menu */}
      <div
        className={`fixed inset-0 z-50 bg-future text-hope transition-[clip-path] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          open ? '[clip-path:inset(0_0_0_0)]' : '[clip-path:inset(0_0_100%_0)]'
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col justify-between px-5 pb-8 pt-24 md:px-8 md:pt-28">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 border-t border-hope/15 py-4 transition-colors hover:text-essence md:py-5"
              >
                <span className="font-serif text-xs italic text-hope/50">({item.index})</span>
                <span className="text-[12vw] font-bold uppercase leading-none tracking-tight md:text-[6vw]">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-6 border-t border-hope/15 pt-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xs">
              <p className="font-serif text-sm italic text-hope/60">
                Director Creativo Estratégico
              </p>
              <p className="mt-1 text-sm text-hope/60">Santiago, Chile</p>
            </div>
            <div className="flex gap-6">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="text-sm uppercase tracking-wide text-hope/80 underline-offset-4 transition-colors hover:text-hope hover:underline"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
