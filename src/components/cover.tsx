import { ReactNode } from 'react'

interface CoverProps {
  condition: boolean
  children?: ReactNode
  className?: string
}

export function Cover({ condition, children, className }: CoverProps) {
  return (
    <div
      data-condition={condition}
      className={`w-full ${className} data-[condition=true]:h-screen overflow-hidden h-0 bg-primary transition-all duration-500 text-white`}
    >
      {children}
    </div>
  )
}
