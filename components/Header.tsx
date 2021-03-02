import { InfoOutlineIcon, QuestionIcon, ViewIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Flex, Link, Image, Box, HStack, Button, Heading } from '../components/ui';
import { openApp, openDoc } from '../lib/links';

export default function Header() {
  return (
    <Box
      as="header"
      h="75px"
    >
      <Flex
        position="fixed"
        zIndex={10}
        top={0}
        left={0}
        right={0}
        as="nav"
        borderBottom="1px solid"
        borderColor="gray.500"
        bg="sky.800"
        px={['1rem', '2rem']}
        py="1rem"
        justify="space-between"
        align="center"
      >
        <Link onClick={() => window.scroll(0, 0)}>
          <Image
            height={6}
            src="images/mooni_name.svg"
          />
        </Link>


        <HStack
          spacing={4}
          display={{ base: "none", md: "flex" }}
        >
          <Link href="#faq">About</Link>
          <Link href="#features">FAQ</Link>
          <Link onClick={openDoc}>Developers</Link>
          <Button variant="fluo" onClick={openApp}>Use Mooni</Button>
        </HStack>

        <Button
          variant="fluo"
          display={{ base: "flex", md: "none" }}
          leftIcon={<ExternalLinkIcon/>}
          onClick={openApp}
        >
          App
        </Button>

      </Flex>
    </Box>
  )
}
