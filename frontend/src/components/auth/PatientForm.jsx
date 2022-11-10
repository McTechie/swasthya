import Link from 'next/link'

import {
  ChevronDoubleRightIcon,
  PaperClipIcon,
  TrashIcon
} from '@heroicons/react/24/outline'

const PatientForm = ({
  register,
  patientFormStep,
  fileName,
  fileKey,
  fileSize,
  handleFileUpload,
  resetFile
}) => {
  return (
    <div className='flex flex-col space-y-8'>
      {patientFormStep === 1 && (
        <>
          <div className='grid grid-cols-3 gap-x-5'>
            <label
              htmlFor='title'
              className='font-bold text-lg text-center border-swasthya border border-teal-800 self-center py-3'
            >
              Title
            </label>
            <select
              id='title'
              className='col-span-2 register-form-input'
              {...register('title')}
            >
              <option value='Mr.'>Mr.</option>
              <option value='Ms.'>Ms.</option>
              <option value='Mrs.'>Mrs.</option>
            </select>
          </div>

          <div className='grid grid-cols-3 gap-x-5'>
            <label
              htmlFor='firstName'
              className='font-bold text-lg text-center border-swasthya border border-teal-800 self-center py-3'
            >
              First Name
            </label>
            <input
              id='firstName'
              type='text'
              placeholder='Your First Name Here'
              className='col-span-2 register-form-input'
              {...register('firstName')}
            />
          </div>

          <div className='grid grid-cols-3 gap-x-5'>
            <label
              htmlFor='middleName'
              className='font-bold text-lg text-center border-swasthya border border-teal-800 self-center py-3'
            >
              Middle Name
            </label>
            <input
              id='middleName'
              type='text'
              placeholder='Your Middle Name Here (Optional)'
              className='col-span-2 register-form-input'
              {...register('middleName')}
            />
          </div>

          <div className='grid grid-cols-3 gap-x-5'>
            <label
              htmlFor='lastName'
              className='font-bold text-lg text-center border-swasthya border border-teal-800 self-center py-3'
            >
              Last Name
            </label>
            <input
              id='lastName'
              type='text'
              placeholder='Your Surname Here'
              className='col-span-2 register-form-input'
              {...register('lastName')}
            />
          </div>

          <div className='grid grid-cols-3 gap-x-5'>
            <label
              htmlFor='dob'
              className='font-bold text-lg text-center border-swasthya border border-teal-800 self-center py-3'
            >
              Date of Birth
            </label>
            <input
              id='dob'
              type='date'
              className='col-span-2 register-form-input'
              {...register('dob')}
            />
          </div>

          <div className='grid grid-cols-3 gap-x-5'>
            <label
              htmlFor='gender'
              className='font-bold text-lg text-center border-swasthya border border-teal-800 self-center py-3'
            >
              Gender
            </label>
            <select
              id='gender'
              className='col-span-2 register-form-input'
              {...register('gender')}
            >
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Other'>Other</option>
              <option value='Prefer Not to Say'>Prefer Not to Say</option>
            </select>
          </div>
        </>
      )}

      {patientFormStep === 2 && (
        <>
          <div className='grid grid-cols-3 gap-x-5'>
            <label
              htmlFor='phone'
              className='font-bold text-lg text-center border-swasthya border border-teal-800 self-center py-3'
            >
              Phone
            </label>
            <input
              id='phone'
              type='tel'
              placeholder='+91 xxxxx xxxxx'
              className='col-span-2 register-form-input'
              {...register('phone')}
            />
          </div>

          <div className='grid grid-cols-3 gap-x-5'>
            <label
              htmlFor='email'
              className='font-bold text-lg text-center border-swasthya border border-teal-800 self-center py-3'
            >
              Email
            </label>
            <input
              id='email'
              type='email'
              placeholder='abc.xyz@swasthya.in'
              className='col-span-2 register-form-input'
              {...register('email')}
            />
          </div>

          <div className='grid grid-cols-3 gap-x-5'>
            <label
              htmlFor='address'
              className='font-bold text-lg text-center border-swasthya border border-teal-800 self-center py-3'
            >
              Local Address
            </label>
            <input
              id='address'
              type='text'
              placeholder='Flat 100, Bakers Street, Powai'
              className='col-span-2 register-form-input'
              {...register('address')}
            />
          </div>

          <div className='grid grid-cols-3 gap-x-5'>
            <label
              htmlFor='pincode'
              className='font-bold text-lg text-center border-swasthya border border-teal-800 self-center py-3'
            >
              Pincode
            </label>
            <input
              id='pincode'
              type='text'
              placeholder='400032'
              className='col-span-2 register-form-input'
              {...register('pincode')}
            />
          </div>

          <div className='grid grid-cols-3 gap-x-5'>
            <label
              htmlFor='city'
              className='font-bold text-lg text-center border-swasthya border border-teal-800 self-center py-3'
            >
              City
            </label>
            <input
              id='city'
              type='text'
              placeholder='Mumbai'
              className='col-span-2 register-form-input'
              {...register('city')}
            />
          </div>

          <div className='grid grid-cols-3 gap-x-5'>
            <label
              htmlFor='state'
              className='font-bold text-lg text-center border-swasthya border border-teal-800 self-center py-3'
            >
              State
            </label>
            <input
              id='state'
              type='text'
              placeholder='Maharashtra'
              className='col-span-2 register-form-input'
              {...register('state')}
            />
          </div>

          <div className='grid grid-cols-3 gap-x-5'>
            <label
              htmlFor='country'
              className='font-bold text-lg text-center border-swasthya border border-teal-800 self-center py-3'
            >
              Country
            </label>
            <input
              id='country'
              type='text'
              placeholder='India'
              className='col-span-2 register-form-input'
              {...register('country')}
            />
          </div>
        </>
      )}

      {patientFormStep === 3 && (
        <>
          <p className='text-center pt-14 font-semibold'>
            Kindly upload verifiable documents
            <br />
            &#40;Aadhaar Card, Passport, etc.&#41;
          </p>
          <div className='grid grid-cols-3 pt-4 pb-14 mx-14'>
            <label
              htmlFor='idProof'
              className='font-bold text-lg text-center border-swasthya border border-teal-800 self-center py-3 col-span-3 bg-teal-700 text-white cursor-pointer hover:bg-teal-900 duration-300 transition-all ease-in-out'
            >
              <span className='flex justify-center items-center space-x-3 rounded-xl font-semibold'>
                {fileName ? (
                  <>
                    <span>
                      {fileName.slice(0, 20) +
                        `${fileName.length > 20 && '...'}`}{' '}
                      &#40;{fileSize / 1000}kb&#41;
                    </span>{' '}
                    <TrashIcon className='w-5 h-5' onClick={resetFile} />
                  </>
                ) : (
                  <>
                    <span>Upload Identity Proof</span>{' '}
                    <PaperClipIcon className='h-5 w-5' />
                  </>
                )}
              </span>
            </label>
            <input
              name='idProof'
              id='idProof'
              type='file'
              className='hidden'
              onChange={handleFileUpload}
              key={fileKey}
              accept='.pdf,.docx,.doc,.jpeg,.jpg,.png'
            />
          </div>

          <div className='mx-auto'>
            <Link href='/dashboard'>
              <button className='font-bold w-52 py-2 border-4 border-swasthya border-teal-800 hover:bg-teal-700 hover:text-white hover:scale-110 duration-300 transition-all ease-in-out flex items-center justify-center group'>
                <span>Register</span>
                <ChevronDoubleRightIcon className='w-5 h-5 hidden group-hover:inline-flex transition-all duration-100 ease-in-out' />
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default PatientForm
