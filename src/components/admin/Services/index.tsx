import Head from 'next/head'

import Header from './Header'

export type ServicesProps = {}
const Services: React.VFC<ServicesProps> = (props) => {
  return (
    <>
      <Head>
        <title>Admin Services</title>
      </Head>
      <div className="flex flex-col flex-wrap w-full min-h-screen px-3 md:px-5 bg-fuchsia-100">
        <Header />
        <div className="flex flex-row flex-nowrap w-full p-8 mt-14">
          <div className="w-full flex items-center">
            <span className="h-6 w-6 rounded-full flex items-center justify-center bg-[#dd80d6]">
              <svg
                className="h-5 w-5 text-white "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {' '}
                <line x1="12" y1="5" x2="12" y2="19" />{' '}
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
            <span className="text-black text-xl ml-1">Add new</span>
          </div>
          <div className="w-full ml-auto flex">
            <div className="w-full text-black">Sort by</div>
            <div className="w-full text-black">Action</div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap w-full bg-gray-300 bg-opacity-30 h-screen shadow-lg shadow-slate-400">
          <div className="w-full flex flex-row flex-nowrap p-5">
            <div className="flex">
              <span>
                <span className="text-black text-xl">
                  Buy Instagram Followers
                </span>
              </span>
            </div>
            <div className="flex ml-auto">
              <span className="p-2 hover:cursor-pointer">
                <svg
                  className="h-4 w-4 text-gray-500 hover:text-gray-400"
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
                  <polyline points="6 15 12 9 18 15" />
                </svg>
              </span>
              <span className="p-2 hover:cursor-pointer">
                <svg
                  className="h-4 w-4 text-gray-500 hover:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Services
