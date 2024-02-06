import { ReactNode } from 'react'

interface ParagraphProps {
  children: ReactNode
}

export function Paragraph({ children }: ParagraphProps) {
  return (
    <p className="text-lg max-w-36 leading-4 mobilesm:text-base mobilesm:leading-4">
      {children}
    </p>
  )
}
