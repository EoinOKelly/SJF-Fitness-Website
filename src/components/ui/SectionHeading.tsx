interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  id,
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  return (
    <div
      className={`mb-14 max-w-2xl ${isCenter ? 'mx-auto text-center' : 'text-left'}`}
      id={id}
    >
      {eyebrow && (
        <div
          className={`mb-5 flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}
        >
          <span className="h-px w-8 bg-gold/70" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-4xl font-medium leading-[1.06] tracking-tight text-ivory sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-lg leading-relaxed text-ash ${isCenter ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
