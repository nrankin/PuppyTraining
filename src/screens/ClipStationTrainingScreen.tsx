import React from 'react'
import { LargeHeader } from '../components/headers'
import { Text, View } from '../components/base'
import ExerciseInstructions from '../components/ExerciseInstructions'
import ExerciseRecord from '../components/ExerciseRecord'
import { CompositeNavigationProp } from '@react-navigation/native'
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs'
import { IndependenceParamList } from './main/IndependenceScreen'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { AppParamList } from 'App'

const EXERCISE_STEPS = [
  { id: '1', title: 'ensure she is tired and toileted' },
  { id: '2', title: 'put her in on her clipstation with a favourite toy' },
  { id: '3', title: 'reward her when she is lying down and not making a fuss' },
  { id: '4', title: 'veeerrry slowly increase the time you leave her there' },
  {
    id: '5',
    title:
      'veerrry slowly increase the distance you are from her (until you can be in another room)',
  },
]

const GOALS = [
  { id: '1', title: 'time' },
  { id: '2', title: 'no fuss' },
]

interface ClipScreenProps {
  route: any
  navigation: CompositeNavigationProp<
    MaterialTopTabNavigationProp<IndependenceParamList, 'CrateTraining'>,
    DrawerNavigationProp<AppParamList, 'Independence'>
  >
}

export default function ClipStationTrainingScreen(
  props: ClipScreenProps,
): React.ReactElement {
  const dogName: string = props.route.params.dogName
  return (
    <View flex={2} padding={2}>
      <ExerciseInstructions
        header={'Clip Station Training for ' + dogName}
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
