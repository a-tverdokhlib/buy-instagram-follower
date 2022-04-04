import Router, { NextRouter, useRouter } from 'next/router'
import { useEffect } from 'react'
import * as Scroll from 'react-scroll'

import { Banner } from '@/components/Buy-Auto-Instagram-Followers/Banner'
import { FAQ } from '@/components/Buy-Auto-Instagram-Followers/FAQ'
import { FollowerPlan } from '@/components/Buy-Auto-Instagram-Followers/FollowerPlan'
import { InstagramAccount } from '@/components/Buy-Auto-Instagram-Followers/InstagramAccount'
import { PaymentGateways } from '@/components/Buy-Auto-Instagram-Followers/PaymentGateways'
import { Statics } from '@/components/Buy-Auto-Instagram-Followers/Statics'
import { Story } from '@/components/Buy-Auto-Instagram-Followers/Story'
import { SubscriptionPlan } from '@/components/Buy-Auto-Instagram-Followers/SubscriptionPlan'
import { WhichOne } from '@/components/Buy-Auto-Instagram-Followers/WhichOne'
import { WhyBuy } from '@/components/Buy-Auto-Instagram-Followers/WhyBuy'
import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import {
  setInstagramAccount,
  setPlan,
  setPrice,
  setScrollPosition,
  setSubscriptionPlan,
} from '@/redux/reducers/autoFollowers'
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks'

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

const BuyAutoInstagramFollowers: React.VFC = (props: any) => {
  let scroller = Scroll.scroller
  let scroll = Scroll.animateScroll
  let Element = Scroll.Element

  const { pathname } = useRouter()
  useEffect(() => {
    onRouteChangeComplete(pathname)
  }, [pathname])

  const dispatch = useAppDispatch()
  var shouldScrollRestore = true

  const { plan } = useAppSelector((state) => state.autoFollowers)
  const { scrollPosition } = useAppSelector((state) => state.autoFollowers)
  const { subscriptionPlan } = useAppSelector((state) => state.autoFollowers)
  const { instagramAccount } = useAppSelector((state) => state.autoFollowers)
  const { price } = useAppSelector((state) => state.autoFollowers)

  const updatePosition = (url: string, pos: number) => {
    dispatch(setScrollPosition(pos))
  }

  const onFollowerPlanSelected = (item) => {
    dispatch(setPlan(item))
  }

  const onSubscriptionPlanSelected = (item) => {
    console.log('Sub =>', item)
    dispatch(setSubscriptionPlan(item))
  }

  const onSubmitClicked = (name) => {}
  const onRouteChangeComplete = (url: string) => {
    if (shouldScrollRestore) {
      shouldScrollRestore = false
      restoreScrollPosition(url, scrollPosition)
    }
  }
  useEffect(() => {
    if (Object.keys(plan).length === 0) {
      const al = [
        ...props.services.filter((item) => item.isMostPopular === true),
      ]
      if (al.length > 0) {
        dispatch(setPlan(al[0]))
      }
    }
  }, [])

  useEffect(() => {
    if (plan.variations) {
      const al = plan.variations.filter((item) => item.isDefaultActive === true)
      if (al.length > 0) {
        dispatch(setSubscriptionPlan(al[0]))
      }
    }
  }, [plan])
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
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
              services={props.services.filter((item) => item.isActive === true)}
              planSelected={(item) => onFollowerPlanSelected(item)}
              activePlan={plan}
            />
            <SubscriptionPlan
              plan={plan}
              activeSubscriptionPlan={subscriptionPlan}
              planSelected={(item) => onSubscriptionPlanSelected(item)}
            />
            <InstagramAccount submitClicked={(name) => onSubmitClicked(name)} />
            <PaymentGateways price={parseFloat(parseFloat(
                plan.price *
                  ((100 - plan.coupanDiscount) / 100),
              ).toFixed(2) * subscriptionPlan.variationDays).toFixed(2)} />
            <div className="w-full h-16"></div>
            <Statics
              providedFollowers={'505,604,653'}
              deliveredLikes={'65,205,708'}
              repeatedCustomers={'25,370,876'}
            />
            <Story />
            <WhyBuy />
            <FAQ />
            <WhichOne />
          </div>
        </div>
        <div className="h-32 bg-[#222232]"></div>
      </main>
      <Footer />
    </>
  )
}
export default BuyAutoInstagramFollowers
