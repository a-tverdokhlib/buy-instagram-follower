import { useEffect, useState } from 'react'

import { Card } from '@/components/atoms/Card'
import { Image } from '@/components/atoms/Image'
import { Slider } from '@/components/atoms/Slider'
import { ServiceCard } from '@/components/organisms/ServiceCard'

export const Services: React.VFC = () => {
  const [sliderVal, setSliderVal] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      sliderVal > 100 ? setSliderVal(0) : setSliderVal(sliderVal + 1)
    }, 100)
  }, [sliderVal])

  return (
    <div className="flex flex-col mx-3 md:mx-20 items-center flex-wrap md:mt-20 bg-[#222232] rounded-3xl">
      <div className="mt-24 space-x-3 flex w-full min-w-[500] text-center justify-center">
        {/* <div className="flex overflow-hidden rounded-full items-center justify-center w-16 h-16">
          <span className="animate-ping-slow z-[2] inline-flex h-6 w-6 rounded-full bg-white border-2 border-white opacity-75"></span>
          <div className="absolute z-[3] rounded-full bg-[#222232]">
            <svg
              className="h-8 w-8 text-white m-auto"
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
              <circle cx="12" cy="12" r="3" fill="currentColor" />{' '}
              <circle cx="12" cy="12" r="9" />
            </svg>
          </div>
        </div> */}
        <h1 className="flex items-center text-4xl font-semibold text-[#DC39FC] md:text-5xl md:font-bold">
          Services We Offer
        </h1>
      </div>
      {/* <div className="flex w-1/3">
        <Slider color="#f15d23" barColor="#f15d23" value={sliderVal} />
      </div> */}
      <div className="grid grid-cols-1 gap-10 items-center justify-center mt-16 md:p-12 md:grid-cols-2 xl:grid-cols-3">
        <ServiceCard
          img={
            <svg
              className="h-16 w-16 text-[#DC39FC] m-auto"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <circle cx="12" cy="12" r="7" />{' '}
              <polyline points="12 9 12 12 13.5 13.5" />{' '}
              <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
            </svg>
          }
          title="FAST DELIVERY"
          description="We’re lightning fast! As soon as your sign up and make your first
              payment, we begin boosting your Instagram account and finding new
              followers, likes, views for your account in a matter of minutes.
              New followers come in at a fast pace as we continue boosting your
              posts until your purchased amount is reached."
        />
        <ServiceCard
          img={
            <svg
              className="h-14 w-14 text-[#DC39FC] m-auto"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          }
          title="&lt;&lt;a"
          description="Technical support for all our services 24/7 to help you.If you
          have some query,drop an email to our support team.We are
          delighted to assit you."
        />
        <ServiceCard
          img={
            <svg
              className="h-16 w-16 text-[#DC39FC] m-auto"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
              <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
            </svg>
          }
          title="SECURE PAYMENTS"
          description="We only give you the highest quality Instagram followers,
                            likes, views. Quality is one of our most important goals at
                            Goread.io. We always make sure that your Instagram followers
                            are long-lasting, reliable, and that the packages are
                            affordable."
        />
        <ServiceCard
          img={
            <svg
              className="h-16 w-16 text-[#DC39FC] m-auto"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />{' '}
              <polyline points="17 21 17 13 7 13 7 21" />{' '}
              <polyline points="7 3 7 8 15 8" />
            </svg>
          }
          title="PRIVACY &amp; SAFETY"
          description="We don’t require your password. When people follow an account
          on Instagram, they don’t ask your account’s password. So,
          naturally, we don’t need yours either."
        />
        <ServiceCard
          img={
            <svg
              className="h-16 w-16 text-[#DC39FC] m-auto"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
              <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
            </svg>
          }
          title="OUR GUARANTEE"
          description="Satisfaction is our number one priority! If you are not happy,
          you will receive a 100% money back. This is why we stand high
          and remain the best place to buy all Instagram serivces"
        />
        <ServiceCard
          img={
            <svg
              className="h-16 w-16 text-[#DC39FC] m-auto"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />{' '}
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
          }
          title="SECURE PAYMENTS"
          description="We accept all Visa, Master, AMEX, Diners club, Maestro Credit
          and Debit card payments"
        />
      </div>
    </div>
  )
}
