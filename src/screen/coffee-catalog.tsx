import { ButtonConfirm } from '@/components/button-confirm'
import { CardProduct } from '@/components/card-product'
import { Nav } from '@/components/nav'
import { CartContext } from '@/context/cart-context'
import { getMenu } from '@/service/firebase/firebase-service'
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

  return (
    <section className="overflow-y-scroll bg-background">
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
      <CardProduct.root>
        {getCoffees.map((item, index) => (
          <CardProduct.item key={index}>
            <div className="flex">
              <CardProduct.image src={item.img} alt={'imagem do' + item.name} />
              <div>
                <CardProduct.title>{item.name}</CardProduct.title>
                <CardProduct.paragraph>
                  {item.description}
                </CardProduct.paragraph>
                <CardProduct.price>R${item.price},00</CardProduct.price>
              </div>
            </div>
            <div>
              <CardProduct.button
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
              >
                adicionar
              </CardProduct.button>
            </div>
          </CardProduct.item>
        ))}
      </CardProduct.root>
      {productsCart.length > 0 && (
        <ButtonConfirm.root>
          <ButtonConfirm.button>Verificar pedido</ButtonConfirm.button>
        </ButtonConfirm.root>
      )}
    </section>
  )
}
