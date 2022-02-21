import '@/styles/css/globals.css'
import '@/styles/css/BuyInstagramFollowers.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import { wrapper } from '@/redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/Logo.png" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
export default wrapper.withRedux(MyApp)
// export default MyApp
