type AppointmentListItem = {
  id: string;
  providerId: string;
  doctor: string;
  ailment: string;
  date: string;
  time: string;
}

type Appointment = {
  providerId: string;
  patientId: string;
  doctor: string;
  ailment: string;
  date: string;
  time: string;
  consultationFee: number;
  report: FileList;
}
