import { useState } from 'react';

import { Center, VStack, Image, Heading, Flex, Text, Box, Stack } from '../components/ui'

const Question = ({ children, open, ...props }) => (
  <Box
    bg="yellow.800"
    border="purple"
    color="sky.800"
    px="2rem"
    py="0.5rem"
    borderRadius="12px"
    {...props}
  >
    <Flex justify="space-between" align="center">
      <Text textStyle="caption">
        {children}
      </Text>
      <Image
        src={`icons/${open ? 'arrow_up' : 'arrow_down'}.svg`}
        boxSize={4}
        ml={4}
      />
    </Flex>
  </Box>
);

const BorderGradientBox = ({children, borderRadius = undefined, ...props}) => (
  <Box
    padding="1px"
    layerStyle="gradient"
    borderRadius={borderRadius}
    {...props}
  >
    <Box
      borderRadius={borderRadius}
    >
      {children}
    </Box>
  </Box>
)

const Response = ({ children, ...props }) => (
  <Box
    bg="sky.800"
    px="2rem"
    py="2rem"
    borderRadius="12px"
    maxWidth="100%"
    {...props}
  >
    <Text textStyle="paragraph">
      {children}
    </Text>
  </Box>
);
const QuestionResponse = ({ open, onToggle, question, response }) => (
  <BorderGradientBox
    borderRadius="12px"
    width="100%"
  >
    <Box
      bg="sky.800"
      borderRadius="12px"
    >
      <Question onClick={onToggle} open={open}>
        {question}
      </Question>
      <Response display={open ? 'block' : 'none'}>
        {response}
      </Response>
    </Box>
  </BorderGradientBox>
);

const list = [
  {
    key: 'wallet',
    question: 'What kind of wallet can I use ?',
    response: 'Most common web3-compatible wallet can be used. As now, you can use Metamask, Portis, Fortmatic, WalletConnect, Coinbase Wallet, Trust Wallet...',
  },
  {
    key: 'currency',
    question: 'Wfdsfoijdsqf ?',
    response: 'dqsfsqdf comqdssdqson web3-dqsdfqsdsq walleqst can be used. As now, you can use Metamask, Pfdsqfqsg Wallet, df Wallet...',
  },
];

export default function FAQ() {
  const [selectedQuestion, setSelectedQuestion] = useState<string|null>(null);

  return (
    <Flex as="section" py={8} align="center" direction="column" position="relative">
      <Box
        id="faq"
        position="absolute"
        top="-80px"
      />
      <Text textStyle="h2" textAlign="center" mb={2}>
        Frequently Asked Questions
      </Text>
      <Text
        textStyle="h4"
        textAlign="center"
        mb={4}
      >
        Want to know more ? We may have an answer !
      </Text>

      <VStack spacing={4} mt={4} maxWidth="xl" width="95%">
        {list.map(item => (
          <QuestionResponse
            key={item.key}
            open={selectedQuestion === item.key}
            question={item.question}
            response={item.response}
            onToggle={() => setSelectedQuestion((selectedQuestion === item.key) ? null : item.key)}
          />
        ))}
      </VStack>
    </Flex>
  );
}
