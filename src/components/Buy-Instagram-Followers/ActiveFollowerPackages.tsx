import Link from 'next/link'

import { Image } from '@/components/atoms/Image'

import { ProductCard } from './ProductCard'
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
    packageName: 'Buy 800 Real Instagram Followers',
  },
  {
    packageId: 1,
    packageName: 'Buy 2000 Real Instagram Followers',
  },
  {
    packageId: 2,
    packageName: 'Buy 6000 Real Instagram Followers',
  },
  {
    packageId: 3,
    packageName: 'Buy 12000 Real Instagram Followers',
  },
]
export const ActiveFollowerPackages: React.VFC = () => {
  return (
    <div className="flex flex-col flex-wrap w-full items-center bg-[#222232] min-h-screen">
      <div className="flex md:mt-24 flex-col flex-wrap pb-9 md:w-11/12 lg:w-11/12 bg-transparent bg-opacity-50 rounded-xl">
        <span className="flex justify-center h-10 w-10 items-center">
          <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span>
        <div className="m-10 text-white font-bold text-3xl text-center animate-pulse">
          <span>
            <span className="">Active Instagram Follower packages</span>
          </span>
        </div>
        <div className="grid grid-cols-1 gap-5 justify-center p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProductCard
            img={
              <Image
                src="/img/avt-template.jpg"
                alt="Avatar"
                width="100%"
                height="100%"
              />
            }
            title="800 Real Instagram Followers"
            description="800 Real Instagram Followers!"
          />
          <ProductCard
            img={
              <Image
                src="/img/avt-template.jpg"
                alt="Avatar"
                width="80px"
                height="80px"
              />
            }
            title="2000 Real Instagram Followers"
            description="2000 Real Instagram Followers."
          />
          <ProductCard
            img={
              <Image
                src="/img/avt-template.jpg"
                alt="Avatar"
                width="80px"
                height="80px"
              />
            }
            title="6000 Real Instagram Followers"
            description="6000 Real Instagram Followers"
          />
          <ProductCard
            img={
              <Image
                src="/img/avt-template.jpg"
                alt="Avatar"
                width="80px"
                height="80px"
              />
            }
            title="12000 Real Instagram Followers"
            description="12000 Real Instagram Followers"
          />
        </div>
      </div>
    </div>
  )
}
