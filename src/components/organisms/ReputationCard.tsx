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
    <div className="overflow-hidden pt-8 pb-10 flex flex-wrap w-full min-w-[286px] max-w-xs bg-[#000000] bg-opacity-50 hover:bg-opacity-100 border-[2px] hover:border-indigo-900 hover:border-opacity-20 border-opacity-30 border-slate-900 justify-center cursor-pointer transition-all duration-300 rounded-2xl">
      <div className="w-full">
        <div className="w-full h-20 flex flex-row flex-nowrap">
          <div className="flex ml-10 rounded-full overflow-hidden flex-shrink-0 hover:hue-rotate-60 transition-all duration-300">
            {img}
          </div>
          <div className="flex">
            <h2 className="flex text-semibold text-2xl items-center text-white justify-center text-center">
              <span>
                <span>{title}</span>
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="p-10">
        <Card minHeight="120px" minWidth="100%">
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
              className="h-4 w-4 text-yellow-400 fill-yellow-400 hover:scale-110"
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

export const ReputationCard = React.forwardRef(MyComponentRenderFn)
