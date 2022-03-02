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
    packageName: '500 Instagram Views for $0.89',
    description: '500 Instagram Views',
  },
  {
    packageId: 1,
    packageName: '1000 Instagram Views for $1.59',
    description: '1000 Instagram Views',
  },
  {
    packageId: 2,
    packageName: '2500 Instagram Views for $2.59',
    description: '2500 Instagram Views',
  },
  {
    packageId: 3,
    packageName: '5000 Instagram Views for $3.99',
    description: '5000 Instagram Views',
  },
  {
    packageId: 4,
    packageName: '10000 Instagram Views for $4.99',
    description: '10000 Instagram Views',
  },
  {
    packageId: 5,
    packageName: '25k Instagram Views for $6.99',
    description: '25k Instagram Views',
  },
  {
    packageId: 6,
    packageName: '50k Instagram Views for $9.99',
    description: '50k Instagram Views',
  },
  {
    packageId: 7,
    packageName: '100k Instagram Views for $19.99',
    description: '100k Instagram Views',
  },
  {
    packageId: 8,
    packageName: '1 Million Instagram Views for $59.99',
    description: '1 Million Instagram Views',
  },
]
export const ViewPackages: React.VFC = () => {
  return (
    <div className="flex flex-col flex-wrap w-full items-center bg-[#222232] min-h-screen">
      <div className="flex flex-col flex-wrap pb-9 md:w-1/2 lg:w-1/3 m-5 sm:m-10 md:mx-24 bg-[black] bg-opacity-50 rounded-xl">
        <div className="m-16 text-[#DC39FC] font-bold text-xl text-center animate-pulse">
          <span>
            <span className="">We have following Instagram View packages</span>
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
