import { Box, VStack, Stack, Heading, Image, Text } from '../components/ui'

function Feature({ image, title, content, reverse= false }) {
  return (
    <Stack
      px={8}
      py={4}
      spacing={8}
      direction={["column", "column", reverse ? 'row-reverse' : 'row']}
      justify="center"
      align="center"
      maxWidth="100%"
    >
        <Image
          src={image}
          boxSize={[120, 200, 320]}
          objectFit="contain"
        />
        <Box maxWidth="32rem" width="100%">
          <Heading
            align="center"
            textStyle="h2"
            color={reverse ? 'orange.600' : 'purple.600'}
            mb={8}
          >
            {title}
          </Heading>
          <Text
            textStyle="paragraph"
            align="center"
          >
            {content}
          </Text>
        </Box>
    </Stack>
  );
}

export default function Features() {
  return (
    <Box as="section" py={8} position="relative">
      <Box
        id="features"
        position="absolute"
        top="-80px"
      />
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
    </Box>
  );
}
