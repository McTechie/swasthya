// named imports
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='manifest' href='manifest.json' />
        <link rel='apple-touch-icon' href='icon-192x192.png' />
        <meta name='theme-color' content='#333' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
