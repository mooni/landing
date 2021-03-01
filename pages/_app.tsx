import { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"

import chakraTheme from '../theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={chakraTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App