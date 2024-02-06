import Image from 'next/image'

interface ImageProps {
  src: string
  alt: string
}

export function ImageCard({ src, alt }: ImageProps) {
  return (
    <div className="p-2">
      <Image
        className="min-w-[88px]"
        width={88}
        height={88}
        src={src}
        alt={alt}
      />
    </div>
  )
}
