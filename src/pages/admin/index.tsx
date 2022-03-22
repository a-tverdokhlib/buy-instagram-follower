import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

import { userService } from '@/services/user'

import Panel from './panel'

const Admin: React.VFC = () => {
  const router = useRouter()
  const user = userService.userValue
  const [authorized, setAuthorized] = useState(false)
  const [cookie, setCookie] = useCookies(['user'])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // on initial load - run auth check
    authCheck(router.asPath)

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false)
    router.events.on('routeChangeStart', hideContent)

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck)

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent)
      router.events.off('routeChangeComplete', authCheck)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function authCheck(url) {
    const publicPaths = [
      '/admin',
      '/admin/statistics',
      '/admin/orders',
      '/admin/auto-followers',
      '/admin/subscription-orders',
      '/admin/socials',
      '/admin/block-emails',
      '/admin/block-countries',
      '/admin/block-users',
      '/admin/category',
      '/admin/reviews',
      '/admin/package-faq',
      '/admin/services',
      '/admin/subscription-packs',
      '/admin/auto-packs',
      '/admin/other-services',
      '/admin/customers',
      '/admin/settings',
      '/admin/blog',
      '/admin/faq',
      '/admin/provider',
      '/admin/language',
      '/admin/module',
      '/admin/theme-customizer',
    ]
    const path = url.split('?')[0]
    if (!userService.userValue || !publicPaths.includes(path)) {
      router.push({
        pathname: '/admin/auth',
      })
    } else {
      setAuthorized(true)
    }
  }

  if (user) {
    return mounted === true ? <Panel /> : <></>
  }
  return <></>
}

export default Admin
