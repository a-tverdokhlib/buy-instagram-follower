import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

import { userService } from '@/services/user'
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
        href: '',
        title: 'Theme Customizer',
        eventName: 'theme-customizer',
      },
      {
        href: '?p=documentation',
        title: 'Documentation',
      },
    ],
  },
]
type Props = {
  readonly selectedTitle: string
  readonly mode: string
  readonly color: string
  readonly onEvent: (e) => void
}
const SideMenu: React.VFC<Props> = (props) => {
  const [cookie, setCookie] = useCookies(['user'])
  const router = useRouter()
  const user = userService.userValue
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

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

    function handleResize() {
      // Set window width/height to state
      const calcWidth = screen.width

      const calcedWidth =
        props.mode === 'expanded' ? (calcWidth < 768 ? calcWidth : 270) : 80
      console.log('Window Size =>', calcedWidth)
      setWindowSize({
        width: calcedWidth,
        height: window.innerHeight,
      })
      console.log('Mode=>', props.mode)
      console.log('Window Size=>', calcedWidth)
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

    if (props.mode === 'collapsed')
      return { width: 80, height: windowSize.height }

    return windowSize
  }

  const handleChage = () => {}

  const onMenuClick = () => {
    props.onEvent('menu-click')
  }

  const style1 = {
    width: size.width,
    height: size.height - 10,
  }
  const style2 = { width: size.width, height: 'auto' }
  const bgColor =
    props.color === 'light' ? 'bg-fuchsia-100' : 'bg-gray-700 bg-opacity-10'
  const textColor = props.color === 'light' ? 'text-gray-800' : 'text-gray-300'
  const borderColor =
    props.color === 'light' ? 'border-gray-300' : 'border-gray-900'
  return (
    <aside
      className={
        props.mode === 'expanded'
          ? `admin-sidenav fixed ${bgColor} w-full md:w-[270px] overflow-visible z-[99]`
          : `admin-sidenav fixed ${bgColor} w-[80px] z-[99] overflow-visible`
      }
      style={style1}
    >
      <div
        style={style2}
        className={
          props.mode === 'expanded'
            ? 'flex fixed z-50 top-0 w-full md:w-[270px] p-2 bg-[#343444] hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-700/50  transition-all duration-300 rounded-xl'
            : 'flex fixed z-50 top-0 w-[80px] p-2 bg-[#343444] hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-700/50  transition-all duration-300 rounded-xl'
        }
      >
        <div
          onClick={onMenuClick}
          className="w-full relative md:w-[254px] h-[45px] hover:cursor-pointer"
        >
          <Image
            src={
              props.mode === 'expanded'
                ? '/img/admin/logo.png'
                : '/img/admin/small-logo.png'
            }
            alt="Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <nav
        className={
          props.mode === 'expanded'
            ? `admin-sidenav-wrapper mt-[65px] w-full md:w-[270px] overflow-y-auto h-screen ${bgColor} ${borderColor} border-r-[2px] border-opacity-30`
            : `admin-sidenav-wrapper mt-[65px] w-full h-screen overflow-y-auto ${bgColor} ${borderColor}`
        }
      >
        <ul>
          {menuItems.map(({ subMenus, title }) => (
            <li className="m-2" key={title}>
              {props.mode === 'expanded' ? (
                <span
                  className={`flex p-2 ${bgColor} ${textColor} rounded cursor-pointer font-bold`}
                >
                  {title}
                </span>
              ) : (
                <></>
              )}
              <ul>
                {subMenus.map((item, id) => {
                  return (
                    <li
                      key={id}
                      onClick={() => {
                        item.href !== ''
                          ? router.push(`/admin/${item.href}`, undefined, {
                              shallow: true,
                            })
                          : props.onEvent(item.eventName)
                      }}
                    >
                      <div
                        className={
                          props.mode === 'expanded'
                            ? `flex p-2 ${bgColor} ${textColor} rounded hover:bg-fuchsia-400 cursor-pointer  hover:translate-x-1 hover:shadow-lg hover:shadow-cyan-700/50  transition-all duration-300`
                            : `flex p-2 ${bgColor} bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer  hover:translate-x-1 hover:shadow-lg hover:shadow-cyan-700/50  transition-all duration-300`
                        }
                        title={item.title}
                      >
                        <div className="w-full flex">
                          <svg
                            className={
                              props.mode === 'expanded'
                                ? 'h-5 w-5 text-red-500 mt-[2px] mr-1'
                                : 'h-8 w-8 text-red-500 mt-[2px] mr-1'
                            }
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

                          {props.mode === 'expanded' ? item.title : ''}
                        </div>
                        {/* <div className="tooltip">
                          {props.mode === 'collapsed' ? (
                            <span className="z-[10] tooltiptext">
                              Tooltip text
                            </span>
                          ) : (
                            <></>
                          )}
                        </div> */}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}
        </ul>
        <div className="w-full h-32"></div>
      </nav>
      <div
        onClick={() => signout()}
        className={
          props.mode === 'expanded'
            ? 'flex fixed bottom-0 w-full md:w-[270px] bg-fuchsia-100 p-2 cursor-pointer'
            : 'flex fixed bottom-0 w-[80px] bg-fuchsia-100 p-2 cursor-pointer'
        }
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
            {props.mode === 'expanded' ? <span>Logout</span> : <></>}
          </span>
        </div>
      </div>
    </aside>
  )
}
export default SideMenu
