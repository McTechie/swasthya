interface AppointmentDetailsProps {
  selectedAppointment: Appointment | null
  handleHideAppointmentDetails: () => void
}

const AppointmentDetails = ({ selectedAppointment, handleHideAppointmentDetails }: AppointmentDetailsProps) => {
  console.log(selectedAppointment)

  return (
    <section>
      <button onClick={() => handleHideAppointmentDetails()}>
        Back
      </button>
    </section>
  )
}

export default AppointmentDetails
