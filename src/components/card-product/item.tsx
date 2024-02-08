import { ReactNode } from 'react'

interface ItemProps {
  children: ReactNode
  id: number
}

export function Item({ children, id }: ItemProps) {
  return (
    <li
      className={` fadeInDown-${id} bg-secondary relative rounded-sm border-primary border-[1px] mx-3 mobilesm:mx-2 sm:mx-4 flex items-center justify-between`}
    >
      {children}
    </li>
  )
}
