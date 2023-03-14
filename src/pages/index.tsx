// type imports
import type { NextPage } from 'next'

// name imports
import { BaseLayout } from '../layouts'
import { Section } from '../components'

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Section
        title='Bridging The Gap'
        content='Blockchain maintains the integrity of health records while establishing a single point of truth. Doctors, hospitals and laboratories can all request patient information that has a record of origin and protects the patient s identity from outside sources!'
        imgPath='/home/section1.svg'
        btnText='Get Started'
        link='/login'
      />

      <Section
        title='Powered By Blockchain'
        content='Keeping medical data safe and secure is the most popular blockchain healthcare application at the moment, which isn’t surprising. Security is a major issue in the healthcare industry.'
        imgPath='/home/section2.svg'
        btnText='Know How?'
        link='/about'
        isReversed
      />

      <Section
        title='Fast & Secure'
        content='A Blockchain network is used in the healthcare system to preserve and exchange patient data through hospitals, diagnostic laboratories, pharmacy firms, and physicians. Blockchain applications can accurately identify severe mistakes and even dangerous ones in the medical field.'
        imgPath='/home/section3.svg'
        btnText='Learn More'
        link='/about'
      />
    </BaseLayout>
  )
}

export default Home
