import { create } from 'zustand'

type Item = {
  id: number
  name: string
  price: number
  img: string
}

type CartItem = {
  item: Item
  quantity: number
}

type Cart = {
  cart: CartItem[]
  addToCart: (item: Item) => void
  removeFromCart: (id: number) => void
}

export const useCart = create<Cart>((set) => {
  return {
    cart: [],
    addToCart: (item) => {
      set((state) => {
        const existingItem = state.cart.some(
          (cartItem) => cartItem.item.id === item.id,
        )

        if (existingItem) {
          return {
            cart: state.cart.map((cartItem) =>
              cartItem.item.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem,
            ),
          }
        } else {
          return { cart: [...state.cart, { item, quantity: 1 }] }
        }
      })
    },
    removeFromCart: (id) =>
      set((state) => {
        return {
          cart: state.cart
            .map((cartItem) =>
              cartItem.item.id === id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem,
            )
            .filter((cartItem) => cartItem.quantity > 0),
        }
      }),
  }
})
