// type imports
import type { NextPage } from 'next'

// named imports
import { CreateAppointment } from '../components'
import { DashboardLayout } from '../layouts'

const Create: NextPage = () => {
  return (
    <DashboardLayout>
      <CreateAppointment />
    </DashboardLayout>
  )
}

export default Create
