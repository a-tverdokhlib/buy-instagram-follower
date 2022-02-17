import { useState } from 'react'

import { ActiveFollowers } from './ActiveFollowers'
import { QualityFollowers } from './QualityFollowers'

export const Banner: React.VFC = () => {
  const [followerType, setFollowerType] = useState('highQuality')
  const onClickedHighQuality = () => {
    setFollowerType('highQuality')
  }
  const onClickedActiveFollowers = () => {
    setFollowerType('active')
  }
  return (
    <div className="flex flex-col flex-wrap w-full bg-[#222232] min-h-screen">
      <div className="flex flex-col flex-wrap p-16 space-y-3 justify-center">
        <div className="text-white text-4xl text-center">
          <span>
            <span className="">Buy Instagram Followers</span> with Instant
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
          <span className="text-lg">★★★★★</span> (39 Reviews)
        </div>
      </div>
      <div className="flex w-full flex-col flex-wrap px-5 md:px-16 space-y-5 justify-center items-center">
        <div className="flex rounded-full items-center border-[purple] border-2 overflow-hidden">
          <span
            className={
              followerType === 'highQuality'
                ? 'rounded-full px-5 z-[4] py-3 bg-[purple] text-white hover:cursor-pointer text-center bg-gradient-to-t from-transparent to-purple-700'
                : 'rounded-full px-5 z-[4] py-3 text-white hover:cursor-pointer hover-animation ani-left text-center'
            }
            onClick={onClickedHighQuality}
          >
            High Quality Followers
          </span>
          <span
            className={
              followerType === 'active'
                ? 'rounded-full px-5 z-[4] py-3 bg-[purple] text-white hover:cursor-pointer text-center bg-gradient-to-t from-transparent to-purple-700'
                : 'rounded-full px-5 z-[4] py-3 text-white hover:cursor-pointer hover-animation ani-right text-center'
            }
            onClick={onClickedActiveFollowers}
          >
            Active Followers
          </span>
        </div>
        <div className="text-white text-center">What’s the difference?</div>
        <div className="h-10"></div>
        <div className="w-full justify-center items-center mt-16">
          {followerType === 'highQuality' ? (
            <QualityFollowers />
          ) : (
            <ActiveFollowers />
          )}
        </div>
      </div>
    </div>
  )
}
