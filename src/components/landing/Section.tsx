// named imports
import { m } from 'framer-motion'
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid'

// defalut imports
import Image from 'next/image'
import Link from 'next/link'

interface SectionProps {
  title: string
  content: string
  imgPath: string
  link: string
  btnText: string
  isReversed?: boolean
}

const Section = ({ title, content, imgPath, link, btnText, isReversed }: SectionProps) => {
  return (
    <section className={`px-10 py-14 md:px-20 md:py-44 grid grid-cols-1 md:grid-cols-2 ${
      isReversed ? 'bg-indigo-100 text-gray-600' : 'bg-white text-emerald-600'
    }`}>
      <m.div
        initial={!isReversed ? { opacity: 0, x: -100 } : { opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
        viewport={{ once: true }}
        className='mx-auto'
      >
        <Image
          src={imgPath}
          alt='Graphic'
          width={500}
          height={500}
          priority={!isReversed}
        />
      </m.div>

      <m.div
        initial={!isReversed ? { opacity: 0, x: 100 } : { opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
        viewport={{ once: true }}
        className={`${
          isReversed && '-order-1'
        }`}
      >
        <h2 className={`text-3xl md:text-6xl pb-10 ${
          !isReversed ? 'text-right' : 'text-left'
        }`}>
          {title.split(' ')[0]}
          {title.split(' ')[1] && (
            <span className='text-indigo-400 md:px-2'>
              {title.split(' ')[1]}
            </span>
          )}
          {title.split(' ')[2]}
        </h2>

        <div className={`leading-10 flex flex-col ${
          !isReversed ? 'items-end text-right' : 'items-start text-left'
        }`}>
          <p>
            {content}
          </p>

          <Link href={link}>
            <button className='section-btn'>
              {btnText}
              <ArrowRightCircleIcon className='h-5 w-5 ml-2' />
            </button>
          </Link>
        </div>
      </m.div>
    </section>
  )
}

export default Section
