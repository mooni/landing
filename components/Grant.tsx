import { openGrant } from '../lib/links'
import { Box, Flex, Button, Stack, Image, Text } from '../components/ui';

export default function Grant() {
  return (
    <Box as="section" py={8} id="grant">
      <Stack
        px={8}
        py={4}
        spacing={8}
        direction={["column", "column", "row"]}
        justify="center"
        align="center"
      >
        <Image
          src="images/planet_grant.png"
          boxSize={[120, 200, 320]}
          objectFit="contain"
        />
        <Flex maxWidth="32rem" align="center" direction="column">
          <Text
            textStyle="paragraph"
            align="center"
          >
            We're hosting a grant on Gitcoin, where anyone can participate to the funding of this project. During CLR rounds, donations are quadraticly matched !
          </Text>
          <Button
            variant="white"
            onClick={openGrant}
            mt={8}
          >
            Donate
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
}
