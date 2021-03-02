import { Text, Flex, HStack, Image, Wrap, WrapItem, Link, Box, VStack, Heading } from '../components/ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { faDiscord, faGithub, faTwitter, faReddit } from '@fortawesome/free-brands-svg-icons'

import { openTwitter, openDiscord, openGithub, openDoc, openWidgetSDK, openGrant, openReddit } from '../lib/links';

const SectionHead = ({ children }) =>
  <Heading textStyle="h3" fontSize="1.2rem" fontWeight="bold">{children}</Heading>

const SectionLink = ({ children, onClick }) =>
  <Link textStyle="paragraph" onClick={onClick}>{children}</Link>

export default function Header() {
  return (
    <Box
      pt={4}
      as="footer"
    >
      <Wrap
        borderTop="1px solid"
        borderColor="gray.500"
        bg="linear-gradient(110.78deg, rgba(255, 238, 238, 0.68) -3.19%, rgba(255, 115, 117, 0.82) 1.75%, rgba(227, 115, 255, 0.68) 49.98%, rgba(151, 115, 255, 0.76) 68.97%);"
        px={["1rem", "1rem", "2rem", "4rem"]}
        py="1rem"
        justify="space-between"
        wrap="wrap"
        spacing={8}
      >

        <WrapItem>
          <VStack align="left">
            <Flex align="center">
              <Image
                src="images/moon_logo_white.svg"
                boxSize={30}
                mr={4}
              />
              <Text textStyle="appName" fontSize="1.8rem">Mooni</Text>
            </Flex>
            <Text textStyle="h3"  mb={2} fontSize="0.9rem">The easiest crypto off ramp</Text>
            <HStack spacing={3} fontSize="1.5rem">
              <Link onClick={openGithub}><FontAwesomeIcon icon={faGithub}  size="1x"/></Link>
              <Link onClick={openDiscord} pt={0.5}><FontAwesomeIcon icon={faDiscord} size="1x" /></Link>
              <Link onClick={openTwitter}><FontAwesomeIcon icon={faTwitter}  size="1x"/></Link>
              <Link onClick={openReddit}><FontAwesomeIcon icon={faReddit}  size="1x"/></Link>
            </HStack>
          </VStack>
        </WrapItem>

        <WrapItem>
          <Wrap spacing={8} align="start" wrap="wrap">
            <WrapItem>
              <VStack spacing={2} align="start">
                <SectionHead>Community</SectionHead>
                <SectionLink onClick={openTwitter}>Twitter</SectionLink>
                <SectionLink onClick={openDiscord}>Discord</SectionLink>
                <SectionLink onClick={openReddit}>Reddit</SectionLink>
                <SectionLink onClick={openGrant}>Gitcoin grant</SectionLink>
              </VStack>
            </WrapItem>
            <WrapItem>
              <VStack spacing={2} align="start">
                <SectionHead>Developers</SectionHead>
                <SectionLink onClick={openGithub}>Github</SectionLink>
                <SectionLink onClick={openDoc}>Documentation</SectionLink>
                <SectionLink onClick={openWidgetSDK}>Widget SDK</SectionLink>
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
