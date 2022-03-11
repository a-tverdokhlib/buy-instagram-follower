type Props = {
  readonly info: any
}

import Image from 'next/image'
import router from 'next/router'
export const ProductCard: React.VFC<Props> = (props) => {
  return (
    <div
      className={
        props.info.isPopular === true
          ? 'flex flex-wrap overflow-hidden product-card mt-[10px] text-white bg-[#343444] hover:shadow-lg hover:shadow-cyan-700/50  transition-all duration-300 rounded-xl'
          : 'flex mt-[35px] overflow-hidden product-card flex-wrap text-white bg-[#343444] hover:shadow-lg hover:shadow-cyan-700/50  transition-all duration-300 rounded-xl'
      }
    >
      <div
        className={
          props.info.isPopular === true
            ? 'w-full h-6 text-center bg-gradient-to-r from-[#ff5502] to-[#aea921]'
            : 'w-full h-6 -mt-[30px] text-center bg-transparent'
        }
      >
        {props.info.isPopular === true ? (
          <span>★★ Most Popular ★★</span>
        ) : (
          <></>
        )}
      </div>
      <div className="w-full h-48 flex flex-wrap bg-[url('/img/follower-item-template.jpg')] bg-cover">
        <div className="w-full h-full flex flex-wrap bg-black opacity-80">
          <div className="w-full mt-2 flex items-center justify-center bg-[black] bg-opacity-80 text-center text-3xl text-[white] font-bold">
            <span>
              <span>{props.info.title}</span>
            </span>
          </div>
        </div>
      </div>
      {props.info.descriptions.map((item, id) => {
        return (
          <div
            key={id}
            className="w-full flex text-sm h-9 px-3 py-6 text-gray-300 space-x-1 items-center"
          >
            <Image
              src="/img/compare-list-tag.svg"
              alt="Check"
              width="24px"
              height="24px"
            ></Image>
            <div className="pl-1 w-full border-b-[1px] border-gray-600 border-dotted mt-4 pb-4">
              <span>
                <span>{item}</span>
              </span>
            </div>
          </div>
        )
      })}
      <div className="flex p-8 w-full justify-center">
        <span>
          <span
            onClick={() => router.push(props.info.link.target)}
            className="flex w-full hover:cursor-pointer hover:underline font-bold text-lg text-white"
          >
            {props.info.link.title}
          </span>
        </span>
      </div>
    </div>
  )
}
