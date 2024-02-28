import { ReactNode } from 'react'

interface CardLiProps {
  children: ReactNode
  index: number
}

export function CardLi({ children, index }: CardLiProps) {
  return <li className={`fadeInDown-${index}`}>{children}</li>
}
