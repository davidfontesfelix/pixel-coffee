import { ReactNode } from 'react'

interface NavRootProps {
  children: ReactNode
}

export function NavRoot({ children }: NavRootProps) {
  return (
    <nav className="px-4 py-2 flex items-center justify-between">
      {children}
    </nav>
  )
}
