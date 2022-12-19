import { useState } from 'react'
import { FlatList, Heading, HStack, Text, VStack } from 'native-base'

import { ExerciseCard } from '@components/ExerciseCard'
import { GroupButton } from '@components/GroupButton'
import { HomeHeader } from '@components/HomeHeader'

const groupsData = ['costas', 'ombro', 'pernas', 'bíceps', 'tríceps']
const exercises = [
  {
    name: 'Puxada frontal',
    series: 3,
    repetitions: 12,
    photo:
      'https://www.fiqueinforma.com/wp-content/uploads/2008/12/puxadas.jpg',
  },
  {
    name: 'Pulley Frente',
    series: 3,
    repetitions: 12,
    photo:
      'https://www.dicasdetreino.com.br/wp-content/uploads/2017/07/Tipos-de-Pegada-Treino-de-Costas.jpg',
  },
]

export function Home() {
  const [filter, setFilter] = useState('costas')

  const handleSelectFilter = (name: string) => {
    setFilter(name)
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groupsData}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupButton
            name={item}
            onPress={() => handleSelectFilter(item)}
            isSelected={filter === item}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxHeight={12}
      />

      <VStack mx={8} flex={1}>
        <HStack justifyContent="space-between" alignItems="center" mb={5}>
          <Heading color="gray.200" fontFamily="heading" fontSize="md">
            Exercícios
          </Heading>
          <Text color="gray.200" fontFamily="body" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ExerciseCard
              name={item.name}
              series={item.series}
              repetitions={item.repetitions}
              photo={item.photo}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  )
}
