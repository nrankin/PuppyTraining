import React from 'react'
import { Button, Text, View } from '../components/base'
import { LargeHeader } from '../components/headers'

export default function IndependenceOverviewScreen({
  route,
  navigation,
}): React.ReactElement {
  const dogName: string = route.params.dogName

  return (
    <View>
      <LargeHeader title="Independence Overview" navigation={navigation} />
      <View padding={4}>
        <Text fontSize={1} padding={2}>
          {dogName} needs to be able to be by themself at times.
        </Text>
        <Text fontSize={1} padding={2}>
          They need to be able to relax even if you aren't in the room, or
          you're out of the house. If they can't, they may develop separation
          anxiety.
        </Text>
        <Text fontSize={1} padding={2}>
          There are 2 main training exercises that help with separation training
          for independence:
        </Text>

        <Button
          title="Crate Training"
          onPress={() => navigation.navigate('CrateTraining')}
        />
        <Button
          title="Clip Station Training"
          onPress={() => navigation.navigate('ClipStationTraining')}
        />
      </View>
    </View>
  )
}
