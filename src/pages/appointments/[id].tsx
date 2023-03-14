// type imports
import type { NextPage } from 'next'

// named imports
import { DashboardLayout } from '../../layouts'
import {
  useAddress,
  useContract,
  useOwnedNFTs,
} from '@thirdweb-dev/react'

const Appointment: NextPage = () => {
  // web3 auth hooks
  const address = useAddress()

  // // check if user owns any ERC 1155 NFTs
  // const { contract } = useContract(process.env.NEXT_PUBLIC_COLLECTION_CONTRACT)
  // const { data: ownedNFTs, isLoading } = useOwnedNFTs(contract, address)

  // console.log('isLoading', isLoading)
  // console.log('ownedNFTs', ownedNFTs)

  return (
    <DashboardLayout>
      <p>Appointment</p>
    </DashboardLayout>
  )
}

export default Appointment
