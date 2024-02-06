import { ReactNode } from 'react'

interface ButtonDivProps {
  children: ReactNode
}

export function ButtonDiv({ children }: ButtonDivProps) {
  return <div className="bg-primary p-4 fixed bottom-0 w-full">{children}</div>
}
