import { ButtonConfirm } from '@/components/button-confirm'
import { CardProduct } from '@/components/card-product'
import { Cover } from '@/components/cover'
import { Nav } from '@/components/nav'
import { CartContext } from '@/context/cart-context'
import { MyContextLocation } from '@/context/location-context'
import { CalculatingTotalValueOfProducts } from '@/utils/calculate-total-value-of-products'
import Image from 'next/image'
import { useContext, useState } from 'react'

export function Cart() {
  const [showCover, setShowCover] = useState(true)
  const { productsCart } = useContext(CartContext)
  const { setLocation } = useContext(MyContextLocation)

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
        {productsCart.length === 0 && (
          <h3 className="text-center text-4xl fon">Sem itens no carrinho</h3>
        )}
        <CardProduct.Root>
          {productsCart.map((item, index) => (
            <CardProduct.Item id={index} key={index}>
              <div className="flex">
                <CardProduct.Image src={item.img} alt={'Foto do' + item.name} />
                <div>
                  <CardProduct.Title>{item.name}</CardProduct.Title>
                  <CardProduct.Price absolute={false}>
                    R${item.price},00
                  </CardProduct.Price>
                </div>
              </div>
              <div>
                <CardProduct.Button
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                />
              </div>
            </CardProduct.Item>
          ))}
        </CardProduct.Root>
      </Cover>
      {productsCart.length > 0 && (
        <ButtonConfirm.Root>
          <ButtonConfirm.Info
            name="Total"
            value={'R$' + CalculatingTotalValueOfProducts(productsCart) + ',00'}
          />
          <ButtonConfirm.Button onClick={() => handleClickConfirmButton()}>
            {showCover ? 'Confirmar pedido' : 'Verificar pedido'}
          </ButtonConfirm.Button>
        </ButtonConfirm.Root>
      )}
    </section>
  )
}
