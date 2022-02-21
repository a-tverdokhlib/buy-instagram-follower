import { Card } from '@/components/atoms/Card'

export const HowTo: React.VFC = () => {
  return (
    <div className="flex flex-col min-h-screen items-center flex-wrap mt-0 bg-black opacity-95">
      <div className="w-full min-h-screen absolute z-[-99] opacity-20 bg-[url('/img/bg_how_it_works.jpg')] bg-auto bg-center bg-fixed"></div>
      <div className="flex w-full mt-24 min-w-[500] p-12 justify-center">
        <h1 className="text-4xl text-white font-semibold md:text-4xl md:font-semibold text-center">
          How to Buy a Package?
        </h1>{' '}
      </div>
      <div className="flex w-full justify-center px-10">
        <span className="text-white">
          Buying social media packages from Goread.io is simple and fast. Just
          follow these steps
        </span>
      </div>
      <div className="flex flex-wrap w-full flex-col justify-center p-10 space-y-5 mx:flex-row mx:flex-nowrap mx:space-x-10 mx:space-y-0">
        <div className="overflow-visible flex flex-wrap w-full min-w-[286px] rounded-[50px] cursor-pointer">
          <div className="px-3 py-10">
            <Card className="w-full min-h-[200px]">
              <h2 className="flex w-full font-bold text-2xl text-white text-center">
                <span>
                  <span>Choose Package</span>
                </span>
              </h2>
              <br></br>
              <span>
                <span className="text-white">
                  It’s easy to get started with us. Choose from our wide range
                  of Instagram marketing packages that cater your requirements
                </span>
              </span>
            </Card>
          </div>
          <div className="absolute mr-auto z-[-1]">
            <span className="text-[190px] font-semibold leading-[7rem] text-[#f15d23]">
              1
            </span>
          </div>
        </div>
        <div className="overflow-visible flex flex-wrap w-full min-w-[286px] rounded-[50px] cursor-pointer">
          <div className="px-3 py-10">
            <Card className="w-full min-h-[200px]">
              <h2 className="flex w-full font-bold text-2xl text-white text-center">
                <span>
                  <span>Enter Your Instagram Username</span>
                </span>
              </h2>
              <br></br>
              <span>
                <span className="text-white">
                  In the order form simply enter your Instagram username. Our
                  system will automatically fetch your public info. We DON’T
                  require your password
                </span>
              </span>
            </Card>
          </div>
          <div className="absolute mr-auto z-[-1]">
            <span className="text-[190px] font-semibold leading-[7rem] text-[#f15d23]">
              2
            </span>
          </div>
        </div>
        <div className="overflow-visible flex flex-wrap w-full min-w-[286px] rounded-[50px] cursor-pointer">
          <div className="px-3 py-10">
            <Card className="w-full min-h-[200px]">
              <h2 className="flex w-full font-bold text-2xl text-white text-center">
                <span>
                  <span>Wait for results</span>
                </span>
              </h2>
              <br></br>
              <span>
                <span className="text-white">
                  You can pay via any bank card. We will proceed with the order
                  and inform you once its done via email. You can also track
                  your order status from the client area
                </span>
              </span>
            </Card>
          </div>
          <div className="absolute mr-auto z-[-1]">
            <span className="text-[190px] font-semibold leading-[7rem] text-[#f15d23]">
              3
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
