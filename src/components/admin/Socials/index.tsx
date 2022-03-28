import Head from 'next/head'

import Header from './Header'

export type SocialsProps = {}
const Socials: React.VFC<SocialsProps> = (props) => {
  return (
    <>
      <Head>
        <title>Admin Social Network</title>
      </Head>
      <div className="flex flex-col flex-wrap w-full min-h-screen px-3 md:px-5 bg-gray-200">
        <Header />
      </div>
    </>
  )
}
export default Socials
