import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
}

export function Button({ children }: ButtonProps) {
  return (
    <button className="flex w-full bg-white py-4 text-2xl font-pixel700 rounded-sm items-center justify-center">
      {children}
    </button>
  )
}
