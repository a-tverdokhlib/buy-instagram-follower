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
    <div className="overflow-hidden m-auto pb-10 flex flex-wrap w-full min-w-[280px] max-w-xs bg-[#343444] justify-center cursor-pointer hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-700/50  transition-all duration-300 rounded-xl">
      <div className="w-full h-48 flex bg-[url('/img/follower-item-template.jpg')] bg-cover"></div>
      <div className="p-8">
        <Card className="min-h-min w-full md:min-h-[80px]">
          <span className="text-white font-bold">
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
    </div>
  )
}

export const ProductCard = React.forwardRef(MyComponentRenderFn)
