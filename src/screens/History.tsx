import { Heading, VStack, SectionList, Text } from 'native-base'

import { HistoryCard } from '@components/HistoryCard'
import { ScreenHeader } from '@components/ScreenHeader'
import { useState } from 'react'

export function History() {
  const [exercises, setExercises] = useState([
    { title: '18/12/2022', data: [1, 2, 3] },
    { title: '19/12/2022', data: [1, 2, 3] },
    { title: '20/12/2022', data: [1, 2, 3] },
    { title: '21/12/2022', data: [1, 2, 3] },
    { title: '22/12/2022', data: [1, 2, 3] },
  ])

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section: { title } }) => (
          <Heading
            color="gray.200"
            fontFamily="heading"
            fontSize="md"
            mb={3}
            mt={10}
          >
            {title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: 'center' }
        }
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercícios registrados ainda {'\n'}
            Vamos fazer exercícios hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  )
}
