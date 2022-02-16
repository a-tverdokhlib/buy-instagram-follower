import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'

import { Banner } from './Banner'

const BuyInstagramFollower: React.VFC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col w-full top-0 min-h-screen p-0">
        <Banner />
      </main>
      <Footer />
    </>
  )
}
export default BuyInstagramFollower
