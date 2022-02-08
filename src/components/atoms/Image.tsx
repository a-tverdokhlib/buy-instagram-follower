import NextImage from 'next/image'

type Props = {
  readonly src: string
  readonly alt: string
  readonly width: number
  readonly height: number
}

export const Image: React.VFC<Props> = ({ src, alt, width, height }) => (
  <NextImage
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
    width: 100,
    height: 100,
  },
}
