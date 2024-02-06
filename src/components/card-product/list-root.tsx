import { ReactNode } from 'react'

interface ListProps {
  children: ReactNode
}

export function ListRoot({ children }: ListProps) {
  return <ul className="flex flex-col gap-4 pb-28">{children}</ul>
}
