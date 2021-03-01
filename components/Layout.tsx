import { Flex, Box, Image, Text, Heading, VStack, Button, Stack } from '@chakra-ui/react'

import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Background from './Background'

export const siteTitle = 'Mooni'

export default function Layout({ children }) {
  return (
    <Box position="relative">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="The easiest way to cashout cryptocurrencies"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

        <title>{siteTitle}</title>
      </Head>

      <Background />

      <Box zIndex={2} position="relative">
        <Header />

        <main>{children}</main>

        <Footer />
      </Box>
    </Box>
  )
}
