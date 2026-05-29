const SERVICES = [
  {
    num: '01',
    title: 'Dirección Creativa',
    description:
      'Concepto, narrativa y ejecución integrada para campañas con activación en TV, OOH, digital y social.',
  },
  {
    num: '02',
    title: 'Brand Strategy',
    description:
      'Posicionamiento, arquitectura de mensajes y sistemas de identidad para lanzar, transformar o reposicionar una marca.',
  },
  {
    num: '03',
    title: 'Creative Leadership',
    description:
      'Liderazgo de equipos multidisciplinarios de hasta 20 personas, mentoría y desarrollo de talento creativo.',
  },
  {
    num: '04',
    title: 'Pitch & New Business',
    description:
      'Dirección y desarrollo creativo de pitches para agencias, directorios y equipos de marketing.',
  },
  {
    num: '05',
    title: 'IA Generativa Aplicada',
    description:
      'Integración de IA generativa en conceptualización, investigación de marca y desarrollo creativo.',
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-future px-5 py-20 text-hope md:px-8 md:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 flex items-end justify-between border-b border-hope/15 pb-5 md:mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-tight md:text-5xl">
            Servicios
          </h2>
          <span className="font-serif text-sm italic text-hope/50 md:text-base">
            (05) capacidades
          </span>
        </div>

        <ul>
          {SERVICES.map((s) => (
            <li
              key={s.num}
              className="group grid grid-cols-1 items-start gap-2 border-b border-hope/15 py-6 transition-colors md:grid-cols-12 md:gap-6 md:py-8"
            >
              <span className="font-serif text-sm italic text-hope/40 md:col-span-1">
                ({s.num})
              </span>
              <h3 className="text-3xl font-bold uppercase leading-[0.95] tracking-tight transition-transform duration-300 group-hover:translate-x-2 md:col-span-7 md:text-6xl">
                {s.title}
              </h3>
              <p className="max-w-md text-pretty text-sm leading-relaxed text-hope/60 md:col-span-4">
                {s.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
