import type { ButtonHTMLAttributes } from 'react'

type Tone = 'brand' | 'accent' | 'info' | 'success' | 'warning' | 'danger' | 'neutral'
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/* Outline is the secondary button — neutral chrome, not "solid with a hole
   in it". Danger is the one exception: destructive secondary actions need to
   read as destructive. Everything else would render gray anyway, so the type
   rejects it rather than failing silently at runtime. */
type OutlineTone = 'neutral' | 'danger'

type BaseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string
  size?: Size
}

type ButtonProps = BaseProps &
  (
    | { variant?: 'solid' | 'soft'; tone?: Tone }
    | { variant: 'outline'; tone?: OutlineTone }
  )

/* Colors live in components.css, switched by data-tone / data-variant.
   Size carries radius too — the scale steps up at md, matching the reference. */
const sizeStyles: Record<Size, string> = {
  xs: 'rounded-sm px-2 py-1 text-xs',
  sm: 'rounded-sm px-2 py-1 text-sm',
  md: 'rounded-md px-2.5 py-1.5 text-sm',
  lg: 'rounded-md px-3 py-2 text-sm',
  xl: 'rounded-md px-3.5 py-2.5 text-sm',
}

const baseStyles = [
  // CSS hook. components.css scopes every tone/variant rule to .btn —
  // without this, --comp-button-* is never defined and the utilities below
  // resolve to nothing.
  'btn',

  // Radius is in sizeStyles, not here — it varies by size.
  'font-semibold shadow-xs dark:shadow-none',

  // Border drawn inward, so all three variants have identical box dimensions.
  // Solid and soft set --comp-button-ring to transparent rather than
  // removing the ring, so nothing shifts between variants.
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
  tone,
  size = 'md',
  className = '',
  ...rest
}: ButtonProps) => {
  // Outline defaults to neutral, everything else to brand. Defaulting outline
  // to 'brand' would put a misleading data-tone on an element that renders gray.
  const resolvedTone = tone ?? (variant === 'outline' ? 'neutral' : 'brand')

  return (
    <button
      type="button"
      data-variant={variant}
      data-tone={resolvedTone}
      className={`${baseStyles} ${sizeStyles[size]} ${className}`}
      {...rest}
    >
      {label}
    </button>
  )
}