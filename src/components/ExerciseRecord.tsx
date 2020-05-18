import React from 'react'
import { View, Text } from './base'
import { FlatList } from 'react-native'
import { SmallHeader } from './headers'

interface ExerciseRecordProps {
  header: string
  date: string
  goals: { id: string; title: string }[]
}

export default function ExerciseRecord(
  props: ExerciseRecordProps,
): React.ReactElement {
  const { header, date, goals } = props

  return (
    <View flex={4} marginLeft={4} marginRight={4} backgroundColor="background1">
      <View marginX={4} paddingBottom={4}>
        <SmallHeader text={header} />
        <Text fontWeight="bold" paddingY={2} fontSize={0}>
          Date: {date}
        </Text>
        <Text paddingBottom={2}>Goals:</Text>
        <FlatList
          data={goals}
          renderItem={({ item }) => <Step title={item.title} />}
          keyExtractor={(item) => item.id}
          style={{ paddingBottom: 100 }}
        />
      </View>
    </View>
  )
}

interface StepProps {
  //   id: string
  title: string
}

function Step(props: StepProps): React.ReactElement {
  const { title } = props
  return <Text padding={2}>{title}</Text>
}
