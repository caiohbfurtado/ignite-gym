import { Box, HStack, ScrollView, Text, VStack } from 'native-base'

import SeriesSVG from '@assets/series.svg'
import RepetitionsSVG from '@assets/repetitions.svg'

import { ExerciseHeader } from '@components/ExerciseHeader'
import { ExerciseImage } from '@components/ExerciseImage'
import { Button } from '@components/Button'

export function Exercise() {
  return (
    <VStack flex={1}>
      <ExerciseHeader />

      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack alignItems="center" p={8}>
          <ExerciseImage
            size={80}
            w="full"
            source={{
              uri: 'https://www.fiqueinforma.com/wp-content/uploads/2008/12/puxadas.jpg',
            }}
            alt={`Imagem do exercício`}
            rounded="lg"
          />

          <Box bg="gray.600" w="full" p={4} rounded="lg" mt={3}>
            <HStack justifyContent="space-around">
              <HStack alignItems="center">
                <SeriesSVG />
                <Text color="gray.200" fontFamily="body" fontSize="lg" ml={2}>
                  3 séries
                </Text>
              </HStack>

              <HStack alignItems="center">
                <RepetitionsSVG />
                <Text color="gray.200" fontFamily="body" fontSize="lg" ml={2}>
                  3 repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" mt={6} />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  )
}
