import { ButtonConfirm } from '@/components/button-confirm'
import { Cover } from '@/components/cover'
import { Nav } from '@/components/nav'
import { useCart } from '@/store/cart'
import { useLocation } from '@/store/location'
import Image from 'next/image'
import { useState } from 'react'
import useSWR from 'swr'
import { CardList } from '@/components/card-list'
import CardNotLoad from '@/components/card-not-load'

interface Coffee {
  name: string
  price: number
  img: string
  description: string
  id: number
}

export function CoffeeCatalog() {
  const [showCover, setShowCover] = useState(false)
  const setLocation = useLocation((state) => state.setLocation)
  const cart = useCart((state) => state.cart)

  const values = cart.map((cart) => cart.item.price * cart.quantity)

  const totalValues = values.reduce(
    (accumulator, current) => accumulator + current,
    0,
  )

  const handleClickConfirmButton = () => {
    setShowCover(true)
    setTimeout(() => {
      setLocation('cart')
    }, 500)
  }
  const fetcher = (url: string | URL | Request) =>
    fetch(url).then((res) => res.json())

  const { data, isLoading } = useSWR<Coffee[]>(
    'https://pixel-coffee-api.vercel.app/menu/coffees',
    fetcher,
  )

  return (
    <section className="overflow-y-scroll bg-background">
      <Cover condition={showCover} />
      <Nav.root>
        <Nav.name>Cafés</Nav.name>
        <Nav.button>
          {cart.length > 0 ? (
            <Image
              width={64}
              height={64}
              src="/assets/pixelarts/cart-full.png"
              alt="pixel arte do carrinho de compras cheio"
            />
          ) : (
            <Image
              width={64}
              height={64}
              src="/assets/pixelarts/cart.png"
              alt="pixel arte do carrinho de compras "
            />
          )}
        </Nav.button>
      </Nav.root>
      {isLoading ? (
        <CardNotLoad />
      ) : (
        <CardList.Root>
          {data &&
            data.map((item, index) => (
              <CardList.Li key={item.id} index={index}>
                <CardList.Image
                  src={item.img}
                  alt={'Imagem em pixel art do ' + item.name}
                />
                <CardList.DivInfos>
                  <CardList.Header price={item.price}>
                    {item.name}
                  </CardList.Header>
                  <CardList.Summary item={item}>
                    {item.description}
                  </CardList.Summary>
                </CardList.DivInfos>
              </CardList.Li>
            ))}
        </CardList.Root>
      )}
      {cart.length > 0 && (
        <ButtonConfirm.Root condition={cart.length > 0}>
          <ButtonConfirm.Info name="Total" value={'R$' + totalValues + ',00'} />
          <ButtonConfirm.Button onClick={() => handleClickConfirmButton()}>
            {showCover ? 'Confirmar pedido' : 'Verificar pedido'}
          </ButtonConfirm.Button>
        </ButtonConfirm.Root>
      )}
    </section>
  )
}
