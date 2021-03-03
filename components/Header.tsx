import { useMemo } from 'react'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Button, Flex, Link, Image, Box, HStack } from '../components/ui'
import { AutoLink, AutoButtonLink } from './Links'
import { useScroll } from '../lib/utils'
import { Icon } from './Icons'

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
      borderBottom={scrolled && "1px solid"}
      borderColor="border.300"
    >
      <Flex
        as="nav"
        px={['1rem', '2rem']}
        py="1rem"
        justify="space-between"
        align="center"
      >
        <Link onClick={() => window.scroll(0, 0)}>
          <Flex align="center">
            <Icon
              icon="moon_logo_white"
              size={30}
              mr={4}
            />
            <Image
              height={6}
              src="images/mooni_name.svg"
            />
          </Flex>
        </Link>

        <HStack
          spacing={8}
          display={{ base: "none", md: "flex" }}
        >
          <Button
            as="a"
            variant="link"
            href="#features"
            leftIcon={
              <Icon
                icon={'info'}
                size={4}
              />
            }>
            About
          </Button>
          <Button
            as="a"
            variant="link"
            href="#faq"
            leftIcon={
              <Icon
                icon={'exchange'}
                size={4}
              />
            }>
            FAQ
          </Button>
          <AutoButtonLink
            as="a"
            variant="link"
            to="doc"
            leftIcon={
              <Icon
                icon={'code'}
                size={4}
              />
            }>
            Developers
          </AutoButtonLink>

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
