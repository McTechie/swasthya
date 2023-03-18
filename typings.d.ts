type Appointment = {
  appointmentId: number;
  doctor: string;
  patient: string;
  providerId: string;
  patientId: string;
  location: string;
  ailment: string;
  symptoms: string;
  date: string;
  time: string;
  consultationFee: number;
  reports: {[key: number]: string};
}
