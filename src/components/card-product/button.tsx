'use client'
import { CartContext } from '@/context/cart-context'
import { ReactNode, useContext } from 'react'

interface Product {
  id: number
  quantity: number
}

interface ButtonProps {
  children: ReactNode
  id: number
  name: string
  price: number
  img: string
}

export function Button({ children, id, price, name, img }: ButtonProps) {
  const { productsCart, addToCart, removeFromCart } = useContext(CartContext)
  const checkArray = () => {
    const check = productsCart.some((object) => object.id === id)
    if (check) {
      return (
        <div className="flex mx-2">
          <button
            onClick={() => removeFromCart(id)}
            className="bg-primary h-11 w-[41.2px] rounded-l-sm flex items-center justify-center"
          >
            <span className="text-5xl text-white">-</span>
          </button>
          <div className="flex items-center justify-center px-1 text-3xl font-pixel700">
            {productsCart.find((item) => item.id === id)?.quantity ?? 0}
          </div>
          <button
            className="bg-primary h-11 w-[41.2px] rounded-r-sm flex items-center justify-center"
            onClick={() => addToCart(id, price, name, img)}
          >
            <span className="text-5xl text-white">+</span>
          </button>
        </div>
      )
    } else {
      return (
        <button
          onClick={() => addToCart(id, price, name, img)}
          className="mx-2 uppercase rounded-sm bg-primary text-xl text-slate-50 px-4 py-2"
        >
          {children}
        </button>
      )
    }
  }

  return checkArray()
}
