import { useEffect, useState } from 'react'

import { Card } from '@/components/atoms/Card'
import { MySwipper } from '@/components/atoms/MySwipper'

export const Products: React.VFC = () => {
  return (
    <div className="flex flex-col items-center flex-wrap bg-[#14141F]">
      <div className="flex w-full min-w-[500] space-x-3 p-12 justify-left">
        <div className="flex overflow-hidden rounded-full items-center justify-center w-10 h-10">
          <span className="animate-ping-slow z-[2] inline-flex h-6 w-6 rounded-full bg-red-700 border-2 border-red-700 opacity-75"></span>
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
        <div className="flex">
          <h1 className="text-4xl text-white font-semibold md:text-5xl md:font-bold">
            Products
          </h1>
        </div>
      </div>
      <MySwipper>
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
