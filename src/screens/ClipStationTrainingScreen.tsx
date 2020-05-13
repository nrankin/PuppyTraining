import React from 'react'
import {LargeHeader} from '../components/headers'
import {Text, View} from '../components/base'

export default function ClipStationTrainingScreen(): React.ReactElement {
  return (
    <View backgroundColor="background2">
      <LargeHeader text="Clip Station Training" />
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
