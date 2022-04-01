import '@/styles/css/globals.css'
import '@/styles/css/admin.css'
import '@/styles/css/Calendar.css'
import '@/styles/css/Clock.css'
import '@/styles/css/DateTimePicker.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import { wrapper } from '@/redux/store'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default wrapper.withRedux(MyApp)
