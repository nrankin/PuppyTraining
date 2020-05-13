import React from 'react'
import theme from '../../theme'
import {ThemeProvider} from 'styled-components/native'
import {Image, Text, View} from '../../components/base'
import {LargeHeader} from '../../components/headers'
import {SafeAreaView} from 'react-native-safe-area-context'

export default function HomeScreen(): React.ReactElement {
  return (
    <SafeAreaView>
      <View>
        <LargeHeader text="Puppy Training" />
        <Image
          source={require('../../images/tigger-pink-coat.jpg')}
          style={{height: 500, width: 420}}
        />

        <Text fontSize={1} padding={2}>
          Learn and record your puppy's progress so you always know what to work
          on next.
        </Text>
      </View>
    </SafeAreaView>
  )
}
