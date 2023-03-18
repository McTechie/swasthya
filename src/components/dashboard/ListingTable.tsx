// named imports
import { ArrowUpRightIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

// default imports
import CsvDownloadButton from 'react-json-to-csv'

interface ListingTableProps {
  appointments: Appointment[]
  userDataLoading: boolean
  handleShowAppointmentDetails: (appointment: Appointment) => void
}

const ListingTable = ({ appointments, userDataLoading, handleShowAppointmentDetails }: ListingTableProps) => {
  const handlePayment = async (e: React.MouseEvent<HTMLButtonElement>, sender: string, receiver: string, amount: number) => {
    e.stopPropagation()

    try {
      console.log('Payment From: ', sender)
      console.log('Payment To: ', receiver)
      console.log('Payment Amount (rupees): ', amount)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {appointments?.length > 0 && (
        <div className='flex items-center justify-end'>
          <div className='text-white bg-indigo-500 py-2 px-4 mx-2 text-xs font-semibold rounded-full hover:shadow-sm shadow-indigo-300 hover:bg-indigo-700 cursor-pointer animate'>
            <CsvDownloadButton data={appointments} />
          </div>
        </div>
      )}

      <table className='w-full table-fixed text-center mt-4'>
        <thead>
          <tr className='table-header-row'>
            <th>
              Doctor Name
            </th>
            <th>
              Location
            </th>
            <th className='hidden md:table-cell'>
              Ailment
            </th>
            <th className='hidden md:table-cell'>
              Date
            </th>
            <th className='hidden md:table-cell'>
              Time
            </th>
            <th>
              Fee Payment
            </th>
            <th>
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {/* in case of appointments data available */}
          {appointments?.map(appointment => (
            <tr
              key={appointment.appointmentId}
              className='table-body-row'
            >
              <td>
                {appointment.doctor}
              </td>
              <td>
                {'Mumbai'}
              </td>
              <td className='hidden md:table-cell'>
                {appointment.ailment}
              </td>
              <td className='hidden md:table-cell'>
                {appointment.date}
              </td>
              <td className='hidden md:table-cell'>
                {appointment.time}
              </td>
              <td>
                <p>
                  &#8377; {appointment.consultationFee}
                </p>
                <button
                  onClick={(e) => handlePayment(e, appointment.patientId, appointment.providerId, appointment.consultationFee)}
                  className='text-xs text-indigo-500 space-x-1 hover:underline'
                >
                  <span>
                    Pay Now
                  </span>
                  <ArrowUpRightIcon className='w-3 h-3 inline-block mb-1' />
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleShowAppointmentDetails(appointment)}
                  className='text-xs text-indigo-500 space-x-1 hover:underline'
                >
                  <span>
                    View Details
                  </span>
                  <InformationCircleIcon className='w-4 h-4 inline-block mb-1' />
                </button>
              </td>
            </tr>
          ))}

          {/* in case of no data */}
          {appointments?.length === 0 && (
            <tr>
              <td className='md:hidden' colSpan={4}>
                <p className='text-center text-gray-500 mt-4'>
                  {userDataLoading ? 'Loading...' : 'No appointments found...'}
                </p>
              </td>
              <td className='hidden md:table-cell' colSpan={7}>
                <p className='text-center text-gray-500 mt-4'>
                  {userDataLoading ? 'Loading...' : 'No appointments found...'}
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ListingTable
