import { useState } from 'react'

const Header: React.VFC = () => {
  const [keyword, setKeyword] = useState('')
  return (
    <div className="admin-services flex flex-row flex-nowrap w-full h-16 items-center">
      <div className="flex h-full items-center">
        <span>
          <span className="flex text-black text-2xl">Statistics</span>
        </span>
      </div>

      <div className="flex flex-row space-x-3 ml-auto flex-nowrap h-full items-center">
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
