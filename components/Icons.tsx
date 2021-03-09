import { Image } from './ui'

export const Icon = ({ icon, size, ...props }) => (
  <Image src={`icons/${icon}.svg`} boxSize={size} {...props} />
)
