import { Text, Flex, HStack, Image, Wrap, WrapItem, Link, Box, VStack, Heading } from '../components/ui';

const SectionHead = ({ children }) =>
  <Heading textStyle="h3" fontSize="1.2rem" fontWeight="bold">{children}</Heading>

const SectionLink = ({ children }) =>
  <Link textStyle="paragraph">{children}</Link>

export default function Header() {
  return (
    <Box
      as="footer"
    >
      <Wrap
        borderTop="1px solid"
        borderColor="gray.500"
        bg="linear-gradient(110.78deg, rgba(255, 238, 238, 0.68) -3.19%, rgba(255, 115, 117, 0.82) 1.75%, rgba(227, 115, 255, 0.68) 49.98%, rgba(151, 115, 255, 0.76) 68.97%);"
        px={["1rem", "1rem", "2rem"]}
        py="1rem"
        justify="space-between"
        wrap="wrap"
        spacing={8}
      >

        <WrapItem>
          <VStack align="center">
            <Flex align="center">
              <Image
                src="images/moon_logo_white.svg"
                boxSize={30}
                mr={4}
              />
              <Text textStyle="appName" fontSize="1.8rem">Mooni</Text>
            </Flex>
            <Text textStyle="h3" fontSize="0.9rem">The easiest crypto off ramp</Text>
          </VStack>
        </WrapItem>

        <WrapItem>
          <Wrap spacing={8} align="start" wrap="wrap">
            <WrapItem>
              <VStack spacing={2} align="start">
                <SectionHead>Community</SectionHead>
                <SectionLink>Twitter</SectionLink>
                <SectionLink>Discord</SectionLink>
              </VStack>
            </WrapItem>
            <WrapItem>
              <VStack spacing={2} align="start">
                <SectionHead>Developers</SectionHead>
                <SectionLink>Github</SectionLink>
                <SectionLink>Documentation</SectionLink>
                <SectionLink>Widget SDK</SectionLink>
              </VStack>
            </WrapItem>
            <WrapItem>
              <VStack spacing={2} align="start">
                <SectionHead>About</SectionHead>
                <SectionLink>FAQ</SectionLink>
                <SectionLink>Gitcoin grant</SectionLink>
              </VStack>
            </WrapItem>
          </Wrap>
        </WrapItem>
      </Wrap>
      <Box my={4}>
        <Text
          align="center"
          textStyle="paragraph"
          fontSize="sm"
        >
          © 2021 Mooni LLC. All rights reserved
        </Text>
      </Box>
    </Box>
  )
}
