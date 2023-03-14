// default imports
import Image from 'next/image'

const BrandFooter = () => {
  return (
    <div className='text-gray-400 opacity-95 bg-slate-800 text-center px-4 pt-16 pb-24 text-xs md:text-sm lg:text-base flex flex-col items-center lg:flex-row justify-around group'>
      <div>
        &copy; <span className='font-bold group-hover:text-white'>Swasthya</span> 2023
      </div>

      <div className='flex flex-col md:flex-row'>
        <span>const madeWith = &#40;</span>
        
        <div className='flex items-center justify-center my-4 md:my-0'>
          <svg className='h-6 px-1 fill-gray-400 group-hover:fill-white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path d='M352.4 243.8l-49.83 99.5c-6.009 12-23.41 11.62-28.92-.625L216.7 216.3l-30.05 71.75L88.55 288l176.4 182.2c12.66 13.07 33.36 13.07 46.03 0l176.4-182.2l-112.1 .0052L352.4 243.8zM495.2 62.86c-54.36-46.98-137.5-38.5-187.5 13.06L288 96.25L268.3 75.92C218.3 24.36 135.2 15.88 80.81 62.86C23.37 112.5 16.84 197.6 60.18 256h105l35.93-86.25c5.508-12.88 23.66-13.12 29.54-.375l58.21 129.4l49.07-98c5.884-11.75 22.78-11.75 28.67 0l27.67 55.25h121.5C559.2 197.6 552.6 112.5 495.2 62.86z'/></svg>,
          
          <svg className='h-6 px-1 fill-gray-400 group-hover:fill-white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 488 512'><path d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'/></svg>,
          
          <svg className='h-6 px-1 fill-gray-400 group-hover:fill-white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M400 192H32C14.25 192 0 206.3 0 224v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.75 0 112-50.25 112-112S461.8 192 400 192zM400 352H384V256h16C426.5 256 448 277.5 448 304S426.5 352 400 352zM107.9 100.7C120.3 107.1 128 121.4 128 136c0 13.25 10.75 23.89 24 23.89S176 148.1 176 135.7c0-31.34-16.83-60.64-43.91-76.45C119.7 52.03 112 38.63 112 24.28c0-13.25-10.75-24.14-24-24.14S64 11.03 64 24.28C64 55.63 80.83 84.92 107.9 100.7zM219.9 100.7C232.3 107.1 240 121.4 240 136c0 13.25 10.75 23.86 24 23.86S288 148.1 288 135.7c0-31.34-16.83-60.64-43.91-76.45C231.7 52.03 224 38.63 224 24.28c0-13.25-10.75-24.18-24-24.18S176 11.03 176 24.28C176 55.63 192.8 84.92 219.9 100.7z'/></svg>
        </div>
        
        &#41; =&gt; &nbsp;
        <span>&#123; A <span className='px-2 font-bold group-hover:text-white'> Nextwave </span> Creation &#125;</span>
      </div>

      <div className='flex items-center'>
        <span className='pr-2'>Powered by</span>&nbsp;
        <Image
          src='/vercel.svg'
          alt='Vercel'
          width={60}
          height={35}
          className='opacity-60 group-hover:opacity-100 invert'
        />
      </div>
    </div>
  )
}
 
export default BrandFooter
