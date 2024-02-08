import { CartContext } from '@/context/cart-context'
import { ReactNode, useContext } from 'react'

interface ListProps {
  children: ReactNode
}

export function ListRoot({ children }: ListProps) {
  const { productsCart } = useContext(CartContext)
  return (
    <ul
      data-condition={productsCart.length > 0}
      className="flex flex-col data-[condition=true]:pb-40 pb-20 gap-4"
    >
      {children}
    </ul>
  )
}
