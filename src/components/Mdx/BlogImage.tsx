import Image from "next/image";

interface BlogImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

/**
 * Función para renderizar una imagen en el blog.
 * @param {BlogImageProps} props - Propiedades de la imagen.
 * @return {JSX.Element} Elemento JSX con la imagen renderizada.
 */
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
