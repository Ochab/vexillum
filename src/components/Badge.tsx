
interface BadgeProps {
  label?: string
  intent?: 'default' | 'info' | 'danger' | 'warning' | 'success'
}

export const Badge = ({ label = 'Label', intent = 'info' }: BadgeProps) => {
  return (
      <span 
        className=" inline-flex items-center gap-x-1.5 rounded-md  px-2 py-1 text-xs font-medium 
                  bg-gray-100 text-gray-600"
      >
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-gray-400">
          <circle r={3} cx={3} cy={3} />
        </svg>
        {intent}
        {label}
      </span>
  )
}
