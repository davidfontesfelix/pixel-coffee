import { ReactNode } from 'react'

interface ParagraphProps {
  children: ReactNode
}

export function Paragraph({ children }: ParagraphProps) {
  return <p className="text-2xl text-black/80 leading-6">{children}</p>
}
