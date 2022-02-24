type Props = {
  readonly planInfo: any
}
export const SubscriptionPlanCard: React.VFC<Props> = (props) => {
  return (
    <div
      className={
        props.planInfo.isPopular
          ? 'flex flex-col w-full items-center justify-center border-[1px] rounded-xl h-[110px] md:h-[150px]'
          : 'flex flex-col w-full items-center justify-center border-[1px] rounded-xl h-[110px] md:h-[130px]'
      }
    >
      <div className="flex flex-col flex-wrap space-y-3 w-full md:flex-row md:flex-nowrap md:space-y-0 justify-center items-center">
        <div className="flex justify-center md:ml-3 mx:ml-10">
          <span
            className={
              props.planInfo.isPopular
                ? 'w-6 h-6 md:w-14 md:h-14 bg-[url("/img/custom-radio-large-checked.png")] bg-no-repeat bg-cover'
                : 'w-6 h-6 md:w-14 md:h-14 bg-[url("/img/custom-radio-large.png")] bg-no-repeat bg-cover'
            }
          ></span>
        </div>
        <div className="flex flex-wrap flex-col justify-center w-full">
          <div className="flex items-center justify-center">
            <span>
              <span className="text-white text-[15px] md:text-2xl">
                {props.planInfo.days}-Day
              </span>
            </span>
          </div>
          <div className="flex items-center justify-center">
            <span
              className={
                props.planInfo.isPopular
                  ? 'flex ls:p-3 items-center justify-center bg-[url("/img/discount-saving.png")] bg-no-repeat bg-contain bg-center py-2'
                  : 'flex items-center justify-center bg-no-repeat bg-contain py-2'
              }
            >
              <span
                className={
                  props.planInfo.isPopular
                    ? 'text-[white] text-sm md:text-2xl'
                    : 'text-[#ff5502] text-sm md:text-2xl font-bold'
                }
              >
                {props.planInfo.savePercent}% OFF
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
