import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Box, Flex, Center, Heading, VStack, Button, Text } from '@chakra-ui/react';

export const siteTitle = 'Mooni'

export default function Features({ children, home }) {
  return (
    <Center
      px={8}
      py={4}
    >
      <Flex
        as="section"
        bg="blue.800"
        p={4}
      >
        <Box>
        </Box>
        <Box>
          <Heading>Fast cash out</Heading>
          <Text>
            Mooni wants to improve the world of remote working by giving the option for the people that are being paid in crypto to cash out into their bank account so that they can enjoy off-chain and real-world activities with the salary they earn online.
            <br/>
            Want to see how it works ?
          </Text>
        </Box>
      </Flex>
    </Center>
  );
}
