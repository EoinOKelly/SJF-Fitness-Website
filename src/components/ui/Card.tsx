import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`border border-white/10 bg-graphite p-7 ${
        hover ? 'transition-colors duration-300 hover:border-gold/40' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
