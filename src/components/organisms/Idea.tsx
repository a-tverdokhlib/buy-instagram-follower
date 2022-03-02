import Image from 'next/image'

import { Layout } from '@/components/atoms/Layout'

export const Idea: React.VFC = () => {
  return (
    <div className="flex flex-col flex-wrap md:flex-row rounded-3xl">
      <div className="hidden md:flex flex-none w-full p-12 max-w-xl items-center md:w-5/12">
        <div className="w-full md:w-5/12 h-[70vh] absolute">
          <Image
            src="/best_service.png"
            alt="Best Services"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex-1 p-4 ls:p-12 ml-auto md:w-7/12 md:mr-16 md:mt-20">
        <h1 className="text-4xl md:text-5xl font-medium max-w-full flex flex-wrap">
          <span className="text-white text-center">
            See why we are the best!
          </span>
        </h1>
        <br></br>
        <p className="text-[#aaaaaa]">
          When you{' '}
          <span className="text-[#25AAE1]">buy Instagram followers, </span>
          <span className="text-[#25AAE1]">buy Instagram views</span> or,{' '}
          <span className="text-[#25AAE1]">buy Instagram likes, </span>
          <span>
            you can make a significant amount of money off the Instagram account
            – especially from ads. Digital marketers always look for new ways to
            reach their target audience. When you have – let’s say a million
            followers – advertisers will reach out to you and ask you to promote
            their products and services. There are many Instagrammers who have
            bought millions of authentic followers from Goread.io. You will be
            surprised to know that these Instagrammers are now earning in 5
            figures simply by promoting third-party products. Having a large
            number of followers means you are powerful enough to bring about
            change. Today, hashtags started by politicians, sportspersons, and
            celebrities who have a method of going viral on this social media
            platform to reach a much wider audience.
          </span>
        </p>
      </div>
    </div>
  )
}
