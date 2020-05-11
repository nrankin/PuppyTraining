/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import {SafeAreaView, ScrollView, StatusBar} from 'react-native'
import HomeScreen from './screens/main/HomeScreen'
import {Text, View} from './components/base'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <HomeScreen />
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default App
