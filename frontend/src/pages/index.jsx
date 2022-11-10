import Head from 'next/head'
import { Navbar, Section1, Section2, Section3, Footer } from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Swasthya | Keeping You and Your Records </title>
        <meta
          name='description'
          content='A secure, modern and unified platform for patients and doctors'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className='mt-36'>
        <Section1 />
        <Section2 />
        <Section3 />
      </main>

      <Footer />
    </div>
  )
}
