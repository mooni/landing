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
        bg="radial-gradient(82.17% 210.37% at 0.59% 2.48%, #0F214D 0%, #11224D 97.19%)"
      />
      <Box
        position="absolute"
        bg="url(images/stars.png) repeat"
        width="100%"
        height="100%"
      />

    </Center>
  );
}
