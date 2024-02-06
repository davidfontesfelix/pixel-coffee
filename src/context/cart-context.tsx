/* eslint-disable @typescript-eslint/no-empty-function */
'use client'
import { ReactNode, createContext, useState } from 'react'

interface Product {
  id: number
  quantity: number
  price: number
  name: string
  img: string
}
interface CartContextProps {
  productsCart: Product[]
  addToCart: (id: number, price: number, name: string, img: string) => void
  removeFromCart: (id: number) => void
}

interface CartProviderProps {
  children: ReactNode
}

const CartContext = createContext<CartContextProps>({
  productsCart: [],
  addToCart: () => {},
  removeFromCart: () => {},
})

export default function CartProvider({ children }: CartProviderProps) {
  const [productsCart, setProductsCart] = useState<Product[]>([])
  const addToCart = (id: number, price: number, name: string, img: string) => {
    const copyProductsCart: Product[] = [...productsCart]

    const item = copyProductsCart.find((product) => product.id === id)

    if (!item) {
      copyProductsCart.push({ id, quantity: 1, price, name, img })
    } else {
      item.quantity = item.quantity + 1
    }

    setProductsCart(copyProductsCart)
  }

  const removeFromCart = (id: number) => {
    const copyProductsCart: Product[] = [...productsCart]

    const item = copyProductsCart.find((product) => product.id === id)

    if (item) {
      if (item.quantity && item.quantity > 1) {
        item.quantity = item.quantity - 1
        setProductsCart(copyProductsCart)
      } else {
        const arrayFiltered = copyProductsCart.filter(
          (product) => product.id !== id,
        )
        setProductsCart(arrayFiltered)
      }
    }
  }

  const contextValue: CartContextProps = {
    productsCart,
    addToCart,
    removeFromCart,
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}

export { CartContext, CartProvider }
