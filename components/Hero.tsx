import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Box, Flex, Heading, VStack, Button } from '@chakra-ui/react';

export const siteTitle = 'Mooni'

export default function Hero({ children, home }) {
  return (
    <Box as="section" h="80vh" py={16}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" layerStyle="appName">MOONI</Heading>
        <Heading as="h2" size="xl">The easiest way to cashout cryptocurrencies</Heading>
        <Heading as="h3" size="md">Mooni is a simple solution to transfer funds from your cryptocurrency wallet to your favorite bank account</Heading>
      </VStack>
    </Box>
  );
}
