// type imports
import type { AppProps } from 'next/app'

// named imports
import { domAnimation, LazyMotion } from 'framer-motion'
import { ThirdwebProvider } from '@thirdweb-dev/react'

// style imports
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain='mumbai'>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
    </ThirdwebProvider>
  )
}

export default MyApp
