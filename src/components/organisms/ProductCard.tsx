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
    <div className="product-card overflow-hidden pt-8 pb-5 flex flex-wrap w-full min-w-[286px] max-w-xs bg-opacity-50 hover:bg-opacity-100  justify-center cursor-pointer transition-all duration-300 rounded-2xl">
      <div className="w-full overflow-hidden">
        <div className="w-full space-x-3 h-20 flex flex-row flex-nowrap">
          <div className="flex rounded-full overflow-hidden flex-shrink-0 transition-all duration-300">
            {img}
          </div>
          <div className="flex overflow-y-scroll">
            <div className="flex text-bold text-lg text-white ">
              <div>
                <span className="w-full">{title}</span>
                <br></br>
                <span className="text-[#aaaaaa] text-sm">{description}</span>
              </div>
            </div>
          </div>
          <div className="hidden btn buy-it">Buy It</div>
        </div>
      </div>
    </div>
  )
}

export const ProductCard = React.forwardRef(MyComponentRenderFn)
