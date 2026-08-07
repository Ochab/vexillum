import type { HTMLAttributes } from 'react'

type Tone = 'info' | 'success' | 'warning' | 'danger' | 'neutral' | 'brand' | 'accent' 

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  label?: string
  tone?: Tone
  showDot?: boolean
}

const baseStyles = [
  // CSS hook. components.css scopes every tone rule to .badge — without this,
  // --comp-badge-* is never defined and the utilities below resolve to nothing.
  'badge',

  // Layout and shape. No tone in here — the class string is identical for
  // every badge; only data-tone varies.
  'inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium',

  // The two painted colors. Both resolve through the tone chain in
  // components.css, so neither names a color family here.
  'bg-badge-surface text-badge-content',
].join(' ')

export const Badge = ({
  label = 'Label',
  tone = 'neutral',
  showDot = true,
  className = '',
  ...rest
}: BadgeProps) => (
  <span className={`${baseStyles} ${className}`} data-tone={tone} {...rest}>
    {showDot && (
      // Dot is a step lighter than the text — see the BADGE notes in
      // components.css for why they aren't the same token.
      <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-badge-dot">
        <circle r={3} cx={3} cy={3} />
      </svg>
    )}
    {label}
  </span>
)