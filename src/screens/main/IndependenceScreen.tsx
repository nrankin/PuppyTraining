import React from 'react'
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationProp,
} from '@react-navigation/material-top-tabs'
import CrateTrainingScreen from '../CrateTrainingScreen'
import ClipStationTrainingScreen from '../ClipStationTrainingScreen'
import IndependenceOverviewScreen from '../IndependenceOverviewScreen'
import { AppParamList } from '../../app/App'
import { CompositeNavigationProp } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { SafeAreaView } from 'react-native-safe-area-context'

export type IndependenceParamList = {
  IndependenceOverviewScreen: { dogName: string } | undefined
  CrateTraining: { dogName: string } | undefined
  ClipStationTraining: { dogName: string } | undefined
}

const IndependenceTopTab = createMaterialTopTabNavigator<
  IndependenceParamList
>()

interface IndependenceScreenProps {
  navigation: CompositeNavigationProp<
    MaterialTopTabNavigationProp<IndependenceParamList>,
    DrawerNavigationProp<AppParamList, 'Independence'>
  >
  route: any
}

export default function IndependenceScreen(
  props: IndependenceScreenProps,
): React.ReactElement {
  const dogName: string = props.route.params.dogName
  return (
    <SafeAreaView style={{ flex: 4 }}>
      <IndependenceTopTab.Navigator
        initialRouteName="IndependenceOverviewScreen"
        tabBarPosition={'top'}
        tabBarOptions={{
          activeTintColor: '#af3330',
          labelStyle: { textTransform: 'none', fontSize: 16 },
          style: { backgroundColor: 'powderblue' },
        }}>
        <IndependenceTopTab.Screen
          name="IndependenceOverviewScreen"
          component={IndependenceOverviewScreen}
          options={{
            tabBarLabel: 'Independence Overview',
          }}
          initialParams={{ dogName: dogName }}
        />
        <IndependenceTopTab.Screen
          name="CrateTraining"
          component={CrateTrainingScreen}
          options={{
            tabBarLabel: 'Crate Training',
          }}
          initialParams={{ dogName: dogName }}
        />
        <IndependenceTopTab.Screen
          name="ClipStationTraining"
          component={ClipStationTrainingScreen}
          options={{
            tabBarLabel: 'Clip Station Training',
          }}
          initialParams={{ dogName: dogName }}
        />
      </IndependenceTopTab.Navigator>
    </SafeAreaView>
  )
}
