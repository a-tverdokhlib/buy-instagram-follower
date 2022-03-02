import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'

import { userService } from '@/services/user'
const menuItems = [
  {
    title: 'GENERAL',
    subMenus: [
      {
        href: '/admin/statistics',
        title: 'Statistics',
      },
    ],
  },
  {
    title: 'SERVICE AREA',
    subMenus: [
      {
        href: '/admin/order',
        title: 'Order Logs',
      },
      {
        href: '/admin/auto-followers',
        title: 'Auto Followers Order',
      },
      {
        href: '/admin/subscription-orders',
        title: 'Subscription Order Logs',
      },
      {
        href: '/admin/socials',
        title: 'Social network',
      },
      {
        href: '/admin/block-emails',
        title: 'Blocks emails',
      },
      {
        href: '/admin/block-countries',
        title: 'Block countries',
      },
      {
        href: '/admin/block-users',
        title: 'Block Users',
      },
      {
        href: '/admin/category',
        title: 'Category',
      },
      {
        href: '/admin/reviews',
        title: 'Reviews',
      },
      {
        href: '/admin/package-faq',
        title: 'Package FAQ',
      },
      {
        href: '/admin/services',
        title: 'Services',
      },
      {
        href: '/admin/growth-packs',
        title: 'Instagram Growth Packs',
      },
      {
        href: '/admin/auto-packs',
        title: 'Autolikes Packs',
      },
      {
        href: '/admin/other-services',
        title: 'Other Services',
      },
      {
        href: '/admin/customers',
        title: 'Customers',
      },
    ],
  },
  {
    title: 'APPS SETTING',
    subMenus: [
      {
        href: '/admin/settings',
        title: 'Settings',
      },
      {
        href: '/admin/blog',
        title: 'Blog',
      },
      {
        href: '/admin/faq',
        title: 'FAQ',
      },
      {
        href: '/admin/provider',
        title: 'Provider',
      },
    ],
  },
  {
    title: 'OTHER',
    subMenus: [
      {
        href: '/admin/language',
        title: 'Language',
      },
      {
        href: '/admin/module',
        title: 'Module',
      },
      {
        href: '/admin/theme-customizer',
        title: 'Theme Customizer',
      },
      {
        href: '/admin/documentation',
        title: 'Documentation',
      },
    ],
  },
]

const Panel: React.VFC = () => {
  const [cookie, setCookie] = useCookies(['user'])

  const router = useRouter()
  const user = userService.userValue
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

  const renderSwitch = (param) => {
    switch (param) {
      case 'statistics':
        return 'Statistics'
      default:
        return 'foo'
    }
  }
  return (
    <div className="flex flex-col md:flex-row flex-1">
      <aside className="admin-sidenav fixed bg-fuchsia-100 w-full md:w-60 overflow-y-scroll">
        <div className="flex fixed top-0 w-full md:w-60 bg-fuchsia-200 p-2">
          <div className="w-full md:w-56 h-[45px]">
            <Image
              src="/img/admin/logo.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <nav className="mt-[68px] h-screen">
          <ul>
            {menuItems.map(({ subMenus, title }) => (
              <li className="m-2" key={title}>
                <span
                  className={
                    'flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer font-bold'
                  }
                >
                  {title}
                </span>
                <ul>
                  {subMenus.map((item, id) => {
                    return (
                      <li key={id}>
                        <Link href={item.href}>
                          <a className="flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer">
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
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
            ))}
          </ul>
          <div className="w-full h-16"></div>
        </nav>
        <div
          onClick={() => signout()}
          className="flex fixed bottom-0 w-full md:w-60 bg-fuchsia-200 p-2 hover:bg-fuchsia-400 cursor-pointer"
        >
          <span className="flex p-2 w-full rounded ">
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
      </aside>
      <main className="flex-1"></main>
    </div>
  )
}
export default Panel
