/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Menu from './src/Menu'
import 'react-native-gesture-handler'

AppRegistry.registerComponent(appName, () => Menu);
