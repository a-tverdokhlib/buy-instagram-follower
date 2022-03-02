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
    title: 'DOES PURCHASING VIDEO VIEWS HURT MY ACCOUNT?',
    description:
      'Nope! Buying video views is allowed and does not hurt your account. The only thing adding video views does is put your brand in front of more people and help convert more followers and customers. We stay on top of all the latest changes to Instagram’s guidelines, and we take your account security seriously. You are safe with Goread.io.',
  },
  {
    providerId: 1,
    title: 'IS THERE AN OPTION FOR A MONTHLY SUBSCRIPTION?',
    description:
      'Yep! We have an affordable monthly subscription package that automatically promotes all of your new posts. You don’t have to worry about not receiving new views and likes again. We also monitor your account 24/7 to make sure every new post you add is included in your monthly subscription. If you ever need help, our customer support is available 24/7.',
  },
  {
    providerId: 2,
    title: 'DO I HAVE TO GIVE YOU MY PASSWORD TO BUY INSTAGRAM VIEWS?',
    description:
      'Not quite! We don’t need your password, but we do need your username. When you receive video views organically, people don’t need your password to watch, so neither do we!',
  },
  {
    providerId: 3,
    title: 'HOW DO I BUY INSTAGRAM VIEWS?',
    description:
      'Currently, we accept Visa, Mastercard, and Maestro card. We can also accept debit cards. All of your payments are safely handled by a secure payment processor that complies with all PCI DSS standards. PCI DSS standards make sure that your payment data is protected whenever you make any online purchase.',
  },
  {
    providerId: 4,
    title: 'HOW FAST ARE YOU?',
    description:
      'We have instant delivery! As soon as you sign up and make your first payment, our social media experts place your posts in our high-traffic network so that you can instantly start getting new views. We can deliver results in mere minutes!',
  },
  {
    providerId: 5,
    title: 'WHY HAVEN’T YOU SIGNED UP YET?',
    description:
      'Social media is currently the best way to advance your brand awareness and increase your fan base. Through Instagram, you can put your brand or product in front of as many new members of your target market as possible. With Goread.io on your side, your video campaigns will receive a large stream of new views that can turn into new followers or customers in minutes. Well, what are you waiting for?',
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
