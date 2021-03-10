import { Box, Flex, VStack, Link, Stack, Heading, Image, Text } from '../ui'

function Feature({ image, title, content, reverse = false }) {
  return (
    <Stack
      py={4}
      spacing={8}
      direction={['column', 'column', reverse ? 'row-reverse' : 'row']}
      justify="center"
      align="center"
    >
      {image}
      <Box width="100%">
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
          // align={reverse ? 'left' : 'right'}
        >
          {content}
        </Box>
      </Box>
    </Stack>
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
    >
      <Box id="features" position="absolute" top="-80px" />
      <VStack spacing={8} maxWidth="6xl" width="100%">

        <Feature
          title="The missing off-ramp"
          image={
            <Image
              src="images/gifs/ATM.gif"
              boxSize={[180, 220, 320]}
              objectFit="contain"
            />
          }
          content={
            <>
              <Text>
                There is a growing number of platforms which allows to easily{' '}
                <b>generate revenue online</b> for anyone in the world. Most of
                these platforms integrate on-ramping services to onboard new
                users, but <b>do not propose</b> a solution to off-ramp when
                they want to exit.
              </Text>
              <Text mt={2}>
                Creating an account, passing KYC verifications, depositing
                coins, exchanging and withdrawing fiat on centralised exchanges
                is a long and tedious process. Mooni{' '}
                <b>removes this friction</b> by proposing a <b>quick</b>,{' '}
                <b>non-custodial</b> and <b>KYC-less</b> checkout, like an ATM.
              </Text>
            </>
          }
        />

        <Feature
          title="For decentralised workers"
          image={
            <Image
              src="images/illus/astro_code.png"
              boxSize={[220, 300, 320]}
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
              <Text mt={2}>
                Mooni <b>supports most of the tokens</b> in the{' '}
                <b>Ethereum DeFi</b> ecosystem as a payment, and can easily be
                integrated into any dApp.
              </Text>
              <Text mt={2}>
                Engage now in the{' '}
                <Link
                  to="https://gitcoin.co/vision"
                  isExternal
                  color="purple.600"
                >
                  <b>Future of Work</b>
                </Link>{' '}
                while keeping your <b>favorite bank account</b> with you.
              </Text>
            </>
          }
          reverse
        />
      </VStack>
    </Flex>
  )
}
