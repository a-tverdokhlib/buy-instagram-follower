type Props = {
  readonly children?: ReadonlyArray<Object>
  readonly ref?: any
  readonly img: any
  readonly title: any
  readonly description: any
}

import React, { ForwardRefRenderFunction } from 'react'

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
          <div className="btn-buyit justify-center absolute">
            <div className="flex space-x-1 rounded-full py-2 gradient-btn-2 justify-center hover:cursor-pointer">
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
              <span className="w-12 text-sm">Buy it</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ProductItem = React.forwardRef(MyComponentRenderFn)
