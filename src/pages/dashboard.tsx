// type imports
import type { NextPage } from 'next'

// named imports
import { useEffect, useState } from 'react'
import { DashboardLayout } from '../layouts'
import { ListingTable, CreateAppointment, AppointmentDetails } from '../components'
import {
  useAddress,
  useContract,
  useOwnedNFTs,
} from '@thirdweb-dev/react'

// default imports
import Image from 'next/image'

const Dashboard: NextPage = () => {
  // web3 auth hooks
  const address = useAddress()

  // check if user owns any ERC 1155 NFTs
  const [appointments, setAppointments] = useState<Appointment[]>([])
  
  // store appointment details
  const [showAppointmentDetails, setShowAppointmentDetails] = useState<boolean>(false)
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)

  const handleShowAppointmentDetails = (appointment: Appointment) => {
    setSelectedAppointment(appointment)
    setShowAppointmentDetails(true)
  }

  const handleHideAppointmentDetails = () => {
    setSelectedAppointment(null)
    setShowAppointmentDetails(false)
  }

  // fetch user access NFTs
  const { contract: accessContract } = useContract(process.env.NEXT_PUBLIC_NFT_GATING_CONTRACT)
  const { data: accessNFTs, isLoading: accessDataLoading } = useOwnedNFTs(accessContract, address)

  // fetch user appointment NFTs
  const { contract } = useContract(process.env.NEXT_PUBLIC_COLLECTION_CONTRACT)
  const { data: ownedNFTs, isLoading: userDataLoading } = useOwnedNFTs(contract, address)

  useEffect(() => {
    if (userDataLoading) return

    const data: any = ownedNFTs?.map(nft => ({
      ...nft.metadata.properties
    }))

    setAppointments(data)
  }, [ownedNFTs, userDataLoading])

  if (accessDataLoading || userDataLoading) {
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
      {showAppointmentDetails ? (
        <AppointmentDetails
          selectedAppointment={selectedAppointment}
          handleHideAppointmentDetails={handleHideAppointmentDetails}
        />
      ) : accessNFTs && accessNFTs[0]?.metadata.name === 'Patient' ? (
        <ListingTable 
          appointments={appointments}
          userDataLoading={userDataLoading}
          handleShowAppointmentDetails={handleShowAppointmentDetails}
        />
      ) : (
        <CreateAppointment />
      )}

    </DashboardLayout>
  )
}

export default Dashboard
