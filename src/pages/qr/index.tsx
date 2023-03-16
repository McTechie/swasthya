// named imports
import { useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react'
import { QRCodeSVG } from 'qrcode.react'
import { DashboardLayout } from '../../layouts'

// default imports
import Image from 'next/image'

const PatientQR = () => {
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
      <section className='text-center flex flex-col justify-center items-center space-y-24 mt-4'>
        <p>
          Show this to your doctor so that they can verify your identity.
        </p>
        <div className='scale-[2]'>
          <QRCodeSVG value={address} />
        </div>
      </section>
    </DashboardLayout>
  )
}

export default PatientQR
