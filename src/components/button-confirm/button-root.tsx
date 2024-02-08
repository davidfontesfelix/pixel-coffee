import { ReactNode } from 'react'

interface ButtonDivProps {
  children: ReactNode
  condition?: boolean
}

export function ButtonDiv({ children, condition }: ButtonDivProps) {
  return (
    <div
      className={`${condition && 'fadeInUp'} bg-primary p-4 fixed bottom-0 w-full`}
    >
      {children}
    </div>
  )
}
