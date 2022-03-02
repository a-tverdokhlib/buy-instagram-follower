import { useState } from 'react'

import { ActiveComments } from './ActiveComments'
import { QualityComments } from './QualityComments'

type Props = {
  readonly onClickedHighQuality: () => void
  readonly onClickedActive: () => void
  readonly commentType: () => string
}

export const Banner: React.VFC<Props> = (props) => {
  return (
    <div className="flex flex-col flex-wrap w-full bg-[#222232] min-h-screen">
      <div className="flex flex-col flex-wrap px-3 py-16 ls:p-16 space-y-3 justify-center">
        <div className="text-white text-2xl ls:text-4xl text-center">
          <span>
            <span className="">Buy Instagram Comments</span> with Instant
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
        <div className="flex rounded-full items-center border-[purple] border-2 overflow-hidden">
          <span
            className={
              props.commentType() === 'highQuality'
                ? 'rounded-full px-5 z-[4] py-3 bg-[purple] text-white hover:cursor-pointer text-center bg-gradient-to-t from-transparent to-purple-700'
                : 'rounded-full px-5 z-[4] py-3 text-white hover:cursor-pointer hover-animation ani-left text-center'
            }
            onClick={props.onClickedHighQuality}
          >
            High Quality Comments
          </span>
          <span
            className={
              props.commentType() === 'active'
                ? 'rounded-full px-5 z-[4] py-3 bg-[purple] text-white hover:cursor-pointer text-center bg-gradient-to-t from-transparent to-purple-700'
                : 'rounded-full px-5 z-[4] py-3 text-white hover:cursor-pointer hover-animation ani-right text-center'
            }
            onClick={props.onClickedActive}
          >
            Active Comments
          </span>
        </div>
        <div className="text-white text-center">What’s the difference?</div>
        <div className="h-10"></div>
        <div className="w-full justify-center items-center mt-16">
          {props.commentType() === 'highQuality' ? (
            <QualityComments />
          ) : (
            <ActiveComments />
          )}
        </div>
      </div>
    </div>
  )
}
