import Link from 'next/link'

import { Image } from '@/components/atoms/Image'
import { NewsLetter } from '@/components/organisms/NewsLetter'

export const Footer: React.VFC = () => (
  <footer className="flex w-full px-3 md:px-20 pt-12 flex-col flex-wrap border-t-2 border-white min-h-[400px] bg-[#222232]">
    <NewsLetter />
    <div className="mt-10 flex w-full text-[#bbbbbb]">
      <div className="w-full flex flex-wrap space-y-10 md:flex-row md:flex-nowrap md:space-y-0 items-center justify-center">
        <div className="flex flex-wrap w-full space-y-3 md:w-1/3">
          <img
            className="flex max-w-52 max-h-10 min-w-52 min-h-10"
            src="/Goreadlogo.png"
            alt="Logo"
          />
          <div className="w-full text-sm">
            Goread.io is not affiliated with Instagram, Facebook, or any
            Instagram third-party partners in any way. We are not authorized,
            endorsed, or sponsored by Instagram
          </div>
          <div className="w-full flex flex-nowrap space-x-3 flex-row">
            <div className="flex w-8 h-8 rounded-full gradient-btn-2 justify-center items-center hover:cursor-pointer">
              <svg
                className="h-4 w-4 text-white z-10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {' '}
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </div>
            <div className="flex w-8 h-8 rounded-full gradient-btn-2 justify-center items-center hover:cursor-pointer">
              <svg
                className="h-4 w-4 text-white z-10"
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
                <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
              </svg>
            </div>
            <div className="flex w-8 h-8 rounded-full gradient-btn-2 justify-center items-center hover:cursor-pointer">
              <svg
                className="h-4 w-4 text-white z-10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {' '}
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{' '}
                <rect x="2" y="9" width="4" height="12" />{' '}
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <div className="flex w-8 h-8 rounded-full gradient-btn-2 justify-center items-center hover:cursor-pointer">
              <svg
                className="h-4 w-4 text-white z-10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {' '}
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{' '}
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap space-y-10 w-full md:flex-row md:flex-nowrap md:space-y-0 md:space-x-8 justify-end">
          <div className="w-full md:w-1/4">
            <h3 className="text-white w-full font-bold text-lg">Quick Links</h3>
            <ul className="mt-5 flex w-full flex-col flex-wrap">
              <li>
                <Link href="/">
                  <a className="footer-link hover:text-[#DC39FC] transition-all duration-500">
                    Terms &amp; Condition
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="footer-link hover:text-[#DC39FC] transition-all duration-500">
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="footer-link hover:text-[#DC39FC] transition-all duration-500">
                    Read Our reviews
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-white w-full font-bold text-lg">Contact</h3>
            <div className="mt-5 flex w-full flex-col flex-wrap">
              <div className="flex flex-row w-full">
                <div className="w-20">Tel:</div>
                <a className="footer-link hover:cursor-pointer">
                  +971599876543
                </a>
              </div>
              <div className="flex flex-row w-full">
                <div className="w-20">E-mail:</div>
                <a className="footer-link hover:cursor-pointer">
                  support@goread.io
                </a>
              </div>
              <div className="flex flex-row w-full">
                <div className="ls:w-[350px]">
                  <span>
                    <span>
                      Company: SOCIAL JOOL LLC ( 2112727), Sharjah Media City,
                      Sharjah, UAE
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-white font-bold text-lg">News &amp; Post</h3>
            <div className="mt-5 w-full flex-col flex-wrap">
              <div className="w-full">Terms &amp; Condition</div>
              <div className="w-full">Contact</div>
              <div className="w-full">Read Our reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex w-full h-[100px]"></div>
  </footer>
)

export default {
  args: {},

  parameters: {},
}
