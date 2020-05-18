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
import HomeScreen from './screens/main/HomeScreen'
import IndependenceScreen from './screens/main/IndependenceScreen'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {ThemeProvider} from 'styled-components/native'
import theme from './theme'

export type AppParamList = {
  Home: undefined
  Independence: {dogName: string}
}
const Drawer = createDrawerNavigator<AppParamList>()

const App = () => {
  const dogName: string = 'Tigger'
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen
              name="Independence"
              component={IndependenceScreen}
              initialParams={{dogName: dogName}}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App
