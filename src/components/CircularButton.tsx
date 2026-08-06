interface CircularButtonProps {
  size?: 'sm' | 'md' | 'lg'
}

const sizeStyles = {
  sm: 'size-7',
  md: 'size-8',
  lg: 'size-9 ',
}

export const CircularButton = ({ size = 'md' }: CircularButtonProps) => {
  return (
    <>
      <button
        type="button"
        className={`p-1 text-sm rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customFocus bg-button-solid-surface hover:bg-button-solid-surface-hover text-button-solid-content ${sizeStyles[size]}`}
      >
        <span className="size-5">+</span>
      </button>
    </>
  )
}