import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gold text-obsidian hover:bg-gold-light',
  secondary:
    'border border-white/15 bg-transparent text-ivory hover:border-gold hover:text-gold',
  outline:
    'border border-gold/50 text-ivory hover:bg-gold hover:text-obsidian',
  ghost: 'text-ash hover:text-gold',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-[0.68rem]',
  md: 'px-7 py-3 text-[0.72rem]',
  lg: 'px-9 py-4 text-[0.72rem]',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2.5 font-medium uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian disabled:pointer-events-none disabled:opacity-40'

interface ButtonBaseProps {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined }

type ButtonAsLink = ButtonBaseProps &
  LinkProps & { to: string; type?: undefined }

type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if ('to' in props && props.to) {
    const { to, ...linkProps } = props
    return (
      <Link to={to} className={classes} {...linkProps}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
