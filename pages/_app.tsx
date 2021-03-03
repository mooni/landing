import Head from 'next/head'
import { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"

import chakraTheme from '../theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      </Head>

      <ChakraProvider theme={chakraTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App