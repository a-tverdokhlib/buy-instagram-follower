import { useEffect, useRef, useState } from 'react'
import React from 'react'

import { Image } from '@/components/atoms/Image'

import { ProductCard } from './ProductCard'

export const Products: React.VFC = () => {
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
    <div className="flex flex-col md:p-20 items-center flex-wrap min-h-screen bg-[#030304] products">
      <div className="flex flex-col items-center flex-wrap w-full bg-[#222232] rounded-3xl pb-10 shadow-[#222232] shadow-[0_0px_100px_-20px_rgba(0,0,0,0.1)]">
        <div className="flex mt-16 w-full min-w-[500] p-12 justify-left">
          <div className="flex overflow-hidden rounded-full items-center justify-center w-16 h-16">
            <span className="animate-ping-slow z-[2] inline-flex h-6 w-6 rounded-full bg-red-600 border-2 border-red-600 opacity-75"></span>
            <div className="absolute z-[3] rounded-full bg-[#222232]">
              <svg
                className="h-8 w-8 text-red-600 m-auto"
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
                <circle cx="12" cy="12" r="3" fill="currentColor" />{' '}
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-3xl text-white font-semibold md:text-5xl md:font-bold">
              Live Products
            </h1>
          </div>
          <div className="hidden md:flex md:ml-auto min-w-[180px]">
            <div className="flex space-x-2 rounded-full py-2 px-8 gradient-btn-1 items-center hover:cursor-pointer">
              <svg
                className="h-5 w-5 text-white z-10"
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
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
              </svg>
              <span className="min-w-[110px]">Browse More</span>
            </div>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 pb-5 gap-x-10 gap-y-0 justify-center p-3 md:grid-cols-2 xl:grid-cols-3">
          <ProductCard
            img={
              <Image
                className="hover:scale-110 transition-all duration-300"
                src="/img/item.jpg"
                alt="Avatar"
                width="80px"
                height="80px"
              />
            }
            title="Instagram Followers"
            description="Sed ut perspiciatis unde omnis natus error sit voluptatem"
          />
          <ProductCard
            img={
              <Image
                className="hover:scale-110 transition-all duration-300"
                src="/img/item.jpg"
                alt="Avatar"
                width="80px"
                height="80px"
              />
            }
            title="Instagram Likes"
            description="Sed ut perspiciatis unde omnis natus error sit voluptatem"
          />
          <ProductCard
            img={
              <Image
                className="hover:scale-110 transition-all duration-300"
                src="/img/item.jpg"
                alt="Avatar"
                width="80px"
                height="80px"
              />
            }
            title="Instagram Followers cheap 10k"
            description="Sed ut perspiciatis unde omnis natus error sit voluptatem"
          />
          <ProductCard
            img={
              <Image
                className="hover:scale-110 transition-all duration-300"
                src="/img/item.jpg"
                alt="Avatar"
                width="80px"
                height="80px"
              />
            }
            title="20k Instagram Followers"
            description="Sed ut perspiciatis unde omnis natus error sit voluptatem"
          />
          <ProductCard
            img={
              <Image
                className="hover:scale-110 transition-all duration-300"
                src="/img/item.jpg"
                alt="Avatar"
                width="80px"
                height="80px"
              />
            }
            title="Instagram likes 50"
            description="Sed ut perspiciatis unde omnis natus error sit voluptatem"
          />
          <ProductCard
            img={
              <Image
                className="hover:scale-110 transition-all duration-300"
                src="/img/item.jpg"
                alt="Avatar"
                width="80px"
                height="80px"
              />
            }
            title="100k Instagram Followers"
            description="Sed ut perspiciatis unde omnis natus error sit voluptatem"
          />
          <ProductCard
            img={
              <Image
                className="hover:scale-110 transition-all duration-300"
                src="/img/item.jpg"
                alt="Avatar"
                width="80px"
                height="80px"
              />
            }
            title="1k followers in 5 minutes"
            description="Sed ut perspiciatis unde omnis natus error sit voluptatem"
          />
          <ProductCard
            img={
              <Image
                className="hover:scale-110 transition-all duration-300"
                src="/img/item.jpg"
                alt="Avatar"
                width="80px"
                height="80px"
              />
            }
            title="300 Instagram Followers"
            description="Sed ut perspiciatis unde omnis natus error sit voluptatem"
          />
          <ProductCard
            img={
              <Image
                className="hover:scale-110 transition-all duration-300"
                src="/img/item.jpg"
                alt="Avatar"
                width="80px"
                height="80px"
              />
            }
            title="50 Real Instagram Followers"
            description="Sed ut perspiciatis unde omnis natus error sit voluptatem"
          />
          <ProductCard
            img={
              <Image
                className="hover:scale-110 transition-all duration-300"
                src="/img/item.jpg"
                alt="Avatar"
                width="80px"
                height="80px"
              />
            }
            title="50 Instagram likes instantly delivery"
            description="Sed ut perspiciatis unde omnis natus error sit voluptatem"
          />
          <ProductCard
            img={
              <Image
                className="hover:scale-110 transition-all duration-300"
                src="/img/item.jpg"
                alt="Avatar"
                width="80px"
                height="80px"
              />
            }
            title="20k Instagram Followers"
            description="Sed ut perspiciatis unde omnis natus error sit voluptatem"
          />
          <ProductCard
            img={
              <Image
                className="hover:scale-110 transition-all duration-300"
                src="/img/item.jpg"
                alt="Avatar"
                width="80px"
                height="80px"
              />
            }
            title="50k real Instagram Followers"
            description="Sed ut perspiciatis unde omnis natus error sit voluptatem"
          />
        </div>
        <div className="md:hidden">
          <div className="flex space-x-2 rounded-full py-4 px-8 gradient-btn-1">
            <svg
              className="h-5 w-5 text-white"
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
              <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
            </svg>
            <span>Browse More</span>
          </div>
        </div>
      </div>
      <div className="h-[150px] w-full"></div>
    </div>
    /* <MySwipper
        ref={swiperRef}
        prevRef={prevRef}
        nextRef={nextRef}
        activeIndexChange={swiperIndexChange}
        swiperReachStart={swiperReachStart}
        swiperReachEnd={swiperReachEnd}
      >
        <div className="overflow-hidden flex flex-wrap w-full min-w-[250px] border-[1px] border-slate-600 max-w-xs bg-[#343444] rounded-[25px] justify-center hover:shadow-[0_1px_10px_5px_rgba(0,0,0,0.5)]">
          <div className="w-full mt-3 p-5">
            <svg
              className="h-auto w-full text-[#ffffff] rounded-[25px]"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="#dddddd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
            </svg>
          </div>
          <div className="pt-2 pb-5 pl-5 pr-5 card">
            <Card minHeight="100px" minWidth="100%">
              <h2 className="flex w-full text-semibold text-2xl justify-center text-white text-center">
                <span>
                  <span className="hover:text-[#DC39FC] hover:cursor-pointer transition-all duration:500 delay-75">
                    BUY INSTAGRAM 10k FOLLOWERS
                  </span>
                </span>
              </h2>
              <br></br>
              <span>
                <span className="text-white">Buy Instagram 5000 Followers</span>
              </span>
            </Card>
          </div>
        </div>
        <div className="overflow-hidden flex flex-wrap w-full min-w-[250px] border-[1px] border-slate-600 max-w-xs bg-[#343444] rounded-[25px] justify-center hover:shadow-[0_1px_10px_5px_rgba(0,0,0,0.5)]">
          <div className="w-full mt-3 p-5">
            <svg
              className="h-auto w-full text-[#ffffff] rounded-[25px]"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="#dddddd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
            </svg>
          </div>
          <div className="pt-2 pb-5 pl-5 pr-5 card">
            <Card minHeight="100px" minWidth="100%">
              <h2 className="flex w-full text-semibold text-2xl justify-center text-white text-center">
                <span>
                  <span className="hover:text-[#DC39FC] hover:cursor-pointer transition-all duration:500 delay-75">
                    BUY INSTAGRAM 10k FOLLOWERS
                  </span>
                </span>
              </h2>
              <br></br>
              <span>
                <span className="text-white">Buy Instagram 5000 Followers</span>
              </span>
            </Card>
          </div>
        </div>
        <div className="overflow-hidden flex flex-wrap w-full min-w-[250px] border-[1px] border-slate-600 max-w-xs bg-[#343444] rounded-[25px] justify-center hover:shadow-[0_1px_10px_5px_rgba(0,0,0,0.5)]">
          <div className="w-full mt-3 p-5">
            <svg
              className="h-auto w-full text-[#25AAE1] rounded-[25px]"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="#dddddd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
            </svg>
          </div>
          <div className="pt-2 pb-5 pl-5 pr-5 card">
            <Card minHeight="100px" minWidth="100%">
              <h2 className="flex w-full text-semibold text-2xl justify-center text-white text-center">
                <span>
                  <span className="hover:text-[#DC39FC] hover:cursor-pointer transition-all duration:500 delay-75">
                    BUY INSTAGRAM 10k FOLLOWERS
                  </span>
                </span>
              </h2>
              <br></br>
              <span>
                <span className="text-white">Buy Instagram 5000 Followers</span>
              </span>
            </Card>
          </div>
        </div>
        <div className="overflow-hidden flex flex-wrap w-full min-w-[250px] border-[1px] border-slate-600 max-w-xs bg-[#343444] rounded-[25px] justify-center hover:shadow-[0_1px_10px_5px_rgba(0,0,0,0.5)]">
          <div className="w-full mt-3 p-5">
            <svg
              className="h-auto w-full text-[#25AAE1] rounded-[25px]"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="#dddddd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
            </svg>
          </div>
          <div className="pt-2 pb-5 pl-5 pr-5 card">
            <Card minHeight="100px" minWidth="100%">
              <h2 className="flex w-full text-semibold text-2xl justify-center text-white text-center">
                <span>
                  <span className="hover:text-[#DC39FC] hover:cursor-pointer transition-all duration:500 delay-75">
                    BUY INSTAGRAM 10k FOLLOWERS
                  </span>
                </span>
              </h2>
              <br></br>
              <span>
                <span className="text-white">Buy Instagram 5000 Followers</span>
              </span>
            </Card>
          </div>
        </div>
        <div className="overflow-hidden flex flex-wrap w-full min-w-[250px] border-[1px] border-slate-600 max-w-xs bg-[#343444] rounded-[25px] justify-center hover:shadow-[0_1px_10px_5px_rgba(0,0,0,0.5)]">
          <div className="w-full mt-3 p-5">
            <svg
              className="h-auto w-full text-[#25AAE1] rounded-[25px]"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="#dddddd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
            </svg>
          </div>
          <div className="pt-2 pb-5 pl-5 pr-5 card">
            <Card minHeight="100px" minWidth="100%">
              <h2 className="flex w-full text-semibold text-2xl justify-center text-white text-center">
                <span>
                  <span className="hover:text-[#DC39FC] hover:cursor-pointer transition-all duration:500 delay-75">
                    BUY INSTAGRAM 10k FOLLOWERS
                  </span>
                </span>
              </h2>
              <br></br>
              <span>
                <span className="text-white">Buy Instagram 5000 Followers</span>
              </span>
            </Card>
          </div>
        </div>
        <div className="overflow-hidden flex flex-wrap w-full min-w-[250px] border-[1px] border-slate-600 max-w-xs bg-[#343444] rounded-[25px] justify-center hover:shadow-[0_1px_10px_5px_rgba(0,0,0,0.5)]">
          <div className="w-full mt-3 p-5">
            <svg
              className="h-auto w-full text-[#25AAE1] rounded-[25px]"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="#dddddd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
            </svg>
          </div>
          <div className="pt-2 pb-5 pl-5 pr-5 card">
            <Card minHeight="100px" minWidth="100%">
              <h2 className="flex w-full text-semibold text-2xl justify-center text-white text-center">
                <span>
                  <span className="hover:text-[#DC39FC] hover:cursor-pointer transition-all duration:500 delay-75">
                    BUY INSTAGRAM 10k FOLLOWERS
                  </span>
                </span>
              </h2>
              <br></br>
              <span>
                <span className="text-white">Buy Instagram 5000 Followers</span>
              </span>
            </Card>
          </div>
        </div>
      </MySwipper>
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center"></div> */
  )
}
