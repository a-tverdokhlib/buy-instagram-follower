import { useEffect, useState } from 'react'

import { Card } from '@/components/atoms/Card'
import { Image } from '@/components/atoms/Image'
import { Slider } from '@/components/atoms/Slider'

export const Services: React.VFC = () => {
  const [sliderVal, setSliderVal] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      sliderVal > 100 ? setSliderVal(0) : setSliderVal(sliderVal + 1)
    }, 100)
  }, [sliderVal])

  return (
    <div className="flex flex-col items-center flex-wrap md:mt-20">
      <div className="flex w-full min-w-[500] p-12 justify-center">
        <h1 className="text-4xl font-semibold md:text-5xl md:font-bold">
          Services We Offer
        </h1>
      </div>
      <div className="flex w-1/3">
        <Slider color="#f15d23" barColor="#f15d23" value={sliderVal} />
      </div>
      <div className="flex flex-wrap w-full p-12 md:flex-row md:flex-nowrap">
        <div className="flex p-10 w-full">
          <Card minHeight="300px" minWidth="100%">
            <div className="w-48 h-48 m-auto">
              <div className="animate-spin-slow">
                <Image
                  src="/three_dot_circle.svg"
                  alt="Rounding"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="flex w-48 h-48 absolute -mt-[192px] justify-items-center">
                <svg
                  className="h-10 w-10 text-purple-500 m-auto"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {' '}
                  <circle cx="12" cy="12" r="7" />{' '}
                  <polyline points="12 9 12 12 13.5 13.5" />{' '}
                  <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
                </svg>
              </div>
            </div>
            <h2 className="flex w-full text-semibold text-3xl justify-center">
              <span>Fast Delivery</span>
            </h2>
            <br></br>
            <span>
              <span>
                We’re lightning fast! As soon as your sign up and make your
                first payment, we begin boosting your Instagram account and
                finding new followers, likes, views for your account in a matter
                of minutes. New followers come in at a fast pace as we continue
                boosting your posts until your purchased amount is reached.
              </span>
            </span>
          </Card>
        </div>
        <div className="flex p-10 w-full justify-center">
          <Card minHeight="300px" minWidth="100%">
            <div className="w-48 h-48 m-auto">
              <div className="animate-spin-slow">
                <Image
                  src="/three_dot_circle.svg"
                  alt="Rounding"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="flex w-48 h-48 absolute -mt-[192px]">
                <svg
                  className="h-10 w-10 text-purple-500 m-auto"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {' '}
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
            </div>
            <h2 className="flex w-full text-semibold text-3xl justify-center">
              <span>&lt;&lt;a</span>
            </h2>
            <br></br>
            <span>
              <span>
                Technical support for all our services 24/7 to help you.If you
                have some query,drop an email to our support team.We are
                delighted to assit you.
              </span>
            </span>
          </Card>
        </div>
        <div className="flex p-10 w-full justify-center">
          <Card minHeight="300px" minWidth="100%">
            <div className="w-48 h-48 m-auto">
              <div className="animate-spin-slow">
                <Image
                  src="/three_dot_circle.svg"
                  alt="Rounding"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="flex w-48 h-48 absolute -mt-[192px] justify-items-center">
                <svg
                  className="h-10 w-10 text-purple-500 m-auto"
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
                  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                </svg>
              </div>
            </div>
            <h2 className="flex w-full text-semibold text-3xl justify-center">
              <span>Secure Payments</span>
            </h2>
            <br></br>
            <span>
              <span>
                We only give you the highest quality Instagram followers, likes,
                views. Quality is one of our most important goals at Goread.io.
                We always make sure that your Instagram followers are
                long-lasting, reliable, and that the packages are affordable.
              </span>
            </span>
          </Card>
        </div>
      </div>
    </div>
  )
}
