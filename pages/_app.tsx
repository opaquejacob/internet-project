import '../styles/global.css'

import { Open_Sans } from '@next/font/google'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

const openSans = Open_Sans({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="icon.svg" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${openSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
