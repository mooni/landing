import { Flex, Box, Image, Button, Heading, VStack, Stack, Center } from '../components/ui'
import { openWidgetSDK, openApp } from '../lib/links'

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
          bgGradient="linear-gradient(110.78deg, rgba(255, 238, 238, 0.68) -3.19%, rgba(255, 115, 117, 0.82) 1.75%, rgba(227, 115, 255, 0.68) 49.98%, rgba(151, 115, 255, 0.76) 68.97%);"
          bgClip="text"
          fontSize={{base: "2rem", sm: "3rem", md: "4rem"}}
          maxWidth="50rem"
        >
          The easiest way to cashout cryptocurrencies
        </Heading>
        <Heading
          as="h4"
          textStyle="h4"
          textAlign="center"
          fontSize={{base: "0.9rem", sm: "1rem", md: "1.2rem"}}
          maxWidth="50rem"
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
          <Button
            variant="fluo"
            onClick={openApp}
          >
            Use Mooni
          </Button>
          <Button
            variant="white"
            onClick={openWidgetSDK}
          >
            Integrate it
          </Button>
        </Stack>
      </VStack>
      <Center>
        <Box
          bg={`url(images/cityrender3.png) center no-repeat`}
          bgRepeat="no-repeat"
          height="450px"
          width="100%"
        />
      </Center>
    </Box>
  );
}
