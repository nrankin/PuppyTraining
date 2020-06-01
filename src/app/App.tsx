import React from 'react'
import HomeScreen from '../screens/main/HomeScreen'
import IndependenceScreen from '../screens/main/IndependenceScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import { Provider } from 'react-redux'
import store from './store'
import theme from '../theme'

export type AppParamList = {
  Home: undefined
  Independence: { dogName: string }
}
const Drawer = createDrawerNavigator<AppParamList>()

const App = () => {
  const dogName: string = 'Tigger'
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={HomeScreen} />
              <Drawer.Screen
                name="Independence"
                component={IndependenceScreen}
                initialParams={{ dogName: dogName }}
              />
            </Drawer.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
