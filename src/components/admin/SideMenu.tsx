import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

import {
  setSidebarColor,
  setSideMenuLayout,
} from '@/redux/reducers/admin/sideMenu'
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks'
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
  const dispatch = useAppDispatch()
  const { themeMode } = useAppSelector((state) => state.adminPanel)
  const { layout } = useAppSelector((state) => state.sideMenu)
  const { sidebarColor } = useAppSelector((state) => state.sideMenu)
  const [sideMenuAutoHide, setSideMenuAutoHide] = useState(false)

  const handleChage = () => {}

  const signout = () => {
    setCookie('user', null, {
      path: '/',
      maxAge: -1, // Expires after 1hr
      sameSite: true,
    })
    userService.logout()
  }

  const onMenuClick = () => {
    props.onEvent('menu-click')
  }

  const bgColor = props.color === 'light' ? 'bg-fuchsia-100' : 'bg-gray-700'
  const bgColorZeroOpacity =
    props.color === 'light' ? 'bg-fuchsia-100' : 'bg-[#161515]'
  const textColor = props.color === 'light' ? 'text-gray-800' : 'text-gray-300'
  const borderColor =
    props.color === 'light' ? 'border-gray-300' : 'border-gray-900'
  const menuItemClick = (item) => {
    if (item.href !== '') {
      console.log('Screen Width =>', window.innerWidth)
      if (window.innerWidth < 1024) dispatch(setSideMenuLayout('expanded'))
      router.push(`/admin/${item.href}`, undefined, {
        shallow: true,
      })
    } else {
      props.onEvent(item.eventName)
    }
  }
  return (
    <aside
      className={
        props.mode === 'expanded'
          ? `admin-sidenav fixed w-full lg:visible lg:w-[80px] xl:w-[270px] ${bgColor} overflow-visible z-[99]`
          : `admin-sidenav fixed w-full lg:visible lg:w-[80px] ${bgColor} overflow-visible z-[99]`
      }
    >
      <div
        // style={style2}
        className={
          props.mode === 'expanded'
            ? 'flex fixed items-center z-50 top-0 w-full lg:visible lg:w-[80px] xl:w-[270px] p-2 bg-[#343444] hover:shadow-lg hover:shadow-cyan-700/50  transition-all duration-300 rounded-xl'
            : 'flex fixed items-center z-50 top-0 w-full lg:visible lg:w-[80px] p-2 bg-[#343444] hover:shadow-lg hover:shadow-cyan-700/50  transition-all duration-300 rounded-xl'
        }
      >
        <div
          onClick={onMenuClick}
          className="flex menu-icon p-[10px] lg:hidden"
        >
          <svg
            className="h-6 w-6 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="flex items-center relative w-[120px] h-[20px] ls:h-[45px] ls:w-full ls:full hover:cursor-pointer">
          <div
            className={
              props.mode === 'expanded'
                ? "flex mx-auto bg-[url('/img/admin/logo.png')] bg-cover w-[120px] h-[22px] ls:w-[180px] ls:h-[32px] lg:h-[38px] lg:bg-[url('/img/admin/small-logo.png')] lg:w-[40px] xl:bg-[url('/img/admin/logo.png')] xl:w-[200px]"
                : "flex mx-auto bg-[url('/img/admin/logo.png')] bg-cover w-[120px] h-[22px] ls:w-[180px] ls:h-[32px] lg:h-[38px] lg:bg-[url('/img/admin/small-logo.png')] lg:w-[40px] xl:bg-[url('/img/admin/logo.png')] xl:w-[40px]"
            }
          ></div>
        </div>
        <div className="flex w-20 ml-auto ls:w-24 items-center lg:hidden">
          <div className="flex w-6 h-4 bg-[url('/img/admin/flags/gb.svg')] bg-cover"></div>
          <div className="flex ml-1 ls:ml-4 w-10 h-10 bg-[url('/img/admin/user-avatar.png')] bg-cover"></div>
        </div>
      </div>
      <nav
        className={
          props.mode === 'expanded'
            ? `admin-sidenav-wrapper hidden lg:block mt-[65px] w-full overflow-y-auto h-screen ${bgColor} ${borderColor} border-r-[2px] border-opacity-30`
            : `admin-sidenav-wrapper mt-[65px] w-full h-screen overflow-y-auto ${bgColor} ${borderColor} border-r-[2px] border-opacity-30`
        }
      >
        <ul>
          {menuItems.map(({ subMenus, title }) => (
            <li className="m-2" key={title}>
              {props.mode === 'expanded' ? (
                <span
                  className={`hidden xl:flex p-2 ${bgColor} ${textColor} rounded cursor-pointer font-bold`}
                >
                  {title}
                </span>
              ) : (
                <span
                  className={`flex p-2 lg:hidden ${bgColor} ${textColor} rounded cursor-pointer font-bold`}
                >
                  {title}
                </span>
              )}
              <ul>
                {subMenus.map((item, id) => {
                  return (
                    <li
                      key={id}
                      onClick={() => {
                        menuItemClick(item)
                      }}
                    >
                      <div
                        className={
                          props.mode === 'expanded'
                            ? `flex p-2 ${bgColor} ${textColor} rounded hover:bg-fuchsia-400 cursor-pointer  hover:translate-x-1 hover:shadow-lg hover:shadow-cyan-700/50  transition-all duration-300`
                            : `flex p-2 ${bgColor} rounded hover:bg-fuchsia-400 cursor-pointer  hover:translate-x-1 hover:shadow-lg hover:shadow-cyan-700/50  transition-all duration-300`
                        }
                        title={item.title}
                      >
                        <div className="w-full flex items-center">
                          <svg
                            className={
                              props.mode === 'expanded'
                                ? 'h-8 w-8 xl:h-5 xl:w-5 text-red-500 mt-[2px] mr-1'
                                : 'h-8 w-8 xl:h-8 xl:w-8 text-red-500 mt-[2px] mr-1'
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
                          <span
                            className={
                              props.mode === 'expanded'
                                ? `hidden xl:flex ${textColor}`
                                : `flex lg:hidden ${textColor}`
                            }
                          >
                            {item.title}
                          </span>
                        </div>
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
            ? `fixed bottom-0 w-full hidden lg:block lg:w-[80px] xl:w-[270px] ${bgColorZeroOpacity} p-2 cursor-pointer`
            : `flex fixed bottom-0 w-full lg:w-[80px] ${bgColorZeroOpacity} p-2 cursor-pointer`
        }
      >
        <div
          className={
            props.color === 'light'
              ? 'w-full justify-center items-center bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer  hover:translate-x-1 hover:shadow-lg hover:shadow-cyan-700/50  transition-all duration-300'
              : 'w-full justify-center items-center rounded hover:bg-fuchsia-400 cursor-pointer  hover:translate-x-1 hover:shadow-lg hover:shadow-cyan-700/50  transition-all duration-300'
          }
        >
          <span
            className={`flex p-2 w-full h-10 items-center rounded ${textColor}`}
          >
            <svg
              className={
                props.mode === 'expanded'
                  ? 'h-5 w-5 text-red-500 mt-[2px] mr-1'
                  : 'h-8 w-8 text-red-500 mt-[2px] mr-1'
              }
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
            <span
              className={
                props.mode === 'collapsed' ? 'flex lg:hidden' : 'hidden xl:flex'
              }
            >
              Logout
            </span>
          </span>
        </div>
      </div>
    </aside>
  )
}
export default SideMenu
