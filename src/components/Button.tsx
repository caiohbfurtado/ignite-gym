import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
  title: string
  variant?: 'solid' | 'outline'
}

export function Button({ title, variant = 'solid', ...rest }: Props) {
  return (
    <NativeBaseButton
      w="full"
      h={14}
      rounded="sm"
      {...(variant === 'outline'
        ? {
            bg: 'transparent',
            borderWidth: 1,
            borderColor: 'green.700',
          }
        : {
            bg: 'green.700',
          })}
      _pressed={
        variant === 'outline'
          ? {
              bg: 'gray.500',
            }
          : {
              bg: 'green.500',
            }
      }
      {...rest}
    >
      <Text
        color={variant === 'outline' ? 'green.500' : 'white'}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </NativeBaseButton>
  )
}
