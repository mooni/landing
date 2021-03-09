import { useState } from 'react'

import { VStack, Image, Flex, Text, Box } from '../ui'
import { AutoLink } from '../Links'
import { Icon } from '../Icons'

const Question = ({ children, open, ...props }) => (
  <Box
    bg="yellow.800"
    border="purple"
    color="sky.800"
    px="2rem"
    py="0.5rem"
    borderRadius="12px"
    cursor="pointer"
    {...props}
  >
    <Flex justify="space-between" align="center">
      <Text textStyle="caption">{children}</Text>
      <Icon icon={open ? 'arrow_up' : 'arrow_down'} size={4} ml={4} />
    </Flex>
  </Box>
)

const BorderGradientBox = ({
  children,
  borderRadius = undefined,
  ...props
}) => (
  <Box
    padding="1px"
    layerStyle="gradient"
    borderRadius={borderRadius}
    {...props}
  >
    <Box borderRadius={borderRadius}>{children}</Box>
  </Box>
)

const Response = ({ children, ...props }) => (
  <Box
    bg="sky.800"
    px="2rem"
    py="1.5rem"
    borderRadius="12px"
    maxWidth="100%"
    {...props}
  >
    <Text textStyle="normal">{children}</Text>
  </Box>
)
const QuestionResponse = ({ open, onToggle, question, response }) => (
  <BorderGradientBox borderRadius="12px" width="100%">
    <Box bg="sky.800" borderRadius="12px">
      <Question onClick={onToggle} open={open}>
        {question}
      </Question>
      <Response display={open ? 'block' : 'none'}>{response}</Response>
    </Box>
  </BorderGradientBox>
)

const list = [
  {
    key: 'wallet',
    question: 'What kind of wallet can I use ?',
    response:
      'Most Ethereum wallets can be used, like Metamask or any wallet that supports WalletConnect.',
  },
  {
    key: 'currency',
    question: 'How much can I transfer ?',
    response:
      'As we don’t require KYC verification, exchanges are currently limited to approximately 1000€ per day. The maximum annual amount is 100.000€.',
  },
  {
    key: 'currencies',
    question: 'Which cryptocurrencies are supported ?',
    response:
      'Currently, Mooni supports all Ether and ERC-20 tokens. L2s and other blockchains such as Matic, xDai, and Bitcoin will be supported soon.',
  },
  {
    key: 'cost',
    question: 'How much does it cost ?',
    response:
      'Our base fee is 2.8% per transaction. It may depend on the exchanged amount, the exact amount is displayed on the app when placing an order. You also have to pay for blockchain transaction fees which can vary depending on market conditions.',
  },
  {
    key: 'regulation',
    question: 'Is it financially regulated ?',
    response:
      'As we limit orders to small amounts, and only propose cryptocurrency selling, this allows us to bypass full KYC verifications. Exchanges and bank transfers are managed by third-party brokers which are FCA compliant.',
  },
]

export default function FAQ() {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null)

  return (
    <Flex
      as="section"
      py={8}
      align="center"
      direction="column"
      position="relative"
    >
      <Box id="faq" position="absolute" top="-80px" />
      <Text textStyle="h2" textAlign="center" mb={2}>
        Frequently Asked Questions
      </Text>
      <Text textStyle="h4" textAlign="center" mb={4}>
        Are you looking for answers ?
      </Text>

      <VStack spacing={4} mt={4} maxWidth="xl" width="95%">
        {list.map((item) => (
          <QuestionResponse
            key={item.key}
            open={selectedQuestion === item.key}
            question={item.question}
            response={item.response}
            onToggle={() =>
              setSelectedQuestion(
                selectedQuestion === item.key ? null : item.key
              )
            }
          />
        ))}
      </VStack>

      <Text textStyle="small" textAlign="center" mt={4}>
        You can always reach us on <AutoLink to="discord">Discord</AutoLink> if
        you have any other questions 😇
      </Text>
    </Flex>
  )
}
