// named imports
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useAddress, useContract, useDisconnect, useOwnedNFTs } from '@thirdweb-dev/react'
import { ArrowTopRightOnSquareIcon, Bars3Icon, PencilSquareIcon, QrCodeIcon, Squares2X2Icon, XMarkIcon } from '@heroicons/react/20/solid'

// default imports
import Image from 'next/image'
import Link from 'next/link'

const ProfileInfo = () => {
  // next router
  const { pathname, push } = useRouter()

  const [buttonsVisible, setButtonsVisible] = useState<boolean>(false)

  // web3 hooks
  const address = useAddress()
  const disconnect = useDisconnect()

  const { contract } = useContract(process.env.NEXT_PUBLIC_NFT_GATING_CONTRACT)
  const { data: ownedNFTs, isLoading } = useOwnedNFTs(contract, address)

  const handleLogout = () => {
    disconnect()
    push('/login')
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <header className='border-b p-6 pt-10 lg:pt-6'>
      <div className='max-w-screen-2xl mx-auto flex justify-between items-center space-x-6 md:space-x-10 relative'>
        {/* random image generated for wallet */}
        <Image
          priority
          src={`https://api.dicebear.com/5.x/bottts-neutral/svg?seed=${address || 'placeholder'}`}
          alt={address || 'placeholder'}
          width={200}
          height={200}
        />

        {/* profile details */}
        <div className='space-y-3 flex-1'>
          <h1 className='text-4xl font-semibold'>Profile Details</h1>
          <h2 className='text-xl'>Account Type: <span className='font-semibold'>{ownedNFTs && ownedNFTs[0].metadata.name}</span></h2>
          <h3 className='text-lg flex-wrap text-indigo-400 break-all'>
            {address?.substring(0, 6)}...{address?.substring(address.length - 4)}
          </h3>
        </div>

        {/* navbar for smaller screens */}
        <div className='md:hidden absolute -top-4 lg:top-0 right-0 flex flex-col space-y-3 animate'>
          {buttonsVisible ? (
            <>
              <button className='rounded-full bg-indigo-500 text-white p-2 text-xs font-semibold'>
                <XMarkIcon
                  onClick={() => setButtonsVisible(false)}
                  className='h-4 w-4'
                />
              </button>

              {pathname !== '/dashboard' && (
                <Link href='/dashboard'>
                  <button className='rounded-full bg-indigo-500 text-white p-2 text-xs font-semibold'>
                    <span className='hidden'>Dashboard</span>
                    <Squares2X2Icon className='w-4 h-4' />
                  </button>
                </Link>
              )}

              {pathname !== '/create' && (
                <Link href='/create'>
                  <button className='rounded-full bg-indigo-500 text-white p-2 text-xs font-semibold'>
                    <span className='hidden'>Create Appointment</span>
                    <PencilSquareIcon className='w-4 h-4' />
                  </button>
                </Link>
              )}

              {pathname !== '/qr' && (
                <Link href='/qr'>
                  <button className='rounded-full bg-indigo-500 text-white p-2 text-xs font-semibold'>
                    <span className='hidden'>View QR</span>
                    <QrCodeIcon className='w-4 h-4' />
                  </button>
                </Link>
              )}

              <button
                onClick={() => handleLogout()}
                className='rounded-full bg-indigo-500 text-white p-2 text-xs font-semibold'
              >
                <span className='hidden'>Logout</span>
                <ArrowTopRightOnSquareIcon className='w-4 h-4' />
              </button>
            </>
          ) : (
            <button className='rounded-full bg-indigo-500 hover:bg-indigo-600 animate text-white p-2 text-xs font-semibold'>
              <Bars3Icon
                onClick={() => setButtonsVisible(true)}
                className='h-4 w-4'
              />
            </button>
          )}
        </div>
        
        {/* navbar for larger screens */}
        <div className='hidden md:flex space-x-3 absolute -top-4 lg:top-0 right-0'>
          {pathname !== '/dashboard' && (
            <Link href='/dashboard'>
              <button className='rounded-full bg-indigo-500 hover:bg-indigo-600 animate text-white px-4 py-2 text-xs font-semibold lg:text-sm flex items-center space-x-2'>
                <span className='hidden md:inline'>Dashboard</span>
                <Squares2X2Icon className='w-4 h-4' />
              </button>
            </Link>
          )}

          {pathname !== '/create' && (
            <Link href='/create'>
              <button className='rounded-full bg-indigo-500 hover:bg-indigo-600 animate text-white px-4 py-2 text-xs font-semibold lg:text-sm flex items-center space-x-2'>
                <span className='hidden md:inline'>Create Appointment</span>
                <PencilSquareIcon className='w-4 h-4' />
              </button>
            </Link>
          )}

          {pathname !== '/qr' && (
            <Link href='/qr'>
              <button className='rounded-full bg-indigo-500 hover:bg-indigo-600 animate text-white px-4 py-2 text-xs font-semibold lg:text-sm flex items-center space-x-2'>
                <span className='hidden md:inline'>View QR</span>
                <QrCodeIcon className='w-4 h-4' />
              </button>
            </Link>
          )}

          <button
            onClick={() => handleLogout()}
            className='rounded-full bg-indigo-500 hover:bg-indigo-600 animate text-white px-4 py-2 text-xs font-semibold lg:text-sm flex items-center space-x-2'
          >
            <span className='hidden md:inline'>Logout</span>
            <ArrowTopRightOnSquareIcon className='w-4 h-4' />
          </button>
        </div>
      </div>
    </header>
  )
}

export default ProfileInfo
