import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Swapsies app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Home</h1>
    </div>
  );
};

export default Home;
