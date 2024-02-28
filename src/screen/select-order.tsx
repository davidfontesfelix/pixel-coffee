import { CardSelect } from '@/components/card-select'
import { Cover } from '@/components/cover'
import { Nav } from '@/components/nav'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import { ButtonConfirm } from '@/components/button-confirm'
import { useLocation } from '@/store/location'
import { useCart } from '@/store/cart'

export function SelectOrder() {
  const setLocation = useLocation((state) => state.setLocation)
  const [showCover, setShowCover] = useState(false)
  const [whenCardSelected, setWhenCardSelected] = useState<string>('')
  const [whenTableSelected, setWhenTableSelected] = useState<string>('')
  const cart = useCart((state) => state.cart)

  const handleClickCloseButton = () => {
    setShowCover(true)
    setTimeout(() => {
      setLocation('cart')
    }, 500)
  }

  const checkBorder = () => {
    if (whenCardSelected === 'order-on-the-table') {
      return true
    } else {
      return false
    }
  }

  const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setWhenTableSelected(event.target.value)
  }

  const handleClickPost = () => {
    if (
      whenCardSelected === 'order-on-the-table' &&
      whenTableSelected !== '' &&
      whenTableSelected !== 'select'
    ) {
      const postDataTakeout = async () => {
        const list = cart.map((cart) => {
          const id = cart.item.id
          const name = cart.item.name
          const price = cart.item.price
          const quantity = cart.quantity
          return { id, name, price, quantity }
        })

        const response = await fetch('http://localhost:3001/menu/table-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ order: list, table: whenTableSelected }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error)
        }

        return response.json()
      }
      postDataTakeout()
      setShowCover(true)
      setTimeout(() => {
        setLocation(whenCardSelected)
      }, 500)
    } else if (whenCardSelected === 'travel-request') {
      const postDataTakeout = async () => {
        const list = cart.map((cart) => {
          const id = cart.item.id
          const name = cart.item.name
          const price = cart.item.price
          const quantity = cart.quantity
          return { id, name, price, quantity }
        })

        const response = await fetch(
          'https://pixel-coffee-api.vercel.app/menu/takeout-order',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ order: list }),
          },
        )

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error)
        }

        return response.json()
      }
      postDataTakeout()
      setShowCover(true)
      setTimeout(() => {
        setLocation(whenCardSelected)
      }, 500)
    }
  }

  return (
    <section>
      <Cover condition={showCover} />
      <Nav.root>
        <Nav.name>Pedido</Nav.name>
        <Nav.button onClick={() => handleClickCloseButton()}>
          <Image
            width={64}
            height={64}
            src="/assets/icons/close-black.svg"
            alt=""
          />
        </Nav.button>
      </Nav.root>
      <h3 className="mx-4 text-3xl fadeInDown-1">Selecione a sua opção:</h3>
      <div className="flex flex-col">
        <CardSelect.Root
          className="fadeInDown-2"
          borderColor={whenCardSelected === 'travel-request'}
          onClick={() => setWhenCardSelected('travel-request')}
        >
          <CardSelect.Title>Pedido para viajem</CardSelect.Title>
          <CardSelect.Paragraph>
            Te daremos uma senha e quando o pedido estiver pronto poderá
            buscá-lo no balcão.
          </CardSelect.Paragraph>
        </CardSelect.Root>
        <CardSelect.Root
          className="fadeInDown-3"
          borderColor={whenCardSelected === 'order-on-the-table'}
          onClick={() => setWhenCardSelected('order-on-the-table')}
        >
          <CardSelect.Title>Selecione sua mesa</CardSelect.Title>
          <CardSelect.Paragraph>
            Quando o pedido estiver pronto, entregaremos ele em sua mesa.
          </CardSelect.Paragraph>
          <select
            onChange={(event) => handleChangeSelect(event)}
            disabled={
              whenCardSelected === '' ||
              (whenCardSelected === 'travel-request' && true)
            }
            defaultValue="select"
            className={`w-full p-2 py-4 mt-4 bg-slate-100 ${checkBorder() && 'border-primary border-2'} rounded-sm focus:outline-primary focus:ring-1 text-2xl font-pixel700`}
          >
            <option value="select">Selecionar mesa</option>
            <option value="mesa1">Mesa-1</option>
            <option value="mesa2">Mesa-2</option>
            <option value="mesa3">Mesa-3</option>
            <option value="mesa4">Mesa-4</option>
          </select>
        </CardSelect.Root>
      </div>
      {whenCardSelected !== '' && (
        <ButtonConfirm.Root condition>
          <ButtonConfirm.Button onClick={() => handleClickPost()}>
            Enviar pedido
          </ButtonConfirm.Button>
        </ButtonConfirm.Root>
      )}
    </section>
  )
}
