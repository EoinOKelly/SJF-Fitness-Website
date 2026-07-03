import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-coral text-white hover:bg-coral-dark focus-visible:ring-coral shadow-sm',
  secondary:
    'bg-teal text-white hover:bg-teal-dark focus-visible:ring-teal shadow-sm',
  outline:
    'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white focus-visible:ring-charcoal',
  ghost: 'text-charcoal hover:bg-cream-dark focus-visible:ring-charcoal',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-base',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

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
