import { ReactNode } from 'react'

interface DivInfosProps {
  children: ReactNode
}

export function DivInfos({ children }: DivInfosProps) {
  return <div className="infos">{children}</div>
}
