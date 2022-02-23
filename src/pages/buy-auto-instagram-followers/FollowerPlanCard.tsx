type Props = {
  readonly planInfo: any
}
export const FollowerPlanCard: React.VFC<Props> = (props) => {
  return (
    <div
      className={
        props.planInfo.isPopular
          ? 'flex flex-col w-full  border-[1px] rounded-xl h-[130px] md:h-[340px]'
          : 'flex flex-col w-full  border-[1px] rounded-xl h-[130px] md:h-[300px]'
      }
    >
      <div className="w-full top-0 h-20">
        <div
          className={
            props.planInfo.isPopular
              ? 'ml-auto w-20 h-20 -mt-3 -mr-[10px] bg-[url("/img/bestvalue.png")] bg-no-repeat bg-cover'
              : 'ml-auto w-20 h-20'
          }
        ></div>
      </div>
      <div className="-mt-12 flex flex-row flex-nowrap w-full space-y-0 md:flex-col md:flex-wrap md:space-y-3 justify-center items-center">
        <div className="flex justify-center w-48 md:w-full">
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
                {props.planInfo.followers} followers/Day
              </span>
            </span>
          </div>
          <div className="md:hidden flex items-center justify-center">
            <span
              className={
                props.planInfo.isPopular
                  ? 'flex items-center justify-center bg-[url("/img/discount-saving.png")] bg-no-repeat bg-contain w-24 h-5 py-2'
                  : 'flex items-center justify-center bg-no-repeat bg-contain w-24 h-5 py-2'
              }
            >
              <span
                className={
                  props.planInfo.isPopular
                    ? 'text-[white] text-lg md:text-2xl'
                    : 'text-[#ff5502] text-lg md:text-2xl font-bold'
                }
              >
                Save {props.planInfo.savePercent} %
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap flex-col items-center justify-center w-full">
          <span className="flex">
            <sub className="symbol text-xl">
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {' '}
                <line x1="12" y1="1" x2="12" y2="23" />{' '}
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </sub>{' '}
            <span className="text-white text-2xl font-bold">
              {props.planInfo.price}
            </span>
          </span>
          <span>
            <span className="text-white text-lg line-through decoration-1">
              {props.planInfo.oldPrice}
            </span>
          </span>
        </div>
        <div className="hidden md:flex items-center justify-center w-full">
          <span
            className={
              props.planInfo.isPopular
                ? 'flex items-center justify-center bg-[url("/img/discount-saving.png")] bg-no-repeat bg-contain w-48 h-10 py-2'
                : 'flex items-center justify-center bg-no-repeat bg-contain w-48 h-10 py-2'
            }
          >
            <span
              className={
                props.planInfo.isPopular
                  ? 'text-[white] text-2xl'
                  : 'text-[#ff5502] text-2xl font-bold'
              }
            >
              Save {props.planInfo.savePercent} %
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
