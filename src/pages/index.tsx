import Router, { NextRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { Banner } from '@/components/organisms/Banner'
import Chat from '@/components/organisms/Chat'
import { Footer } from '@/components/organisms/Footer'
import { Gap } from '@/components/organisms/Gap'
import { Header } from '@/components/organisms/Header'
import { HowTo } from '@/components/organisms/HowTo'
import { Idea } from '@/components/organisms/Idea'
import { Products } from '@/components/organisms/Products'
import { Reputation } from '@/components/organisms/Reputation'
import { Services } from '@/components/organisms/Services'

function saveScrollPosition(
  url: string,
  scrollPos: number,
  savePosition: (url: string, pos: number) => void,
) {
  savePosition(url, scrollPos)
}

function restoreScrollPosition(url: string) {
  const position = parseInt(localStorage.getItem('/home') as string)
  console.log('Position to Restore => ', position)
  if (position) {
    window.scrollTo(0, position)
  }
}

export default function Home() {
  const updatePosition = (url: string, pos: number) => {
    console.log('Position to Save => ', pos.toString())
    localStorage.setItem('/home', pos.toString())
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
          restoreScrollPosition(url)
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
        <Banner />
        <Gap />
        <Idea />
        <Services />
        <HowTo />
        <Reputation />
        <Products />
        {/* <Chat /> */}
      </main>
      <Footer />
    </>
  )
}
