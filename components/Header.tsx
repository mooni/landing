import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Flex, Box, HStack, Button, Heading } from '@chakra-ui/react';

export const siteTitle = 'Mooni'

export default function Header({ children, home }) {
  return (
    <Box
      as="header"
      borderBottom="1px solid white"
    >
      <Flex
        px="1rem"
        py="0.5rem"
        justify="space-between"
      >
        <Heading
          layerStyle="appName"
        >
          MOONI
        </Heading>

        <HStack spacing={4}>
          <Button variant="link" colorScheme="purple">About</Button>
          <Button variant="link" colorScheme="purple">FAQ</Button>
          <Button variant="link" colorScheme="purple">Developers</Button>
          <Button variant="solid" colorScheme="purple">Use Mooni</Button>
        </HStack>
      </Flex>
    </Box>
  )
}
