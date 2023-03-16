// named imports
import { useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react'
import { DashboardLayout } from '../../layouts'

// default imports
import Image from 'next/image'
import QRCode from 'react-qr-code'

const DoctorQR = () => {
  const address = useAddress()
  
  const { contract: accessContract } = useContract(process.env.NEXT_PUBLIC_NFT_GATING_CONTRACT)
  const { data: accessNFTs, isLoading: accessDataLoading } = useOwnedNFTs(accessContract, address)

  if (accessDataLoading) {
    return (
      <div className='flex items-center justify-center'>
        <Image
          src='https://cdn.hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif'
          alt='Loading...'
          width={200}
          height={200}
        />
      </div>
    )
  }

  if (!address || !accessNFTs) {
    return <p>No Access...</p>
  }

  return (
    <DashboardLayout>
      <section className='text-center flex flex-col justify-center items-center space-y-7 mt-4'>
        <p>
          Show this to your doctor so that they can verify your identity.
        </p>
        <div className='border-4 inline-block border-emerald-700'>
          <QRCode
            value={address}
            size={256}
            bgColor='#6366f1'
            fgColor='#ffffff'
          />
        </div>
      </section>
    </DashboardLayout>
  )
}

export default DoctorQR
