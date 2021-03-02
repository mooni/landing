import { Box, Heading, VStack, Stack, Center } from '../components/ui'
import React from 'react'
import { AutoButtonLink } from './Links'

export default function Hero() {
  // const scroll = useScroll();
  // const a = Math.max(Math.min(50 + scroll, 400), 50);
  // const b = (a-50)/(400-50);
  // const leftAstro = b * 100 * 0.4 + 10;

  return (
    <Box as="section">
      <VStack spacing={8} py={16} px={4}>
        <Box
          bg={`url(images/moonrender6_large.png) 50% 0% / contain no-repeat`}
          bgRepeat="no-repeat"
          width="450px"
          height="450px"
          maxWidth="80%"
          maxHeight="80%"
          position="absolute"
          top="120px"
          opacity={0.1}
          zIndex={-1}
          // sx={{ "mix-blend-mode": "overlay"}}
        />
        <Heading
          as="h1"
          textStyle="h1"
          textAlign="center"
          layerStyle={"textGradient"}
          fontSize={{base: "2rem", sm: "3rem", md: "4rem"}}
          maxWidth="50rem"
        >
          Easy crypto cash out
        </Heading>
        <Heading
          as="h4"
          textStyle="h4"
          textAlign="center"
          fontSize={{base: "0.9rem", sm: "1rem", md: "1.2rem"}}
          maxWidth="50rem"
        >
          Convert between cryptocurrencies in your blockchain wallet to fiat in your bank account, within minutes.
        </Heading>
        <Stack
          direction={["column", "row"]}
          spacing={4}
          justify="center"
          width="90%"
          maxWidth="25rem"
        >
          <AutoButtonLink
            variant="fluo"
            to="app"
          >
            Use Mooni
          </AutoButtonLink>
          <AutoButtonLink
            variant="white"
            to="widgetSDK"
          >
            Integrate it
          </AutoButtonLink>
        </Stack>
      </VStack>
      <Center>
        <Box
          bg={`url(images/cityrender4.png) center no-repeat`}
          bgRepeat="no-repeat"
          height="450px"
          width="100%"
        />
      </Center>
    </Box>
  );
}
