import { FollowerPlanCard } from './FollowerPlanCard'

type Props = {
  readonly planSelected: (any) => void
}

const planInfos = [
  {
    id: 0,
    followers: 50,
    savePercent: 45,
    price: 0.84,
    oldPrice: 1.52,
    isPopular: false,
  },
  {
    id: 1,
    followers: 150,
    savePercent: 50,
    price: 1.44,
    oldPrice: 2,
    isPopular: true,
  },
  {
    id: 2,
    followers: 200,
    savePercent: 70,
    price: 1.66,
    oldPrice: 5.53,
    isPopular: false,
  },
]
export const FollowerPlan: React.VFC<Props> = (props) => {
  return (
    <div className="flex flex-col flex-wrap w-full md:bg-[#222232] md:rounded-none md:p-0 ml:px-14">
      <div className="flex flex-col flex-wrap w-full py-6 pr-3 md:pr-12 md:p-16">
        <div className="mt-1 flex flex-row flex-nowrap w-full h-[30px] md:h-[49px] rounded-r-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent">
          <div className="flex w-3 md:w-24 items-center icon md:bg-[url('/img/forward.png')] bg-no-repeat bg-center"></div>
          <div className="flex items-center">
            <span>
              <span className="text-1xl md:text-2xl md:font-bold text-white">
                Step 1
              </span>
            </span>
            <span className="ml-5">
              <span className="text-sm md:text-2xl md:font-bold text-gray-200">
                Select Follower Plan
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap space-y-4 w-full items-center px-3 md:space-x-2 md:space-y-0 md:px-16 md:flex-row md:flex-nowrap">
        {planInfos.map((item, id) => {
          return <FollowerPlanCard key={id} planInfo={item} />
        })}
      </div>
    </div>
  )
}
