import Image from 'next/image'

export function Header() {
  return (
    <header className="bg-primary flex items-center gap-2 py-2 px-4">
      <Image
        className="smMobile:w-10"
        width={48}
        height={48}
        src="/assets/pixelarts/coffee-bag.png"
        alt="pixel art PixelCoffee"
      />
      <Image
        className="h-10 smMobile:w-40"
        width={200}
        height={64}
        src="/logo.png"
        alt="escrito PixelCoffee em pixelart"
      />
    </header>
  )
}
