function Cut({ src, alt }: { src: string; alt: string }) {
  return (
    <span
      className="mx-[0.12em] inline-block translate-y-[0.06em] overflow-hidden rounded-[2px] bg-light align-baseline"
      style={{ width: '0.66em', height: '0.78em' }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src || '/placeholder.svg'}
        alt={alt}
        className="h-full w-full object-cover grayscale-[0.15]"
      />
    </span>
  )
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-5 pb-16 pt-28 md:px-8"
    >
      {/* editorial corner labels */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <p className="absolute left-8 top-[28%] max-w-[12ch] font-serif text-sm italic leading-snug text-muted-foreground">
          25 años dirigiendo creatividad
        </p>
        <a
          href="#proyectos"
          className="pointer-events-auto absolute right-8 top-[30%] flex items-center gap-1 font-serif text-sm italic text-muted-foreground transition-colors hover:text-foreground"
        >
          Showreel <span aria-hidden="true">↗</span>
        </a>
        <p className="absolute bottom-[18%] left-8 max-w-[16ch] font-serif text-sm italic leading-snug text-muted-foreground">
          Brand strategy · Creative leadership
        </p>
      </div>

      <div className="mx-auto w-full max-w-[1500px]">
        <h1
          className="text-center font-bold uppercase leading-[0.85] tracking-[-0.02em] text-balance"
          style={{ fontSize: 'clamp(3rem, 12.5vw, 13rem)' }}
        >
          <span className="block">Creatividad</span>
          <span className="block">
            que <span className="font-serif text-[0.5em] italic font-normal align-middle text-change">(</span>
            <Cut src="/images/hero-1.png" alt="Retrato editorial en movimiento" />
            <span className="font-serif text-[0.5em] italic font-normal align-middle text-change">)</span> merece
          </span>
          <span className="block">
            ser <span className="align-super text-[0.4em] text-change">✳</span> comunicada
          </span>
        </h1>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-[1500px] flex-col gap-4 md:mt-16 md:flex-row md:items-end md:justify-between">
        <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
          Felipe Gaete Vilches — Director Creativo con un cuarto de siglo
          alineando negocio y cultura para marcas regionales y globales en redes
          internacionales.
        </p>
        <a
          href="#contacto"
          className="group inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground"
        >
          <span className="border-b border-foreground pb-0.5 transition-colors group-hover:border-transparent">
            Trabajemos juntos
          </span>
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  )
}
