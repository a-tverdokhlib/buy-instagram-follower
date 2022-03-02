type Props = {
  readonly title: string
  readonly avgMark?: number
  readonly reviewCount: number
  readonly cost: number
  readonly isPopular: boolean
  readonly followerDesc: string
  readonly viewDesc: string
  readonly likeDesc: string
  readonly autoSaveDesc: string
  readonly autoCommentDesc: string
  readonly autoImpressDesc: string
  readonly profileVisitDesc: string
  readonly futurePostDesc: string
  readonly oneTimePaymentDesc: string
  readonly onPurchaseClicked: () => void
}

export const GrowthPlanCard: React.VFC<Props> = (props) => {
  return (
    <div
      className={
        props.isPopular === true
          ? 'flex flex-wrap overflow-hidden product-card mt-[10px] text-white bg-[#343444] hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-700/50  transition-all duration-300 rounded-xl'
          : 'flex mt-[35px] overflow-hidden product-card flex-wrap text-white bg-[#343444] hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-700/50  transition-all duration-300 rounded-xl'
      }
    >
      <div
        className={
          props.isPopular === true
            ? 'w-full h-6 text-center bg-gradient-to-r from-[#ff5502] to-[#aea921]'
            : 'w-full h-6 -mt-[30px] text-center bg-transparent'
        }
      >
        {props.isPopular === true ? <span>★★ Most Popular ★★</span> : <></>}
      </div>
      <div className="w-full h-48 flex flex-wrap bg-[url('/img/follower-item-template.jpg')] bg-cover">
        <div className="w-full h-full flex flex-wrap bg-black opacity-80">
          <div className="w-full mt-2 flex items-center justify-center bg-[black] bg-opacity-80 text-center text-3xl text-[white] font-bold">
            <span>
              <span>{props.title}</span>
            </span>
          </div>
          <div className="w-full text-center text-sm text-orange-500">
            <span>★★★★★</span>
            <span>{props.avgMark}</span>
            <span>({props.reviewCount} Reviews)</span>
          </div>
          <div className="item-price text-3xl w-full flex flex-col flex-wrap justify-center opacity-10 bg-gradient-to-r from-[indigo] to-[purple] items-center">
            <div className="flex">
              <sub className="symbol left-[-3px] text-xl">
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
              </sub>
              <span className="font-bold text-4xl">{props.cost}</span>
            </div>
            <div className="flex">
              <span className="font-bold">per month</span>
            </div>
          </div>
        </div>
      </div>
      {/* background-image: linear-gradient(to right,#ff7802 0%,#fea921 100%),linear-gradient(to right,#ff7802 0%,#fea921 100%); */}
      <div className="w-full flex text-sm h-8 text-gray-300 space-x-1 border-b-[1px] border-gray-600 items-center justify-center text-center">
        <svg
          className="h-4 w-4 text-[#DC39FC]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
        <span>
          <span className="text-[13px] ls:text-sm">{props.followerDesc}</span>
        </span>
      </div>
      <div className="w-full flex text-sm h-8 text-gray-300 space-x-1 border-b-[1px] border-gray-600 items-center justify-center text-center">
        <svg
          className="h-3 w-3 text-[#DC39FC]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />{' '}
          <path d="M7 11V7a5 5 0 0 1 9.9-1" />
        </svg>
        <span>
          <span className="font-semibold text-gray-400 text-[13px] ls:text-sm">
            {props.viewDesc}
          </span>{' '}
        </span>
      </div>
      <div className="w-full flex text-sm h-8 text-gray-300 space-x-1 border-b-[1px] border-gray-600 items-center justify-center text-center">
        <svg
          className="h-3 w-3 text-[#DC39FC]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
        </svg>
        <span>
          <span className="font-semibold text-[13px] ls:text-sm">
            {props.likeDesc}
          </span>
        </span>
      </div>
      <div className="w-full flex text-sm h-8 text-gray-300 space-x-1 border-b-[1px] border-gray-600 items-center justify-center text-center">
        <svg
          className="h-3 w-3 text-[#DC39FC]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span>
          <span className="font-semibold text-gray-400 text-[13px] ls:text-sm">
            {props.autoSaveDesc}
          </span>
        </span>
      </div>
      <div className="w-full flex text-sm h-8 text-gray-300 space-x-1 border-b-[1px] border-gray-600 items-center justify-center text-center">
        <svg
          className="h-4 w-4 text-[#DC39FC]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path stroke="none" d="M0 0h24v24H0z" />{' '}
          <circle cx="12" cy="13" r="7" />{' '}
          <polyline points="12 10 12 13 14 13" />{' '}
          <line x1="7" y1="4" x2="4.25" y2="6" />{' '}
          <line x1="17" y1="4" x2="19.75" y2="6" />
        </svg>
        <span>
          <span className="font-semibold text-gray-400 text-[13px] ls:text-sm">
            {props.autoCommentDesc}
          </span>{' '}
        </span>
      </div>
      <div className="w-full flex text-sm h-8 text-gray-300 space-x-1 border-b-[1px] border-gray-600 items-center justify-center text-center">
        <svg
          className="h-3 w-3 text-[#DC39FC]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span>
          <span className="font-semibold text-gray-400 text-[13px] ls:text-sm">
            {props.autoImpressDesc}
          </span>
        </span>
      </div>
      <div className="w-full flex text-sm h-8 text-gray-300 space-x-1 border-b-[1px] border-gray-600 items-center justify-center text-center">
        <svg
          className="h-4 w-4 text-[green]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path stroke="none" d="M0 0h24v24H0z" /> <path d="M5 12l5 5l10 -10" />
        </svg>
        <span className="text-[green] text-[13px] ls:text-sm">
          {props.profileVisitDesc}
        </span>
      </div>
      <div className="w-full flex text-sm h-8 text-gray-300 space-x-1 border-b-[1px] border-gray-600 items-center justify-center text-center">
        <svg
          className="h-4 w-4 text-[green]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path stroke="none" d="M0 0h24v24H0z" /> <path d="M5 12l5 5l10 -10" />
        </svg>
        <span className="text-[green] text-[13px] ls:text-sm">
          {props.futurePostDesc}
        </span>
      </div>
      <div className="w-full flex text-sm h-8 text-gray-300 space-x-1 border-b-[1px] border-gray-600 items-center justify-center text-center">
        <svg
          className="h-4 w-4 text-[green]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path stroke="none" d="M0 0h24v24H0z" /> <path d="M5 12l5 5l10 -10" />
        </svg>
        <span className="text-[green] text-[13px] ls:text-sm">
          {props.oneTimePaymentDesc}
        </span>
      </div>
      <div
        onClick={props.onPurchaseClicked}
        className="w-full flex text-sm h-8 text-gray-300 space-x-1  items-center justify-center text-center cursor-pointer hover:scale-110 transition-all duration-500"
      >
        <svg
          className="h-5 w-5 text-yellow-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <circle cx="9" cy="21" r="1" /> <circle cx="20" cy="21" r="1" />{' '}
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        <span>Start Now</span>
      </div>
      <div className="btn-buyit justify-center absolute">
        <div
          onClick={props.onPurchaseClicked}
          className="flex space-x-1 rounded-full py-2 gradient-btn-2 justify-center hover:cursor-pointer"
        >
          <svg
            className="h-5 w-5 text-white z-10"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
          </svg>
          <span className="w-16 text-sm">Start Now</span>
        </div>
      </div>
    </div>
  )
}
