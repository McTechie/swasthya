// named imports
import { ProfileInfo } from '../components'

// default imports
import Head from 'next/head'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div>
      <Head>
        <title>Swasthya Portal | View Medical Records and Other Information!</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ProfileInfo />

      <main className='max-w-screen-2xl mx-auto p-4'>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
