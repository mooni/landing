import Head from 'next/head'
import Link from 'next/link'

import { Wrap, WrapItem, Box, Flex, Image, Text, Heading, VStack, Button, HStack, Stack } from '@chakra-ui/react'

export const siteTitle = 'Mooni'

export default function Hero() {
  return (
    <Box as="section" minHeight="80vh" py={16} px={4}>
      <VStack spacing={8}>
        <Image
          src="images/moonrender6.png"
          boxSize={400}
          objectFit="contain"
        />
        <Heading
          as="h2"
          textStyle="h2"
          size="xl"
          align="center"
          bgGradient="linear-gradient(110.78deg, rgba(255, 238, 238, 0.68) -3.19%, rgba(255, 115, 117, 0.82) 1.75%, rgba(227, 115, 255, 0.68) 49.98%, rgba(151, 115, 255, 0.76) 68.97%);"
          bgClip="text"
        >
          The easiest way to cashout cryptocurrencies
        </Heading>
        <Heading
          textStyle="h4"
          as="h4"
          size="md"
          align="center"
        >
          Convert between cryptocurrencies in your blockchain wallet to fiat in your bank account, within minutes, without registration.
        </Heading>
        <Stack
          direction={["column", "row"]}
          spacing={4}
          justify="center"
          width="90%"
          maxWidth="25rem"
        >
          <Button variant="fluo">Use Mooni</Button>
          <Button variant="white">
            <Text
              bgGradient="linear-gradient(110.78deg, rgba(255, 238, 238, 0.68) -3.19%, rgba(255, 115, 117, 0.82) 1.75%, rgba(227, 115, 255, 0.68) 49.98%, rgba(151, 115, 255, 0.76) 68.97%);"
              bgClip="text"
            >
              Integrate it
            </Text>
          </Button>
        </Stack>
      </VStack>
    </Box>
  );
}
