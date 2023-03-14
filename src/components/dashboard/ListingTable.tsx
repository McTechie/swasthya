// named imports
import { useRouter } from 'next/router'

// default imports
import CsvDownloadButton from 'react-json-to-csv'

interface ListingTableProps {
  appointments: Appointment[]
  userDataLoading: boolean
}

const ListingTable = ({ appointments, userDataLoading }: ListingTableProps) => {
  const router = useRouter()

  // const [filteredAppointments, setFilteredAppointments] = useState<AppointmentListItem[]>([
  //   {
  //     id: '1',
  //     providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
  //     doctor: 'Dr. John Doe',
  //     ailment: 'Covid-19',
  //     date: '2021-09-01',
  //     time: '10:00 AM'
  //   },
  //   {
  //     id: '2',
  //     providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
  //     doctor: 'Dr. Mohn Doe',
  //     ailment: 'Covid-19',
  //     date: '2021-09-01',
  //     time: '10:00 AM'
  //   },
  //   {
  //     id: '3',
  //     providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
  //     doctor: 'Dr. John Doe',
  //     ailment: 'Covid-19',
  //     date: '2021-09-01',
  //     time: '10:00 AM'
  //   },
  //   {
  //     id: '4',
  //     providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
  //     doctor: 'Dr. John Doe',
  //     ailment: 'Covid-19',
  //     date: '2021-09-01',
  //     time: '10:00 AM'
  //   },
  //   {
  //     id: '5',
  //     providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
  //     doctor: 'Dr. Mohn Doe',
  //     ailment: 'Covid-19',
  //     date: '2021-09-01',
  //     time: '10:00 AM'
  //   },
  //   {
  //     id: '6',
  //     providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
  //     doctor: 'Dr. John Doe',
  //     ailment: 'Covid-19',
  //     date: '2021-09-01',
  //     time: '10:00 AM'
  //   },
  //   {
  //     id: '7',
  //     providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
  //     doctor: 'Dr. John Doe',
  //     ailment: 'Covid-19',
  //     date: '2021-09-01',
  //     time: '10:00 AM'
  //   },
  //   {
  //     id: '8',
  //     providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
  //     doctor: 'Dr. Mohn Doe',
  //     ailment: 'Covid-19',
  //     date: '2021-09-01',
  //     time: '10:00 AM'
  //   },
  //   {
  //     id: '9',
  //     providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
  //     doctor: 'Dr. John Doe',
  //     ailment: 'Covid-19',
  //     date: '2021-09-01',
  //     time: '10:00 AM'
  //   },
  // ])

  // sorting handler functions


  // pagination handler function

  const handlePayment = async (e: React.MouseEvent<HTMLButtonElement>, sender: string, receiver: string, amount: number) => {
    e.stopPropagation()

    const MATIC_TO_MUBAI = amount / 83.05
    const FINAL_AMT = 1000000000000000000 * MATIC_TO_MUBAI

    console.log(sender, receiver, FINAL_AMT)

    const params = [
      {
        from: sender,
        to: receiver,
        value: Number(FINAL_AMT).toString(16)
      }
    ]

    try {
      const result = await window.ethereum?.request({
        method: 'eth_sendTransaction',
        params
      })

      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {appointments?.length > 0 && (
        <div className='flex items-center justify-end mt-4'>
          <div className='text-white bg-indigo-600 py-[0.65rem] px-4 mx-2 rounded-full hover:shadow-sm shadow-indigo-300 hover:bg-indigo-700 cursor-pointer'>
            <CsvDownloadButton data={appointments} />
          </div>
        </div>
      )}
      <table className='w-full table-fixed text-center mt-8'>
        <thead>
          <tr className='table-header-row'>
            <th className='hidden lg:block'>
              Provider ID
            </th>
            <th>
              Doctor
            </th>
            <th className='hidden lg:block'>
              Ailment
            </th>
            <th>
              Date
            </th>
            <th className='hidden lg:block'>
              Time
            </th>
            <th>
              Pay Provider
            </th>
          </tr>
        </thead>
        <tbody>
          {/* in case of appointments data available */}
          {appointments?.map((appointment, index) => (
            <tr
              key={appointment.patientId + '_' + index}
              className='table-body-row'
            >
              <td className='hidden lg:inline-block mt-2'>
                {appointment.providerId.substring(0, 6)}.....{appointment.providerId.substring(appointment.providerId.length - 6, appointment.providerId.length)}
              </td>
              <td>
                {appointment.doctor}
              </td>
              <td className='hidden lg:inline-block mt-2'>
                {appointment.ailment}
              </td>
              <td>
                {appointment.date}
              </td>
              <td className='hidden lg:inline-block mt-2'>
                {appointment.time}
              </td>
              <td>
                <button
                  onClick={(e) => handlePayment(e, appointment.patientId, appointment.providerId, appointment.consultationFee)}
                  className='text-white text-sm bg-emerald-600 py-[0.65rem] px-4 mx-2 rounded-full hover:shadow-sm shadow-emerald-300 hover:bg-emerald-700 cursor-pointer'
                >
                  Pay Now
                </button>
              </td>
            </tr>
          ))}

          {/* in case of no data */}
          {appointments?.length === 0 && (
            <tr>
              <td colSpan={5}>
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
