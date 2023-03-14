import useState from 'react-usestateref'

type Message = {
  key: number,
  text: any,
  msgByBot: boolean
}

const Chatbot = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages, messagesRef] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const [messageByBot, setMessageByBot] = useState(false)

  const fetchData = async () => {
    setLoading(true)

    const myMessage = {
      text: input,
      key: new Date().getTime(),
      msgByBot: false
    }
    
    setMessages(messages => [...messages, myMessage])
    // setMessages([...messagesRef.current, myMessage])

    const response = await fetch('/api/generate-answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: input
      })
    })

    const data = await response.json()
    setLoading(false)

    if (data.text) {
      const botMessage = {
        text: data.text,
        key: Date.now(),
        msgByBot: true
      }
      setMessages([...messagesRef.current, botMessage])
      setMessageByBot(true)
    } else {
      console.log('Error occured')
    }
  }

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      fetchData()
    }
  }

  return (
    <div className='grid grid-cols-1 p-6 lg:p-20 border-4 border-gray-300 rounded-lg m-20 h-screen'>
      <div className='m-6 bottom-0 right-0 col-span-1'>
        <h2 className='text-3xl font-bold text-indigo-600'>
          Need Help?
        </h2>

        <div>
          <h2 className='text-xl my-3'>
            Ask us anything!
          </h2>
          <div className='mx-auto mt-4 flex flex-col h-[30rem] overflow-y-scroll'>
            <p className='bg-indigo-600 p-4 rounded-r-3xl rounded-b-3xl font-semibold text-lg mb-5 text-white'>
              Welcome to our site! If you need any help or check symptoms, we are online and ready to help you!
            </p>

            <div className='space-y-5'>
              {messages?.map(msg => (
                msg.msgByBot ? (
                  <p
                    key={msg.key}
                    className={`bg-indigo-600 p-4 rounded-r-3xl rounded-b-3xl font-semibold text-lg text-white`}
                  >
                    {msg.text.text}
                  </p>
                ) : (
                  <p
                    key={msg.key}
                    className={`bg-emerald-500 p-4 rounded-l-3xl rounded-b-3xl font-semibold text-lg text-white`}
                  >
                    {msg.text}
                  </p>
                )
              ))}
            </div>
          </div>

          <div className='z-30 bottom-20  mt-10'>
            <input
              onKeyDown={(e) => handleKeyDown(e)}
              onChange={(e) => setInput(e.target.value)}
              className='px-4 w-full py-3 focus:outline-none rounded-lg border border-indigo-800'
              type='text'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chatbot
