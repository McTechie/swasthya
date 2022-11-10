import Link from 'next/link'

const LoginForm = () => {
  return (
    <div className='m-auto col-span-2 bg-white py-11 px-10 w-[30rem] h-[40rem] shadow-lg border-b-8 border-teal-700'>
      <h1 className='text-3xl text-slate-600 font-bold text-center'>
        Sign in to your account
      </h1>

      {/* steps to sign in here */}

      <div className='flex justify-center items-center h-2/3 my-10'>
        <Link href='/auth'>
          <button className='bg-gray-200 scale-on-hover rounded-lg px-10 py-4 text-gray-600'>
            Login with your wallet!
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LoginForm
