import React from 'react';
import { Button as ChakraButton, Text } from '@chakra-ui/react'

export * from '@chakra-ui/react'

export const Button = ({ variant, children, ...props }) => (
  <ChakraButton
    variant={variant}
    {...props}
  >
    <Text
      bgGradient={variant === "white" ? "linear-gradient(110.78deg, rgba(255, 238, 238, 0.68) -3.19%, rgba(255, 115, 117, 0.82) 1.75%, rgba(227, 115, 255, 0.68) 49.98%, rgba(151, 115, 255, 0.76) 68.97%);" : undefined}
      bgClip={variant === "white" ? "text" : undefined}
    >
      {children}
    </Text>
  </ChakraButton>
)

