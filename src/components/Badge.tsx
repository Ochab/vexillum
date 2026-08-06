
interface BadgeProps {
  label?: string
  intent?: 'info' | 'danger' | 'warning' | 'success' | 'default'
  showDot?: boolean
}

const intentStyles = {
  default: 'bg-gray-100 text-gray-600 *:fill-gray-400',
  info:    'bg-blue-100 text-blue-700 *:fill-blue-500',
  danger:  'bg-red-100 text-red-700 *:fill-red-500',
  warning: 'bg-amber-100 text-amber-700 *:fill-amber-500',
  success: 'bg-green-100 text-green-700 *:fill-green-500',
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
