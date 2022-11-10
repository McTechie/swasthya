const DashMain = () => {
  const name = 'Mcvean Soans'

  return (
    <div className='m-20'>
      {/* screen title */}
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-3xl text-teal-700 flex items-end space-x-3'>
          <span>Welcome, {name}</span>
          <span className='text-base text-slate-400 italic relative bottom-[0.1rem]'>
            &#40;0x1234...5565&#41;
          </span>
        </h1>
      </div>

      <div className='grid grid-cols-6 gap-6'>
        <div className='col-span-4 bg-white border shadow-md p-4 h-72'>
          Next Appointment Details
        </div>
        <div className='col-span-2 bg-white border shadow-md p-4'>
          Schedule New Appointment
        </div>
        <div className='col-span-2 bg-white border shadow-md p-4 h-72'>
          Some Relevant Stats
        </div>
        <div className='col-span-4 bg-white border shadow-md p-4'>
          Update Self Identification
        </div>
        <div className='col-span-4 bg-white border shadow-md p-4 h-96'>
          Need Help
        </div>
      </div>
    </div>
  )
}

export default DashMain
