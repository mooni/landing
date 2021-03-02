import { Button, Link } from './ui'

const links = {
  app: 'https://app.mooni.tech',
  doc: 'https://doc.mooni.tech',
  widgetSDK: 'https://doc.mooni.tech/frontend-integration',
  discord: 'https://discord.mooni.tech',
  twitter: 'https://twitter.com/moonidapp',
  reddit: 'https://reddit.com/r/mooni',
  github: 'https://github.com/pakokrew/mooni',
  grant: 'https://gitcoin.co/grants/225/mooni-the-easiest-crypto-off-ramp',
};

export const AutoLink = ({ to, children, ...props }) => (
  <Link
    href={links[to]}
    isExternal
    {...props}
  >
    {children}
  </Link>
)
export const AutoButtonLink = ({ to, children, ...props }) => (
  <Button
    as="a"
    href={links[to]}
    isExternal
    target="_blank"
    {...props}
  >
    {children}
  </Button>
)