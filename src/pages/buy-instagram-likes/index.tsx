import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import { HowTo } from '@/components/organisms/HowTo'

import { ActiveLikePackages } from './ActiveLikePackages'
import { Banner } from './Banner'
import { Description1 } from './Description1'
import { Description2 } from './Description2'
import { Description3 } from './Description3'
import { Description4 } from './Description4'
import { FAQ } from './FAQ'
import { Feedback } from './Feedback'
import { FollowerPackages } from './FollowerPackages'
import { LikePackages } from './LikesPackages'

const BuyInstagramLikes: React.VFC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col w-full top-0 min-h-screen p-0">
        <Banner />
        <Description1 />
        <LikePackages />
        <Description2 />
        <ActiveLikePackages />
        <Description3 />
        <FollowerPackages />
        <Description4 />
        <HowTo />
        <FAQ />
        <Feedback />
        <div className="h-32 bg-[#222232]"></div>
      </main>
      <Footer />
    </>
  )
}
export default BuyInstagramLikes
