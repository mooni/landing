import { useMemo } from 'react'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Flex, Link, Image, Box, HStack } from '../components/ui'
import { AutoLink, AutoButtonLink } from './Links'
import { useScroll } from '../lib/utils'

export default function Header() {
  const scroll = useScroll();
  const scrolled = useMemo(() => scroll > 80, [scroll]);

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex={10}
      transition="background-color 0.25s ease 0s;"
      bg={scrolled && 'sky.300'}
      sx={scrolled ? { 'backdrop-filter': 'blur(10px)' } : undefined}
      borderBottom={scrolled && "1px solid #d5d8da75"}
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
          spacing={8}
          display={{ base: "none", md: "flex" }}
        >
          <Link href="#features">About</Link>
          <Link href="#faq">FAQ</Link>
          <AutoLink to="doc">Developers</AutoLink>
          <AutoButtonLink
            variant="fluo"
            to="app"
          >
            Use Mooni
          </AutoButtonLink>
        </HStack>

        <AutoButtonLink
          variant="fluo"
          display={{ base: "flex", md: "none" }}
          leftIcon={<ExternalLinkIcon/>}
          to="app"
        >
          App
        </AutoButtonLink>

      </Flex>
    </Box>
  )
}
