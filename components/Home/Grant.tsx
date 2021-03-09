import { Box, Flex, Stack, Image, Text } from '../ui'
import { AutoButtonLink } from '../Links'

export default function Grant() {
  return (
    <Box as="section" py={8} id="grant">
      <Stack
        px={8}
        py={4}
        spacing={8}
        direction={['column', 'column', 'row']}
        justify="center"
        align="center"
      >
        <Image
          src="images/planet_grant.png"
          boxSize={[120, 200, 320]}
          objectFit="contain"
        />
        <Flex maxWidth="3xl" align="center" direction="column">
          <Text textStyle="normal" align="center">
            Mooni has been <b>community-funded</b> from day 1, without VCs, and
            will remain as such.
            <br />
            If you want to support the development of this project,{' '}
            <b>we're hosting a grant on Gitcoin</b>.
            <br />
            During CLR rounds, donations are quadratically matched !
          </Text>
          <AutoButtonLink variant="white" mt={8} to="grant">
            Donate
          </AutoButtonLink>
        </Flex>
      </Stack>
    </Box>
  )
}
