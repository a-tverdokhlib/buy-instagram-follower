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
    <div className="overflow-hidden m-auto pb-10 flex flex-wrap w-full min-w-[280px] max-w-xs justify-center cursor-pointer bg-[#343444] hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-700/50  transition-all duration-300 rounded-xl">
      <div className="w-full h-48 flex bg-[url('/img/follower-item-template.jpg')] bg-cover"></div>
      <div className="p-8">
        <Card className="min-h-min w-full md:min-h-[60px]">
          <span className="text-white font-bold flex">
            <span className="text-center">{title}</span>
          </span>
          <span>
            <div className="text-[#d8cbcb] leading-5 text-sm text-center">
              {description}
            </div>
          </span>
        </Card>
      </div>
      <div className="flex w-full justify-center">
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
      <div className="btn-buyit justify-center mt-5">
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
  )
}

export const ProductCard = React.forwardRef(MyComponentRenderFn)
