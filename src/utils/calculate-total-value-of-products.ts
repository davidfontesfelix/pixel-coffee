interface Product {
  id: number
  quantity: number
  price: number
  name: string
  img: string
}

export const CalculatingTotalValueOfProducts = (products: Product[]) => {
  return products.reduce(
    (total: number, item: { quantity: number; price: number }) => {
      return total + item.quantity * item.price
    },
    0,
  )
}
