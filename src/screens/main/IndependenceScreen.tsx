import React from 'react'
import {Button, Text} from '../../components/base'
import {SafeAreaView} from 'react-native-safe-area-context'
import {LargeHeader} from '../../components/headers'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import CrateTrainingScreen from '../CrateTrainingScreen'
import ClipStationTrainingScreen from '../ClipStationTrainingScreen'
import {AppParamList} from '../../App'
import {CompositeNavigationProp} from '@react-navigation/native'
import {DrawerNavigationProp} from '@react-navigation/drawer'

type IndependenceParamList = {
  CrateTraining: undefined
  ClipStationTraining: undefined
}

const IndependenceStack = createStackNavigator<IndependenceParamList>()

interface IndependenceScreenProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<IndependenceParamList>,
    DrawerNavigationProp<AppParamList, 'Independence'>
  >
}

export default function IndependenceScreen(props: IndependenceScreenProps) {
  const {navigation} = props
  return (
    <SafeAreaView>
      <LargeHeader text="Independence" />
      <Text fontSize={1} padding={2}>
        Your puppy needs to be able to be by themselves at times.{' '}
      </Text>
      <Text fontSize={1} padding={2}>
        They need to be able to relax even if you aren't in the room, or you're
        out of the house. If they can't, they may develop separation anxiety.
      </Text>
      <Text fontSize={1} padding={2}>
        There are 2 training exercises that help with separation training for
        independence.
      </Text>
      <Button
        color="black"
        title="Crate Training"
        onPress={() => navigation.navigate('CrateTraining')}
      />
      <Button
        color="black"
        title="Clip Station Training"
        onPress={() => navigation.navigate('ClipStationTraining')}
      />
      <IndependenceStack.Navigator initialRouteName="CrateTraining">
        <IndependenceStack.Screen
          name="CrateTraining"
          component={CrateTrainingScreen}
        />
        <IndependenceStack.Screen
          name="ClipStationTraining"
          component={ClipStationTrainingScreen}
        />
      </IndependenceStack.Navigator>
    </SafeAreaView>
  )
}
