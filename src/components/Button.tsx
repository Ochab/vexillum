interface ButtonProps {
  label?: string
  variant?: 'solid' | 'outline'
}

const variantStyles = {
  solid: 'bg-button-solid-surface hover:bg-button-solid-surface-hover text-button-solid-content',
  outline: 'bg-button-outline-surface hover:bg-button-outline-surface-hover text-button-outline-content'
}

export const Button = ({ label = 'Label', variant = 'solid'}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`rounded-sm px-3 py-2 text-sm font-semibold shadow-xs font-semibold shadow-xs dark:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${variantStyles[variant]}`}
    >
      { label }
    </button>
  )
}
