import '@/styles/css/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

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

export default MyApp
