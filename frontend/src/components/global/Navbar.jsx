// import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import { ArrowRightCircleIcon } from '@heroicons/react/20/solid'

const Navbar = ({ hideLinks }) => {
  // const router = useRouter()

  return (
    <nav className='fixed top-0 z-50 w-full flex py-3 px-6 bg-white bg-opacity-20 backdrop-blur-sm justify-between items-center shadow-md'>
      {/* logo */}
      <Link href='/'>
        <button className='flex items-center cursor-pointer'>
          <Image src='/logo.png' width={55} height={55} />
          <p className='ml-3 font-bold text-teal-600 text-lg'>Swasthya</p>
        </button>
      </Link>

      {/* links */}
      {!hideLinks && (
        <div className='flex space-x-4 text-teal-600'>
          <p className='nav-link'>About</p>
          <p className='nav-link'>Services</p>
          <p className='nav-link'>Pricing</p>
          <Link href='/login'>
            <button className='text-white text-base bg-teal-600 py-3 px-4 mx-2 border-swasthya shadow-sm hover:shadow-md shadow-teal-300 hover:shadow-teal-400 scale-on-hover-sm flex space-x-2 items-center'>
              <span>Login</span>
              <ArrowRightCircleIcon className='h-5 w-5 ml-2' />
            </button>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
