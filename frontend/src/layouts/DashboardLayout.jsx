import { DashNav, SidebarNav, InfoBot, DashFooter } from '../components'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <DashNav />

      <main className='w-full flex max-w-6xl'>
        <SidebarNav />
        <div className='flex-1'>{children}</div>
      </main>

      <InfoBot />
      <DashFooter />
    </div>
  )
}

export default DashboardLayout
