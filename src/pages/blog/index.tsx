import Router, { NextRouter, useRouter } from 'next/router'
import { useEffect } from 'react'

import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import { setScrollPosition } from '@/redux/reducers/blog'
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks'

import { Banner } from './Banner'
import { Blogs } from './Blogs'

function saveScrollPosition(
  url: string,
  scrollPos: number,
  savePosition: (url: string, pos: number) => void,
) {
  console.log('Store Position => ', scrollPos)
  savePosition(url, scrollPos)
}

const blogs = [
  {
    id: 0,
    title: 'Amazing Ways to Make Your Instagram Photos Stand Out',
    imgUrl: '/img/goreadstory.png',
    contents: [
      {
        subTitle: 'SubTitle',
        description: 'Sub Content',
      },
      {
        subTitle: 'SubTitle',
        description: 'Sub Content',
      },
      {
        subTitle: 'SubTitle',
        description: 'Sub Content',
      },
    ],
  },
  {
    id: 1,
    title: 'How Is Buying Instagram Followers UK Beneficial For You?',
    imgUrl: '/img/goreadstory.png',
    contents: [
      {
        subTitle: 'SubTitle',
        description: 'Sub Content',
      },
      {
        subTitle: 'SubTitle',
        description: 'Sub Content',
      },
      {
        subTitle: 'SubTitle',
        description: 'Sub Content',
      },
    ],
  },
  {
    id: 2,
    title:
      'How to make your business stand out from your competitors on Insta...',
    imgUrl: '/img/goreadstory.png',
    contents: [
      {
        subTitle: 'SubTitle',
        description: 'Sub Content',
      },
      {
        subTitle: 'SubTitle',
        description: 'Sub Content',
      },
      {
        subTitle: 'SubTitle',
        description: 'Sub Content',
      },
    ],
  },
  {
    id: 3,
    title:
      'How to make your business stand out from your competitors on Insta...',
    imgUrl: '/img/goreadstory.png',
    contents: [
      {
        subTitle: 'SubTitle',
        description: 'Sub Content',
      },
      {
        subTitle: 'SubTitle',
        description: 'Sub Content',
      },
      {
        subTitle: 'SubTitle',
        description: 'Sub Content',
      },
    ],
  },
  {
    id: 4,
    title:
      'How to make your business stand out from your competitors on Insta...',
    imgUrl: '/img/goreadstory.png',
    contents: [
      {
        subTitle: 'SubTitle',
        description: 'Sub Content',
      },
      {
        subTitle: 'SubTitle',
        description: 'Sub Content',
      },
      {
        subTitle: 'SubTitle',
        description: 'Sub Content',
      },
    ],
  },
  {
    id: 5,
    title:
      'How to make your business stand out from your competitors on Insta...',
    imgUrl: '/img/goreadstory.png',
    contents: [
      {
        subTitle: 'SubTitle',
        description: 'Sub Content',
      },
      {
        subTitle: 'SubTitle',
        description: 'Sub Content',
      },
      {
        subTitle: 'SubTitle',
        description: 'Sub Content',
      },
    ],
  },
]
function restoreScrollPosition(url: string, pos: number) {
  console.log('Restore Position => ', pos)
  if (pos) {
    window.scrollTo(0, pos)
  }
}
const Blog: React.VFC = () => {
  const dispatch = useAppDispatch()

  const { pathname } = useRouter()
  const { scrollPosition } = useAppSelector((state) => state.blog)

  let shouldScrollRestore = true

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
      >
        <Banner />
        <div className="flex flex-col flex-wrap w-full p-3 bg-[#222232]">
          <div className="flex flex-col flex-wrap w-full overflow-hidden  bg-[#222232] bg-opacity-50 md:bg-[transparent]">
            <Blogs blogs={blogs} />
          </div>
        </div>
        <div className="h-32 bg-[#222232]"></div>
      </main>
      <Footer />
    </>
  )
}
export default Blog
