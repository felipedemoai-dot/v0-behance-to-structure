const BRANDS = [
  'Falabella',
  'Tottus',
  'P&G',
  'Unilever',
  'Nestlé',
  'Ogilvy',
  'Leo Burnett',
  'VML',
  'Claro',
  'Mitsubishi',
  'Shell',
  'Samsonite',
  'WWF',
  'Sony',
]

export function BrandMarquee() {
  const row = [...BRANDS, ...BRANDS]
  return (
    <section
      aria-label="Marcas con las que he trabajado"
      className="border-y border-border bg-muted py-4 md:py-5"
    >
      <div className="group flex overflow-hidden">
        <div className="flex shrink-0 animate-[marquee_38s_linear_infinite] items-center gap-10 pr-10 group-hover:[animation-play-state:paused] md:gap-16 md:pr-16">
          {row.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="whitespace-nowrap text-lg font-semibold tracking-tight text-foreground/70 md:text-xl"
            >
              {b}
            </span>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex shrink-0 animate-[marquee_38s_linear_infinite] items-center gap-10 pr-10 group-hover:[animation-play-state:paused] md:gap-16 md:pr-16"
        >
          {row.map((b, i) => (
            <span
              key={`dup-${b}-${i}`}
              className="whitespace-nowrap text-lg font-semibold tracking-tight text-foreground/70 md:text-xl"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
