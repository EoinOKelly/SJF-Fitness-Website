import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Stagger delay in ms */
  delay?: number
  /** Once visible, stay visible */
  as?: 'div' | 'section' | 'article' | 'li' | 'figure'
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const style = delay
    ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties)
    : undefined

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  )
}
