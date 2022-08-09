import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'
import { Introduction } from '../components/Introduction'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Hamagon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-HamagonDark'>
        <Navbar />
        <Hero />
        <Introduction />
        <HowItWorks />
        <Footer />
      </main>
    </div>
  )
}
