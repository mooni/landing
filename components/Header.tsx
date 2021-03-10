import { useMemo } from 'react'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Button, Flex, Link, Box, Image, HStack, Text } from './ui'
import { AutoButtonLink } from './Links'
import { useScroll } from '../lib/utils'
import { Icon } from './Icons'

export default function Header() {
  const scroll = useScroll()
  const scrolled = useMemo(() => scroll > 80, [scroll])

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex={10}
      transition="background-color 0.25s ease 0s;"
      bg={scrolled && 'sky.300'}
      sx={scrolled ? { backdropFilter: 'blur(10px)' } : undefined}
      borderBottom={scrolled && '1px solid'}
      borderColor="border.300"
    >
      <Flex
        as="nav"
        px={{ base: '1.5rem', lg: '2rem' }}
        py={{ base: '1rem', lg: '1.5rem' }}
        justify="space-between"
        align="center"
      >
        <Link onClick={() => window.scroll(0, 0)}>
          <Flex align="center">
            <Image
              src="/images/logos/logo_blue_bg.svg"
              boxSize={['2rem', '2rem', '3.5rem']}
              mr={4}
            />
            <Text textStyle="appName">Mooni</Text>
          </Flex>
        </Link>

        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          <Button
            as="a"
            variant="link"
            href="#faq"
            // leftIcon={<Icon icon={'exchange'} size={4} />}
            fontWeight={400}
          >
            FAQ
          </Button>
          <AutoButtonLink
            as="a"
            variant="link"
            to="doc"
            fontWeight={400}
            // leftIcon={<Icon icon={'code'} size={4} />}
          >
            Developers
          </AutoButtonLink>
          <AutoButtonLink
            as="a"
            variant="link"
            to="blog"
            fontWeight={400}
            // leftIcon={<Icon icon={'info'} size={4} />}
          >
            Blog
          </AutoButtonLink>

          <AutoButtonLink variant="fluo" to="app">
            Use Mooni
          </AutoButtonLink>
        </HStack>

        <AutoButtonLink
          variant="fluo"
          display={{ base: 'flex', md: 'none' }}
          leftIcon={<ExternalLinkIcon />}
          to="app"
        >
          App
        </AutoButtonLink>
      </Flex>
    </Box>
  )
}
