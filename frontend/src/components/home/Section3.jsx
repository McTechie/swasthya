import { useRouter } from 'next/router'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid'

const Section3 = () => {
  const router = useRouter()

  const handleSignIn = () => {
    router.push('/login')
  }

  return (
    <section className='overflow-hidden my-40'>
      <div className='grid grid-cols-2 px-6'>
        <motion.div
          className='p-5'
          viewport={{ once: true }}
          whileInView={{
            scale: [0.5, 1],
            x: [-100, 0],
            opacity: [0, 1],
            transition: { duration: 1 }
          }}
        >
          <Image
            src='/section3.svg'
            alt='Graphic'
            width={550}
            height={550}
            priority
          />
        </motion.div>

        <motion.div
          className='flex flex-col pr-20'
          viewport={{ once: true }}
          whileInView={{
            scale: [0.8, 1],
            x: [100, 0],
            opacity: [0, 1],
            transition: { duration: 1 }
          }}
        >
          <h2 className='text-6xl text-teal-800 opacity-80 text-right pb-10'>
            Fast &amp; Secure
          </h2>

          <div className='flex flex-col items-end leading-10'>
            <p className='text-teal-700 text-right'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit! Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Ex suscipit
              eveniet architecto reprehenderit, quidem maiores maxime
              perferendis quae nobis ad! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Eum tenetur assumenda id totam animi nesciunt,
              tempore sint dolorem est voluptate.
            </p>

            <button onClick={handleSignIn} className='section-btn'>
              <div className='flex space-x-3'>
                Learn More
                <ArrowRightCircleIcon className='h-5 w-5 ml-2' />
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Section3
