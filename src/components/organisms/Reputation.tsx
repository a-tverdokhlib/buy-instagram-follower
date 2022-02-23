import { useRef, useState } from 'react'

import { Card } from '@/components/atoms/Card'
import { Image } from '@/components/atoms/Image'
import { MySwipper } from '@/components/atoms/MySwipper'

import { ReputationCard } from './ReputationCard'

export const Reputation: React.VFC = () => {
  const swiperRef = useRef<any>(null)
  const prevRef = useRef<any>(null)
  const nextRef = useRef<any>(null)
  // const [swiperCurrentIndex, setSwiperCurrentIndex] = useState(0)
  const [swiperReachStarted, setSwiperReachStarted] = useState(0)
  const [swiperReachEnded, setSwiperReachEnded] = useState(0)
  const prevClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    prevRef.current?.click()
  }
  const nextClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    nextRef.current?.click()
  }

  const swiperIndexChange = (e: any) => {}

  const swiperReachStart = (e: any) => {
    setSwiperReachStarted(e)
  }

  const swiperReachEnd = (e: any) => {
    setSwiperReachEnded(e)
  }
  return (
    <div className="flex flex-col -mt-5 min-h-screen items-center flex-wrap bg-[#222232] opacity-90 rounded-3xl overflow-hidden shadow-[black] shadow-[0_0px_100px_0px_rgba(0,0,0,0.1)]">
      <div className="mt-32 flex w-full min-w-[500] p-3 justify-center">
        <h1 className="text-4xl text-center text-white font-semibold md:text-5xl md:font-semibold">
          What People Say About Us?
        </h1>{' '}
      </div>
      <div className="flex w-full justify-center px-10">
        <span className="text-white">
          Our service has an extensive customer roster built on years’ worth of
          trust. Read what our buyers think about our range of service.
        </span>
      </div>
      <div className="reputation-cards mt-10 grid grid-cols-1 gap-10 justify-center p-12 md:grid-cols-2 xl:grid-cols-3">
        <ReputationCard
          img={
            <Image
              src="/img/avt-template.jpg"
              alt="Avatar"
              width="100px"
              height="100px"
            />
          }
          title="John Smith Youtuber"
          description="After trying several websites who claim to have ’fast delivery’,I'm glad I finally found this service.They literally started delivering 5 seconds after my payment!"
        />
        <ReputationCard
          img={
            <Image
              src="/img/avt-template.jpg"
              alt="Avatar"
              width="100px"
              height="100px"
            />
          }
          title="Keith Irvine Instagram Model"
          description="I cannot stress enough how happy I am with the service that I received. Thanks to all of you, my Instagram account is surging with activity! You’ve not only earned yourself a loyal customer, but a friend for life."
        />
        <ReputationCard
          img={
            <Image
              src="/img/avt-template.jpg"
              alt="Avatar"
              width="100px"
              height="100px"
            />
          }
          title="Sara-Jade Bevis Bloger"
          description="Wow! This is amazing, I have been purchasing Instagram Likes for over a year and never got a delay! ? did a great job always"
        />
      </div>
    </div>
  )
}
