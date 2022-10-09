import '../styles/main.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Nav from '../components/Nav/Nav'


function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Swapsies</title>
      <meta name="description" content="House swap app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <Component {...pageProps} />
    
    <footer/>
  </>
}

export default MyApp
