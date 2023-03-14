// named imports
import { useRouter } from 'next/router'
import { useAddress, useContract, useDisconnect, useOwnedNFTs } from '@thirdweb-dev/react'

// default imports
import Image from 'next/image'
import Link from 'next/link'

const ProfileInfo = () => {
  // next router
  const router = useRouter()

  // web3 hooks
  const address = useAddress()
  const disconnect = useDisconnect()
  const { contract } = useContract('0x863841449a5bB0011B37B5e94504bFFB909Adcc0')
  const { data: ownedNFTs, isLoading } = useOwnedNFTs(contract, address)

  const handleLogout = () => {
    disconnect()

    router.push('/login')
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <header className='border-b p-6'>
      <div className='max-w-screen-2xl mx-auto flex justify-between items-center space-x-6 md:space-x-10 relative'>
        <Image
          src={`https://api.dicebear.com/5.x/bottts-neutral/svg?seed=${address || 'placeholder'}`}
          alt={address || 'placeholder'}
          width={200}
          height={200}
        />

        <div className='space-y-3 flex-1'>
          <h1 className='text-4xl font-semibold'>Profile Details</h1>
          <h2 className='text-xl'>Account Type: <span className='font-semibold'>{ownedNFTs && ownedNFTs[0].metadata.name}</span></h2>
          <h3 className='text-lg flex-wrap text-indigo-400 break-all'>{address}</h3>
        </div>

        <div className='absolute top-0 right-0 flex space-x-2'>
          <Link href='/chatbot'>
            <button className='rounded-full bg-indigo-500 hover:bg-indigo-600 animate text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-sm'>
              <span>Need Help?</span>
            </button>
          </Link>
          <button
            onClick={() => handleLogout()}
            className='rounded-full bg-indigo-500 hover:bg-indigo-600 animate text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-sm'
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default ProfileInfo
