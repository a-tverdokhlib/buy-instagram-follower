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
    title: 'IS BUYING INSTAGRAM COMMENTS SAFE?',
    description:
      'You may have heard about Instagram’s algorithm punishing people for purchasing likes. Luckily, comments don’t have that problem – providing you purchase them from a legitimate source. For instance, our team is made up of experienced marketing specialists who have put years of work into developing safe, effective comment strategies. This makes our service 100% risk-free',
  },
  {
    providerId: 1,
    title: 'WILL ANYONE KNOW I PURCHASED COMMENTS?',
    description:
      'We take great care to protect your privacy at all times. This includes ensuring that nobody can tell that you purchased Instagram comments from a third party. We also keep all of your payment and user data on an ultra-secure server.',
  },
  {
    providerId: 2,
    title: 'HOW LONG WILL I WAIT FOR COMMENTS?',
    description:
      'We can start posting comments on your Instagram in seconds in most cases. In others, it might take up to an hour depending on how many orders we have to fill. Luckily, we’re always expanding our human resources and technical capabilities to ensure you get the faster service possible. Welcome to the "internet age!"',
  },
  {
    providerId: 3,
    title: 'WILL PURCHASING COMMENTS RESULT IN MORE LIKES AND FOLLOWS?',
    description:
      'While studies show that having more comments directly increases engagement, we can’t make any specific guarantees of how your engagement will be affected. In fact, if you’re already purchasing comments, we suggest you also purchase likes and video views in order to make your sudden engagement increases look more natural. People are followers, and when you give them an example to emulate, they typically will. Remember, reaching the "top" of Instagram is not something that many people can do organically without a sufficient amount of celebrity power. That’s why nearly everyone out there is using a wide range of strategies (including purchasing engagement) to try and maximize their audience. In the end, it’s just another form of paid marketing – no different from a television commercial.',
  },
  {
    providerId: 4,
    title: 'CAN I SET UP MY OWN COMMENTS LIST?',
    description:
      'Most customers want randomized comments, but if you’re looking for a more specific response, we’re more than happy to accommodate you! We allow you to submit your preferred comments in a dialog box when you order. After reviewing them, we’ll pass them on to our commenters.',
  },
  {
    providerId: 5,
    title: 'CAN PURCHASING COMMENTS GET MY INSTAGRAM BANNED?',
    description:
      'Thankfully, we can assure you that there is absolutely no chance of this happening. After all, you’re not violating any rules! As we said, purchasing comments is no different than any other form of paid marketing or advertising. That’s why millions of businesses and influencers are already using paid commenting services. If that doesn’t allay your fears, we’re happy to report that in all of our years providing this service, not a single complaint has been filed against any of our clients - to say nothing of one of them being banned. And since we store all of your order and payment information on secure servers, your transaction will be 100% private.',
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
