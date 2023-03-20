type Appointment = {
  appointmentId: number;
  doctor: string;
  patient: string;
  doctorId: string;
  patientId: string;
  location: string;
  ailment: string;
  symptoms: string;
  date: string;
  time: string;
  consultationFee: number;
  reports: {[key: number]: string};
}
