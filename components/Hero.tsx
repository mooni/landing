import { Flex, Box, Image, Button, Heading, VStack, Stack, Center } from '../components/ui'
import { openDoc, openApp } from '../lib/links'

export default function Hero() {
  // const scroll = useScroll();
  // const a = Math.max(Math.min(50 + scroll, 400), 50);
  // const b = (a-50)/(400-50);
  // const leftAstro = b * 100 * 0.4 + 10;

  return (
    <Box as="section">
      <VStack spacing={8} py={16} px={4}>
        {/*<Flex
          align="center"
          position="absolute"
          top={100}
          sx={{ "mix-blend-mode": "hard-light"}}
          opacity={0.3}
          display="none"
        >
          <Image
            src="images/moonrender6_large.png"
            boxSize={500}
          />
        </Flex>*/}
        <Heading
          as="h2"
          size="xxl"
          textAlign="center"
          bgGradient="linear-gradient(110.78deg, rgba(255, 238, 238, 0.68) -3.19%, rgba(255, 115, 117, 0.82) 1.75%, rgba(227, 115, 255, 0.68) 49.98%, rgba(151, 115, 255, 0.76) 68.97%);"
          bgClip="text"
          fontFamily="'Lato', sans-serif"
          fontWeight={700}
          fontSize={{base: "2rem", sm: "3rem", md: "4rem"}}
          maxWidth="50rem"
        >
          The easiest way to cashout cryptocurrencies
        </Heading>
        <Heading
          as="h4"
          size="md"
          textAlign="center"
          fontFamily="'Montserrat Alternates', sans-serif"
          fontWeight={300}
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
            onClick={openDoc}
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
