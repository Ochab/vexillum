interface BadgeProps {
  label?: string
  intent?: 'info' | 'danger' | 'warning' | 'success' | 'neutral' | 'brand'
  showDot?: boolean
}

const intentStyles = {
  info:    'bg-info-surface text-info-content *:fill-info-vivid',
  danger:  'bg-danger-surface text-danger-content *:fill-danger-vivid',
  warning: 'bg-warning-surface text-warning-content *:fill-warning-vivid',
  success: 'bg-success-surface text-success-content *:fill-success-vivid',
  neutral: 'bg-neutral-surface text-neutral-content *:fill-neutral-vivid',
  brand: 'bg-brand-surface text-brand-content *:fill-brand-vivid'
}

export const Badge = ({ label = 'Label', intent = 'info', showDot = true }: BadgeProps) => {
  return (
      <span 
        className={`inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium ${intentStyles[intent]}`}
      >
        {showDot && (
          <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-current">
            <circle r={3} cx={3} cy={3} />
          </svg>
        )}
        {label}
      </span>
  )
}
