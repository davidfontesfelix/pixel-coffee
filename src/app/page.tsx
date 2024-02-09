'use client'
import { Header } from '@/components/header'
import CartProvider from '@/context/cart-context'
import { MyContextLocation } from '@/context/location-context'
import { Cart } from '@/screen/cart'
import { CoffeeCatalog } from '@/screen/coffee-catalog'
import { SelectOrder } from '@/screen/select-order'
import { TableOrder } from '@/screen/table-order'
import { TravelRequest } from '@/screen/travel-request'
import { useContext } from 'react'

export default function Home() {
  const { location } = useContext(MyContextLocation)
  const checkLocation = () => {
    if (location === 'home') {
      return <CoffeeCatalog />
    } else if (location === 'cart') {
      return <Cart />
    } else if (location === 'select-order') {
      return <SelectOrder />
    } else if (location === 'order-on-the-table') {
      return <TableOrder />
    } else if (location === 'travel-request') {
      return <TravelRequest />
    }
  }

  return (
    <main className=" font-pixel400 bg-background w-full h-[100dvh]">
      <Header />
      <CartProvider>{checkLocation()}</CartProvider>
    </main>
  )
}
