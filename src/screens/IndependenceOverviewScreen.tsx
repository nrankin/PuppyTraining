import React from 'react'
import {Text, View} from '../components/base'
import {LargeHeader} from '../components/headers'

export default function IndependenceOverviewScreen(): React.ReactElement {
  return (
    <View>
      <LargeHeader text="Independence Overview" />
      <View padding={4}>
        <Text fontSize={1} padding={2}>
          Your puppy needs to be able to be by themselves at times
        </Text>
        <Text fontSize={1} padding={2}>
          They need to be able to relax even if you aren't in the room, or
          you're out of the house. If they can't, they may develop separation
          anxiety.
        </Text>
        <Text fontSize={1} padding={2}>
          There are 2 training exercises that help with separation training for
          independence.
        </Text>
      </View>
    </View>
  )
}
