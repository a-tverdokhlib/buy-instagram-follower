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
    <div className="service-card flex mt-16 flex-wrap w-full min-w-[286px] max-w-xs rounded-xl justify-center cursor-pointer bg-[#6345ED] bg-opacity-[0.02] hover:bg-opacity-[0.07] transition-colors duration-300">
      <div className="flex w-[130px] h-[130px] rounded-full bg-gray-700 bg-opacity-30 -mt-[60px] justify-center items-center shadow-[0_0px_50px_0px_rgba(100,69,237,0.37)]">
        <div className="flex justify-center rounded-full w-24 h-24 items-center overflow-hidden bg-[#343444]">
          <div className="icon">{img}</div>
        </div>
      </div>
      <div className="p-10">
        <Card className="flex flex-wrap flex-col min-h-min md:min-h-[250px] w-full">
          <div className="flex justify-center w-full -ml-[10px] mb-5">
            <h2 className="flex w-full text-semibold text-2xl text-white justify-center text-center">
              <span>
                <span className="text-center hover:text-[#DC39FC] transition-colors duration-500">
                  {title}
                </span>
              </span>
            </h2>
          </div>
          <span>
            <span className="text-gray-400">{description}</span>
          </span>
        </Card>
      </div>
    </div>
  )
}

export const ServiceCard = React.forwardRef(MyComponentRenderFn)
