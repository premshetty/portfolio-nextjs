import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';



const Home: NextPage = () => {
  return (
    <div className="h-[100vh] bg-darkbg">
      <Head>
        <title>PREM KUMAR | WEB DEV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home
