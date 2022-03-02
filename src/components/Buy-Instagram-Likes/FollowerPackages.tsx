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
    packageName: '50 Instagram Followers for $0.89',
  },
  {
    packageId: 1,
    packageName: 'Cheap Instagram Followers for $1',
  },
  {
    packageId: 2,
    packageName: '100 Instagram Followers for $1.89',
  },
  {
    packageId: 3,
    packageName: '300 Instagram Followers for $2.99',
  },
  {
    packageId: 4,
    packageName: '500 Instagram Followers for $4.89',
  },
  {
    packageId: 5,
    packageName: '1000 Instagram Followers for $8.59',
  },
  {
    packageId: 6,
    packageName: '2500 Instagram Followers for $19.99',
  },
  {
    packageId: 7,
    packageName: '5000 Instagram Followers for $36.99',
  },
  {
    packageId: 8,
    packageName: '10000 Instagram Followers for $64.99',
  },
  {
    packageId: 9,
    packageName: '20k Instagram Followers for $119.99',
  },
  {
    packageId: 10,
    packageName: '40k Instagram Followers for $199.99',
  },
  {
    packageId: 11,
    packageName: '50k Instagram Followers for $249.99',
  },
  {
    packageId: 12,
    packageName: '100k Instagram Followers for $499.99',
  },
  {
    packageId: 13,
    packageName: '200k Instagram Followers for $799.99',
  },
  {
    packageId: 14,
    packageName: '400k Instagram Followers for $1299.99',
  },
]
export const FollowerPackages: React.VFC = () => {
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
          <div className="package-item flex text-gray-200 w-full justify-center hover:text-[#DC39FC] transition-colors duration-500">
            <Link href="#">Instagram’s New Rules</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
