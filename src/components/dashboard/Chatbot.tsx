// named imports
import { useState } from 'react'
import { ChatBubbleBottomCenterTextIcon, XMarkIcon } from '@heroicons/react/20/solid'

// default imports
import Image from 'next/image'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  const handleToggleChat = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <div className='fixed bottom-5 right-5 flex flex-col items-end space-y-2'>
      {isOpen && (
        <div className='bg-gray-100 rounded-lg shadow-xl border-2 border-indigo-500 p-4 max-w-xs'>
          <div className='flex items-center mb-2'>
            <div className='rounded-full border-2 p-1 border-emerald-500'>
              <Image
                src='/logo.png'
                alt='Chatbot'
                width={30}
                height={30}
              />
            </div>
            <div className='ml-2'>
              <h3 className='text-sm font-medium '>Swasthya Bot</h3>
              <p className='text-xs text-emerald-500'>Online</p>
            </div>
          </div>

          <div className='max-h-72 overflow-y-scroll'>
            <div className='mt-4 bg-indigo-500 text-white p-2 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl border-2'>
              <p className='text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                quod, voluptate, quia, voluptates quas voluptatibus.
              </p>
            </div>
            <div className='mt-4 bg-indigo-50 border-indigo-400 p-2 rounded-br-2xl rounded-bl-2xl rounded-tl-2xl border-2'>
              <p className='text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                quod, voluptate, quia, voluptates quas voluptatibus.
              </p>
            </div>
            <div className='mt-4 bg-indigo-500 text-white p-2 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl border-2'>
              <p className='text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                quod, voluptate, quia, voluptates quas voluptatibus.
              </p>
            </div>
            <div className='mt-4 bg-indigo-50 border-indigo-400 p-2 rounded-br-2xl rounded-bl-2xl rounded-tl-2xl border-2'>
              <p className='text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                quod, voluptate, quia, voluptates quas voluptatibus.
              </p>
            </div>
            <div className='mt-4 bg-indigo-500 text-white p-2 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl border-2'>
              <p className='text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                quod, voluptate, quia, voluptates quas voluptatibus.
              </p>
            </div>
            <div className='mt-4 bg-indigo-50 border-indigo-400 p-2 rounded-br-2xl rounded-bl-2xl rounded-tl-2xl border-2'>
              <p className='text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                quod, voluptate, quia, voluptates quas voluptatibus.
              </p>
            </div>
            <div className='mt-4 bg-indigo-500 text-white p-2 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl border-2'>
              <p className='text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                quod, voluptate, quia, voluptates quas voluptatibus.
              </p>
            </div>
            <div className='mt-4 bg-indigo-50 border-indigo-400 p-2 rounded-br-2xl rounded-bl-2xl rounded-tl-2xl border-2'>
              <p className='text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                quod, voluptate, quia, voluptates quas voluptatibus.
              </p>
            </div>
          </div>

          <input
            type='text'
            className='text-xs mt-4 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-indigo-500'
            placeholder='Type your message...'
          />
        </div>
      )}

      <div>
        <button
          className='p-2 bg-indigo-600 text-white rounded-full cursor-pointer md:hover:bg-indigo-700'
          onClick={() => handleToggleChat()}
        >
          {isOpen ? (
            <XMarkIcon className='h-5 w-5' />
          ) : (
            <ChatBubbleBottomCenterTextIcon className='h-5 w-5' />
          )}
        </button>
      </div>
    </div>
  )
}

export default Chatbot
