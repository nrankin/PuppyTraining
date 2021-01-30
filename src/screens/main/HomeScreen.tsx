import React, { useState } from 'react'
import { Image, Text, TextInput, View } from '../../components/base'
import { LargeHeader } from '../../components/headers'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { AppParamList } from 'App'

type NavigationProp = DrawerNavigationProp<AppParamList, 'Independence'>

interface Props {
  navigation: NavigationProp
}

export default function HomeScreen(props: Props): React.ReactElement {
  const { navigation } = props
  const [puppyName, setPuppyName] = useState('')
  const helloPuppy = 'Hi ' + puppyName + '!'

  return (
    <SafeAreaView>
      <View>
        <LargeHeader title="Puppy Training" navigation={navigation} />

        <View padding={4} justifyContent="space-between">
          <Text fontSize={1} padding={2}>
            Learn and record your puppy's progress so you always know what to
            work on next.
          </Text>

          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 2,
              borderRadius: 20,
              padding: 10,
              fontSize: 16,
              marginTop: 15,
              textAlign: 'center',
            }}
            onChangeText={(puppyName) => setPuppyName(puppyName)}
            value={puppyName}
            placeholder="Enter your puppy's name"
            placeholderTextColor="gray"></TextInput>

          <Text fontSize={3} textAlign="center" padding={3}>
            {puppyName != '' && helloPuppy}
          </Text>
        </View>
        <Image
          source={require('../../images/tigger-pink-coat.jpg')}
          style={{ height: 400, width: 420 }}
        />
      </View>
    </SafeAreaView>
  )
}
