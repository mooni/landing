import {
  Text,
  Flex,
  HStack,
  Wrap,
  WrapItem,
  Box,
  VStack,
  Heading,
} from '../components/ui'
import { AutoLink } from './Links'
import { Icon } from './Icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDiscord,
  faGithub,
  faTwitter,
  faReddit,
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

const SectionHead = ({ children }) => (
  <Heading as="h3" textStyle="h3">
    {children}
  </Heading>
)

const SectionLink = ({ children, to, ...props }) => (
  <AutoLink textStyle="normal" to={to} {...props}>
    {children}
  </AutoLink>
)

export default function Footer() {
  return (
    <Box mt={4} as="footer" layerStyle="gradientTransparent">
      <Wrap
        sx={{ 'backdrop-filter': 'blur(4px)' }}
        px={['1rem', '1rem', '2rem', '4rem']}
        justify="space-between"
        wrap="wrap"
        spacing={8}
        py={8}
      >
        <WrapItem>
          <VStack align="left">
            <Flex align="center">
              <Icon icon="moon_logo_white" size={30} mr={4} />
              <Text textStyle="appName">Mooni</Text>
            </Flex>
            <Text textStyle="appPunchline" mb={2}>
              The easiest crypto off ramp
            </Text>
            <HStack spacing={3} fontSize="1.5rem">
              <AutoLink to="github">
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </AutoLink>
              <AutoLink to="discord" pt={0.5}>
                <FontAwesomeIcon icon={faDiscord} size="1x" />
              </AutoLink>
              <AutoLink to="twitter">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </AutoLink>
              <AutoLink to="reddit">
                <FontAwesomeIcon icon={faReddit} size="1x" />
              </AutoLink>
              <AutoLink to="mail">
                <FontAwesomeIcon icon={faEnvelope} size="1x" />
              </AutoLink>
            </HStack>
          </VStack>
        </WrapItem>

        <WrapItem>
          <Wrap spacing={8} align="start" wrap="wrap">
            <WrapItem>
              <VStack spacing={2} align="start">
                <SectionHead>About</SectionHead>
                <SectionLink to="blog">Blog</SectionLink>
                <SectionLink to="grant">Gitcoin grant</SectionLink>
              </VStack>
            </WrapItem>
            <WrapItem>
              <VStack spacing={2} align="start">
                <SectionHead>Community</SectionHead>
                <SectionLink to="twitter">Twitter</SectionLink>
                <SectionLink to="discord">Discord</SectionLink>
                <SectionLink to="reddit">Reddit</SectionLink>
              </VStack>
            </WrapItem>
            <WrapItem>
              <VStack spacing={2} align="start">
                <SectionHead>Developers</SectionHead>
                <SectionLink to="github">Github</SectionLink>
                <SectionLink to="doc">Documentation</SectionLink>
                <SectionLink to="widgetSDK">Widget SDK</SectionLink>
              </VStack>
            </WrapItem>
          </Wrap>
        </WrapItem>
      </Wrap>
      <Text align="center" textStyle="normal" fontSize="sm" pb={8}>
        © 2021 Mooni LLC. All rights reserved
      </Text>
    </Box>
  )
}
