import { ReactNode } from 'react'

interface CoverProps {
  condition: boolean
  children?: ReactNode
}

export function Cover({ condition, children }: CoverProps) {
  return (
    <div
      data-condition={condition}
      className="w-full data-[condition=true]:h-screen overflow-hidden h-0 bg-primary transition-all duration-500 text-white"
    >
      {children}
    </div>
  )
}
