import { TouchableOpacity } from 'react-native'
import { Heading, HStack, Icon, Text, VStack } from 'native-base'
import { Feather } from '@expo/vector-icons'

import BodySVG from '@assets/body.svg'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '../routes/app.routes'

export function ExerciseHeader() {
  const { goBack } = useNavigation<AppNavigatorRoutesProps>()

  function handleGoBack() {
    goBack()
  }
  return (
    <VStack bg="gray.600" pt={12} pb={8} px={8}>
      <TouchableOpacity onPress={handleGoBack}>
        <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
      </TouchableOpacity>

      <HStack justifyContent="space-between" alignItems="center" mt={3}>
        <Heading
          fontFamily="heading"
          fontSize="xl"
          color="gray.100"
          flexShrink={1}
        >
          Puxada frontal
        </Heading>

        <HStack alignItems="center">
          <BodySVG width={18} height={18} />
          <Text
            fontFamily="body"
            fontSize="md"
            color="gray.200"
            textTransform="capitalize"
            ml={1}
          >
            Costas
          </Text>
        </HStack>
      </HStack>
    </VStack>
  )
}
