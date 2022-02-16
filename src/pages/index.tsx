import React, { useState } from 'react'

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

export default function Home() {
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
        <Chat />
      </main>
      <Footer />
    </>
  )
}
