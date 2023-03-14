// named imports
import { Header, Footer } from '../components'

// default imports
import Head from 'next/head'

interface BaseLayoutProps {
  children: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div>
      <Head>
        <title>Swasthya | Bridging Users with their Data</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main className='max-w-screen-2xl mx-auto'>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default BaseLayout
