import parse from 'html-react-parser'
type Props = {
  readonly title: string
  readonly avgMark?: number
  readonly reviewCount: number
  readonly price: number
  readonly isPopular: boolean
  readonly keyFeatures: any
  readonly onPurchaseClicked: () => void
}

export const AutoLikesPlanCard: React.VFC<Props> = (props) => {
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
          <div className="w-full mt-2 flex items-center justify-center bg-[black] bg-opacity-80 text-center text-2xl text-[white] font-bold">
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
              <span className="font-bold text-4xl">{props.price}</span>
            </div>
            <div className="flex">
              <span className="font-bold">per month</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">{parse(props.keyFeatures)}</div>
      <div
        onClick={props.onPurchaseClicked}
        className="w-full flex text-sm h-9 text-gray-300 space-x-1  items-center justify-center text-center cursor-pointer hover:scale-110 transition-all duration-500"
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
