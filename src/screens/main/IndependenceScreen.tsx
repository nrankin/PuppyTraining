import React, {Component} from 'react'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationProp,
} from '@react-navigation/material-top-tabs'
import CrateTrainingScreen from '../CrateTrainingScreen'
import ClipStationTrainingScreen from '../ClipStationTrainingScreen'
import IndependenceOverviewScreen from '../IndependenceOverviewScreen'
import {AppParamList} from '../../App'
import {CompositeNavigationProp} from '@react-navigation/native'
import {DrawerNavigationProp} from '@react-navigation/drawer'
import {SafeAreaView} from 'react-native-safe-area-context'
// import Collapsible from 'react-native-collapsible'
// import Accordion from 'react-native-collapsible/Accordion'

type IndependenceParamList = {
  IndependenceOverviewScreen: undefined
  CrateTraining: undefined
  ClipStationTraining: undefined
}

interface IndependenceScreenProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<IndependenceParamList>,
    DrawerNavigationProp<AppParamList, 'Independence'>
  >
}

const IndependenceTopTab = createMaterialTopTabNavigator<
  IndependenceParamList
>()

interface IndependenceScreenProps {
  navigation: CompositeNavigationProp<
    MaterialTopTabNavigationProp<IndependenceParamList>,
    DrawerNavigationProp<AppParamList, 'Independence'>
  >
}

export default function IndependenceScreen(
  props: IndependenceScreenProps,
): React.ReactElement {
  const {navigation} = props
  return (
    <SafeAreaView style={{flex: 4}}>
      <IndependenceTopTab.Navigator
        initialRouteName="IndependenceOverviewScreen"
        tabBarPosition={'top'}
        tabBarOptions={{
          activeTintColor: '#e91e63',
          labelStyle: {fontSize: 12},
          style: {backgroundColor: 'powderblue'},
        }}>
        <IndependenceTopTab.Screen
          name="IndependenceOverviewScreen"
          component={IndependenceOverviewScreen}
          options={{
            tabBarLabel: 'Independence Overview',
          }}
        />
        <IndependenceTopTab.Screen
          name="CrateTraining"
          component={CrateTrainingScreen}
          options={{
            tabBarLabel: 'Crate Training',
          }}
        />
        <IndependenceTopTab.Screen
          name="ClipStationTraining"
          component={ClipStationTrainingScreen}
          options={{
            tabBarLabel: 'Clip Station Training',
          }}
        />
      </IndependenceTopTab.Navigator>
    </SafeAreaView>
  )
}
