import { ButtonConfirm } from '@/components/button-confirm'
import { CardList } from '@/components/card-list'
import { Cover } from '@/components/cover'
import { Nav } from '@/components/nav'
import { useCart } from '@/store/cart'
import { useLocation } from '@/store/location'
import Image from 'next/image'
import { useState } from 'react'

export function Cart() {
  const [showCover, setShowCover] = useState(true)
  const cart = useCart((state) => state.cart)
  const setLocation = useLocation((state) => state.setLocation)

  const values = cart.map((cart) => cart.item.price * cart.quantity)

  const totalValues = values.reduce(
    (accumulator, current) => accumulator + current,
    0,
  )

  const handleClickCloseButton = () => {
    setShowCover(false)
    setTimeout(() => {
      setLocation('home')
    }, 500)
  }

  const handleClickConfirmButton = () => {
    setShowCover(false)
    setTimeout(() => {
      setLocation('select-order')
    }, 500)
  }
  return (
    <section>
      <Cover condition={showCover}>
        <Nav.root>
          <Nav.name>Carrinho</Nav.name>
          <Nav.button onClick={() => handleClickCloseButton()}>
            <Image
              width={64}
              height={64}
              src="/assets/icons/close.svg"
              alt="Fechar Carrinho"
            />
          </Nav.button>
        </Nav.root>
        {cart.length === 0 && (
          <h3 className="text-center text-4xl fon">Sem itens no carrinho</h3>
        )}
        <CardList.Root>
          {cart &&
            cart.map((cart) => (
              <CardList.Li key={cart.item.id}>
                <CardList.Image
                  src={cart.item.img}
                  alt={'Imagem em pixel art do ' + cart.item.name}
                />
                <CardList.DivInfos>
                  <CardList.Header price={cart.item.price}>
                    {cart.item.name}
                  </CardList.Header>
                  <CardList.Summary item={cart.item} />
                </CardList.DivInfos>
              </CardList.Li>
            ))}
        </CardList.Root>
      </Cover>
      {cart.length > 0 && (
        <ButtonConfirm.Root>
          <ButtonConfirm.Info name="Total" value={'R$' + totalValues + ',00'} />
          <ButtonConfirm.Button onClick={() => handleClickConfirmButton()}>
            {showCover ? 'Confirmar pedido' : 'Verificar pedido'}
          </ButtonConfirm.Button>
        </ButtonConfirm.Root>
      )}
    </section>
  )
}
