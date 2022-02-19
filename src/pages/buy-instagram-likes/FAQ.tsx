import { useState } from 'react'

type PackageProps = {
  readonly providerId: number
  readonly title: string
  readonly description: string
}
const Provider: React.VFC<PackageProps> = (props) => {
  const [collapse, setCollapse] = useState(true)
  const collapseItem = () => {
    setCollapse(!collapse)
  }
  return (
    <div className="accordion">
      <div className="accordion-item flex flex-wrap px-3 text-gray-500">
        <div
          className={
            collapse === true
              ? 'accordion-header flex flex-nowrap text-sm space-x-2 hover:scale-105 hover:cursor-pointer transition-all duration-300'
              : 'accordion-header-active flex flex-nowrap text-sm space-x-2 text-[#f15d23] hover:cursor-pointer'
          }
          onClick={collapseItem}
        >
          <div className="flex w-8 h-8 rounded-full hover:cursor-pointer transition">
            <div
              className={
                collapse === true ? 'accordion-btn' : 'accordion-btn-active'
              }
            >
              <svg
                className="svg-icon h-8 w-8 text-gray-500"
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
                <circle cx="12" cy="12" r="3" />{' '}
                <line x1="12" y1="5" x2="12" y2="5.01" />{' '}
                <line x1="17" y1="7" x2="17" y2="7.01" />{' '}
                <line x1="19" y1="12" x2="19" y2="12.01" />{' '}
                <line x1="17" y1="17" x2="17" y2="17.01" />{' '}
                <line x1="12" y1="19" x2="12" y2="19.01" />{' '}
                <line x1="7" y1="17" x2="7" y2="17.01" />{' '}
                <line x1="5" y1="12" x2="5" y2="12.01" />{' '}
                <line x1="7" y1="7" x2="7" y2="7.01" />
              </svg>
            </div>
          </div>
          <span className="my-auto">
            <span>{props.title}</span>
          </span>
        </div>
        <div className={collapse === true ? 'hidden' : 'content-show'}>
          <div className="accordion-body py-4 px-5 text-gray-400">
            {props.description}
          </div>
        </div>
      </div>
    </div>
  )
}

const providers = [
  {
    providerId: 0,
    title: 'CAN I CONNECT WITH MY TARGET MARKET?',
    description:
      'Of course! The whole point of buying Instagram likes is to get your campaign in front of your target market. Most people spend significant time browsing the internet, using social media, and interacting with others. You can put yourself directly in the middle of the action by developing social media accounts for your brand and increasing your following. Having well-known social media accounts gives your fan base and target market the opportunity to interact with your brand, making you personable and more down to Earth. An increase of customer interaction through Instagram is beneficial for you, your brand, and your target market because, honestly, who doesn’t love seeing updates from their favorite companies? Everyone loves seeing new products and campaigns!',
  },
  {
    providerId: 1,
    title: 'WHY SHOULD I CHOOSE GOREAD.IO TO BUY IG LIKES?',
    description:
      'We are experts in social media marketing and have proven ourselves with countless satisfied customers who have successfully increased their personal or business Instagram account followers. Still unsure? Well, you don’t have to take our word for it. Check out our reviews and ratings, and you’ll see for yourself that we’re the best in the industry. Goread.io doesn’t provide substandard Instagram likes. No, we only provide dependable, quality likes from followers in high-traffic networks. Our best option? You can purchase likes for all of your Instagram photos! Yep, your whole account! We can also spread your likes across several different photos to increase your following across many different photos and campaign uploads.',
  },
  {
    providerId: 2,
    title: 'IS IT THAT EASY TO BUY INSTAGRAM LIKES?',
    description:
      'Absolutely! No sign-up pages or questionnaires are asking for unessential details about you or your company. To help you gain Insta likes, all we need is your Instagram user ID and email address. Once we get started, all you need to do is sit back, relax, and watch the Insta likes start rolling in.',
  },
  {
    providerId: 3,
    title: 'IS BUYING INSTAGRAM LIKES WITHIN INSTAGRAM’S TERMS OF USE?',
    description:
      'Yes, it is! Our process of providing likes for your posts is no different from your gaining likes organically from your Instagram followers. Nothing we do violates any part of Instagram’s Terms of Use. Our likes are from real accounts and are always genuine interactions between the user and your brand. View Instagram’s Terms of Use from here - https://help.instagram.com/581066165581870',
  },
  {
    providerId: 4,
    title: 'WHAT IF I NEED TO BUY INSTAGRAM LIKES AUTOMATIC VERSION?',
    description:
      'Are you worried about having to order likes for each of your posts manually? Goread.io has you covered! We offer automatic likes packages that instantly adds Instagram likes to your new posts. Our automatic package is at an affordable monthly price that saves you time and advances your connection with Instagram followers.',
  },
  {
    providerId: 5,
    title: 'WELL, WHAT ARE YOU WAITING FOR?',
    description:
      'Goread.io is the premiere Instagram likes provider in the market as of 2020. If you don’t already have an Instagram account for your business, you’re losing out on grabbing the attention of countless new customers. The advantages of starting an Instagram account and purchasing one of our packages means that you can gain more likes and quickly increase your brand awareness. Building an Instagram account from the bottom up, with zero likes is difficult. But it doesn’t have to be! Why not take a boost when you need it and buy Instagram likes to catapult your brand from unknown to famous?',
  },
]

export const FAQ: React.VFC = () => {
  return (
    <div className="flex flex-col flex-wrap w-full items-center bg-[#222232] min-h-screen">
      <div className="flex flex-col flex-wrap w-10/12 mt-32 py-9 m-auto bg-[black] bg-opacity-50 rounded-xl">
        <div className="mt-5 p-5 text-white font-bold text-2xl text-center animate-pulse">
          <span>
            <span className="">
              Goread - Your #1 Instagram Maketing Service Provider
            </span>
          </span>
        </div>
        <div className="text-gray-400 px-5 font-bold text-lg text-center">
          <span>
            <span>1,000,000 happy customer’s can’t be wrong!</span>
          </span>
        </div>
        <div className="mt-16 flex flex-col md:flex-row md:flex-nowrap md:space-x-3 md:space-y-0 justify-center">
          <div className="flex flex-col flex-wrap space-y-3 w-full md:w-1/2">
            {providers
              .filter((value) => value.providerId % 2 === 0)
              .map((item, id) => {
                return (
                  <Provider
                    key={id}
                    providerId={id}
                    title={item.title}
                    description={item.description}
                  />
                )
              })}
          </div>
          <div className="flex flex-col flex-wrap space-y-3 w-full md:w-1/2">
            {providers
              .filter((value) => value.providerId % 2 !== 0)
              .map((item, id) => {
                return (
                  <Provider
                    key={id}
                    providerId={id}
                    title={item.title}
                    description={item.description}
                  />
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
