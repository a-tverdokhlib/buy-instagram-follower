import { useState } from 'react'

import { ActiveViews } from './ActiveViews'
import { QualityViews } from './QualityViews'

type Props = {
  readonly onClickedHighQuality: () => void
  readonly onClickedActiveViews: () => void
  readonly viewType: () => string
}

export const Banner: React.VFC<Props> = (props: any) => {
  return (
    <div className="flex flex-col flex-wrap w-full bg-[#222232] min-h-screen">
      <div className="flex flex-col flex-wrap px-3 py-16 ls:p-16 space-y-3 justify-center">
        <div className="text-white text-2xl ls:text-4xl text-center">
          <span>
            <span className="">Buy Instagram Views</span> with Instant Delivery
            in 2020
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
          <span className="text-lg">★★★★★</span> (28 Reviews)
        </div>
      </div>
      <div className="flex w-full flex-col flex-wrap px-5 md:px-16 space-y-5 justify-center items-center">
        <div className="flex rounded-full items-center border-[purple] border-2 overflow-hidden">
          <span
            className={
              props.viewType() === 'highQuality'
                ? 'rounded-full px-5 z-[4] py-3 bg-[purple] text-white hover:cursor-pointer text-center bg-gradient-to-t from-transparent to-purple-700'
                : 'rounded-full px-5 z-[4] py-3 text-white hover:cursor-pointer hover-animation ani-left text-center'
            }
            onClick={props.onClickedHighQuality}
          >
            High Quality Views
          </span>
          <span
            className={
              props.viewType() === 'active'
                ? 'rounded-full px-5 z-[4] py-3 bg-[purple] text-white hover:cursor-pointer text-center bg-gradient-to-t from-transparent to-purple-700'
                : 'rounded-full px-5 z-[4] py-3 text-white hover:cursor-pointer hover-animation ani-right text-center'
            }
            onClick={props.onClickedActiveViews}
          >
            Active Views
          </span>
        </div>
        <div className="text-white text-center">What’s the difference?</div>
        <div className="h-10"></div>
        <div className="w-full justify-center items-center mt-16">
          {props.viewType() === 'highQuality' ? (
            <QualityViews
              services={[
                ...props.services.filter(
                  (service) =>
                    service.isShownInActiveTab !== true &&
                    service.isInstagramSaves !== true,
                ),
              ]}
            />
          ) : (
            <ActiveViews
              services={[
                ...props.services.filter(
                  (service) => service.isShownInActiveTab === true,
                ),
              ]}
            />
          )}
        </div>
      </div>
    </div>
  )
}
