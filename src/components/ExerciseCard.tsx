import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Heading, HStack, Icon, Text, VStack } from 'native-base'
import { Entypo } from '@expo/vector-icons'
import { ExerciseImage } from './ExerciseImage'

type Props = TouchableOpacityProps & {
  name: string
  series: number
  repetitions: number
  photo: string
}

export function ExerciseCard({
  name,
  repetitions,
  series,
  photo,
  ...rest
}: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack alignItems="center" bg="gray.500" p={2} pr={4} mb={3} rounded={6}>
        <ExerciseImage
          source={{ uri: photo }}
          alt={`Imagem do exercício ${name}`}
        />

        <VStack flex={1} mx={4}>
          <Heading
            color="white"
            fontFamily="heading"
            fontSize="lg"
            numberOfLines={1}
          >
            {name}
          </Heading>
          <Text
            color="gray.200"
            fontFamily="body"
            fontSize="sm"
            mt={1}
            numberOfLines={2}
          >
            {series} séries x {repetitions} repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-right" size={6} color="gray.300" />
      </HStack>
    </TouchableOpacity>
  )
}
