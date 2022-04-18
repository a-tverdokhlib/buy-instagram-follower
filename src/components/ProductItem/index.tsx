import parse from 'html-react-parser'
import Router, { NextRouter } from 'next/router'
import router from 'next/router'

import { PlanConfirmation } from '@/components/Instagram-Growth/PlanConfirmation'
import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import { Banner } from '@/components/ProductItem/Banner'
import { Feedback } from '@/components/ProductItem/Feedback'
import { HowTo } from '@/components/ProductItem/HowTo'

const ProductItem: React.VFC = (props: any) => {
  const onBuyItemClick = () => {
    router.push({
      pathname:
        props.service.urlSlug !== undefined
          ? `checkout/${props.category.urlSlug}`
          : '',
      query: { serviceId: props.service._id },
    })
  }
  return (
    <>
      <Header />
      <main
        className="flex flex-1 flex-col w-full top-0 min-h-screen p-0"
        id="ContainerElementID"
      >
        <Banner {...props} onBuyItemClick={() => onBuyItemClick()} />
        <div className="service-description flex flex-col flex-wrap w-full p-3 ls:p-5 items-center justify-center bg-[#222232] text-gray-400">
          {props.service !== undefined &&
          props.service.content !== undefined ? (
            parse(props.service.content)
          ) : (
            <></>
          )}
        </div>
        <HowTo title={props.service.name} />
        <Feedback />
        <div className="h-32 bg-[#222232]"></div>
      </main>
      <Footer />
    </>
  )
}
export default ProductItem
