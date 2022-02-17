import Link from 'next/link'
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
      <div className="flex flex-col flex-wrap pb-9 md:w-1/2 lg:w-1/3 m-5 sm:m-10 md:m-24 bg-[black] bg-opacity-50 rounded-xl">
        <span className="flex justify-center h-10 w-10 items-center">
          <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span>
        <div className="m-16 text-[#DC39FC] font-bold text-xl text-center animate-pulse">
          <span>
            <span className="">Active Instagram Follower packages</span>
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
