import { useMemo } from 'react';
import { useScroll } from '../lib/utils';

import { Center, Box } from '@chakra-ui/react'

export default function Background() {
  const scroll = useScroll();
  const moonImage = useMemo(() => scroll > 600 ? 'moonrender6_large' : 'moonrender6', [scroll])

  return (
    <Center
      zIndex={1}
      position="fixed"
      left={0}
      top={0}
      width="100%"
      height="100%"
    >
      <Box
        bg={`url(images/${moonImage}.png) 50% 0% / contain no-repeat`}
        bgRepeat="no-repeat"
        opacity={0.3}
        width="450px"
        height="450px"
        maxWidth="80%"
        maxHeight="80%"
        position="relative"
        top="-120px"
        sx={{ "mix-blend-mode": "overlay"}}
      />
    </Center>
  );
}
