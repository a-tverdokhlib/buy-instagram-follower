import { useState } from 'react'

import { Plans } from './Plans'

// type Props = {
//   readonly onClickedHighQuality: () => void
//   readonly onClickedActiveViews: () => void
//   readonly viewType: () => string
// }

type Props = {
  readonly onPlanSelected: (any) => void
}

export const Banner: React.VFC<Props> = (props: any) => {
  console.log('Data=>', props.category)
  return (
    <div className="flex flex-col flex-wrap w-full bg-[#222232] min-h-screen">
      <div className="flex flex-col flex-wrap px-3 py-16 ls:p-16 space-y-3 justify-center">
        <div className="text-white text-2xl ls:text-4xl text-center">
          <span>
            <span className="">{props.category.name}</span> with Instant
            Delivery in 2020
          </span>
        </div>
        <div className="text-white text-1xl text-center">
          <span>
            <span>
              Select a package that you like and submit Order Now button
            </span>
          </span>
        </div>
        <div className="text-white text-2xl text-center">
          <span className="text-lg">★★★★★</span> (1 Reviews)
        </div>
      </div>
      <div className="flex w-full flex-col flex-wrap px-5 md:px-16 space-y-5 justify-center items-center">
        <div className="h-10"></div>
        <div className="w-full justify-center items-center mt-16">
          <Plans
            services={props.category.priceList}
            onPlanSelected={(item) => props.onPlanSelected(item)}
          />
        </div>
      </div>
    </div>
  )
}
