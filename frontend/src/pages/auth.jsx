import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Navbar, PatientForm, DoctorForm } from '../components'
import axios from 'axios'

import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon
} from '@heroicons/react/24/outline'

const SignupPage = () => {
  // user states
  const [userRole, setUserRole] = useState('patient')
  const [patientFormStep, setPatientFormStep] = useState(1)
  // const [doctorFormStep, setDoctorFormStep] = useState(1)

  // id proof upload states
  const [, setFileUploadStatus] = useState(100)
  const [fileName, setFileName] = useState('')
  const [fileKey, setFileKey] = useState(Date.now())
  const [fileSize, setFileSize] = useState(0)
  const [fileNotUploaded, setFileNotUploaded] = useState(false)

  // form submission states
  // const [showFormSubmissionMssg, setShowFormSubmissionMssg] = useState(false)
  // const [formSubmissionStatus, setFormSubmissionStatus] = useState(100)
  // const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const handlePreviousPatientFormStep = () => {
    setPatientFormStep(patientFormStep => patientFormStep - 1)
  }

  const handleNextPatientFormStep = () => {
    setPatientFormStep(patientFormStep => patientFormStep + 1)
  }

  const resetFile = () => {
    setFileKey(Date.now())
    setFileName('')
    setFileSize(0)
  }

  const handleFileUpload = async event => {
    setFileNotUploaded(false)

    const url = process.env.NEXT_PUBLIC_API_ENDPOINT_ID_UPLOAD

    const file = event.target.files[0]

    if (file) {
      // if (file.size > 2_000_000) {
      //   alert('Upload a file with a maximum size of 2MB')
      //   return
      // }

      setFileSize(file.size)
      setFileName(file.name)

      const resumeProcessed = new FormData()
      resumeProcessed.append('file', file)

      try {
        const response = await axios.post(url, resumeProcessed)
        setFileUploadStatus(response.status)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const submitData = data => {
    console.log(data)
  }

  return (
    <div>
      <Navbar hideLinks={true} />

      <main className='bg-teal-600 min-h-screen mt-20 py-14'>
        <h3 className='text-center text-3xl text-white'>
          Let&apos;s Get You Started
        </h3>
        <div className='max-w-sm mx-auto mt-5'>
          <select
            id='userRole'
            className='w-full register-form-input focus:ring-0'
            onChange={event => setUserRole(event.target.value)}
          >
            <option value='patient'>Patient</option>
            <option value='doctor'>Doctor</option>
          </select>
        </div>
        <form
          onSubmit={handleSubmit(submitData)}
          className='max-w-2xl mx-auto bg-white mt-8 px-20 pb-12 border-swasthya shadow-md text-teal-700'
        >
          {userRole === 'patient' && (
            <div className='flex justify-center mb-8 pt-8'>
              <h4 className='font-bold flex items-center space-x-4'>
                <button
                  type='button'
                  onClick={handlePreviousPatientFormStep}
                  className={`${
                    patientFormStep === 1 ? 'invisible' : 'visible'
                  }`}
                >
                  <ArrowLeftCircleIcon className='h-8 w-8' />
                </button>

                <span>
                  Step {patientFormStep}:{' '}
                  {patientFormStep === 1
                    ? 'Personal Details'
                    : patientFormStep === 2
                    ? 'Contact Details'
                    : 'Identity Proof'}
                </span>

                <button
                  type='button'
                  onClick={handleNextPatientFormStep}
                  className={`${
                    patientFormStep === 3 ? 'invisible' : 'visible'
                  }`}
                >
                  <ArrowRightCircleIcon className='h-8 w-8' />
                </button>
              </h4>
            </div>
          )}

          {userRole === 'patient' ? (
            <PatientForm
              register={register}
              errors={errors}
              patientFormStep={patientFormStep}
              fileName={fileName}
              fileKey={fileKey}
              fileSize={fileSize}
              handleFileUpload={handleFileUpload}
              resetFile={resetFile}
              fileNotUploaded={fileNotUploaded}
            />
          ) : (
            <DoctorForm register={register} errors={errors} />
          )}
        </form>
      </main>
    </div>
  )
}

export default SignupPage
