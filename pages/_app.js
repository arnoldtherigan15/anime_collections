import React from 'react'
import '../styles/globals.css'
import Head from 'next/head'
import 'react-loading-skeleton/dist/skeleton.css'
import { ApolloProvider } from '@apollo/client'
import client from '../src/services/client'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

export default MyApp
