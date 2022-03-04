export type StatisticsProps = {}
import Head from 'next/head'

import Header from './Header'
const Statistics: React.VFC<StatisticsProps> = (props) => {
  return (
    <>
      <Head>
        <title>Admin Statistics</title>
      </Head>
      <div className="flex flex-col flex-wrap w-full min-h-screen px-3 md:px-5 bg-fuchsia-100">
        <Header />
      </div>
    </>
  )
}
export default Statistics
