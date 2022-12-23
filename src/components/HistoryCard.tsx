import { Heading, HStack, Text, VStack } from 'native-base'

export function HistoryCard() {
  return (
    <HStack
      w="full"
      px={5}
      py={4}
      mb={3}
      bg="gray.600"
      rounded="md"
      justifyContent="space-between"
      alignItems="center"
    >
      <VStack mr={5} flex={1}>
        <Heading
          fontFamily="heading"
          fontSize="md"
          color="white"
          textTransform="capitalize"
          numberOfLines={1}
        >
          Costas
        </Heading>
        <Text
          fontFamily="body"
          fontSize="lg"
          color="gray.100"
          numberOfLines={1}
        >
          Puxada frontal
        </Text>
      </VStack>

      <Text fontFamily="body" fontSize="md" color="gray.300">
        08:56
      </Text>
    </HStack>
  )
}
