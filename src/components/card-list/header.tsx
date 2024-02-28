import { ReactNode } from 'react'

interface HeaderProps {
  children: ReactNode
  price: number
}

export function Header({ children, price }: HeaderProps) {
  return (
    <div className="header-div">
      <h3 className="text-2xl font-pixel700">{children}</h3>
      <h4 className="text-3xl font-pixel700 text-primary">R${price},00</h4>
    </div>
  )
}
