const PROJECTS = [
  {
    num: '01',
    title: 'Expertos en Carnes',
    client: 'Tottus',
    year: '2018',
    role: 'Dirección Creativa · Campaña integrada',
    description:
      'Campaña con producción audiovisual de primer nivel junto a Francis Mallmann que posicionó a Tottus como referente de calidad en productos frescos, con proyección regional.',
    image: '/images/work-asado.png',
    tags: ['Brand', 'Film', 'Retail'],
    span: 'md:col-span-7',
  },
  {
    num: '02',
    title: 'Sneaker Corner',
    client: 'Falabella',
    year: '2022',
    role: 'Concepto de marca · Activación',
    description:
      'Concepto para el lanzamiento de un espacio dedicado a la cultura sneaker dentro de Falabella. Activación integrada con componente digital y contenido social de alto engagement.',
    image: '/images/work-sneaker.png',
    tags: ['Concepto', 'Social', 'Cultura'],
    span: 'md:col-span-5',
  },
  {
    num: '03',
    title: 'Beauty, Fashion & Wellness',
    client: 'Ecosistema Falabella',
    year: '2012 — 2025',
    role: 'Dirección Creativa · ATL · Digital · Social',
    description:
      'Trece años liderando la dirección creativa del ecosistema Falabella con un equipo de más de 20 personas, en campañas integradas con activación en TV, OOH, digital y social.',
    image: '/images/work-fashion.png',
    tags: ['Liderazgo', 'Integrada', 'Regional'],
    span: 'md:col-span-5',
  },
  {
    num: '04',
    title: 'Sistemas de Identidad',
    client: 'Consultoría independiente',
    year: '2025 —',
    role: 'Brand Strategy · Arquitectura de mensajes',
    description:
      'Procesos de lanzamiento, transformación y reposicionamiento de marca: posicionamiento, arquitectura de mensajes y sistemas de identidad, con IA generativa integrada al proceso creativo.',
    image: '/images/hero-2.png',
    tags: ['Strategy', 'Branding', 'IA'],
    span: 'md:col-span-7',
  },
]

export function WorkSection() {
  return (
    <section id="proyectos" className="px-5 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 flex items-end justify-between border-b border-border pb-5 md:mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-tight md:text-5xl">
            Proyectos
          </h2>
          <span className="font-serif text-sm italic text-muted-foreground md:text-base">
            Selección de trabajo
          </span>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-12 md:gap-y-20">
          {PROJECTS.map((p) => (
            <article key={p.num} className={`group flex flex-col ${p.span}`}>
              <div className="relative mb-5 aspect-[4/3] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image || '/placeholder.svg'}
                  alt={`${p.title} — ${p.client}`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute left-4 top-4 font-serif text-sm italic text-hope mix-blend-difference">
                  ({p.num})
                </span>
              </div>

              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-bold uppercase leading-none tracking-tight md:text-4xl">
                  {p.title}
                </h3>
                <span className="shrink-0 text-sm text-muted-foreground">{p.year}</span>
              </div>

              <div className="mt-2 flex items-center gap-3">
                <span className="text-sm font-semibold text-foreground">{p.client}</span>
                <span className="h-1 w-1 rounded-full bg-change" aria-hidden="true" />
                <span className="text-sm text-muted-foreground">{p.role}</span>
              </div>

              <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide text-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
