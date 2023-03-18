// named imports
import { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'
import { config } from 'dotenv'

config() // necessary to work with env files

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.user,
    pass: process.env.password,
  },
})

export default async function contact (req: NextApiRequest, res: NextApiResponse) {
  const { doctor, patient, email, date } = req.body

  // html template for mail being sent to user
  const userMailFormattedHtml = `
    <p>Dear <strong>${patient}</strong>,</p>
    <p>We're glad to inform you that your appointment details dated <strong>${date}</strong> have been added by <strong>Dr. ${doctor}</strong> 😄</p>
    <p>Kindly check your dashboard for more details via <strong><a href="https://swasthya.vercel.app/login">Swasthya Portal</a></strong>.</p>
    <p>Wishing you good health ~</p>
    <p>Warm Regards,<br>Team Swasthya<br>(McTechie)</p>
  `

  const userMailData = {
    from: process.env.user, // sender address
    to: email,
    subject: 'Appointment Added 🚀 | Swasthya', // subject line
    html: userMailFormattedHtml, // html body
  }

  try {
    
    const userMailInfo = await transporter.sendMail(userMailData) // trigger mail request to user
    
    return res.status(200).end(JSON.stringify({
      message: 'Success',
      messageId: userMailInfo.messageId
    }))

  } catch (err) {

    console.log(err)
    
    return res.status(500).end(JSON.stringify({
      message: 'Could not send mail'
    }))

  }
}
