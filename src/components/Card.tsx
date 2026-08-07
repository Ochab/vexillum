interface CardProps {
  children: React.ReactNode
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="overflow-hidden rounded-lg bg-gray-800/50 outline -outline-offset-1 outline-white/10">
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  )
}