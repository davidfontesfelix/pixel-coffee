import { ReactNode } from 'react'

interface PriceProps {
  children: ReactNode
}

export function Price({ children }: PriceProps) {
  return (
    <h4 className="text-[22px] mobilesm:text-xl text-primary font-pixel700 absolute bottom-0">
      {children}
    </h4>
  )
}
