import { PencilSquareIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import PreviousAppointments from '../../appointments/user/PreviousAppointments'

const appointments = [
  {
    doctorName: 'John Doe',
    doctorId: 1,
    appointmentId: 1,
    date: '30/03/2023',
    time: '10:00',
    mode: 'online',
    ailment: 'cough'
  },
  {
    doctorName: 'Jaane Doe',
    doctorId: 2,
    appointmentId: 2,
    date: '30/03/2023',
    time: '10:00',
    mode: 'offline',
    ailment: 'flu'
  },
  {
    doctorName: 'Rehn Doe',
    doctorId: 3,
    appointmentId: 3,
    date: '30/03/2023',
    time: '10:00',
    mode: 'online',
    ailment: 'diabetes'
  },
  {
    doctorName: 'Yaa Doe',
    doctorId: 4,
    appointmentId: 4,
    date: '30/03/2023',
    time: '10:00',
    mode: 'online',
    ailment: 'cough'
  },
  {
    doctorName: 'Prajna Moorthy',
    doctorId: 5,
    appointmentId: 5,
    date: '30/03/2023',
    time: '10:00',
    mode: 'offline',
    ailment: 'cough'
  },
  {
    doctorName: 'Mcvean Soans',
    doctorId: 6,
    appointmentId: 6,
    date: '30/03/2023',
    time: '10:00',
    mode: 'online',
    ailment: 'cough'
  },
  {
    doctorName: 'Mrunal Murudkar',
    doctorId: 7,
    appointmentId: 7,
    date: '30/03/2023',
    time: '10:00',
    mode: 'online',
    ailment: 'cough'
  },
  {
    doctorName: 'Saptarshi Das',
    doctorId: 8,
    appointmentId: 8,
    date: '30/03/2023',
    time: '10:00',
    mode: 'offline',
    ailment: 'cough'
  }
]

const IdentityProfile = () => {
  return (
    <div className='m-20'>
      <div className='flex justify-between'>
        <h1 className='text-3xl text-teal-700 flex items-end space-x-4'>
          My Profile
        </h1>
        <button
          onClick={() => alert('This feature is coming soon...')}
          className='dash-back-btn'
        >
          <PencilSquareIcon className='w-5 h-5' />
          <span>Edit</span>
        </button>
      </div>

      <section className='grid grid-cols-2 items-center place-items-center my-10'>
        <div className='overflow-hidden bg-teal-600 w-96 h-96 relative'>
          <Image
            src='/dummy.svg'
            alt='Profile'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='w-full grid grid-cols-2 text-center gap-10 bg-gray-50 p-10 border-2 border-teal-800 border-double shadow-sm border-swasthya mb-10'>
          <div className='border border-teal-700 border-swasthya overflow-hidden'>
            <p className='font-bold bg-teal-700 text-white p-2 rounded-tr-2xl'>
              Name
            </p>
            <p className='bg-teal-100 p-2 rounded-bl-2xl h-full'>
              Mcvean Soans
            </p>
          </div>
          <div className='border border-teal-700 border-swasthya overflow-hidden'>
            <p className='font-bold bg-teal-700 text-white p-2 rounded-tr-2xl'>
              DOB
            </p>
            <p className='bg-teal-100 p-2 rounded-bl-2xl h-full'>30/03/2002</p>
          </div>
          <div className='border border-teal-700 border-swasthya overflow-hidden'>
            <p className='font-bold bg-teal-700 text-white p-2 rounded-tr-2xl'>
              Phone
            </p>
            <p className='bg-teal-100 p-2 rounded-bl-2xl h-full'>
              +91 98192 36390
            </p>
          </div>
          <div className='border border-teal-700 border-swasthya overflow-hidden'>
            <p className='font-bold bg-teal-700 text-white p-2 rounded-tr-2xl'>
              Email
            </p>
            <p className='bg-teal-100 p-2 rounded-bl-2xl h-full'>
              mc.soans02@gmail.com
            </p>
          </div>
          <div className='col-span-2 border border-teal-700 border-swasthya overflow-hidden'>
            <p className='font-bold bg-teal-700 text-white p-2 rounded-tr-2xl'>
              Address
            </p>
            <p className='bg-teal-100 p-2 rounded-bl-2xl h-full'>
              1st Floor, 1st Main, 1st Cross, 1st Block, 1st Stage, 1st Sector,
              1st City, 1st State, 1st Country, 1st Pincode
            </p>
          </div>
        </div>
      </section>

      <PreviousAppointments appointments={appointments} />
    </div>
  )
}

export default IdentityProfile
