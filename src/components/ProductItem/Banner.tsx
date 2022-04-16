import Image from 'next/image'
import { useState } from 'react'
// type Props = {
//   readonly onClickedHighQuality: () => void
//   readonly onClickedActiveViews: () => void
//   readonly viewType: () => string
// }

type Props = {
  readonly onBuyItemClick: () => void
}

export const Banner: React.VFC<Props> = (props: any) => {
  return (
    <div className="flex flex-col flex-wrap w-full bg-[#222232] min-h-screen pt-10">
      <div className="flex flex-col flex-wrap w-full md:flex-row md:flex-nowrap">
        <div className="flex w-full items-center justify-center">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <Image
              src={props.service.imageUrl}
              alt="Product Image"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex w-full p-3 ls:p-10">
          <div className="flex flex-col flex-wrap  space-y-5">
            <div>
              <span>
                <span className="text-center text-gray-300 text-3xl">
                  {props.service.name}
                </span>
              </span>
            </div>
            <div>
              {props.reviewCount > 0 ? (
                <>
                  <span className="text-orange-100 font-semibold">★★★★★</span>
                  <span>{props.service.avgMark}</span>
                  <span className="text-gray-300">
                    ({props.service.reviewCount} Reviews)
                  </span>
                </>
              ) : (
                <span className="text-gray-300">No Rreviews</span>
              )}
            </div>
            <div>
              <span className="text-gray-300 text-4xl">
                ${props.service.price}
              </span>
            </div>
            <div>
              <div className="w-full flex text-sm h-7 text-gray-300 space-x-1">
                <svg
                  className="h-4 w-4 text-[#DC39FC]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <span>High Quality</span>
              </div>
              <div className="w-full flex text-sm h-7 text-gray-300 space-x-1">
                <svg
                  className="h-3 w-3 text-[#DC39FC]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {' '}
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  />{' '}
                  <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                </svg>
                <span>
                  <span className="font-semibold text-gray-400">
                    No Password
                  </span>{' '}
                  Needed
                </span>
              </div>
              <div className="w-full flex text-sm h-7 text-gray-300 space-x-1">
                <svg
                  className="h-3 w-3 text-[#DC39FC]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {' '}
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
                <span>
                  Drop <span className="font-semibold">Protection</span>
                </span>
              </div>
              <div className="w-full flex text-sm h-7 text-gray-300 space-x-1">
                <svg
                  className="h-3 w-3 text-[#DC39FC]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {' '}
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>
                  <span className="font-semibold text-gray-400">Safe</span> and{' '}
                  <span className="font-semibold text-gray-400">Easy</span>
                </span>
              </div>
              <div className="w-full flex text-sm h-7 text-gray-300 space-x-1">
                <svg
                  className="h-4 w-4 text-[#DC39FC]"
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
                  <circle cx="12" cy="13" r="7" />{' '}
                  <polyline points="12 10 12 13 14 13" />{' '}
                  <line x1="7" y1="4" x2="4.25" y2="6" />{' '}
                  <line x1="17" y1="4" x2="19.75" y2="6" />
                </svg>
                <span>
                  <span className="font-semibold text-gray-400">
                    Instant Delivery
                  </span>{' '}
                  Guaranteed
                </span>
              </div>
              <div className="w-full flex text-sm h-7 text-gray-300 space-x-1">
                <svg
                  className="h-3 w-3 text-[#DC39FC]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {' '}
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span>
                  <span className="font-semibold text-gray-400">24/7</span>{' '}
                  Support
                </span>
              </div>
              <div className="w-full flex text-sm h-7 text-gray-300 space-x-1">
                <svg
                  className="h-4 w-4 text-[green]"
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
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-[green]">Secure Payments</span>
              </div>
            </div>
            <div>
              <div
                onClick={() => props.onBuyItemClick()}
                className="flex space-x-1 rounded-full py-3 gradient-btn-2 justify-center hover:cursor-pointer"
              >
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
                <span className="w-20 text-sm text-white">Buy Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
