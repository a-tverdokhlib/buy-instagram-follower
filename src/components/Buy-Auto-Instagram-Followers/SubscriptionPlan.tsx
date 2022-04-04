import { useEffect } from 'react'

import { SubscriptionPlanCard } from './SubscriptionPlanCard'

type Props = {
  readonly plan: any
  readonly activeSubscriptionPlan: any
  readonly planSelected: (any) => void
}
export const SubscriptionPlan: React.VFC<Props> = (props) => {
  // useEffect(() => {
  //   if (Object.keys(props.activeSubscriptionPlan).length === 0) {
  //     if (props.plan.variations) {
  //       const al = props.plan.variations.filter(
  //         (item) => item.isDefaultActive === true,
  //       )
  //       if (al.length > 0) {
  //         props.planSelected(al[0])
  //       }
  //     }
  //   }
  // }, [])
  return (
    <div className="flex flex-col flex-wrap w-full md:bg-[#222232] md:rounded-none md:p-0 ml:px-14">
      <div className="flex flex-col flex-wrap w-full py-6 pr-3 md:pr-12 md:p-16">
        <div className="flex mt-4 flex-row flex-nowrap w-full h-[30px] md:h-[49px] rounded-r-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent">
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
        {props.plan.variations ? (
          props.plan.variations.map((item, id) => {
            return (
              <SubscriptionPlanCard
                key={id}
                onPlanSelected={() => props.planSelected(item)}
                planInfo={item}
                isSelected={
                  item._id === props.activeSubscriptionPlan._id ? true : false
                }
              />
            )
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
