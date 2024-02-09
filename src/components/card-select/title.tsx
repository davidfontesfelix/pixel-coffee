import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
}

export function Title({ children }: TitleProps) {
  return (
    <h3 className="font-pixel700 mb-[2px] mt-1 mobilesm:text-2xl mobilesm:leading-5 leading-5 text-2xl text-black ">
      {children}
    </h3>
  )
}
