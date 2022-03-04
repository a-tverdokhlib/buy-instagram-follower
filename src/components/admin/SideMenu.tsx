import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

import { userService } from '@/services/user'
type Props = {
  readonly selectedTitle: string
}
const menuItems = [
  {
    title: 'GENERAL',
    subMenus: [
      {
        href: '?p=statistics',
        title: 'Statistics',
      },
    ],
  },
  {
    title: 'SERVICE AREA',
    subMenus: [
      {
        href: '?p=orders',
        title: 'Order Logs',
      },
      {
        href: '?p=auto-followers',
        title: 'Auto Followers Order',
      },
      {
        href: '?p=subscription-orders',
        title: 'Subscription Order Logs',
      },
      {
        href: '?p=socials',
        title: 'Social network',
      },
      {
        href: '?p=block-emails',
        title: 'Blocks emails',
      },
      {
        href: '?p=block-countries',
        title: 'Block countries',
      },
      {
        href: '?p=block-users',
        title: 'Block Users',
      },
      {
        href: '?p=category',
        title: 'Category',
      },
      {
        href: '?p=reviews',
        title: 'Reviews',
      },
      {
        href: '?p=package-faq',
        title: 'Package FAQ',
      },
      {
        href: '?p=services',
        title: 'Services',
      },
      {
        href: '?p=growth-packs',
        title: 'Instagram Growth Packs',
      },
      {
        href: '?p=auto-packs',
        title: 'Autolikes Packs',
      },
      {
        href: '?p=other-services',
        title: 'Other Services',
      },
      {
        href: '?p=customers',
        title: 'Customers',
      },
    ],
  },
  {
    title: 'APPS SETTING',
    subMenus: [
      {
        href: '?p=settings',
        title: 'Settings',
      },
      {
        href: '?p=blog',
        title: 'Blog',
      },
      {
        href: '?p=faq',
        title: 'FAQ',
      },
      {
        href: '?p=provider',
        title: 'Provider',
      },
    ],
  },
  {
    title: 'OTHER',
    subMenus: [
      {
        href: '?p=language',
        title: 'Language',
      },
      {
        href: '?p=module',
        title: 'Module',
      },
      {
        href: '?p=theme-customizer',
        title: 'Theme Customizer',
      },
      {
        href: '?p=documentation',
        title: 'Documentation',
      },
    ],
  },
]

const SideMenu: React.VFC<Props> = (props) => {
  const [cookie, setCookie] = useCookies(['user'])
  const router = useRouter()
  const user = userService.userValue
  const size = useWindowSize()

  if (!user) {
    return <></>
  }

  const signout = () => {
    setCookie('user', null, {
      path: '/',
      maxAge: -1, // Expires after 1hr
      sameSite: true,
    })
    userService.logout()
  }

  // Hook
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    })

    function handleResize() {
      // Set window width/height to state
      const calcWidth = screen.width

      const calcedWidth = calcWidth < 768 ? calcWidth : 240
      console.log('Window Size =>', calcedWidth)
      setWindowSize({
        width: calcedWidth,
        height: window.innerHeight,
      })
    }

    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize

        // Add event listener
        window.addEventListener('resize', handleResize)

        // Call handler right away so state gets updated with initial window size
        handleResize()

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize)
      }
    }, []) // Empty array ensures that effect is only run on mount
    return windowSize
  }

  const handleChage = () => {}
  const style1 = { width: size.width, height: size.height - 10 }
  const style2 = { width: size.width, height: 'auto' }
  return (
    <aside
      className="admin-sidenav fixed bg-fuchsia-100 w-full md:w-60 overflow-y-scroll z-[99]"
      style={style1}
    >
      <div
        style={style2}
        className="flex fixed z-50 top-0 w-full md:w-60 p-2 bg-[#343444] hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-700/50  transition-all duration-300 rounded-xl"
      >
        <div className="w-full relative md:w-56 h-[45px]">
          <Image
            src="/img/admin/logo.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <nav className="mt-[68px] w-full md:w-60 h-screen">
        <ul>
          {menuItems.map(({ subMenus, title }) => (
            <li className="m-2" key={title}>
              <span
                className={
                  'flex p-2 bg-fuchsia-200 rounded cursor-pointer font-bold'
                }
              >
                {title}
              </span>
              <ul>
                {subMenus.map((item, id) => {
                  return (
                    <li
                      key={id}
                      onClick={() => {
                        router.push(`/admin/${item.href}`, undefined, {
                          shallow: true,
                        })
                      }}
                    >
                      <a
                        className={
                          item.title === props.selectedTitle
                            ? 'flex p-2 bg-fuchsia-400 rounded hover:bg-fuchsia-400 cursor-pointer  hover:translate-x-1 hover:shadow-lg hover:shadow-cyan-700/50  transition-all duration-300'
                            : 'flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer  hover:translate-x-1 hover:shadow-lg hover:shadow-cyan-700/50  transition-all duration-300'
                        }
                      >
                        <svg
                          className="h-5 w-5 text-red-500 mt-[2px] mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>

                        {item.title}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}
        </ul>
        <div className="w-full h-11"></div>
      </nav>
      <div
        onClick={() => signout()}
        className="flex fixed bottom-0 w-full md:w-60 bg-fuchsia-100 p-2 cursor-pointer"
      >
        <div className="w-full bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer  hover:translate-x-1 hover:shadow-lg hover:shadow-cyan-700/50  transition-all duration-300">
          <span className="flex p-2 w-full rounded">
            <svg
              className="h-5 w-5 text-red-500 mt-[2px] mr-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
              <path d="M7 6a7.75 7.75 0 1 0 10 0" />{' '}
              <line x1="12" y1="4" x2="12" y2="12" />
            </svg>
            <span>Logout</span>
          </span>
        </div>
      </div>
    </aside>
  )
}
export default SideMenu
