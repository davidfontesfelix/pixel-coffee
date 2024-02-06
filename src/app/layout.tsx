import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MyContextLocationProvider } from '@/context/location-context'

export const metadata: Metadata = {
  title: 'PixelCoffee',
  description: 'Cardápio da cafeteria',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-Br">
      <body>
        <MyContextLocationProvider>{children}</MyContextLocationProvider>
      </body>
    </html>
  )
}
