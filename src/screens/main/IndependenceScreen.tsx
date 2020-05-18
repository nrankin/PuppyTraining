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

export type IndependenceParamList = {
  IndependenceOverviewScreen: {dogName: string} | undefined
  CrateTraining: {dogName: string} | undefined
  ClipStationTraining: {dogName: string} | undefined
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
    <SafeAreaView style={{flex: 4}}>
      <IndependenceTopTab.Navigator
        initialRouteName="IndependenceOverviewScreen"
        tabBarPosition={'top'}
        tabBarOptions={{
          activeTintColor: '#af3330',
          labelStyle: {textTransform: 'none', fontSize: 16},
          style: {backgroundColor: 'powderblue'},
        }}>
        <IndependenceTopTab.Screen
          name="IndependenceOverviewScreen"
          component={IndependenceOverviewScreen}
          options={{
            tabBarLabel: 'Independence Overview',
          }}
          initialParams={{dogName: dogName}}
        />
        <IndependenceTopTab.Screen
          name="CrateTraining"
          component={CrateTrainingScreen}
          options={{
            tabBarLabel: 'Crate Training',
          }}
          initialParams={{dogName: dogName}}
        />
        <IndependenceTopTab.Screen
          name="ClipStationTraining"
          component={ClipStationTrainingScreen}
          options={{
            tabBarLabel: 'Clip Station Training',
          }}
          initialParams={{dogName: dogName}}
        />
      </IndependenceTopTab.Navigator>
    </SafeAreaView>
  )
}

// <AccordionView />

// class AccordionView extends Component {
//   state = {
//     activeSections: [],
//   }

//   _renderSectionTitle = (section) => {
//     return (
//       <View margin={10}>
//         <Text fontSize={4} textAlign="center">
//           {section.title + ' title'}
//         </Text>
//       </View>
//     )
//   }

//   _renderHeader = (section) => {
//     return (
//       <View>
//         <Text fontSize={2} textAlign="center">
//           {section.title + ' header'}
//         </Text>
//       </View>
//     )
//   }

//   _renderContent = (section) => {
//     return (
//       <View>
//         <Text fontSize={1} textAlign="center">
//           {section.content}
//         </Text>
//       </View>
//     )
//   }

//   _updateSections = (activeSections) => {
//     this.setState({activeSections})
//   }

//   render() {
//     return (
//       <Accordion
//         sections={SECTIONS}
//         activeSections={this.state.activeSections}
//         renderSectionTitle={this._renderSectionTitle}
//         renderHeader={this._renderHeader}
//         renderContent={this._renderContent}
//         onChange={this._updateSections}
//       />
//     )
//   }
// }

// interface SectionProps {
//   section: {title: string; content: string}
// }

// function renderSectionTitle(props: SectionProps): React.ReactElement {
//   const {section} = props
//   return (
//     <View>
//       <Text>{section.content}</Text>
//     </View>
//   )
// }

// function renderHeader(props: SectionProps): React.ReactElement {
//   const {section} = props
//   return (
//     <View>
//       <Text>{section.title}</Text>
//     </View>
//   )
// }

// function renderContent(props: SectionProps): React.ReactElement {
//   const {section} = props
//   return (
//     <View>
//       <Text>{section.content}</Text>
//     </View>
//   )
// }
// interface UpdateSectionProps {
//   activeSections: []
// }
// function updateSections(props: UpdateSectionProps) {
//   const {activeSections} = props
//   setState({activeSections})
// }
