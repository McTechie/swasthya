import Head from 'next/head'
import Image from 'next/image'
import { LoginForm } from '../components'

const LoginPage = () => {
  /** 
   * DOCTOR FORM
   * ----------------
   * First Name
   * Middle Name
   * Last Name
   * DOB
   * Gender
   * Phone
   * Email
   * City
   * State
   * Pincode
   * ID Proof
   * Qualifications
   * Degree / Certification Proof
   * Accolades
   * Practicing Centres / Institutes
     * Name
     * Location
     * Visiting Hours
   */

  return (
    <div className='overflow-y-hidden'>
      <Head>
        <title>Swasthya Login | Sign in to your Swasthya Dashboard</title>
      </Head>

      <main className='grid grid-cols-3 bg-teal-100 bg-opacity-80'>
        <div className='col-span-1 h-screen'>
          <Image
            src='/login--signin/doctor.svg'
            alt='Swasthya Login Banner'
            objectFit='cover'
            width={596}
            height={1024}
          />
        </div>

        <LoginForm />
      </main>

      <div className='bg-gradient-to-l from-black to-gray-800 fixed top-0 left-0 h-screen w-1/3 opacity-30' />
    </div>
  )
}

export default LoginPage
