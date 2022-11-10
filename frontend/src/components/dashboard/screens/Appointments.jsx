import { useState } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const appointments = [
  {
    patientName: 'John Doe',
    patientId: 1,
    date: '30/03/2023',
    time: '10:00',
    mode: 'online',
    status: 'completed'
  },
  {
    patientName: 'Jaane Doe',
    patientId: 2,
    date: '30/03/2023',
    time: '10:00',
    mode: 'offline',
    status: 'ongoing'
  },
  {
    patientName: 'Rehn Doe',
    patientId: 3,
    date: '30/03/2023',
    time: '10:00',
    mode: 'online',
    status: 'pending'
  },
  {
    patientName: 'Yaa Doe',
    patientId: 4,
    date: '30/03/2023',
    time: '10:00',
    mode: 'online',
    status: 'pending'
  },
  {
    patientName: 'Prajna Moorthy',
    patientId: 5,
    date: '30/03/2023',
    time: '10:00',
    mode: 'offline',
    status: 'pending'
  },
  {
    patientName: 'Mcvean Soans',
    patientId: 6,
    date: '30/03/2023',
    time: '10:00',
    mode: 'online',
    status: 'pending'
  },
  {
    patientName: 'Mrunal Murudkar',
    patientId: 7,
    date: '30/03/2023',
    time: '10:00',
    mode: 'online',
    status: 'pending'
  },
  {
    patientName: 'Saptarshi Das',
    patientId: 8,
    date: '30/03/2023',
    time: '10:00',
    mode: 'offline',
    status: 'pending'
  }
]

const Appointments = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className='m-20'>
      {/* screen title */}
      <div className='flex items-center justify-between mt-2'>
        <h1 className='text-3xl text-teal-700'>Upcoming Appointments</h1>

        <div className='flex justify-between'>
          <form>
            <input
              type='text'
              name='search'
              placeholder='Search by patient name'
              className='w-80 py-2 px-4 border-2 border-teal-700 border-swasthya outline-none'
              onChange={event => setSearchQuery(event.target.value)}
            />
          </form>

          <button className='dash-back-btn'>
            <span>Create</span>
            <PlusCircleIcon className='h-6 w-6' />
          </button>
        </div>
      </div>

      <div className='mt-8 flex-1 text-center'>
        {/* headers */}
        <div className='grid grid-cols-5 font-semibold py-3 bg-teal-600 text-white px-10'>
          <p>Patient Name</p>
          <p>Date</p>
          <p>Time</p>
          <p>Mode</p>
          <p>Status</p>
        </div>

        {/* appointment list */}
        {appointments
          .filter(appointment =>
            appointment.patientName
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          )
          .map(appointment => (
            <Link
              key={appointment.patientId}
              href={`/appointments/user/${appointment.patientId}`}
            >
              <div className='grid grid-cols-5 py-4 odd:bg-teal-100 transition-all duration-400 ease-in-out hover:bg-teal-700 hover:text-white cursor-pointer px-10'>
                <h4>{appointment.patientName}</h4>
                <p>{appointment.date}</p>
                <p>{appointment.time}</p>
                <p>{appointment.mode}</p>
                <p>{appointment.status}</p>
              </div>
            </Link>
          ))}

        <div className='my-10 text-sm text-gray-500'>
          Showing{' '}
          {
            appointments.filter(appointment =>
              appointment.patientName
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            ).length
          }{' '}
          Appointments
        </div>
      </div>
    </div>
  )
}

export default Appointments
