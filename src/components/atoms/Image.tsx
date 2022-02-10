import NextImage from 'next/image'

type Props = {
  readonly src: string
  readonly alt: string
  readonly width?: string
  readonly height?: string
}

export const Image: React.VFC<Props> = ({ src, alt, width, height }) => (
  <NextImage
    src={src}
    alt={alt}
    width={width}
    height={height}
    layout="responsive"
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
