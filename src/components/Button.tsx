import type { ButtonHTMLAttributes } from 'react'

type Tone = 'brand' | 'accent' | 'info' | 'success' | 'warning' | 'danger' | 'neutral'
type Variant = 'solid' | 'outline'
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  variant?: Variant
  tone?: Tone
  size?: Size
}

/* Colors live in components.css, switched by data-tone / data-variant.
   Only size varies here — it has no CSS-side dependencies. */
const sizeStyles: Record<Size, string> = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-2 py-1 text-sm',
  md: 'px-2.5 py-1.5 text-sm',
  lg: 'px-3 py-2 text-sm',
  xl: 'px-3.5 py-2.5 text-sm',
}

const baseStyles = [
  // CSS hook. components.css scopes every tone/variant rule to .btn —
  // without this, --comp-button-* is never defined and the utilities below
  // resolve to nothing.
  'btn',

  // Shape. Flat in dark mode: shadows read as grime on dark surfaces.
  'rounded-sm font-semibold shadow-xs dark:shadow-none',

  // Border drawn inward, so solid and outline have identical box dimensions.
  // Solid sets --comp-button-ring to transparent rather than removing the ring.
  'inset-ring-1 inset-ring-button-ring',

  // The four painted colors. All resolve through the tone → variant chain
  // in components.css, so none of them name a color here.
  'bg-button-surface text-button-content',
  'hover:bg-button-surface-hover',

  // Keyboard focus only — no ring on mouse click.
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-button-focus',

  // Disabled colors come from .btn:disabled in components.css; these are
  // just the non-color parts.
  'disabled:cursor-not-allowed disabled:shadow-none',

  // Colors only. Avoids animating layout properties.
  'transition-colors',
].join(' ')

export const Button = ({
  label = 'Label',
  variant = 'solid',
  tone = 'brand',
  size = 'md',
  className = '',
  ...rest
}: ButtonProps) => (
  <button
    type="button"
    data-variant={variant}
    data-tone={tone}
    className={`${baseStyles} ${sizeStyles[size]} ${className}`}
    {...rest}
  >
    {label}
  </button>
)