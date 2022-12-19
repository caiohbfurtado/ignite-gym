import { IPressableProps, Pressable, Text } from 'native-base'

type Props = IPressableProps & {
  name: string
  isSelected: boolean
}

export function GroupButton({ name, isSelected, ...rest }: Props) {
  return (
    <Pressable
      bg="gray.800"
      alignSelf="flex-start"
      px={7}
      py={3}
      mr={3}
      rounded="md"
      borderWidth={1}
      borderColor={isSelected ? 'green.500' : 'transparent'}
      _pressed={{
        borderWidth: 1,
        borderColor: 'green.500',
      }}
      {...rest}
    >
      {({ isPressed }) => (
        <Text
          color={isSelected || isPressed ? 'green.500' : 'gray.200'}
          fontSize="xs"
          textTransform="uppercase"
          fontWeight="bold"
          fontFamily="heading"
        >
          {name}
        </Text>
      )}
    </Pressable>
  )
}
