import Head from 'next/head'

import Header from './Header'
export type SubscriptionOrdersProps = {}
const SubscriptionOrders: React.VFC<SubscriptionOrdersProps> = (props) => {
  return (
    <>
      <Head>
        <title>Admin Subscription Orders</title>
      </Head>
      <div className="flex flex-col flex-wrap w-full min-h-screen px-3 md:px-5 bg-fuchsia-100">
        <Header />
      </div>
    </>
  )
}
export default SubscriptionOrders
