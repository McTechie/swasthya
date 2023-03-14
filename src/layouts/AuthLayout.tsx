// default imports
import Head from 'next/head'

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <Head>
        <title>Swasthya | Authentication</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {children}
      </main>
    </div>
  )
}

export default AuthLayout
