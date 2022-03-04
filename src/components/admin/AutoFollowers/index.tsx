import Head from 'next/head'

import Header from './Header'
export type AutoFollowersProps = {}
const AutoFollowers: React.VFC<AutoFollowersProps> = (props) => {
  return (
    <>
      <Head>
        <title>Admin Auto Followers Order</title>
      </Head>
      <div className="flex flex-col flex-wrap w-full min-h-screen px-3 md:px-5 bg-fuchsia-100">
        <Header />
      </div>
    </>
  )
}
export default AutoFollowers
