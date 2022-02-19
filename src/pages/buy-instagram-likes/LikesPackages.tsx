import Link from 'next/link'
import { useState } from 'react'
type PackageProps = {
  readonly packageId: number
  readonly packageName: string
}
const Package: React.VFC<PackageProps> = (props) => {
  return (
    <div className="package-item flex text-gray-200 text-center justify-center hover:text-[#DC39FC] transition-colors">
      <Link href="#">{props.packageName}</Link>
    </div>
  )
}
const packageList = [
  {
    packageId: 0,
    packageName: '50 Instagram Likes',
  },
  {
    packageId: 1,
    packageName: '100 Instagram Likes',
  },
  {
    packageId: 2,
    packageName: '300 Instagram Likes',
  },
  {
    packageId: 3,
    packageName: '500 Instagram Likes',
  },
  {
    packageId: 4,
    packageName: '1000 Instagram Likes',
  },
  {
    packageId: 5,
    packageName: '2500 Instagram Likes',
  },
  {
    packageId: 6,
    packageName: '5000 Instagram Likes',
  },
  {
    packageId: 7,
    packageName: '10k Instagram Likes',
  },
  {
    packageId: 8,
    packageName: '20k Instagram Likes',
  },
  {
    packageId: 9,
    packageName: '35k Instagram Likes',
  },
  {
    packageId: 10,
    packageName: '50k Instagram Likes',
  },
  {
    packageId: 11,
    packageName: '100k Instagram Likes',
  },
]
export const LikePackages: React.VFC = () => {
  return (
    <div className="flex flex-col flex-wrap w-full items-center bg-[#222232] min-h-screen">
      <div className="flex flex-col flex-wrap pb-9 md:w-1/2 lg:w-1/3 m-5 sm:m-10 md:mx-24 bg-[black] bg-opacity-50 rounded-xl">
        <div className="m-16 text-[#DC39FC] font-bold text-xl text-center animate-pulse">
          <span>
            <span className="">We have following Instagram Likes packages</span>
          </span>
        </div>
        <div className="flex flex-col flex-wrap px-3 space-y-1 justify-center">
          {packageList.map((item, id) => {
            return (
              <Package
                key={id}
                packageName={item.packageName}
                packageId={item.packageId}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
