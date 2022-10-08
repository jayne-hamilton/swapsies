import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Nav from '../components/Nav/Nav'

import styles from '../styles/Home.module.css'



function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Swapsies</title>
      <meta name="description" content="House swap app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
    <Nav />
    <footer className={styles.footer} />
  </>
}

export default MyApp
