import { ReactNode } from 'react'

interface CardLiProps {
  children: ReactNode
  index: number
  key: number
}

export function CardLi({ children, index, key }: CardLiProps) {
  return (
    <li key={key} className={`fadeInDown-${index}`}>
      {children}
    </li>
  )
}
