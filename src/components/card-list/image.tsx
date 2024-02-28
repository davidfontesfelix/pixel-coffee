import Image from 'next/image'

interface ImageProps {
  src: string
  alt: string
}

export function ImageCard({ src, alt }: ImageProps) {
  return (
    <Image className="image-div" alt={alt} src={src} width={100} height={100} />
  )
}
