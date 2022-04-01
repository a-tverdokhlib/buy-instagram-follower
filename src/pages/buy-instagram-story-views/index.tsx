import Router, { NextRouter } from 'next/router'
import { useEffect } from 'react'
import * as Scroll from 'react-scroll'
import { animateScroll as scroll, Element, scroller } from 'react-scroll'

import { Banner } from '@/components/Buy-Instagram-Story-Views/Banner'
import { Feedback } from '@/components/Buy-Instagram-Story-Views/Feedback'
import { PlanConfirmation } from '@/components/Buy-Instagram-Story-Views/PlanConfirmation'
import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import { HowTo } from '@/components/organisms/HowTo'
import { setPlan, setScrollPosition } from '@/redux/reducers/storyViews'
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

const BuyInstagramStoryViews: React.VFC = () => {
  let scroller = Scroll.scroller
  let scroll = Scroll.animateScroll
  let Element = Scroll.Element

  const dispatch = useAppDispatch()
  const { plan } = useAppSelector((state) => state.storyViews)
  const { scrollPosition } = useAppSelector((state) => state.storyViews)

  const updatePosition = (url: string, pos: number) => {
    dispatch(setScrollPosition(pos))
  }

  const onPlanSelected = (item) => {
    dispatch(setPlan(item))
    setTimeout(() => {
      scroller.scrollTo('myScrollToElement', {
        duration: 1500,
        delay: 100,
        smooth: true,
        containerId: '',
        offset: -70,
      })
    }, 100)
  }

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
        <Banner onPlanSelected={(item) => onPlanSelected(item)} />
        <Element name="myScrollToElement">
          <PlanConfirmation plan={plan} />
        </Element>
        <HowTo />
        <Feedback />
        <div className="h-32 bg-[#222232]"></div>
      </main>
      <Footer />
    </>
  )
}
export default BuyInstagramStoryViews
export async function getStaticProps() {
  return { props: {} }
}
