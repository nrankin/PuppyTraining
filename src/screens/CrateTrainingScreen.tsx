import React from 'react'

import { LargeHeader } from '../components/headers'
import { Text, View } from '../components/base'
import { ScrollView } from 'react-native-gesture-handler'
import { CompositeNavigationProp } from '@react-navigation/native'
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { IndependenceParamList } from './main/IndependenceScreen'
import { AppParamList } from '../App'
import ExerciseInstructions from '../components/ExerciseInstructions'
import ExerciseRecord from '../components/ExerciseRecord'

interface CrateScreenProps {
  route: any
  navigation: CompositeNavigationProp<
    MaterialTopTabNavigationProp<IndependenceParamList, 'CrateTraining'>,
    DrawerNavigationProp<AppParamList, 'Independence'>
  >
}

const EXERCISE_STEPS = [
  { id: '1', title: 'ensure she is tired' },
  { id: '2', title: 'put her in her crate with a favourite toy' },
  { id: '3', title: 'reward her when she is quiet/not making a fuss' },
  { id: '4', title: 'veeerrry slowly increase the time she is in there' },
]

const GOALS = [
  { id: '1', title: 'time' },
  { id: '2', title: 'no fuss' },
]

export default function CrateTrainingScreen(
  props: CrateScreenProps,
): React.ReactElement {
  const dogName: string = props.route.params.dogName
  return (
    <View flex={2} padding={2}>
      <ExerciseInstructions
        header={'Crate Training for ' + dogName}
        description="For quiet during the night, actually train her during the day initially."
        steps={EXERCISE_STEPS}
      />
      <ExerciseRecord
        goals={GOALS}
        header="Exercise Progress Record"
        date="May 4, 2020"
      />
    </View>
  )
}
