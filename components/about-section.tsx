const STATS = [
  { value: '25', label: 'años de oficio' },
  { value: '20+', label: 'personas lideradas' },
  { value: '6', label: 'redes internacionales' },
]

const JURY = ['ADSTARS', 'FIAP', 'WAVE', 'FICE', 'WINA', 'PHNX AdForum', 'ACHAP']
const AWARDS = ['FIAP', 'El Ojo de Iberoamérica', 'FICE', 'WINA', 'ACHAP']

export function AboutSection() {
  return (
    <section id="sobre" className="px-5 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 flex items-end justify-between border-b border-border pb-5 md:mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-tight md:text-5xl">
            Sobre mí
          </h2>
          <span className="font-serif text-sm italic text-muted-foreground md:text-base">
            (04) perfil
          </span>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          {/* Image */}
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about.png"
                alt="Felipe Gaete Vilches, Director Creativo"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col md:col-span-7">
            <p className="max-w-2xl text-pretty text-xl font-semibold leading-snug tracking-tight md:text-3xl">
              Director Creativo con 25 años liderando estrategia creativa y
              ejecución integrada para marcas regionales y globales en agencias
              de red internacional.
            </p>

            <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
              He dirigido equipos multidisciplinarios —ATL, digital, social y
              producción— y gestionado cuentas de primer nivel para Falabella,
              P&amp;G y Unilever, con experiencia en coordinación regional entre
              mercados de América Latina. Mi carrera incluye Ogilvy, Leo Burnett,
              Prolam Y&amp;R (VML), Promoplan y consultoría independiente.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-4xl font-bold tracking-tight md:text-6xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Recognition */}
            <div className="mt-10 grid grid-cols-1 gap-8 border-t border-border pt-8 sm:grid-cols-2">
              <div>
                <h3 className="font-serif text-sm italic text-muted-foreground">
                  Jurado creativo internacional
                </h3>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {JURY.map((j) => (
                    <li key={j} className="text-sm font-semibold text-foreground">
                      {j}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-sm italic text-muted-foreground">
                  Premios obtenidos
                </h3>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {AWARDS.map((a) => (
                    <li key={a} className="text-sm font-semibold text-foreground">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy quote */}
        <figure className="mt-20 border-t border-border pt-10 md:mt-32">
          <blockquote className="max-w-5xl text-pretty text-2xl font-bold leading-tight tracking-tight md:text-5xl">
            En una crisis de confianza, no se trata de ganarla.{' '}
            <span className="font-serif font-normal italic text-change">
              Se trata de merecerla.
            </span>
          </blockquote>
          <figcaption className="mt-6 text-sm uppercase tracking-wide text-muted-foreground">
            Felipe Gaete Vilches
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
