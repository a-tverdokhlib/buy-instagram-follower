import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import { lazy, Suspense, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

import AutoFollowers from '@/components/admin/AutoFollowers'
import AutoPacks from '@/components/admin/AutoPacks'
import BlockCountries from '@/components/admin/BlockCountries'
import BlockEmails from '@/components/admin/BlockEmails'
import BlockUsers from '@/components/admin/BlockUsers'
import Blog from '@/components/admin/Blog'
import Category from '@/components/admin/Category'
import Customers from '@/components/admin/Customers'
import FAQ from '@/components/admin/FAQ'
import GrowthPacks from '@/components/admin/GrowthPacks'
import Language from '@/components/admin/Language'
import Module from '@/components/admin/Module'
import Orders from '@/components/admin/Orders'
import OtherSerivces from '@/components/admin/OtherServices'
import PackageFAQ from '@/components/admin/PackageFAQ'
import Providers from '@/components/admin/Providers'
import Reviews from '@/components/admin/Reviews'
import Services from '@/components/admin/Services'
import Settings from '@/components/admin/Settings'
import SideMenu from '@/components/admin/SideMenu'
import Socials from '@/components/admin/Socials'
import Statistics from '@/components/admin/Statistics'
import SubscriptionOrders from '@/components/admin/SubscriptionOrders'
import ThemeCustomizer from '@/components/admin/ThemeCustomizer'
import { setThemeMode } from '@/redux/reducers/admin/panel'
import {
  setSidebarColor,
  setSideMenuLayout,
} from '@/redux/reducers/admin/sideMenu'
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks'
import { userService } from '@/services/user'

const Panel: React.VFC = () => {
  const dispatch = useAppDispatch()
  const { themeMode } = useAppSelector((state) => state.adminPanel)
  const { layout } = useAppSelector((state) => state.sideMenu)
  const { sidebarColor } = useAppSelector((state) => state.sideMenu)

  const [cookie, setCookie] = useCookies(['user'])
  const [mounted, setMounted] = useState(false)
  const [themeCustomizerShown, setThemeCustomizerShown] = useState(false)
  const router = useRouter()
  const onCloseThemeCustomizer = () => {
    setThemeCustomizerShown(false)
  }
  const getDynamicComponent = (name) => {
    // const component = dynamic<StatisticsProps>(() =>
    //   import(`@/components/admin/${name}`).then((mod) => mod.default),
    // )
    switch (name) {
      case 'statistics':
        return <Statistics />
      case 'orders':
        return <Orders />
      case 'auto-followers':
        return <AutoFollowers />
      case 'subscription-orders':
        return <SubscriptionOrders />
      case 'socials':
        return <Socials />
      case 'block-emails':
        return <BlockEmails />
      case 'block-countries':
        return <BlockCountries />
      case 'block-users':
        return <BlockUsers />
      case 'category':
        return <Category />
      case 'reviews':
        return <Reviews />
      case 'package-faq':
        return <PackageFAQ />
      case 'services':
        return <Services />
      case 'growth-packs':
        return <GrowthPacks />
      case 'auto-packs':
        return <AutoPacks />
      case 'other-services':
        return <OtherSerivces />
      case 'customers':
        return <Customers />
      case 'settings':
        return <Settings />
      case 'blog':
        return <Blog />
      case 'faq':
        return <FAQ />
      case 'provider':
        return <Providers />
      case 'language':
        return <Language />
      case 'module':
        return <Module />
      case 'theme-customizer':
        return <ThemeCustomizer onClose={onCloseThemeCustomizer} />
      default:
        return <Statistics />
    }
  }
  const switchComponent = (param) => {
    return getDynamicComponent(param)
  }

  const onEvent = (e) => {
    switch (e) {
      case 'theme-customizer':
        setThemeCustomizerShown(!themeCustomizerShown)
        break
      case 'menu-click':
        dispatch(
          setSideMenuLayout(layout === 'expanded' ? 'collapsed' : 'expanded'),
        )
        break
    }
    console.log('Event Name =>', e)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    console.log('Path changed =>', router.query)
  }, [router.query])

  return mounted ? (
    <>
      <Head>
        <title>
          Buy Instagram Followers and Likes starting at $0.89 - goread.io
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col md:flex-row flex-1">
        <SideMenu
          mode={layout}
          color={sidebarColor}
          selectedTitle=""
          onEvent={(e) => onEvent(e)}
        />
        <main
          className={
            layout === 'expanded'
              ? 'flex-1 md:ml-[270px] text-white bg-[#f5f7fb]'
              : 'flex-1 md:ml-[80px] text-white bg-[#f5f7fb]'
          }
        >
          {switchComponent(router.query['p'])}
        </main>
        {themeCustomizerShown ? (
          <ThemeCustomizer onClose={onCloseThemeCustomizer} />
        ) : (
          <></>
        )}
      </div>
    </>
  ) : (
    <></>
  )
}
export default Panel
