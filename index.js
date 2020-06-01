import 'react-native-gesture-handler'

import { AppRegistry } from 'react-native'
import App from './src/app/App'
import { name as appName } from './app.json'

// enable if you want, but disable by default
// https://facebook.github.io/react-native/docs/debugging.html#warnings
console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => App)
