import Image from "next/image";

interface BlogImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export function BlogImage({ src, alt, width = 1200, height = 675 }: BlogImageProps) {
  return (
    <Image 
      src={src} 
      alt={alt}
      width={width}
      height={height}
      style={{ width: "100%", height: "auto" }}
    />
  )
}