/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import{SplashScreen} from './app/src/screens/splash/SplashScreen'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => SplashScreen);
