import { ButtonConfirm } from '@/components/button-confirm'
import { CardProduct } from '@/components/card-product'
import { Cover } from '@/components/cover'
import { Nav } from '@/components/nav'
import { CartContext } from '@/context/cart-context'
import { MyContextLocation } from '@/context/location-context'
import { getMenu } from '@/service/firebase/firebase-service'
import { CalculatingTotalValueOfProducts } from '@/utils/calculate-total-value-of-products'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'

interface Coffee {
  name: string
  price: number
  img: string
  description: string
  id: number
}

export function CoffeeCatalog() {
  const [getCoffees, setGetCoffees] = useState<Coffee[]>([])
  const { productsCart } = useContext(CartContext)
  const [showCover, setShowCover] = useState(false)
  const { setLocation } = useContext(MyContextLocation)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const infoMenu = await getMenu()
        setGetCoffees(infoMenu[0].coffees)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const handleClickConfirmButton = () => {
    setShowCover(true)
    setTimeout(() => {
      setLocation('cart')
    }, 500)
  }

  return (
    <section className="overflow-y-scroll bg-background">
      <Cover condition={showCover} />
      <Nav.root>
        <Nav.name>Cafés</Nav.name>
        <Nav.button>
          <Image
            width={64}
            height={64}
            src="/assets/pixelarts/cart.png"
            alt="pixel arte do carrinho de compras "
          />
        </Nav.button>
      </Nav.root>
      <CardProduct.Root>
        {getCoffees.map((item, index) => (
          <CardProduct.Item id={item.id} key={index}>
            <div className="flex">
              <CardProduct.Image src={item.img} alt={'imagem do' + item.name} />
              <div>
                <CardProduct.Title>{item.name}</CardProduct.Title>
                <CardProduct.Paragraph>
                  {item.description}
                </CardProduct.Paragraph>
                <CardProduct.Price absolute={true}>
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
              >
                adicionar
              </CardProduct.Button>
            </div>
          </CardProduct.Item>
        ))}
      </CardProduct.Root>
      {productsCart.length > 0 && (
        <ButtonConfirm.Root condition={productsCart.length > 0}>
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
