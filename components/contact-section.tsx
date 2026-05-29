const LINKS = [
  { label: 'Email', value: 'felipegaetevilches@gmail.com', href: 'mailto:felipegaetevilches@gmail.com' },
  { label: 'Teléfono', value: '+56 9 9929 3066', href: 'tel:+56999293066' },
  { label: 'LinkedIn', value: 'in/felipegaete', href: 'https://www.linkedin.com/' },
  { label: 'Behance', value: 'Portfolio', href: 'https://www.behance.net/' },
]

export function ContactSection() {
  return (
    <footer id="contacto" className="bg-future px-5 pb-10 pt-20 text-hope md:px-8 md:pt-32">
      <div className="mx-auto max-w-[1500px]">
        <p className="font-serif text-sm italic text-hope/50">(05) Hablemos</p>

        <a
          href="mailto:felipegaetevilches@gmail.com"
          className="group mt-6 block"
        >
          <h2
            className="font-bold uppercase leading-[0.85] tracking-[-0.02em] text-balance"
            style={{ fontSize: 'clamp(3rem, 13vw, 15rem)' }}
          >
            Trabajemos
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-3">
              {' '}juntos
            </span>
          </h2>
          <span className="mt-4 inline-flex items-center gap-2 text-sm uppercase tracking-wide text-hope/70 transition-colors group-hover:text-hope">
            <span className="border-b border-hope/40 pb-0.5">
              felipegaetevilches@gmail.com
            </span>
            <span aria-hidden="true">→</span>
          </span>
        </a>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-hope/15 pt-10 md:grid-cols-4 md:gap-6">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group flex flex-col gap-1"
            >
              <span className="font-serif text-sm italic text-hope/50">{l.label}</span>
              <span className="text-base font-semibold text-hope transition-colors group-hover:text-essence md:text-lg">
                {l.value}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-hope/15 pt-6 md:flex-row md:items-center md:justify-between">
          <span className="text-7xl font-bold tracking-tight md:text-9xl">fgv.</span>
          <div className="flex flex-col gap-1 text-sm text-hope/50 md:text-right">
            <span>Director Creativo Estratégico · Santiago, Chile</span>
            <span>© {new Date().getFullYear()} Felipe Gaete Vilches</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
