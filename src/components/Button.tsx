interface ButtonProps {
  label?: string
  variant?: 'solid' | 'outline'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const variantStyles = {
  solid:    'bg-button-solid-surface hover:bg-button-solid-surface-hover text-button-solid-content',
  outline:  'bg-button-outline-surface hover:bg-button-outline-surface-hover text-button-outline-content'
}

const sizeStyles = {
  xs: 'px-2 py-1 text-xs',
  sm:  'px-2 py-1 text-sm',
  md:  'px-2.5 py-1.5 text-sm',
  lg:  'px-3 py-2 text-sm',
  xl:  'px-3.5 py-2.5 text-sm',
}

export const Button = ({ label = 'Label', variant = 'solid', size = 'md', onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`rounded-sm px-3 py-2 text-sm font-semibold shadow-xs dark:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${variantStyles[variant]} ${sizeStyles[size]}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
