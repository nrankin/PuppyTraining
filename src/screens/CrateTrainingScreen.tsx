import React from 'react'

import {LargeHeader} from '../components/headers'
import {Text, View} from '../components/base'
import {ScrollView} from 'react-native-gesture-handler'

//  interface CrateScreenProps = {
//     navigation: CompositeNavigationProp<
//     MaterialTopTabNavigationProp<IndependenceParamList>,
//     DrawerNavigationProp<AppParamList, 'Independence'>
//   >
// }

export default function CrateTrainingScreen(): React.ReactElement {
  //   const {navigation} = props
  return (
    <View backgroundColor="background2">
      <LargeHeader text="Crate Training" />
      <View padding={4}>
        <Text>some text</Text>
        <Text>some text</Text>
        <Text>some text</Text>
        <Text>some text</Text>
        <Text>some text</Text>
      </View>
    </View>
  )
}
