import Router, { NextRouter } from 'next/router'
import { useEffect } from 'react'
import * as Scroll from 'react-scroll'
import { animateScroll as scroll, Element, scroller } from 'react-scroll'

import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import { HowTo } from '@/components/organisms/HowTo'
import {
  setInstagramAccount,
  setPlan,
  setPrice,
  setScrollPosition,
  setSubscriptionPlan,
} from '@/redux/reducers/autoFollowers'
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks'

import { Banner } from './Banner'
import { FAQ } from './FAQ'
import { FollowerPlan } from './FollowerPlan'
import { InstagramAccount } from './InstagramAccount'
import { PaymentGateways } from './PaymentGateways'
import { Statics } from './Statics'
import { Story } from './Story'
import { SubscriptionPlan } from './SubscriptionPlan'
import { WhyBuy } from './WhyBuy'

function saveScrollPosition(
  url: string,
  scrollPos: number,
  savePosition: (url: string, pos: number) => void,
) {
  savePosition(url, scrollPos)
}

function restoreScrollPosition(url: string, pos: number) {
  if (pos) {
    window.scrollTo(0, pos)
  }
}

const BuyAutoInstagramLikes: React.VFC = () => {
  let scroller = Scroll.scroller
  let scroll = Scroll.animateScroll
  let Element = Scroll.Element

  const dispatch = useAppDispatch()
  const { plan } = useAppSelector((state) => state.autoFollowers)
  const { subscriptionPlan } = useAppSelector((state) => state.autoFollowers)
  const { instagramAccount } = useAppSelector((state) => state.autoFollowers)
  const { price } = useAppSelector((state) => state.autoFollowers)
  const { scrollPosition } = useAppSelector((state) => state.autoFollowers)

  const updatePosition = (url: string, pos: number) => {
    dispatch(setScrollPosition(pos))
  }

  const onFollowerPlanSelected = (item) => {
    dispatch(setPlan(item))
  }

  const onSubscriptionPlanSelected = (item) => {
    dispatch(setSubscriptionPlan(item))
  }

  const onSubmitClicked = (name) => {}

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      var shouldScrollRestore = true

      const onBeforeUnload = (event: Event) => {
        const scrollPos = window.scrollY
        saveScrollPosition(Router.asPath, scrollPos, updatePosition)
        event.preventDefault()
        // delete event['returnValue']
      }

      const onRouteChangeStart = () => {
        const scrollPos = window.scrollY
        saveScrollPosition(Router.asPath, scrollPos, updatePosition)
      }

      const onRouteChangeComplete = (url: string) => {
        if (shouldScrollRestore) {
          shouldScrollRestore = false
          restoreScrollPosition(url, scrollPosition)
        }
      }
      window.addEventListener('beforeunload', onBeforeUnload)
      Router.events.on('routeChangeStart', onRouteChangeStart)
      Router.events.on('routeChangeComplete', onRouteChangeComplete)
      Router.beforePopState(() => {
        shouldScrollRestore = true
        return true
      })

      return () => {
        window.removeEventListener('beforeunload', onBeforeUnload)
        Router.events.off('routeChangeStart', onRouteChangeStart)
        Router.events.off('routeChangeComplete', onRouteChangeComplete)
        Router.beforePopState(() => true)
      }
    }
  }, [])
  return (
    <>
      <Header />
      <main
        className="flex flex-1 flex-col w-full top-0 min-h-screen p-0"
        id="ContainerElementID"
      >
        <Banner />
        <div className="flex flex-col flex-wrap w-full p-3 bg-[#222232]">
          <div className="flex flex-col flex-wrap w-full overflow-hidden rounded-2xl bg-[#222232] bg-opacity-50 md:bg-[transparent]">
            <FollowerPlan
              planSelected={(item) => onFollowerPlanSelected(item)}
            />
            <SubscriptionPlan
              planSelected={(item) => onSubscriptionPlanSelected(item)}
            />
            <InstagramAccount submitClicked={(name) => onSubmitClicked(name)} />
            <PaymentGateways price={0} />
            <div className="w-full h-16"></div>
            <Statics
              providedFollowers={'505,604,653'}
              deliveredLikes={'65,205,708'}
              repeatedCustomers={'25,370,876'}
            />
            <Story />
            <WhyBuy />
            <FAQ />
          </div>
        </div>
        <div className="h-32 bg-[#222232]"></div>
      </main>
      <Footer />
    </>
  )
}
export default BuyAutoInstagramLikes
