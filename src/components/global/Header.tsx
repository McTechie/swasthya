// named imports
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'

// default imports
import Link from 'next/link'
import Image from 'next/image'

interface HeaderProps {
  hideLinks?: boolean
}

const Header = ({ hideLinks }: HeaderProps) => {
  return (
    <header className='sticky top-0 z-50 w-full flex py-2 px-6 bg-white bg-opacity-70 backdrop-blur-sm justify-between items-center shadow-md'>
      {/* logo */}
      <Link href='/'>
        <button className='flex items-center cursor-pointer group'>
          <Image src='/logo.png' alt='Logo' width={40} height={40} />
          <p className='ml-3 font-bold text-emerald-600 text-lg group-hover:scale-105 transition-all ease-in-out duration-300'>
            Chain
            <span className='text-indigo-500'>Bridge</span>
          </p>
        </button>
      </Link>

      {/* links */}
      {!hideLinks && (
        <div className='flex space-x-4 text-emerald-600'>
          <Link href='/'><p className='nav-link'>About</p></Link>
          <Link href='/'><p className='nav-link'>Services</p></Link>
          <Link href='/'><p className='nav-link'>Pricing</p></Link>

          <Link href='/login'>
            <button className='text-white text-sm bg-emerald-600 py-[0.65rem] px-4 mx-2 rounded-full hover:shadow-sm shadow-emerald-300 hover:bg-indigo-500 hover:shadow-indigo-400 scale-on-hover-sm flex space-x-2 items-center'>
              <span>Login</span>
              <ArrowRightCircleIcon className='h-5 w-5 ml-2' />
            </button>
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
