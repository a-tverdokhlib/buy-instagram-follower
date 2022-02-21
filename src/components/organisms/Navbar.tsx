type Props = {
  readonly navShown: () => boolean
  readonly menuClick: () => void
}

import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'

import { Image } from '@/components/atoms/Image'

export const Navbar: React.VFC<Props> = ({ menuClick, navShown }) => {
  const router = useRouter()

  const [stickyClass, setStickyClass] = useState(
    'nav w-full z-[1001] samnav shadow-black-400 shadow-[0_0px_20px_3px_rgba(0,0,0,1)]',
  )

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar)
    return () => {
      window.removeEventListener('scroll', stickNavbar)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', stickNavbar)
  }, [])

  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY
      if (windowHeight > 0 || window.innerWidth < 768)
        setStickyClass(
          'nav w-full left-0 z-[1001] sticky shadow-black-400 shadow-[0_0px_20px_3px_rgba(0,0,0,0.5)]',
        )
      else
        setStickyClass(
          'nav w-full z-[1001] samnav shadow-black-400 shadow-[0_0px_20px_3px_rgba(0,0,0,0.5)]',
        )
    }
  }

  const handleClick = () => {
    menuClick()
  }

  return (
    <nav className={`${stickyClass}`}>
      <div>
        <div className="min-w-min py-5 flex flex-wrap justify-between items-center mx-auto bg-black md:bg-transparent">
          <div className="ml-1 ls:ml-5 sm:ml-16">
            {/* <Image
              src="/Goreadlogo.png"
              width="190px"
              height="40px"
              alt="Logo"
            /> */}
            <img src="/Goreadlogo.png" width="190px" height="40px" alt="Logo" />
          </div>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            onClick={handleClick}
            className="inline-flex items-center p-6 ml-3 text-sm text-gray-500 rounded-lg md:hidden  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto h-screen md:h-auto scroll-auto"
            // id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-0 ml:space-x-1 md:mt-0 text-base md:font-medium">
              <li>
                <a
                  onClick={() => router.push('/')}
                  className="hover:cursor-pointer flex items-center h-full py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#DC39FC] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 delay-75"
                >
                  Home
                </a>
              </li>
              <li className="w-full md:w-28 ml:w-28 lg:w-36">
                <a
                  onClick={() => router.push('/buy-instagram-followers')}
                  className="hover:cursor-pointer flex items-center h-full py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#DC39FC] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 delay-75"
                >
                  Buy Intagram Followers
                </a>
              </li>
              <li className="w-full md:w-28 ml:w-28 lg:w-36">
                <a
                  onClick={() => router.push('/buy-instagram-likes')}
                  className="hover:cursor-pointer flex items-center h-full py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#DC39FC] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 delay-75"
                >
                  Buy Instagram Likes
                </a>
              </li>
              <li className="w-full md:w-28 ml:w-28 lg:w-36">
                <a
                  onClick={() => router.push('/buy-instagram-views')}
                  className="hover:cursor-pointer flex items-center h-full py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#DC39FC] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 delay-75"
                >
                  Buy Instagram Views
                </a>
              </li>
              <li className="block md:hidden w-full dm:block md:w-24 ml:w-28 xl:w-44 others dropdown">
                <a
                  href="#"
                  className="flex items-center h-full py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#DC39FC] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 delay-75"
                >
                  Other Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 ml-0 -mr-1 text-violet-200 hover:text-violet-100"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <div className="dropdown-content w-[320px] hover:cursor-pointer">
                  <div>
                    <a onClick={() => router.push('/buy-instagram-comments')}>
                      Buy Buy Instagram Comments
                    </a>
                  </div>
                  <div>
                    <a onClick={() => router.push('/buy-instagram-growth')}>
                      Buy Buy Instagram Growth
                    </a>
                  </div>
                  <div>
                    <a onClick={() => router.push('/buy-auto-instagram-likes')}>
                      Buy Automatic Instagram Likes
                    </a>
                  </div>
                  <div>
                    <a
                      onClick={() =>
                        router.push('/buy-auto-instagram-followers')
                      }
                    >
                      Buy Auto Instagram Followers
                    </a>
                  </div>
                  <div>
                    <a
                      onClick={() =>
                        router.push('/buy-custom-instagram-comments')
                      }
                    >
                      Buy Custom Instagram Comments
                    </a>
                  </div>
                  <div>
                    <a
                      onClick={() => router.push('/buy-instagram-story-views')}
                    >
                      Buy Instagram Story Views
                    </a>
                  </div>
                </div>
              </li>
              <li className="hidden md:block md:w-16 xl:hidden dropdown">
                <a
                  href="#"
                  className="flex items-center h-full py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#DC39FC] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 delay-75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <div className="dropdown-content">
                  <div className="dm:hidden">
                    <a href="#">Other Services</a>
                  </div>
                  <div>
                    <Link href="#">
                      <a>Blog</a>
                    </Link>
                  </div>
                  <div>
                    <Link href="#">
                      <a>FAQ</a>
                    </Link>
                  </div>
                  <div>
                    <Link href="#">
                      <a>Contact</a>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="block md:hidden xl:block xl:w-16 pt-3 custom">
                <Link href="#">
                  <a className="flex items-center h-full py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#DC39FC] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 delay-75">
                    Blog
                  </a>
                </Link>
              </li>
              <li className="block md:hidden xl:block xl:w-16 pt-3 custom">
                <Link href="#">
                  <a className="flex items-center h-full py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#DC39FC] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 delay-75">
                    FAQ
                  </a>
                </Link>
              </li>
              <li className="block md:hidden xl:block xl:w-24 pt-3 custom">
                <Link href="#">
                  <a className="flex items-center h-full py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#DC39FC] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 delay-75">
                    Contact
                  </a>
                </Link>{' '}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default { args: {} }
