import Router, { NextRouter, useRouter } from 'next/router'
import { useEffect } from 'react'

import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import { setScrollPosition } from '@/redux/reducers/blog'
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks'

function saveScrollPosition(
  url: string,
  scrollPos: number,
  savePosition: (url: string, pos: number) => void,
) {
  console.log('Store Position => ', scrollPos)
  savePosition(url, scrollPos)
}

function restoreScrollPosition(url: string, pos: number) {
  console.log('Restore Position => ', pos)
  if (pos) {
    window.scrollTo(0, pos)
  }
}
const Blog: React.VFC = () => {
  var shouldScrollRestore = true

  const { pathname } = useRouter()
  const dispatch = useAppDispatch()
  const { scrollPosition } = useAppSelector((state) => state.blog)
  const updatePosition = (url: string, pos: number) => {
    dispatch(setScrollPosition(pos))
  }
  useEffect(() => {
    onRouteChangeComplete(pathname)
  }, [pathname])
  const onRouteChangeComplete = (url: string) => {
    console.log('Hook onRouteChangeComplete')
    if (shouldScrollRestore) {
      shouldScrollRestore = false
      restoreScrollPosition(url, scrollPosition)
    }
  }
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      const onBeforeUnload = (event: Event) => {
        console.log('Hook onBeforeUnload')
        const scrollPos = window.scrollY
        saveScrollPosition(Router.asPath, scrollPos, updatePosition)
        event.preventDefault()
        // delete event['returnValue']
      }

      const onRouteChangeStart = () => {
        console.log('Hook onRouteChangeStart')
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
        id="content"
        className="flex flex-1 flex-col w-full top-0 min-h-screen p-0"
      ></main>
      <Footer />
    </>
  )
}
export default Blog
