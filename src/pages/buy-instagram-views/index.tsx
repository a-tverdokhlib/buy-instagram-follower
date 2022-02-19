import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import { HowTo } from '@/components/organisms/HowTo'

import { Banner } from './Banner'
import { Description1 } from './Description1'
import { Description2 } from './Description2'
import { FAQ } from './FAQ'
import { Feedback } from './Feedback'
import { ViewPackages } from './ViewPackages'

const BuyInstagramLikes: React.VFC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col w-full top-0 min-h-screen p-0">
        <Banner />
        <Description1 />
        <ViewPackages />
        <Description2 />
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
