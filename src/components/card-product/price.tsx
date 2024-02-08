import { ReactNode } from 'react'

interface PriceProps {
  children: ReactNode
  absolute: boolean
}

export function Price({ children, absolute }: PriceProps) {
  return (
    <h4
      data-absolute={absolute}
      className="text-[22px] mobilesm:text-xl text-primary font-pixel700 data-[absolute=true]:absolute data-[absolute=true]:bottom-0 data-[absolute=false]:mt-2 data-[absolute=false]:text-3xl"
    >
      {children}
    </h4>
  )
}
