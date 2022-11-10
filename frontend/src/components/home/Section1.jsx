import { useRouter } from 'next/router'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid'

const Section1 = () => {
  const router = useRouter()

  const handleNavigation = () => {
    router.push('/dashboard')
  }

  return (
    <section>
      <div className='grid grid-cols-2 mt-10 p-20 mb-20'>
        <motion.div
          className='p-5 relative bottom-20'
          viewport={{ once: true }}
          whileInView={{
            scale: [0.5, 1],
            x: [-100, 0],
            opacity: [0, 1],
            transition: { duration: 1 }
          }}
        >
          <Image
            src='/section1.svg'
            alt='Graphic'
            width={500}
            height={500}
            priority
          />
        </motion.div>

        <motion.div
          className='flex flex-col pr-6'
          viewport={{ once: true }}
          whileInView={{
            scale: [0.8, 1],
            x: [100, 0],
            opacity: [0, 1],
            transition: { duration: 1 }
          }}
        >
          <h2 className='text-6xl text-teal-800 opacity-80 text-right pb-10'>
            Hello, Swasthya
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

            <button onClick={handleNavigation} className='section-btn'>
              Get Started
              <ArrowRightCircleIcon className='h-5 w-5 ml-2' />
            </button>
          </div>
        </motion.div>
      </div>

      {/* wave animations */}
      <div className='hidden md:block -hue-rotate-15 absolute -bottom-32 left-0 w-full h-20 bg-transparent overflow-x-clip -z-10'>
        <div className='wave -hue-rotate-15' />
        <div className='wave -hue-rotate-45' />
        <div className='wave rotate-90 relative top-40' />
      </div>
    </section>
  )
}

export default Section1
