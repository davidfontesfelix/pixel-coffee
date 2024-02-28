'use client'
import { Header } from '@/components/header'
import { Cart } from '@/screen/cart'
import { CoffeeCatalog } from '@/screen/coffee-catalog'
import { SelectOrder } from '@/screen/select-order'
import { TableOrder } from '@/screen/table-order'
import { TravelRequest } from '@/screen/travel-request'
import { useLocation } from '@/store/location'

export default function Home() {
  const location = useLocation((state) => state.location)
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
      {checkLocation()}
    </main>
  )
}
