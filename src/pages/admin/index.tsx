import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { userService } from '@/services/user'

import Login from './auth'

const Admin: React.VFC = () => {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
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
    const publicPaths = ['/admin']
    const path = url.split('?')[0]
    if (!userService.userValue || !publicPaths.includes(path)) {
    } else {
      router.push({
        pathname: '/admin/Dashboard',
      })
    }
  }

  return (
    <div className="text-white">
      <Login />
    </div>
  )
}

export default Admin
