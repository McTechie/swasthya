// type imports
import type { NextPage } from 'next'

// named imports
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  useAddress,
  useContract,
  useMintNFT,
} from '@thirdweb-dev/react'

// default imports
import Image from 'next/image'

const CreateAppointment: NextPage = () => {
  // react hook form
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<Appointment>()

  // web3 hooks
  const address = useAddress()

  const { contract } = useContract(process.env.NEXT_PUBLIC_COLLECTION_CONTRACT)
  const { mutateAsync: mintNft, isLoading: isMinting } = useMintNFT(contract)

  // set provider id initially
  useEffect(() => {
    if (address) {
      setValue('providerId', address)
    }
  }, [address, setValue])

  const handleMintNFT: SubmitHandler<Appointment> = async (data) => {
    if (address) {
      console.log('data', data)

      const metadata = {
        name: `Appointment_${data.providerId}`,
        properties: data,
      }

      try {
        const tx = await mintNft({
          to: data.patientId,
          metadata,
        })

        console.log('tx', tx)
      } catch (error) {
        console.log('error', error)
      }
    }
  }

  return (
    <section className='my-6'>
      <h3 className={`text-center text-2xl mt-4 ${(address || !isMinting) ? 'mb-8' : 'mb-0'}`}>
        Create an Appointment
      </h3>

      {(!address || isMinting) && (
        <div className='flex items-center justify-center'>
          <Image
            src='https://cdn.hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif'
            alt='Loading...'
            width={140}
            height={140}
          />
        </div>
      )}

      <form
        onSubmit={handleSubmit(handleMintNFT)}
        className='flex flex-col space-y-4 lg:space-y-6 mx-4 lg:max-w-screen-sm lg:mx-auto'
      >
        <div>
          <label htmlFor='providerId' hidden>
            Healthcare Provider ID
          </label>
          <input
            type='text'
            id='providerId'
            disabled={true}
            placeholder='Healthcare Provider ID'
            {...register('providerId', { required: true })}
            className='w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none disabled:opacity-50 disabled:bg-gray-400'
          />
        </div>
        
        <div>
          <label htmlFor='patientId' hidden>
            Patient ID
          </label>
          <input
            type='text'
            id='patientId'
            placeholder='Patient ID'
            {...register('patientId', { required: true })}
            className='w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none'
          />
        </div>

        <div>
          <label htmlFor='doctor' hidden>
            Doctor Name
          </label>
          <input
            type='text'
            id='doctor'
            placeholder='Doctor Name'
            {...register('doctor', { required: true })}
            className='w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none'
          />

          {errors.doctor && (
            <p className='text-red-500 text-sm'>
              Please enter the doctor&apos;s name.
            </p>
          )}
        </div>

        <div>
          <label htmlFor='ailment' hidden>
            Ailment
          </label>
          <input
            type='text'
            id='ailment'
            placeholder='Ailment'
            {...register('ailment', { required: true })}
            className='w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none'
          />

          {errors.ailment && (
            <p className='text-red-500 text-sm'>
              Please enter an ailment.
            </p>
          )}
        </div>

        <div>
          <label htmlFor='date' hidden>
            Date
          </label>
          <input
            type='date'
            id='date'
            placeholder='Date'
            {...register('date', { required: true })}
            className='w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none'
          />

          {errors.date && (
            <p className='text-red-500 text-sm'>
              Please choose a date.
            </p>
          )}
        </div>

        <div>
          <label htmlFor='time' hidden>
            Time
          </label>
          <input
            type='time'
            id='time'
            placeholder='Time'
            {...register('time', { required: true })}
            className='w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none'
          />

          {errors.time && (
            <p className='text-red-500 text-sm'>
              Please choose a time.
            </p>
          )}
        </div>

        <div>
          <label htmlFor='consultationFee' hidden>
            Consultation Fee
          </label>
          <input
            type='number'
            id='consultationFee'
            placeholder='Consultation Fee (in Rupees)'
            {...register('consultationFee', { valueAsNumber: true, required: true })}
            className='w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none'
          />

          {errors.consultationFee && (
            <p className='text-red-500 text-sm'>
              Please enter a consultation fee.
            </p>
          )}
        </div>

        <div>
          <label htmlFor='report' hidden>
            Attach a Report
          </label>
          <input
            type='file'
            id='report'
            placeholder='Attach a Report'
            {...register('report')}
            className='w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none'
          />

          {errors.report && (
            <p className='text-red-500 text-sm'>
              Please enter a consultation fee.
            </p>
          )}
        </div>

        <button
          type='submit'
          className='bg-indigo-500 hover:bg-indigo-600 animate text-white font-semibold py-2 px-4 rounded'
        >
          Create Appointment
        </button>
      </form>
    </section>
  )
}

export default CreateAppointment
