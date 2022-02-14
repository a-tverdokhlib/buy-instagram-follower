import dynamic from 'next/dynamic'
import Head from 'next/head'
import React, { useState } from 'react'

// import { Image } from '@/components/atoms/Image'
import { MySwipper } from '@/components/atoms/MySwipper'
import Chat from '@/components/organisms/Chat'
import { Gap } from '@/components/organisms/Gap'
import { Header } from '@/components/organisms/Header'
import { HowTo } from '@/components/organisms/HowTo'
import { Idea } from '@/components/organisms/Idea'
import { Products } from '@/components/organisms/Products'
import { Reputation } from '@/components/organisms/Reputation'
import { Services } from '@/components/organisms/Services'
import type { SideProps } from '@/components/organisms/SideNavbar'
import styles from '@/styles/css/Home.module.css'

const SideNavbar = dynamic<SideProps>(() =>
  import('../components/organisms/SideNavbar').then((mod) => mod.SideNavbar),
)

export default function Home() {
  const [navShown, setNavShown] = useState(false)

  const menuClick = () => {
    setNavShown(!navShown)
  }
  return (
    <div className="">
      <Head>
        <title>
          Buy Instagram Followers and Likes starting at $0.89 - goread.io
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header menuClick={menuClick} navShown={() => navShown} />
      {navShown ? <SideNavbar>abc</SideNavbar> : null}

      <main className="flex flex-1 flex-col w-full top-0 min-h-screen p-0">
        <div className="flex flex-col w-full min-h-screen items-center justify-center flex-wrap md:flex-row md:flex-nowrap md:space-x-2 bg-[#222232]">
          <div className="flex flex-col pt-20 md:pt-0 px-10 z-[20]">
            <div className="flex-none md:w-5/12 md:h-auto">
              <h1 className="text-4xl font-medium max-w-full flex flex-wrap">
                <span className="text-white">Super Real Instagram </span>
                <span>
                  <span className="text-white">
                    followers, likes, power likes, views, comments,&nbsp;
                  </span>

                  <br></br>
                  <span className="whitespace-nowrap text-white">
                    <span className="text-white">saves&nbsp;</span>
                    <span className="whitespace-nowrap">in Minutes</span>
                  </span>
                </span>
              </h1>
            </div>
            <p className="flex md:w-5/12 text-white">
              Instagram is one of the best social media platforms to reach
              millions of followers. Buying active and real Instagram increase
              your network of followers naturally. Not only this but you will
              also save your precious time and get the job done in an effortless
              manner.
            </p>
            <div className="flex flex-wrap items-center mt-10 px-2 flex-col space-y-2 md:flex-row md:items-center md:space-x-2 md:space-y-0 lg:px-0">
              <button className="justify-center min-w-[250px] sm:min-w-[60%] md:min-w-min max-w-sm text-[#14161B] px-4 py-3 rounded-3xl gradient-btn">
                <span className="font-bold">Buy Instagram Followers</span>
              </button>
              <button className="justify-center min-w-[250px] sm:min-w-[60%] md:min-w-min max-w-sm text-[#14161B] px-4 py-3 rounded-3xl gradient-btn">
                <span className="font-bold">Buy Instagram Likes</span>
              </button>
              <button className="justify-center min-w-[250px] sm:min-w-[60%] md:min-w-min max-w-sm text-[#14161B] px-4 py-3 rounded-3xl gradient-btn">
                <span className="font-bold">Buy Instagram Views</span>
              </button>
            </div>
            <br></br>
          </div>
          <div className="hidden md:flex md:w-2/5 justify-center bannerimg right-10 mt-16">
            <div className="w-full">
              <img
                // className=""
                // className="absolute"
                src="/img/header_top.png"
                alt="bannerImage"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
        <Gap />
        <Idea />
        <Services />
        <HowTo />
        <Reputation />
        <Products />
        <Chat />
      </main>
      <footer className={styles['footer']}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
        </a>
      </footer>
    </div>
  )
}
