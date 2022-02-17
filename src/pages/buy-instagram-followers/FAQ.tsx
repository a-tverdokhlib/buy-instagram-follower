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
    title: 'HOW CAN I INCREASE MY INSTAGRAM BRAND AWARENESS?',
    description:
      'Our goal is to get your Instagram brand in front of as many people as we can. We’ll quickly increase the number of people in your target market who not only know of your brand but who are rapidly becoming valued customers. Most people spend more time on social media than any other activity. If you want to make the most of your brand’s action on Instagram, buying followers is the best course. People are more likely to interact with Instagram posts than advertisements. The best marketing strategy for your business is to increase awareness through social media.',
  },
  {
    providerId: 1,
    title: 'DOES BUYING INSTAGRAM FOLLOWERS WORK?',
    description:
      'Buying nstagram followers through Goread.io can save your time a lot. We can help you reach countless new IG followers and increase your Instagram influence in massive scale.',
  },
  {
    providerId: 2,
    title: 'HOW FAST DO I RECEIVE INSTAGRAM FOLLOWERS?',
    description:
      'We’re lightning fast! As soon as your sign up and make your first payment, we begin boosting your page and finding new followers for your account in a matter of minutes. New followers come in at a fast pace as we continue boosting your posts until your purchased amount is reached. All you need to do is make your page public, order the number of followers you’d like, and then sit back and watch them roll in.',
  },
  {
    providerId: 3,
    title: 'HOW DOES BUYING INSTAGRAM FOLLOWERS WORK?',
    description:
      'When you buy Instagram followers from Goread, We send your profile link to our Instagram pool, Then people who are interested in your profile will start follow your account. We are working on a revenue sharing model with our IG Pool members. So that’s how we deliver engaged Instagram followers',
  },
  {
    providerId: 4,
    title: 'COULD I GET BANNED FROM INSTAGRAM FOR BUYING FOLLOWERS?',
    description:
      'Nope! Whatever you might have heard, buying followers is allowed. Goread.io takes your page security seriously, and we have set up an expert system that ensures your page does not get banned because of inactive Instagram followers. We always work within Instagram’s guidelines.',
  },
  {
    providerId: 5,
    title: 'WHAT IS THE CHEAPEST INSTAGRAM FOLLOWERS PACKAGE YOU HAVE?',
    description:
      'Currently we offer 50 ig followers for $0.89. That is the cheapest Instagram package available with us.',
  },
  {
    providerId: 6,
    title: 'DOES GOREAD.IO NEED MY INSTAGRAM PASSWORD?',
    description:
      'No, we don’t require your password. When people follow an account on Instagram, they don’t need the account’s password. So, naturally, we don’t need yours either. Goread.io works by giving your followers through page advertisements in our network, not going into your account. We set your page up to start receiving new followers by using your Instagram username. Once you reach your target goal, your advertisement is removed, leaving you with all of your new followers. Don’t be fooled by apps that tell you to buy Instagram followers by handing over your username and password. You can get locked out of your account or have your account terminated.',
  },
  {
    providerId: 7,
    title: 'HOW TO GET 1K FOLLOWERS ON INSTAGRAM IN 5 MINUTES?',
    description:
      'Usually all our Instagram follower packages start almost instantly. So yeah, if you order a large ig followers order, our system will send first 1k followers within 5-15 minutes.',
  },
  {
    providerId: 8,
    title: 'WILL I LOSE FOLLOWERS AFTER BUYING?',
    description:
      'No! During the promotion, we are only finding you quality followers that are within Instagram guidelines. We also work to ensure your followers stay with your account for a long time after your purchase is made. We monitor your account for two weeks after the promotion to make sure your followers continue with your page.',
  },
  {
    providerId: 9,
    title: 'DO YOU OFFER FREE INSTAGRAM FOLLOWERS TRIAL?',
    description:
      'Yes we do. We offer 20 free Instagram followers for trial purpose',
  },
  {
    providerId: 10,
    title: 'ARE THEY QUALITY FOLLOWERS?',
    description:
      'You bet they are! We only give you the highest quality Instagram followers. Quality is one of our most important goals at Goread.io. We always make sure that your followers are long-lasting, reliable, and that the packages are affordable. Our competitors might advertise that they are the best in the business, but those are broken promises that end with sub-par followers. With Goread.io, you can rest assured you’re buying the best followers we can find with fast delivery and fantastic customer service.',
  },
  {
    providerId: 11,
    title: 'HOW TO GET 100K FOLLOWERS ON INSTAGRAM?',
    description:
      'We have 100k Instagram followers package for $899. We also offer 30 days money back gurantee on every purchase. So you can buy 100k ig followers without any doubt.',
  },
  {
    providerId: 12,
    title: 'WELL, WHEN ARE YOU GETTING STARTED?',
    description:
      'It only takes minutes to set up your account with Goread.io and make your first purchase. Get started on the right path to becoming an Instagram influencer, promote your brand, and get your campaign in front of your target audience. Want the best, most affordable, and highest quality service in the industry? Look no further than Goread.io!',
  },
  {
    providerId: 13,
    title: 'HOW TO GET 10K INSTAGRAM FOLLOWERS IN 5 MINUTES?',
    description:
      'Our 10k instagram followers package will take more than 5 minutes to deliver. Its not a good idea to send 10k followers to a new Instagram account in that quick. Instagram may ban your account if you do like that.',
  },
  {
    providerId: 14,
    title: 'HOW DO I BUY INSTAGRAM FOLLOWERS?',
    description:
      'Currently, we accept Visa, Mastercard, and Maestro card. We can also accept debit cards. All of your payments are safely handled by a secure payment processor that complies with all PCI DSS standards. PCI DSS standards make sure that your payment data is protected whenever you make any online purchase.',
  },
  {
    providerId: 15,
    title: 'HOW TO GET 100 FOLLOWERS ON INSTAGRAM?',
    description:
      'We have a 100 instagram followers package for $1.89 with instant delivery. You can buy 100 followers and test our service quality',
  },
  {
    providerId: 16,
    title: 'CAN I BUY INSTAGRAM FOLLOWERS AND LIKES BOTH?',
    description:
      'Yes of course, You can buy followers, likes, and also views from Goread.io with instant delivery. We also offer money back gurantee too',
  },
  {
    providerId: 17,
    title: 'HOW TO GET 5000 FOLLOWERS ON INSTAGRAM?',
    description:
      'You can get 5k instagram followers from us only for $31.99. Currently this is the cheapest rate for real 5000 instagram followers on the market',
  },
  {
    providerId: 18,
    title: 'IS THIS THE BEST SITE TO BUY INSTAGRAM FOLLOWERS?',
    description:
      'You bet we are, When we made our pricing structure, we researched 100s of Instagram follower,likes providers, and we tested each and every service too. So we priced our packages less than their prices, and also trying to offer the best quality Instargam followers, likes on the market as of 2020',
  },
  {
    providerId: 19,
    title: 'HOW TO GET 500 INSTAGRAM FOLLOWERS?',
    description:
      'You can buy 500 instagram followers from Goread only for $4.89. 500 followers are good for start your IG journey',
  },
  {
    providerId: 19,
    title: 'CAN I ONLY BUY ORGANIC INSTAGRAM FOLLOWERS?',
    description:
      'Every Goread IG follower is send from our organic Instagram followers Pods. So yeah, You will only get real organic followers. Our main intention is to help you grow your Instagram followers organically.',
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
            {providers.map((item, id) => {
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
            {providers.map((item, id) => {
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
