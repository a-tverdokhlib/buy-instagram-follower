import NextImage from 'next/image'

type Props = {
  readonly className?: string
  readonly src: string
  readonly alt: string
  readonly width?: string
  readonly height?: string
}

export const Image: React.VFC<Props> = ({
  className,
  src,
  alt,
  width,
  height,
}) => (
  <NextImage
    className={className}
    src={src}
    alt={alt}
    width={width}
    height={height}
    draggable="false"
  />
)

export default {
  args: {
    src: '/vercel.svg',
    alt: 'Alt Text',
    width: '10rem',
    height: '10rem',
  },
}
