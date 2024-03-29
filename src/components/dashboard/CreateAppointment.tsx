// type imports
import type { NextPage } from 'next'

// named imports
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BrowserQRCodeReader } from '@zxing/browser'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast, Toaster } from 'react-hot-toast'
import { useCipher } from '../../hooks'
import {
  useAddress,
  useContract,
  useMintNFT,
} from '@thirdweb-dev/react'

// default imports
import Image from 'next/image'

type FormValues = {
  doctor: string;
  patient: string;
  email: string;
  location: string;
  date: string;
  time: string;
  ailment: string;
  symptoms: string;
  consultationFee: number;
  reports: FileList;
}

const codeReader = new BrowserQRCodeReader()

const CreateAppointment: NextPage = () => {
  // next router
  const router = useRouter()

  // scanned patient id
  const [patientId, setPatientId] = useState<string>('')

  // react hook form
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>()

  // web3 hooks
  const address = useAddress()

  const { contract } = useContract(process.env.NEXT_PUBLIC_COLLECTION_CONTRACT)
  const { mutateAsync: mintNft, isLoading: isMinting } = useMintNFT(contract)

  const handleMintNFT: SubmitHandler<FormValues> = async (data) => {
    const notification = toast.loading('Creating appointment...', {
      style: {
        background: '#059669',
        color: '#fff',
      }
    })

    if (address) {
      const doctorMetadata = {
        name: `Appointment_${address}`,
        properties: {
          ...data,
          appointmentId: Date.now(),
          patientId: patientId,
          doctorId: address,
        },
      }

      const patientMetadata = {
        name: `Appointment_${patientId}`,
        propeirtes: {
          ...data,
          appointmentId: Date.now(),
          patientId: patientId,
          doctorId: address,
        },
      }

      try {
        // Step 1: Mint NFTs for both the doctor and patient
        await mintNft({
          to: patientId,
          metadata: patientMetadata,
        })

        await mintNft({
          to: address,
          metadata: doctorMetadata,
        })
    
        // Step 2: Send an email to the patient
        const response = await fetch('/api/mail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            doctor: data.doctor,
            patient: data.patient,
            email: data.email,
            date: data.date,
          }),
        })

        if (response.status === 200) {          
          toast.success('Appointment created!', {
            id: notification,
            duration: 5000,
          })

          reset()
          setPatientId('')
          router.push('/dashboard')
        } else {          
          toast.error('Something went wrong, please try again later.', {
            id: notification,
            duration: 5000,
          })
        }
      } catch (error) {
        console.log('error', error)
      }
    }
  }

  // initially, scan the patient's QR code to get their address
  useEffect(() => {
    const handleScan = async () => {
      const result = await codeReader.decodeOnceFromVideoDevice(undefined, 'video')
      
      const deciphered = useCipher(result.getText(), false)

      setPatientId(deciphered)
    }

    handleScan()
  }, [codeReader, setPatientId])

  return (
    <section className='my-6'>
      <Toaster position='bottom-right' />

      {patientId === '' ? (
        <>
          <h3 className={`text-center text-2xl mt-4 ${(address || !isMinting) ? 'mb-8' : 'mb-0'}`}>
            Scan Patient&apos;s QR
          </h3>

          <div className='max-w-screen-lg mx-auto'>
            <video id='video' />
          </div>
        </>
      ) : (
        <>
          <h3 className={`text-center text-2xl mt-4 ${(address || !isMinting) ? 'mb-4' : 'mb-0'}`}>
            Enter Appointment Details
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
              <label htmlFor='doctor' hidden>
                Your Name
              </label>
              <input
                type='text'
                id='doctor'
                placeholder='Your name'
                {...register('doctor', { required: true })}
                className='w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none'
              />

              {errors.doctor && (
                <p className='text-red-500 text-sm'>
                  Please enter your name.
                </p>
              )}
            </div>

            <div>
              <label htmlFor='patient' hidden>
                Patient&apos;s Name
              </label>
              <input
                type='text'
                id='patient'
                placeholder='Patient&apos;s name'
                {...register('patient', { required: true })}
                className='w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none'
              />

              {errors.patient && (
                <p className='text-red-500 text-sm'>
                  Please enter patient&apos;s name.
                </p>
              )}
            </div>

            <div>
              <label htmlFor='email' hidden>
                Patient&apos;s Email address
              </label>
              <input
                type='text'
                id='email'
                placeholder='Patient&apos;s email address'
                {...register('email', { required: true })}
                className='w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none'
              />

              {errors.date && (
                <p className='text-red-500 text-sm'>
                  Please enter patient&apos;s email.
                </p>
              )}
            </div>

            <div>
              <label htmlFor='location' hidden>
                Location
              </label>
              <input
                type='text'
                id='location'
                placeholder='Location'
                {...register('location', { required: true })}
                className='w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none'
              />

              {errors.date && (
                <p className='text-red-500 text-sm'>
                  Please enter the location.
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
              <label htmlFor='symptoms' hidden>
                Symptoms &#40;separated by commas&#41;
              </label>
              <input
                type='text'
                id='symptoms'
                placeholder='Symptoms &#40;comma-separated&#41;'
                {...register('symptoms', { required: true })}
                className='w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none'
              />

              {errors.symptoms && (
                <p className='text-red-500 text-sm'>
                  Please enter symptoms of the ailment.
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
              <label htmlFor='reports' hidden>
                Attach a Report
              </label>
              <input
                multiple
                type='file'
                accept='.pdf'
                id='reports'
                placeholder='Attach a Report'
                {...register('reports')}
                className='w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none'
              />
            </div>

            <button
              type='submit'
              className='bg-indigo-500 hover:bg-indigo-600 animate text-white font-semibold py-2 px-4 rounded'
            >
              Create Appointment
            </button>
          </form>
        </>
      )}
    </section>
  )
}

export default CreateAppointment
