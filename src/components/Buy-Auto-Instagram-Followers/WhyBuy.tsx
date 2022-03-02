type DescItemProps = {
  readonly title: string
}
const DescItem: React.FC<DescItemProps> = ({ children, title }) => {
  return (
    <>
      <div className="text-white text-xl font-bold ">{title}</div>
      <div className="mt-2 md:text-left text-gray-300">{children}</div>
    </>
  )
}
export const WhyBuy: React.VFC = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center ">
      <div className="flex w-full h-12"></div>
      <div className="flex flex-col flex-wrap w-full items-center">
        <div className="mt-10 flex flex-col flex-wrap w-full items-center">
          <div className="flex w-full justify-center">
            <span>
              <span className="flex text-white font-bold text-2xl ls:text-4xl text-center px-5">
                Why Buy from Us?
              </span>
            </span>
          </div>
          <div className="flex flex-col flex-wrap w-full justify-center items-center">
            <div className="mt-8 mb-8 flex w-full justify-center">
              <div className="flex w-32 justify-center bg-white rounded-2xl h-2"></div>
            </div>
          </div>
        </div>
        <div className="content flex flex-col flex-wrap w-full p-3 space-y-5 md:px-28 md:flex-row md:flex-nowrap md:space-x-3 md:space-y-0">
          <div className="w-full border-b-[1px] border-gray-500 md:border-none">
            <DescItem title="100% Real & Active Followers">
              <span>
                <span>
                  Our creative ecosystem devotes to filter any robot and gather
                  Instagram fanciers. Each follower we provide is not only a
                  100% real person behind but also an active participator.
                </span>
              </span>
            </DescItem>
            <div className="h-10"></div>
          </div>
          <div className="w-full border-b-[1px] border-gray-500 md:border-none">
            <DescItem title="Instant Delivery">
              <span>
                <span>
                  Your order will be instantly on processing by our system once
                  it is placed, and you just need to see followers pouring into
                  your account as your request. Fast and punctual, like a
                  postman.
                </span>
              </span>
              <div className="h-10"></div>
            </DescItem>
          </div>
          <div className="w-full border-b-[1px] border-gray-500 md:border-none">
            <DescItem title="Easy, Safe, Automatic">
              <span>
                <span>
                  Just following a few steps to place your order, as easily as
                  1-2-3. No verification, no password needed, and your private
                  information will be 100% secured. Every single follower’s
                  delivery is under control by our well-tested system.
                </span>
              </span>
              <div className="h-10"></div>
            </DescItem>
          </div>
        </div>
        <div className="h-24 md:h-0"></div>
      </div>
    </div>
  )
}
