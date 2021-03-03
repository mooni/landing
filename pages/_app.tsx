import Head from 'next/head'
import { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"

import chakraTheme from '../theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192"  href="favicons/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="favicons/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png"/>

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;300;400;700&display=swap" rel="stylesheet"/>

        {process.env.ENABLE_ANALYTICS &&
        <script
          async
          defer
          data-domain="mooni.tech"
          src="https://plausible.mooni.tech/js/plausible.js"
          integrity="sha384-A95mlioU57RAFEh+gc9a71Kc08jTjT+ESRKYiJtPoN5ZRsMiDDCWdHQWGk1Q4YGP"
          crossOrigin="anonymous"
        />
        }
      </Head>

      <ChakraProvider theme={chakraTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App