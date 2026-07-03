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
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`mb-10 max-w-2xl ${alignClass}`} id={id}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-teal">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>
      )}
    </div>
  )
}
