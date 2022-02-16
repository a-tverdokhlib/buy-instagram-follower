import { useRef, useState } from 'react'

import { MySwipper } from '@/components/atoms/MySwipper'
import { ProductCard } from '@/components/organisms/ProductCard'

const productCards = [
  {
    title: '800',
    subTitle: '800 Real Instagram Followers',
    reviewCount: 0,
    cost: 15.99,
    isPopular: true,
  },
  {
    title: '2000',
    subTitle: '2000 Real Instagram Followers',
    reviewCount: 0,
    cost: 109.99,
    isPopular: false,
  },
  {
    title: '12000',
    subTitle: '12000 Real Instagram Followers',
    reviewCount: 0,
    cost: 199.99,
    isPopular: true,
  },
  {
    title: '300',
    subTitle: '300 Instagram Followers',
    avgMark: 5,
    reviewCount: 4,
    cost: 2.99,
    isPopular: true,
  },
  {
    title: '500',
    subTitle: '500 Instagram Followers',
    reviewCount: 0,
    cost: 4.89,
    isPopular: false,
  },
  {
    title: '1000',
    subTitle: '1000 Instagram Followers',
    avgMark: 5,
    reviewCount: 3,
    cost: 8.59,
    isPopular: true,
  },
  {
    title: '2500',
    subTitle: '2500 Instagram Followers',
    avgMark: 5,
    reviewCount: 1,
    cost: 19.99,
    isPopular: false,
  },
]

export const ActiveFollowers: React.VFC = () => {
  const swiperRef = useRef<any>(null)
  const prevRef = useRef<any>(null)
  const nextRef = useRef<any>(null)
  // const [swiperCurrentIndex, setSwiperCurrentIndex] = useState(0)
  const [swiperReachStarted, setSwiperReachStarted] = useState(0)
  const [swiperReachEnded, setSwiperReachEnded] = useState(0)
  const prevClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    prevRef.current?.click()
  }
  const nextClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    nextRef.current?.click()
  }

  const swiperIndexChange = (e: any) => {}

  const swiperReachStart = (e: any) => {
    setSwiperReachStarted(e)
  }

  const swiperReachEnd = (e: any) => {
    setSwiperReachEnded(e)
  }
  return (
    <MySwipper
      ref={swiperRef}
      prevRef={prevRef}
      nextRef={nextRef}
      activeIndexChange={swiperIndexChange}
      swiperReachStart={swiperReachStart}
      swiperReachEnd={swiperReachEnd}
    >
      {productCards.map((item, id) => {
        return (
          <ProductCard
            key={id}
            title={item.title}
            subTitle={item.subTitle}
            reviewCount={item.reviewCount}
            cost={item.cost}
            isPopular={item.isPopular}
          />
        )
      })}
    </MySwipper>
  )
}
