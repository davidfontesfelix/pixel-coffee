'use client'
import { CartContext } from '@/context/cart-context'
import { ReactNode, useContext, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

interface Product {
  id: number
  quantity: number
}

interface ButtonProps {
  children?: ReactNode
  id: number
  name: string
  price: number
  img: string
}

export function Button({ children, id, price, name, img }: ButtonProps) {
  const { productsCart, addToCart, removeFromCart } = useContext(CartContext)
  const [open, setOpen] = useState(false)
  const checkArray = () => {
    const check = productsCart.some((object) => object.id === id)
    const condition = productsCart.find((item) => item.id === id)

    const handleClickAddButton = (check: Product | undefined) => {
      addToCart(id, price, name, img)
      if (check?.quantity === 4 || check?.quantity === 5) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    }
    if (check) {
      return (
        <div className="flex mx-2">
          <button
            onClick={() => removeFromCart(id)}
            className="bg-primary h-11 w-[41.2px] rounded-l-sm flex items-center justify-center"
          >
            <span className="text-5xl text-white">-</span>
          </button>
          <div className="flex items-center text-black justify-center px-1 text-3xl font-pixel700">
            {productsCart.find((item) => item.id === id)?.quantity ?? 0}
          </div>
          {open ? (
            <Dialog.Root>
              <Dialog.Trigger
                className="bg-primary data-[condition=true]:opacity-0 h-11 w-[41.2px] rounded-r-sm flex items-center justify-center"
                onClick={() => handleClickAddButton(condition)}
              >
                <span className="text-5xl text-white">+</span>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/40" />
                <Dialog.Content className="fixed font-pixel400 left-1/2 top-1/2 overflow-hidden text-center -translate-x-1/2 border-2 border-secondary text-secondary -translate-y-1/2 max-w-[300px] w-full bg-primary rounded-sm flex flex-col outline-none h-[30vh] gap-4">
                  <h2 className="mt-4 text-4xl font-pixel700">
                    Calma caféino!
                  </h2>
                  <p className="text-2xl mx-4">Café em excesso não faz bem!</p>
                  <Dialog.Close className="bg-secondary text-primary py-4 bottom-0 absolute w-full font-pixel700 text-2xl">
                    Tomarei cuidado
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          ) : (
            <button
              className="bg-primary data-[condition=true]:opacity-0 h-11 w-[41.2px] rounded-r-sm flex items-center justify-center"
              onClick={() => handleClickAddButton(condition)}
            >
              <span className="text-5xl text-white">+</span>
            </button>
          )}
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
