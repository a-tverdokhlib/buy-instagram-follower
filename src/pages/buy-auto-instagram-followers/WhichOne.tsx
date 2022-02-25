import { ProductCard } from './ProductCard'

const productCards = [
  {
    title: 'Instant IG Followers',
    descriptions: [
      'Get 1K or More Followers One Time',
      'Spend Only $0.011 Per Follower',
      'Starts Delivering Once Place Orders',
      'Additional Free Instagram Followers',
      'For Instagram Experienced Users',
      'Fast & Instant',
    ],
    link: {
      title: 'Get Instant Followers>>',
      target: '',
    },
    isPopular: false,
  },
  {
    title: 'Auto IG Followers',
    descriptions: [
      'Get 50, 150, or 200 IG Followers Per Day',
      'Spend Less than $0.009 Per Follower',
      'Delivers Every 24 Hours Automatically',
      'Drop-Protection System',
      'For Instagram New Users',
      'Organically & Continuously',
    ],
    link: {
      title: 'Get Auto Followers>>',
      target: '',
    },
    isPopular: false,
  },
]
export const WhichOne: React.VFC = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center ">
      <div className="flex w-full h-12"></div>
      <div className="flex flex-col flex-wrap w-full items-center">
        <div className="mt-10 flex flex-col flex-wrap w-full items-center">
          <div className="flex w-full justify-center">
            <span>
              <span className="flex text-white font-bold text-2xl ls:text-4xl text-center px-5">
                Which One is Suitable for You to Buy?
              </span>
            </span>
          </div>
          <div className="flex flex-col flex-wrap w-full justify-center items-center">
            <div className="mt-8 mb-8 flex w-full justify-center">
              <div className="flex w-32 justify-center bg-white rounded-2xl h-2"></div>
            </div>
          </div>
        </div>
        <div className="content flex flex-col flex-wrap w-full ls:p-3 space-y-5 md:px-28">
          <div className="flex w-full justify-center items-center">
            <span>
              <span className="flex text-white text-lg text-center">
                Two options offered by GetInsta, one is instant Instagram
                followers, the other is auto Instagram followers. Just see the
                differences and choose the one that suits you best.
              </span>
            </span>
          </div>
          <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 md:gap-3 w-full">
            {productCards.map((item, id) => {
              return <ProductCard key={id} info={item} />
            })}
          </div>
        </div>
        <div className="h-24 md:h-0"></div>
      </div>
    </div>
  )
}
