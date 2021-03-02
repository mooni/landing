import { useMemo } from 'react'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Flex, Link, Image, Box, HStack, Button } from '../components/ui';
import { openApp, openDoc } from '../lib/links';
import { useScroll } from '../lib/utils'

export default function Header() {
  const scroll = useScroll();
  const scrolled = useMemo(() => scroll > 200, [scroll]);

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex={10}
      transition="background-color 0.25s ease 0s;"
      bg={scrolled && 'sky.800'}
      borderBottom={scrolled && "1px solid rgb(41, 44, 47)"}
    >
      <Flex
        as="nav"
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
          spacing={6}
          display={{ base: "none", md: "flex" }}
        >
          <Link href="#features">About</Link>
          <Link href="#faq">FAQ</Link>
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
