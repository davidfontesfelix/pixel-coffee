import { ReactNode } from 'react'
import { Button } from '../button'

interface ItemObject {
  id: number
  name: string
  price: number
  img: string
}

interface SummaryProps {
  children?: ReactNode
  item: ItemObject
}

export function Summary({ children, item }: SummaryProps) {
  return (
    <div className="summary-div">
      <p className="text-xl leading-5">{children}</p>
      <Button id={item.id} img={item.img} name={item.name} price={item.price}>
        Adicionar
      </Button>
    </div>
  )
}
