/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import {name as appName} from './app.json';
// import {Settings} from 'react-native-fbsdk-next';

// // Ask for consent first if necessary
// // Possibly only do this for iOS if no need to handle a GDPR-type flow
// Settings.initializeSDK();

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
