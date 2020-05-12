import React from 'react'

import {LargeHeader} from '../components/headers'
import {Text, View} from '../components/base'
import {ScrollView} from 'react-native-gesture-handler'

export default function CrateTrainingScreen() {
  console.log('rendering?')
  return (
    <ScrollView>
      <View flex={2} padding={2}>
        <LargeHeader text="Crate Training" />
        <Text>something</Text>
        <Text>something</Text>
        <Text>something</Text>
        <Text>something</Text>
        <Text>something</Text>
      </View>
    </ScrollView>
  )
}
