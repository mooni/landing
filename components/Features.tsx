import Head from 'next/head'
import Link from 'next/link'

import { Box, Flex, Center, Heading, Image, HStack, Button, Text } from '@chakra-ui/react';

export const siteTitle = 'Mooni'

export default function Features({ reverse }) {
  return (
    <Center
      px={8}
      py={4}
    >
      <Flex
        as="section"
        direction={reverse ? 'row-reverse' : 'row'}
        align="center"
      >
        <Box p={4}>
          <Image
            src="images/distrib.png"
            boxSize={360}
            objectFit="contain"/>
        </Box>
        <Box maxWidth="32rem" p={4}>
          <Heading
            align="center"
            textStyle="h3"
            color="rgba(255, 177, 179, 1)"
          >
            Fast cash out
          </Heading>
          <Text align="center">
            Mooni wants to improve the world of remote working by giving the option for the people that are being paid in crypto to cash out into their bank account so that they can enjoy off-chain and real-world activities with the salary they earn online.
            <br/>
            Want to see how it works ?
          </Text>
        </Box>
      </Flex>
    </Center>
  );
}
