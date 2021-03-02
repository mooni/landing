import { Text, Flex, Image, Wrap, WrapItem, Link, Box, VStack, Heading } from '../components/ui';


const SectionHead = ({ children }) =>
  <Heading as="h4" fontSize="1.2rem" fontWeight="bold">{children}</Heading>

export default function Header() {
  return (
    <Box
      as="footer"
    >
      <Wrap
        borderTop="1px solid"
        borderColor="gray.500"
        bg="sky.800"
        px={["1rem", "1rem", "4rem"]}
        py="1rem"
        justify="space-between"
        wrap="wrap"
        spacing={8}
      >
        <WrapItem>
          <Wrap spacing={8} align="start" wrap="wrap">
            <WrapItem>
              <VStack spacing={2} align="start">
                <SectionHead>Community</SectionHead>
                <Link>Twitter</Link>
                <Link>Discord</Link>
              </VStack>
            </WrapItem>
            <WrapItem>
              <VStack spacing={2} align="start">
                <SectionHead>Developers</SectionHead>
                <Link>Github</Link>
                <Link>Documentation</Link>
                <Link>Widget SDK</Link>
              </VStack>
            </WrapItem>
            <WrapItem>
              <VStack spacing={2} align="start">
                <SectionHead>About</SectionHead>
                <Link>FAQ</Link>
                <Link>Gitcoin grant</Link>
              </VStack>
            </WrapItem>
          </Wrap>
        </WrapItem>
        <WrapItem>
          <Flex>
            <Box>
              <Image
                src="images/moon_logo_white.svg"
                boxSize={50}
                mx={4}
                mt={2}
              />
            </Box>
            <Box fontSize="sm">
              <Text>© 2021 Mooni LLC</Text>
              <Text>Sheridan, WY, USA</Text>
              <Text mt={2}>All rights reserved</Text>
            </Box>
          </Flex>
        </WrapItem>
      </Wrap>
    </Box>
  )
}
