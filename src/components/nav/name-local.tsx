import { ReactNode } from 'react'

interface NameLocaProps {
  children: ReactNode
}

export function NameLocal({ children }: NameLocaProps) {
  return <h2 className="text-5xl font-pixel700">{children}</h2>
}
