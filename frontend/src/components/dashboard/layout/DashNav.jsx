import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import { BellAlertIcon as BellSilent } from '@heroicons/react/24/outline'
import { BellAlertIcon as BellRinging } from '@heroicons/react/24/solid'

const DashNav = () => {
  const router = useRouter()

  const [isNotificationsActive, setIsNotificationsActive] = useState(false)

  const handleLogout = () => {
    router.push('/')
  }

  return (
    <nav className='flex py-3 px-5 justify-between items-center bg-white sticky top-0 z-50 shadow-md'>
      <Link href='/dashboard'>
        <button className='flex items-center cursor-pointer'>
          <Image src='/logo.png' width={42} height={42} />
          <p className='ml-3 font-bold text-teal-600'>Swasthya</p>
        </button>
      </Link>
      <div className='flex items-center space-x-8'>
        <div
          onMouseEnter={() => setIsNotificationsActive(true)}
          onMouseLeave={() => setIsNotificationsActive(false)}
        >
          {isNotificationsActive ? (
            <BellRinging className='h-6 w-6 text-teal-700 cursor-pointer scale-on-hover' />
          ) : (
            <BellSilent className='h-6 w-6 text-teal-700 cursor-pointer scale-on-hover' />
          )}
        </div>
        <button onClick={handleLogout} className='logout-btn'>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default DashNav
