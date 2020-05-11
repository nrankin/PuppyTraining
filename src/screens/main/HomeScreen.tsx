import React from 'react'
import theme from '../../theme'
import {ThemeProvider} from 'styled-components/native'
import {Text, View} from '../../components/base'

export default function HomeScreen() {
  return (
    <ThemeProvider theme={theme}>
      <View padding={2}>
        <Text fontSize={6} marginX={-2} paddingX={2} backgroundColor="primary">
          Home Screen
        </Text>
        <Text fontSize={4}>Puppy Training</Text>
        <Text fontSize={1}>
          Learn and record your puppy's progress so you always know what to work
          on next
        </Text>
      </View>
    </ThemeProvider>
  )
}
