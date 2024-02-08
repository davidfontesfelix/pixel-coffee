'use client'
import { Header } from '@/components/header'
import CartProvider from '@/context/cart-context'
import { MyContextLocation } from '@/context/location-context'
import { Cart } from '@/screen/cart'
import { CoffeeCatalog } from '@/screen/coffee-catalog'
import { useContext } from 'react'

export default function Home() {
  const { location } = useContext(MyContextLocation)
  const checkLocation = () => {
    if (location === 'home') {
      return <CoffeeCatalog />
    } else if (location === 'cart') {
      return <Cart />
    }
  }

  return (
    <main className=" font-pixel400 bg-background w-full min-h-screen">
      <Header />
      <CartProvider>{checkLocation()}</CartProvider>
    </main>
  )
}
