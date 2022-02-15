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
  return (
    <div className="overflow-hidden flex flex-wrap w-full min-w-[286px] max-w-xs bg-transparent border-[2px] border-indigo-900 border-opacity-20 hover:bg-slate-900 hover:bg-opacity-30 hover:border-slate-900  rounded-[50px] justify-center cursor-pointer hover:shadow-[0_1px_10px_5px_rgba(0,0,0,0.5)] transition-all duration-300">
      <div className="w-full p-3 hover:scale-[101%] transition-all duration-100">
        <svg
          className="h-auto w-full -mt-[0px] text-[black] rounded-[40px]"
          viewBox="0 0 24 10"
          strokeWidth="2"
          stroke="currentColor"
          fill="#25AAE1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path stroke="none" d="M0 0h24v24H0z" />{' '}
        </svg>
        <div className="w-full h-24 flex flex-row flex-nowrap -mt-[100px] md:-mt-[110px]">
          {/* <div className="animate-spin-slow">
                <Image
                  src="/three_dot_circle.svg"
                  alt="Rounding"
                  width="100%"
                  height="100%"
                />
              </div> */}
          <div className="flex ml-5 w-24 h-24">{img}</div>
          <div className="flex w-full -ml-[10px]">
            <h2 className="flex w-full text-semibold text-2xl items-center text-white justify-center text-center">
              <span>
                <span>{title}</span>
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="p-10">
        <Card className="min-h-min md:min-h-[250px] w-full">
          <span>
            <span className="text-white">{description}</span>
          </span>
        </Card>
      </div>
    </div>
  )
}

export const ServiceCard = React.forwardRef(MyComponentRenderFn)
