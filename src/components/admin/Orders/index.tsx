export type OrdersProps = {}
import Head from 'next/head'

import Header from './Header'
const Orders: React.VFC<OrdersProps> = (props) => {
  return (
    <>
      <Head>
        <title>Admin Order Logs</title>
      </Head>
      <div className="flex flex-col flex-wrap w-full min-h-screen px-3 md:px-5 bg-gray-200">
        <Header />
      </div>
    </>
  )
}
export default Orders
