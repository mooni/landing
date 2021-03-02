import React from 'react';
import { Button as ChakraButton, Text } from '@chakra-ui/react'

export * from '@chakra-ui/react'

export const Button = ({ variant, children, ...props }) => (
  <ChakraButton
    variant={variant}
    {...props}
  >
    <Text
      layerStyle={variant === 'white' ? "textGradient" : undefined}
      fontSize="1.3rem"
      lineHeight="24px"
      marginBottom="2px"
      textTransform="lowercase"
      sx={{'font-variant': 'small-caps'}}
    >
      {children}
    </Text>
  </ChakraButton>
)

