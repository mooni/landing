import { Text, Wrap, WrapItem, Link, Box, VStack, Heading } from '@chakra-ui/react';


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
        bg="sky"
        px="2rem"
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
          <Box>
            <SectionHead>Mooni LLC</SectionHead>
            <Text>Sheridan, WY, USA</Text>
            <Text>© 2021</Text>
          </Box>
        </WrapItem>


      </Wrap>
    </Box>
  )
}
