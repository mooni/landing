import { Box } from '../components/ui'

import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Background from './Background'

export const siteTitle = 'Mooni'

export default function Layout({ children }) {
  return (
    <Box>
      <Background />

      <Box>
        <Header />

        <main>{children}</main>

        <Footer />
      </Box>
    </Box>
  )
}
