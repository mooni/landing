import { Box, Heading, VStack, Stack, Center } from '../ui'
import React from 'react'
import { AutoButtonLink } from '../Links'

export default function Hero() {
  // const scroll = useScroll();
  // const a = Math.max(Math.min(50 + scroll, 400), 50);
  // const b = (a-50)/(400-50);
  // const leftAstro = b * 100 * 0.4 + 10;

  return (
    <Box as="section">
      <VStack spacing={8} py={16} px={4}>
        <Box
          bg={`url(images/illus/moonrender5.webp) 50% 0% / contain no-repeat`}
          width="350px"
          height="350px"
          maxWidth="80%"
          maxHeight="80%"
          position="absolute"
          top="120px"
          opacity={0.3}
          zIndex={-1}
          // sx={{ "mix-blend-mode": "overlay"}}
        />
        <Heading
          as="h1"
          textStyle="h1"
          textAlign="center"
          layerStyle={'textGradient'}
          fontSize={{ base: '2rem', sm: '3rem', md: '4rem' }}
          maxWidth="50rem"
        >
          Easiest crypto cash out
        </Heading>
        <Heading
          as="h4"
          textStyle="h4"
          textAlign="center"
          fontSize={{ base: '0.9rem', sm: '1rem', md: '1.2rem' }}
          maxWidth="50rem"
        >
          Effortlessly convert <b>cryptocurrencies</b> from your blockchain
          wallet, into <b>fiat</b> to your bank account, within minutes.
        </Heading>
        <Stack
          direction={['column', 'row']}
          spacing={4}
          justify="center"
          width="90%"
          maxWidth="25rem"
        >
          <AutoButtonLink variant="fluo" to="app">
            Use Mooni
          </AutoButtonLink>
          <AutoButtonLink variant="white" to="widgetSDK">
            Integrate it
          </AutoButtonLink>
        </Stack>
      </VStack>
      <Center>
        <Box
          bg={`url(images/illus/cityrender6_mooni.webp)`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          height="350px"
          width="100%"
          maxWidth="1146px"
        />
      </Center>
    </Box>
  )
}
