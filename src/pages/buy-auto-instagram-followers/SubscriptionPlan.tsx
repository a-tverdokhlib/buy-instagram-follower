import { SubscriptionPlanCard } from './SubscriptionPlanCard'

const planInfos = [
  {
    id: 0,
    days: 15,
    savePercent: 19,
    isPopular: false,
  },
  {
    id: 1,
    days: 26,
    savePercent: 28,
    isPopular: true,
  },
  {
    id: 2,
    days: 30,
    savePercent: 50,
    isPopular: false,
  },
]
type Props = {
  readonly planSelected: (any) => void
}
export const SubscriptionPlan: React.VFC<Props> = (props) => {
  return (
    <div className="flex flex-col flex-wrap w-full md:bg-[#222232] md:rounded-none md:p-0 ml:px-14">
      <div className="flex flex-col flex-wrap w-full py-6 pr-12 md:p-16">
        <div className="flex mt-4 flex-row flex-nowrap w-full bg-[#a998ff] h-[30px] md:h-[49px] rounded-tr-full bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500">
          <div className="flex w-3 md:w-24 items-center icon md:bg-[url('/img/forward.png')] bg-no-repeat bg-center"></div>
          <div className="flex items-center">
            <span>
              <span className="text-1xl md:text-2xl md:font-bold text-white">
                Step 2
              </span>
            </span>
            <span className="ml-5">
              <span className="text-sm md:text-2xl md:font-bold text-gray-200">
                Select Subscription Plan
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 px-3 w-full items-center md:px-16">
        {planInfos.map((item, id) => {
          return <SubscriptionPlanCard key={id} planInfo={item} />
        })}
      </div>
    </div>
  )
}
