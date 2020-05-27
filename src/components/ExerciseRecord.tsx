import React, { useState } from 'react'
import Checkbox from '@react-native-form/checkbox'

import { View, Text } from './base'
import { FlatList, Alert, ScrollView } from 'react-native'
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
        <Text paddingY={2}>
          Tick off the amount of time she has gone without fussing today. You
          can do multiple sessions, in which case you can tick more than once.{' '}
        </Text>
        <Text paddingBottom={2} fontWeight="bold">
          Time:
        </Text>
        <RecordRow />
      </View>
    </View>
  )
}

function RecordRow(): React.ReactElement {
  const [noFussing, setNoFussing] = useState(false)
  const labelText = 'without fussing'
  return (
    <ScrollView>
      <View paddingBottom={10}>
        <TimeCheckbox labelText="2 min without fussing" />
        <TimeCheckbox labelText="4 min without fussing" />
        <TimeCheckbox labelText="6 min without fussing" />
        <TimeCheckbox labelText="9 min without fussing" />
        <TimeCheckbox labelText="12 min without fussing" />
        <TimeCheckbox labelText="18 min without fussing" />
        <TimeCheckbox labelText="22 min without fussing" />
        <TimeCheckbox labelText="30 min without fussing" />
      </View>
    </ScrollView>
  )
}

interface TimeCheckboxProps {
  labelText: string
}
function TimeCheckbox(props: TimeCheckboxProps): React.ReactElement {
  const { labelText } = props
  const [noFussing, setNoFussing] = useState(false)
  return (
    <View flexDirection="row">
      <Checkbox
        label={labelText}
        positionLabel="right"
        marginTop={0}
        nativeComponent={false}
        color="#457afb"
        disabled={false}
        checked={false}
        labelStyle={{}}
        containerStyle={{}}
        checkboxStyle={{}}
        switchStyle={{}}
        onValueChange={(noFussing) => setNoFussing(noFussing)}
        value={'noFussing'}
      />
    </View>
  )
}

interface StepProps {
  //   id: string
  title: string
}

function Step(props: StepProps): React.ReactElement {
  const { title } = props
  return (
    <View>
      <Text padding={2}>{title}</Text>
    </View>
  )
}
