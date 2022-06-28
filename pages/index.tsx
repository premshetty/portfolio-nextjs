import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';



const Home: NextPage = () => {
  return (
    <div className="bg-darkbg">
      <Head>
        <title>PREM KUMAR | WEB DEV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default Home
