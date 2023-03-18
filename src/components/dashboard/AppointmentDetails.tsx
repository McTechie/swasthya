// named imports
import { ChevronDoubleLeftIcon } from '@heroicons/react/20/solid'


interface AppointmentDetailsProps {
  selectedAppointment: Appointment | null
  handleHideAppointmentDetails: () => void
}

const AppointmentDetails = ({ selectedAppointment, handleHideAppointmentDetails }: AppointmentDetailsProps) => {
  const {
    doctor,
    patient,
    location,
    ailment,
    symptoms,
    date,
    time,
    consultationFee,
    reports,
  } = selectedAppointment!

  return (
    <section className='p-2'>
      <button
        onClick={() => handleHideAppointmentDetails()}
        className='flex items-center space-x-1 group md:hover:text-indigo-600'
      >
        <ChevronDoubleLeftIcon className='h-4 w-4' />
        <span className='md:group-hover:pl-[0.15rem] animate'>Back</span>
      </button>

      <h2 className='text-2xl scale-[1.2] mt-4 text-center'>
        Appointment Details
      </h2>

      <div className='my-8 max-w-screen-lg mx-auto space-y-1'>
        <div className='grid grid-cols-4 space-x-1'>
          <p className='col-span-1 px-3 py-2 bg-indigo-100 font-semibold'>Doctor Name:</p>
          <p className='col-span-3 px-3 py-2 bg-emerald-100'>{doctor}</p>
        </div>

        <div className='grid grid-cols-4 space-x-1'>
          <p className='col-span-1 px-3 py-2 bg-indigo-100 font-semibold'>Patient Name:</p>
          <p className='col-span-3 px-3 py-2 bg-emerald-100'>{patient}</p>
        </div>

        <div className='grid grid-cols-4 space-x-1'>
          <p className='col-span-1 px-3 py-2 bg-indigo-100 font-semibold'>Location:</p>
          <p className='col-span-3 px-3 py-2 bg-emerald-100'>{location}</p>
        </div>

        <div className='grid grid-cols-4 space-x-1'>
          <p className='col-span-1 px-3 py-2 bg-indigo-100 font-semibold'>Date:</p>
          <p className='col-span-3 px-3 py-2 bg-emerald-100'>{new Date(date).toLocaleDateString()}</p>
        </div>

        <div className='grid grid-cols-4 space-x-1'>
          <p className='col-span-1 px-3 py-2 bg-indigo-100 font-semibold'>Time:</p>
          <p className='col-span-3 px-3 py-2 bg-emerald-100'>{time}</p>
        </div>

        <div className='grid grid-cols-4 space-x-1'>
          <p className='col-span-1 px-3 py-2 bg-indigo-100 font-semibold'>Ailment:</p>
          <p className='col-span-3 px-3 py-2 bg-emerald-100'>{ailment}</p>
        </div>

        <div className='grid grid-cols-4 space-x-1'>
          <p className='col-span-1 px-3 py-3 bg-indigo-100 font-semibold'>Symptoms:</p>
          <p className='col-span-3 px-3 py-3 bg-emerald-100 flex items-center'>
            {symptoms?.split(',').map((symptom: string, index: number) => (
              <span
                key={symptom + '_' + index}
                className='px-2 py-1 bg-indigo-500 text-white rounded-full text-xs mr-2'
              >
                {symptom.trim().toLowerCase()}
              </span>
            ))}
          </p>
        </div>
        
        <div className='grid grid-cols-4 space-x-1'>
          <p className='col-span-1 px-3 py-2 bg-indigo-100 font-semibold'>Consultation Fees:</p>
          <p className='col-span-3 px-3 py-2 bg-emerald-100'>&#8377; {consultationFee}</p>
        </div>
        
        <div>
          <div className='mt-10 space-y-4'>
            {Object.keys(reports).map((report: any) => (
              <iframe
                key={report}
                src={reports[report]}
                className='w-full h-screen'
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppointmentDetails
