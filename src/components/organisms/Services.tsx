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
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />{' '}
                  <polyline points="17 21 17 13 7 13 7 21" />{' '}
                  <polyline points="7 3 7 8 15 8" />
                </svg>
              </div>
            </div>
            <h2 className="flex w-full text-semibold text-2xl justify-center">
              <span>Fast Delivery</span>
            </h2>
            <br></br>
            <p>
              <span>
                We’re lightning fast! As soon as your sign up and make your
                first payment, we begin boosting your Instagram account and
                finding new followers, likes, views for your account in a matter
                of minutes. New followers come in at a fast pace as we continue
                boosting your posts until your purchased amount is reached.
              </span>
            </p>
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
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />{' '}
                  <polyline points="17 21 17 13 7 13 7 21" />{' '}
                  <polyline points="7 3 7 8 15 8" />
                </svg>
              </div>
            </div>
            <h2 className="flex w-full text-semibold text-2xl justify-center">
              <span>&lt;&lt;a</span>
            </h2>
            <br></br>
            <p>
              <span>
                Technical support for all our services 24/7 to help you.If you
                have some query,drop an email to our support team.We are
                delighted to assit you.
              </span>
            </p>
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
            <h2 className="flex w-full text-semibold text-2xl justify-center">
              <span>Secure Payments</span>
            </h2>
            <br></br>
            <p>
              <span>
                We only give you the highest quality Instagram followers, likes,
                views. Quality is one of our most important goals at Goread.io.
                We always make sure that your Instagram followers are
                long-lasting, reliable, and that the packages are affordable.
              </span>
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
