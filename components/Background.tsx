import { useMemo } from 'react';
import { useScroll } from '../lib/utils';

import { Center, Box } from '../components/ui'

export default function Background() {
  const scroll = useScroll();
  const moonImage = useMemo(() => scroll > 600 ? 'moonrender6_large' : 'moonrender6', [scroll])

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
      <Box
        bg={`url(images/${moonImage}.png) 50% 0% / contain no-repeat`}
        bgRepeat="no-repeat"
        width="450px"
        height="450px"
        maxWidth="80%"
        maxHeight="80%"
        position="absolute"
        top="120px"
        opacity={0.3}
        // sx={{ "mix-blend-mode": "overlay"}}
      />


    </Center>
  );
}
