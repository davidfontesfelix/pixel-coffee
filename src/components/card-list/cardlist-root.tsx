import { ReactNode } from 'react'
import './styles.scss'

interface CardListProps {
  children: ReactNode
}

export function CardListRoot({ children }: CardListProps) {
  return <ul className="flex flex-col gap-2 list">{children}</ul>
}
