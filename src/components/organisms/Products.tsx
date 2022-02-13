import { useEffect, useRef, useState } from 'react'
import React from 'react'

import { Card } from '@/components/atoms/Card'
import { MySwipper } from '@/components/atoms/MySwipper'

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
    <div className="flex flex-col items-center flex-wrap min-h-screen bg-[#030304]">
      <div className="flex w-full min-w-[500] p-12 justify-left">
        <div className="flex overflow-hidden rounded-full items-center justify-center w-10">
          <span className="animate-ping-slow z-[2] inline-flex h-6 w-6 rounded-full bg-red-600 border-2 border-red-600 opacity-75"></span>
          <div className="absolute z-[3] rounded-full bg-[#14141F]">
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
            Products
          </h1>
        </div>
        <div className="flex space-x-2 ml-auto">
          <div
            className={
              swiperReachStarted === 0
                ? 'flex cursor-pointer w-10 h-10 md:w-14 md:h-14 justify-center items-center bg-gradient-to-br from-violet-800 to-fuchsia-500 rounded-full'
                : 'flex cursor-pointer w-10 h-10 md:w-14 md:h-14 justify-center items-center bg-gray-700 rounded-full'
            }
            onClick={(e) => prevClick(e)}
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
              <line x1="19" y1="12" x2="5" y2="12" />{' '}
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </div>
          <div
            className={
              swiperReachEnded === 0
                ? 'flex cursor-pointer w-10 h-10 md:w-14 md:h-14 justify-center items-center bg-gradient-to-br from-violet-800 to-fuchsia-500 rounded-full'
                : 'flex cursor-pointer w-10 h-10 md:w-14 md:h-14 justify-center items-center bg-gray-700 rounded-full'
            }
            onClick={(e) => nextClick(e)}
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
              <line x1="13" y1="18" x2="19" y2="12" />{' '}
              <line x1="13" y1="6" x2="19" y2="12" />
            </svg>
          </div>
        </div>
      </div>
      <MySwipper
        ref={swiperRef}
        prevRef={prevRef}
        nextRef={nextRef}
        activeIndexChange={swiperIndexChange}
        swiperReachStart={swiperReachStart}
        swiperReachEnd={swiperReachEnd}
      >
        <div className="overflow-hidden flex flex-wrap w-full min-w-[250px] max-w-xs bg-[#343444] rounded-[25px] justify-center hover:shadow-[0_1px_10px_5px_rgba(0,0,0,0.5)]">
          <div className="w-full mt-3 p-5">
            <svg
              className="h-auto w-full text-[#25AAE1] rounded-[25px]"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="#25AAE1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
              <rect x="0" y="1" width="24" height="24" rx="2" />{' '}
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
        <div className="overflow-hidden flex flex-wrap w-full min-w-[250px] max-w-xs bg-[#343444] rounded-[25px] justify-center hover:shadow-[0_1px_10px_5px_rgba(0,0,0,0.5)]">
          <div className="w-full mt-3 p-5">
            <svg
              className="h-auto w-full text-[#25AAE1] rounded-[25px]"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="#25AAE1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
              <rect x="0" y="1" width="24" height="24" rx="2" />{' '}
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
        <div className="overflow-hidden flex flex-wrap w-full min-w-[250px] max-w-xs bg-[#343444] rounded-[25px] justify-center hover:shadow-[0_1px_10px_5px_rgba(0,0,0,0.5)]">
          <div className="w-full mt-3 p-5">
            <svg
              className="h-auto w-full text-[#25AAE1] rounded-[25px]"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="#25AAE1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
              <rect x="0" y="1" width="24" height="24" rx="2" />{' '}
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
        <div className="overflow-hidden flex flex-wrap w-full min-w-[250px] max-w-xs bg-[#343444] rounded-[25px] justify-center hover:shadow-[0_1px_10px_5px_rgba(0,0,0,0.5)]">
          <div className="w-full mt-3 p-5">
            <svg
              className="h-auto w-full text-[#25AAE1] rounded-[25px]"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="#25AAE1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
              <rect x="0" y="1" width="24" height="24" rx="2" />{' '}
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
        <div className="overflow-hidden flex flex-wrap w-full min-w-[250px] max-w-xs bg-[#343444] rounded-[25px] justify-center hover:shadow-[0_1px_10px_5px_rgba(0,0,0,0.5)]">
          <div className="w-full mt-3 p-5">
            <svg
              className="h-auto w-full text-[#25AAE1] rounded-[25px]"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="#25AAE1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
              <rect x="0" y="1" width="24" height="24" rx="2" />{' '}
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
        <div className="overflow-hidden flex flex-wrap w-full min-w-[250px] max-w-xs bg-[#343444] rounded-[25px] justify-center hover:shadow-[0_1px_10px_5px_rgba(0,0,0,0.5)]">
          <div className="w-full mt-3 p-5">
            <svg
              className="h-auto w-full text-[#25AAE1] rounded-[25px]"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="#25AAE1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
              <rect x="0" y="1" width="24" height="24" rx="2" />{' '}
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
      {/* <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center"></div> */}
    </div>
  )
}
