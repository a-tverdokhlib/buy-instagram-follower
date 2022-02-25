export type SideProps = {
  readonly children: string
}

import Link from 'next/link'

export const SideNavbar: React.VFC<SideProps> = ({ children }) => {
  return (
    <div className="sidenav fixed w-full z-[1000]">
      <div
        className="fixed md:hidden w-full z-[100] bg-black nav top-24 bottom-0 overflow-y-scroll overflow-x-hidden"
        id="mobile-menu"
      >
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-0 ml:space-x-1 md:mt-0 text-base md:font-medium">
          <li className="pt-3">
            <Link href="/">
              <a
                className="flex items-center h-full py-2 pr-4 pl-3 text-white hover:text-[#DC39FC] md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 delay-75"
                aria-current="page"
              >
                Home
              </a>
            </Link>
          </li>
          <li className="w-full md:w-28 ml:w-28 lg:w-36 pt-3">
            <Link href="buy-instagram-followers">
              <a className="flex items-center h-full py-2 pr-4 pl-3 text-white hover:text-[#DC39FC] md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 delay-75">
                Buy Intagram Followers
              </a>
            </Link>
          </li>
          <li className="w-full md:w-28 ml:w-28 lg:w-36 pt-3">
            <Link href="buy-instagram-likes">
              <a className="flex items-center h-full py-2 pr-4 pl-3 text-white hover:text-[#DC39FC] md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 delay-75">
                Buy Intagram Likes
              </a>
            </Link>
          </li>
          <li className="w-full md:w-28 ml:w-28 lg:w-36 pt-3">
            <Link href="buy-instagram-views">
              <a className="flex items-center h-full py-2 pr-4 pl-3 text-white hover:text-[#DC39FC] md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 delay-75">
                Buy Intagram Views
              </a>
            </Link>
          </li>
          <li className="block md:hidden w-full dm:block md:w-24 ml:w-28 xl:w-44 others dropdown pt-3">
            <a
              href="#"
              className="flex items-center h-full py-2 pr-4 pl-3 text-white hover:text-[#DC39FC] md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 delay-75"
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
            <div className="ls:w-[300px] rounded-lg ml-auto mr-0 ls:mr-3 dropdown-content">
              <div className="bg-transparent">
                <Link href="buy-instagram-comments">
                  <a href="#">Buy Buy Instagram Comments</a>
                </Link>
              </div>
              <div>
                <Link href="instagram-growth">
                  <a href="#">Buy Instagram Growth</a>
                </Link>
              </div>
              <div>
                <Link href="buy-auto-instagram-likes">
                  <a href="#">Buy Automatic Instagram Likes</a>
                </Link>
              </div>
              <div>
                <Link href="buy-auto-instagram-followers">
                  <a href="#">Buy Auto Instagram Followers</a>
                </Link>
              </div>
              <div>
                <Link href="buy-custom-instagram-comments">
                  <a href="#">Buy Custom Instagram Comments</a>
                </Link>
              </div>
              <div>
                <Link href="buy-instagram-story-views">
                  <a href="#">Buy Instagram Story Views</a>
                </Link>
              </div>
            </div>
          </li>
          <li className="hidden md:block md:w-16 xl:hidden dropdown">
            <a
              href="#"
              className="flex items-center h-full py-2 pr-4 pl-3 text-white hover:text-[#DC39FC] md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 delay-75"
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
                <a href="#">Blog</a>
              </div>
              <div>
                <a href="#">FAQ</a>
              </div>
              <div>
                <a href="#">Contact</a>
              </div>
            </div>
          </li>
          <li className="block md:hidden xl:block xl:w-16 pt-3 custom">
            <a
              href="#"
              className="flex items-center h-full py-2 pr-4 pl-3 text-white hover:text-[#DC39FC] md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 delay-75"
            >
              Blog
            </a>
          </li>
          <li className="block md:hidden xl:block xl:w-16 pt-3 custom">
            <a
              href="#"
              className="flex items-center h-full py-2 pr-4 pl-3 text-white hover:text-[#DC39FC] md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 delay-75"
            >
              FAQ
            </a>
          </li>
          <li className="block md:hidden xl:block xl:w-24 pt-3 custom">
            <a
              href="#"
              className="flex items-center h-full py-2 pr-4 pl-3 text-white hover:text-[#DC39FC] md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 delay-75"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
