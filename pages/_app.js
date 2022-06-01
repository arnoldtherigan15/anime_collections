import React from 'react'
import '../styles/globals.css'
import Head from 'next/head'
import 'react-loading-skeleton/dist/skeleton.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
