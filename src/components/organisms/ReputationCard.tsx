type Props = {
  readonly children?: ReadonlyArray<Object>
  readonly ref?: any
  readonly img: any
  readonly title: any
  readonly description: any
}

import React, { ForwardRefRenderFunction, useEffect, useState } from 'react'

import { Card } from '@/components/atoms/Card'

const MyComponentRenderFn: ForwardRefRenderFunction<any, Props> = (
  { children, img, title, description },
  ref,
) => {
  const stars = [1, 2, 3, 4, 5]
  return (
    <div className="reputation-card-wrapper overflow-hidden w-full min-w-[280px] max-w-xs cursor-pointer rounded-xl">
      <div className="reputation-card overflow-hidden m-auto pb-10  w-full min-w-[280px] max-w-xs justify-center cursor-pointer bg-[#6345ED] bg-opacity-5 transition-all duration-1000 rounded-xl">
        <div className="w-full h-36 m-auto overflow-hidden">
          <div className="user-background w-full h-36 m-auto bg-[url('/img/reputation-bg-1.jpg')] bg-cover"></div>
        </div>
        <div className="icon-ring flex w-[115px] h-[115px] m-auto rounded-full bg-gray-700 bg-opacity-30 -mt-[60px] justify-center items-center border-[white] border-opacity-0 border-[1px] hover:border-opacity-100 shadow-[0_0px_50px_0px_rgba(100,69,237,0.37)]">
          <div className="flex justify-center rounded-full w-24 h-24 items-center overflow-hidden bg-[#343444]">
            <div className="icon">{img}</div>
          </div>
        </div>
        <div className="px-8">
          <div className="w-full flex justify-center">
            <span className="text-white text-1xl font-bold text-center">
              {title}
            </span>
          </div>
        </div>
        <div className="flex mt-3 md:mt-0 flex-wrap flex-col w-full justify-center pt-3 pb-6 px-6">
          <div className="w-full flex">
            <span className="text-gray-400 text-sm text-center">
              {description}
            </span>
          </div>
          <div className="w-full mt-3 flex flex-wrap flex-row justify-center items-center">
            {stars.map((item, id) => {
              return (
                <svg
                  key={id}
                  className="h-4 w-4 text-yellow-400 fill-yellow-400 hover:scale-125"
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
                  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                </svg>
              )
            })}
          </div>
        </div>
        <div className="btn-buyit justify-center mt-0 mx-16">
          <div className="flex space-x-1 rounded-full py-2 px-3 gradient-btn-3 justify-center hover:cursor-pointer">
            <svg
              className="h-5 w-5 text-[#ff05ff] z-10"
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
            <span className="text-sm">Read More</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ReputationCard = React.forwardRef(MyComponentRenderFn)
