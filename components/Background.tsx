import { Center, Box } from '../components/ui'

export default function Background() {
  return (
    <Center
      position="fixed"
      left={0}
      top={0}
      width="100%"
      height="100%"
      zIndex={-1}
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        layerStyle="skyGradient"
      />
      <Box
        position="absolute"
        bg="url(images/stars.png) repeat"
        width="100%"
        height="100%"
        opacity={0.7}
      />
    </Center>
  )
}
