import {
  Box,
  Flex,
  AspectRatio,
  VStack,
  Link,
  Stack,
  Heading,
  Image,
  Text,
} from '../ui'

function Feature({ image, title, content, reverse = false }) {
  return (
    <Flex
      py={[8, 8, 16]}
      direction={['column', 'column', reverse ? 'row-reverse' : 'row']}
      justify="center"
      align="center"
    >
      <Box
        mb={[0, 0, 16]}
        my={[16, 8, 0]}
        mx={[0, 0, 8, 16]}
      >
        {image}
      </Box>
      <Box
        width="100%"
        maxW="512px"
      >
        <Heading
          as="h2"
          textAlign="center"
          textStyle="h2"
          color={reverse ? 'orange.600' : 'purple.600'}
          mb={8}
        >
          {title}
        </Heading>
        <Box
          textStyle="normal"
          align="center"
        >
          {content}
        </Box>
      </Box>
    </Flex>
  )
}

export default function Features() {
  return (
    <Flex
      as="section"
      py={8}
      px={[8, 12, 16]}
      position="relative"
      justify="center"
      direction="column"
    >
      <Box id="features" position="absolute" top="-80px" />
      <Flex direction="column" maxWidth="6xl" width="100%">
        <Feature
          title="The missing off-ramp"
          image={
            <AspectRatio width={['220px', '250px', '320px']} ratio={1}>
              <video autoPlay loop muted>
                <source src="images/gifs/ATM.webm" type="video/webm" />
              </video>
            </AspectRatio>
          }
          content={
            <>
              <Text>
                There are plenty of on-ramps out there allowing you to enter the
                crypto space, but <b>very little that allow you to cash out</b> and exit
                the market, aside from ATMs or crypto debit cards which aren’t fitted
                for all life situations, and centralized exchanges forcing you into a
                KYC / AML verifications process that takes ages, puts your personal
                information in jeopardy, and your crypto assets under custody.
              </Text>
            </>
          }
        />

        <Feature
          title="For decentralised workers"
          image={
            <Image
              src="images/illus/astro_code.webp"
              boxSize={['220px', '300px', '320px']}
              objectFit="contain"
            />
          }
          content={
            <>
              <Text>
                Whether you are making a living on <b>bounties</b>,{' '}
                <b>trading</b>, <b>lending</b>, <b>NFT art</b>, or a{' '}
                <b>decentralized finance</b> power user, Mooni is the place
                where you will be able to cash out your revenues and{' '}
                <b>spend in real life</b>. Because most day-to-day spendings
                like groceries, rent or health insurance still need to be paid
                in fiat.
              </Text>
            </>
          }
          reverse
        />
      </Flex>

      <Text
        mt={2}
        textAlign="center"
        textStyle="caption"
      >
        Engage now in the{' '}
        <Link
          to="https://gitcoin.co/vision"
          isExternal
          color="purple.600"
        >
          Future of Work
        </Link>{' '}
        while keeping your favorite bank account with you.
      </Text>
    </Flex>
  )
}
