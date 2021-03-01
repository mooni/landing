import Head from 'next/head'
import Link from 'next/link'

import { Box, Flex, VStack, Center, Heading, Image, HStack, Button, Text } from '@chakra-ui/react';

export const siteTitle = 'Mooni'

function Feature({ image, title, content, reverse }) {
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
            src={image}
            boxSize={360}
            objectFit="contain"/>
        </Box>
        <Box maxWidth="32rem" p={4}>
          <Heading
            align="center"
            textStyle="h3"
            color={reverse ? 'rgba(198, 178, 255, 1)' : 'rgba(255, 177, 179, 1)'}
          >
            {title}
          </Heading>
          <Text align="center">
            {content}
          </Text>
        </Box>
      </Flex>
    </Center>
  );
}

export default function Features() {
  return (
    <VStack spacing={8}>
      <Feature
        title="Fast cash out"
        image="images/distrib.png"
        content={
          <>
            Mooni wants to improve the world of remote working by giving the option for the people that are being paid in crypto to cash out into their bank account so that they can enjoy off-chain and real-world activities with the salary they earn online.
            <br/>
            Want to see how it works ?
          </>
        }
      />
      <Feature
        title="For decentralised workers"
        image="images/astro5.png"
        reverse
        content={
          <>
            Many platforms today enable people to generate revenue in crypto online, from anywhere in the world, without entry barriers, such as:  Gitcoin, Ethlance, Origin, Cryptocribs, Idle.finance, Pool together.
            <br/>
            The universe of the things we can buy with crypto is expanding, but today, it is still hard to spend a living with it. Things like groceries, rents or health insurance still requires to have a bank account and fiat.
          </>
        }
      />
    </VStack>
  );
}
