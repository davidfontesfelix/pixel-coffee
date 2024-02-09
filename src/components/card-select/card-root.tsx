import { ReactNode } from 'react'

interface CardSelectRootProps {
  children: ReactNode
  onClick: () => void
  borderColor: boolean
  className: string
}

export function CardSelectRoot({
  children,
  onClick,
  borderColor,
  className,
}: CardSelectRootProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-neutral-200 ${className} rounded-sm ring-2 ${borderColor === true ? 'ring-primary' : 'ring-neutral-400'} mt-4 mx-4 p-4 focus:ring-2 focus:ring-primar"`}
    >
      {children}
    </button>
  )
}
