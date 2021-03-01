import { Box, Image, Text, Heading, VStack, Button, Stack } from '@chakra-ui/react'

export default function Hero() {
  return (
    <Box as="section">
      <VStack spacing={8} py={16} px={4}>
        <Image
          src="images/moonrender6.png"
          boxSize={300}
          objectFit="contain"
        />
        <Heading
          as="h2"
          size="xxl"
          textAlign="center"
          bgGradient="linear-gradient(110.78deg, rgba(255, 238, 238, 0.68) -3.19%, rgba(255, 115, 117, 0.82) 1.75%, rgba(227, 115, 255, 0.68) 49.98%, rgba(151, 115, 255, 0.76) 68.97%);"
          bgClip="text"
          fontFamily="'Lato', sans-serif"
          fontWeight={700}
          fontSize="4rem"
        >
          The easiest way to cashout cryptocurrencies
        </Heading>
        <Heading
          as="h4"
          size="md"
          textAlign="center"
          fontFamily="'Montserrat Alternates', sans-serif"
          fontWeight={300}
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
      <Image
        src="images/cityrender2.png"
        width="100%"
      />
    </Box>
  );
}
