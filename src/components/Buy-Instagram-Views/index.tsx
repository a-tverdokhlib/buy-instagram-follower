import parse from 'html-react-parser'
import Router, { NextRouter } from 'next/router'
import { useEffect } from 'react'
import { renderToString } from 'react-dom/server'

import { Banner } from '@/components/Buy-Instagram-Views/Banner'
import { FAQ } from '@/components/Buy-Instagram-Views/FAQ'
import { Feedback } from '@/components/Buy-Instagram-Views/Feedback'
import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import { HowTo } from '@/components/organisms/HowTo'
import { setScrollPosition, setType } from '@/redux/reducers/views'
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

const BuyInstagramLikes: React.VFC = (props: any) => {
  const dispatch = useAppDispatch()
  const { viewType } = useAppSelector((state) => state.views)
  const { scrollPosition } = useAppSelector((state) => state.views)

  const onClickedHighQuality = () => {
    dispatch(setType('highQuality'))
  }
  const onClickedActiveViews = () => {
    dispatch(setType('active'))
  }

  const updatePosition = (url: string, pos: number) => {
    dispatch(setScrollPosition(pos))
  }

  const getViewType = () => {
    return viewType
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
      <main className="flex flex-1 flex-col w-full top-0 min-h-screen p-0">
        <Banner
          {...props}
          onClickedHighQuality={onClickedHighQuality}
          onClickedActiveViews={onClickedActiveViews}
          viewType={getViewType}
        />
        <div className="service-description flex flex-col flex-wrap w-full p-3 ls:p-5 items-center justify-center bg-[#222232] text-gray-400">
          {parse(props.category.content)}
        </div>
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
