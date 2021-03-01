import { InfoOutlineIcon, QuestionIcon, ViewIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Flex, Image, Box, HStack, Button, Heading } from '@chakra-ui/react';
import { openApp, openDoc } from '../lib/links';

export const siteTitle = 'Mooni'

export default function Header() {
  return (
    <Box
      as="header"
      h="75px"
    >
      <Flex
        position="fixed"
        top={0}
        left={0}
        right={0}
        as="nav"
        borderBottom="1px solid"
        borderColor="gray.500"
        bg="sky.600"
        px={['1rem', '2rem']}
        py="1rem"
        justify="space-between"
        align="center"
      >
        <Image
          height={6}
          src="images/mooni_name.svg"
        />

        <HStack
          spacing={4}
          display={{ base: "none", md: "flex" }}
        >
          <Button variant="link" leftIcon={<InfoOutlineIcon/>} colorScheme="purple">About</Button>
          <Button variant="link" leftIcon={<QuestionIcon/>} colorScheme="purple">FAQ</Button>
          <Button variant="link" leftIcon={<ViewIcon/>} colorScheme="purple" onClick={openDoc}>Developers</Button>
          <Button variant="fluo" onClick={openApp}>Use Mooni</Button>
        </HStack>

        <Button
          variant="fluo"
          display={{ base: "block", md: "none" }}
          leftIcon={<ExternalLinkIcon/>}
          onClick={openApp}
        >
          App
        </Button>

      </Flex>
    </Box>
  )
}
