import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-full bg-white py-4 text-2xl font-pixel700 rounded-sm items-center justify-center"
    >
      {children}
    </button>
  )
}
