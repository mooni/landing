import Head from 'next/head'
import Link from 'next/link'

import { InfoOutlineIcon, QuestionIcon, ViewIcon } from '@chakra-ui/icons'
import { Flex, Image, Box, HStack, Button, Heading } from '@chakra-ui/react';

export const siteTitle = 'Mooni'

export default function Header() {
  return (
    <header>
      <Flex
        as="nav"
        borderBottom="1px solid white"
        borderColor="gray.500"
        bg="sky"
        px="2rem"
        py="1rem"
        justify="space-between"
        align="center"
      >
        <Image
          height={8}
          src="images/mooni_name.svg"
        />

        <HStack
          spacing={4}
          display={{ base: "none", md: "flex" }}
        >
          <Button variant="link" leftIcon={<InfoOutlineIcon/>} colorScheme="purple">About</Button>
          <Button variant="link" leftIcon={<QuestionIcon/>} colorScheme="purple">FAQ</Button>
          <Button variant="link" leftIcon={<ViewIcon/>} colorScheme="purple">Developers</Button>
          <Button variant="fluo">Use Mooni</Button>
        </HStack>
      </Flex>
    </header>
  )
}
