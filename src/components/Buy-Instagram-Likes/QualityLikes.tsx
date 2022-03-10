import { useRef, useState } from 'react'

import { MySwipper } from '@/components/atoms/MySwipper'
import { ProductCard } from '@/components/organisms/ProductCard'

const productCards = [
  {
    title: '50',
    subTitle: '50 Instagram Likes',
    avgMark: 5,
    reviewCount: 3,
    cost: 0.89,
    isPopular: false,
  },
  {
    title: '100',
    subTitle: '100 Instagram Likes',
    avgMark: 5,
    reviewCount: 2,
    cost: 0.99,
    isPopular: false,
  },
  {
    title: '300',
    subTitle: '300 Instagram Likes',
    avgMark: 5,
    reviewCount: 1,
    cost: 2.59,
    isPopular: false,
  },
  {
    title: '500',
    subTitle: '500 Instagram Likes',
    avgMark: 5,
    reviewCount: 1,
    cost: 4.99,
    isPopular: true,
  },
  {
    title: '1000',
    subTitle: '1000 Instagram Likes',
    reviewCount: 1,
    cost: 6.99,
    isPopular: false,
  },
  {
    title: '2500',
    subTitle: '2500 Instagram Likes',
    avgMark: 5,
    reviewCount: 1,
    cost: 11.99,
    isPopular: false,
  },
  {
    title: '5000',
    subTitle: '5000 Instagram Likes',
    avgMark: 5,
    reviewCount: 1,
    cost: 19.99,
    isPopular: false,
  },
  {
    title: '10000',
    subTitle: '10k Instagram Likes',
    avgMark: 5,
    reviewCount: 1,
    cost: 29.99,
    isPopular: false,
  },
  {
    title: '20000',
    subTitle: '20k Instagram Likes',
    avgMark: 5,
    reviewCount: 1,
    cost: 59.99,
    isPopular: false,
  },
  {
    title: '35000',
    subTitle: '35k Instagram Likes',
    avgMark: 5,
    reviewCount: 1,
    cost: 99.99,
    isPopular: false,
  },
  {
    title: '50000',
    subTitle: '50k Instagram Likes',
    avgMark: 5,
    reviewCount: 1,
    cost: 139.99,
    isPopular: false,
  },
  {
    title: '100000',
    subTitle: '100k Instagram Likes',
    avgMark: 5,
    reviewCount: 1,
    cost: 279.99,
    isPopular: false,
  },
]

export const QualityLikes: React.VFC = () => {
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
    <>
      <div className="flex flex-row space-x-8 justify-center flex-nowrap">
        <div className="flex w-[30px] items-center">
          <span
            ref={prevRef}
            className={
              !swiperReachStarted
                ? 'rounded-full bg-[purple] hover:cursor-pointer p-1'
                : 'rounded-full bg-gray-500 mt-[2px] hover:cursor-pointer p-1'
            }
            onClick={prevClick}
          >
            <svg
              className="h-8 w-8 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
              <line x1="5" y1="12" x2="19" y2="12" />{' '}
              <line x1="5" y1="12" x2="11" y2="18" />{' '}
              <line x1="5" y1="12" x2="11" y2="6" />
            </svg>
          </span>
        </div>
        <div className="flex w-[30px] items-center hover:cursor-pointer">
          <span
            ref={nextRef}
            className={
              !swiperReachEnded
                ? 'rounded-full bg-[purple] p-1'
                : 'rounded-full bg-gray-500 mt-[2px] p-1'
            }
            onClick={nextClick}
          >
            <svg
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <line x1="5" y1="12" x2="19" y2="12" />{' '}
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </div>
      <div className="h-0 md:h-3"></div>
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
    </>
  )
}
