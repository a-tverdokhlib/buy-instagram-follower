import { useState } from 'react'
type Props = {}
const Header: React.VFC<Props> = (props) => {
  const [keyword, setKeyword] = useState('')
  return (
    <div className="admin-services top-0 flex flex-row flex-nowrap w-full h-16 items-center bg-fuchsia-100">
      <div className="flex h-full items-center">
        <span>
          <span className="flex text-black text-2xl">Category</span>
        </span>
      </div>
      <div className="flex w-full max-w-[600px] items-center h-full p-3">
        <span className="absolute z-10 ml-4">
          <svg
            className="h-5 w-5 text-gray-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {' '}
            <circle cx="11" cy="11" r="8" />{' '}
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input
          className="w-full pl-16 text-black"
          type="text"
          placeholder="Search for..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <span className="flex items-center justify-center w-10 h-[44px] bg-[#45aaf2] -ml-[1px] hover:cursor-pointer rounded-r-lg">
          <svg
            className="h-4 w-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {' '}
            <circle cx="11" cy="11" r="8" />{' '}
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
      </div>
      <div className="hidden lg:flex flex-row space-x-3 ml-auto flex-nowrap h-full items-center">
        <div>
          <svg
            className="h-5 w-5 text-red-500"
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
            <rect x="4" y="6" width="4" height="5" rx="1" />{' '}
            <line x1="6" y1="4" x2="6" y2="6" />{' '}
            <line x1="6" y1="11" x2="6" y2="20" />{' '}
            <rect x="10" y="14" width="4" height="5" rx="1" />{' '}
            <line x1="12" y1="4" x2="12" y2="14" />{' '}
            <line x1="12" y1="19" x2="12" y2="20" />{' '}
            <rect x="16" y="5" width="4" height="6" rx="1" />{' '}
            <line x1="18" y1="4" x2="18" y2="5" />{' '}
            <line x1="18" y1="11" x2="18" y2="20" />
          </svg>
        </div>
        <div></div>
        <div className="flex flex-row flex-nowrap">
          <div className="flex flex-wrap flex-col text-black">
            <div className="h-5">Hi, Lucy!</div>
            <div className="h-5">Administrator</div>
          </div>
          <div className="w-10 h-10 bg-[url('/img/admin/user-avatar.png')] bg-cover"></div>
        </div>
      </div>
    </div>
  )
}
export default Header
