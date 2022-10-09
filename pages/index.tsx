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
    <div>
      <Image src={"/global.jpg"} alt="house images" width="700" height="700" />
    </div>
    <div>
      <Image src={"/global.jpg"} alt="house images" width="700" height="700" />
    </div>
     
    </div>
  );
};

export default Home;
