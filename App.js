// import React from 'react';
// import Providers from './src/navigation';
// export default function App() {
//   return <Providers />;
// }

import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';
import NavigatorBottom from './src/router';
export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

// import {View, Text} from 'react-native';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import Routes from './src/router';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// // import {
// //   GoogleSignin,
// //   GoogleSigninButton,
// //   statusCodes,
// // } from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId:
//     '719105775509-d4149mbgsmt0b63athth56ukd7c71c98.apps.googleusercontent.com',
// });

// export default function App(props) {
//   // const _signIn = async () => {
//   //   try {
//   //     await GoogleSignin.hasPlayServices();
//   //     const userInfo = await GoogleSignin.signIn();
//   //     console.log(userInfo);
//   //   } catch (error) {
//   //     console.log(error);
//   //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//   //       // user cancelled the login flow
//   //     } else if (error.code === statusCodes.IN_PROGRESS) {
//   //       // operation (e.g. sign in) is in progress already
//   //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//   //       // play services not available or outdated
//   //     } else {
//   //       // some other error happened
//   //     }
//   //   }
//   // };
//   return (
//     <NavigationContainer>
//       <Routes />
//     </NavigationContainer>

//     // {/* <View>
//     //   <Text>App</Text>
//     //   <GoogleSigninButton
//     //     style={{width: 192, height: 60}}
//     //     size={GoogleSigninButton.Size.Wide}
//     //     color={GoogleSigninButton.Color.Dark}
//     //     onPress={_signIn}
//     //     // disabled={this.state.isSigninInProgress}
//     //   />
//     // </View> */}

//     // <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
//     //   <Text>App</Text>
//     // </TouchableOpacity>
//   );
// }

// import React, {useState, useEffect, useRef} from 'react';

// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Linking,
//   View,
// } from 'react-native';

// import QRCodeScanner from 'react-native-qrcode-scanner';
// import {RNCamera} from 'react-native-camera';

// const ScanScreen = () => {
//   const scanner = useRef(null);
//   const [scan, setScan] = useState(false);
//   const [result, setResult] = useState(null);

//   useEffect(() => {
//     setResult(null);
//   }, []);

//   const onSuccess = e => {
//     setResult(e);
//     setScan(false);

//     // if (e.data.substring(o, 4) === 'http') {
//     //   alert(e.data);
//     // }
//     Linking.openURL(e.data).catch(err =>
//       console.error('An error occured', err),
//     );
//   };

//   return !scan ? (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.buttonTouchable}
//         onPress={() => setScan(true)}>
//         <Text style={styles.buttonText}>START SCAN</Text>
//       </TouchableOpacity>
//     </View>
//   ) : (
//     <QRCodeScanner
//       onRead={onSuccess}
//       ref={scanner}
//       reactivate={true}
//       showMarker={true}
//       bottomContent={
//         <>
//           {/* <TouchableOpacity
//             style={styles.buttonTouchable}
//             onPress={() => scanner.current.reactive()}>
//             <Text style={styles.buttonText}>OK. Got it!</Text>
//           </TouchableOpacity> */}
//           <TouchableOpacity
//             style={styles.buttonTouchable}
//             onPress={() => setScan(false)}>
//             <Text style={styles.buttonText}>STOP</Text>
//           </TouchableOpacity>
//         </>
//       }
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'column',
//   },
//   centerText: {
//     flex: 1,
//     fontSize: 18,
//     padding: 32,
//     color: '#777',
//   },
//   textBold: {
//     fontWeight: '500',
//     color: '#000',
//   },
//   buttonText: {
//     fontSize: 21,
//     color: 'rgb(0,122,255)',
//   },
//   buttonTouchable: {
//     padding: 16,
//   },
// });

// export default ScanScreen;

// import {View, Text, PermissionsAndroid} from 'react-native';
// import React, {useState, useEffect} from 'react';
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

// export default function Geolocation() {
//   const initialState = {
//     latitude: null,
//     longitude: null,
//     latitudeDelta: 0.015,
//     longitudeDelta: 0.0121,
//   };
//   const [currentPossition, setCurrentPosition] = useState(initialState);

//   // const requestPermissions = React.useCallback(async () => {
//   //   const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
//   //   switch (result) {
//   //     case RESULTS.UNAVAILABLE:
//   //       console.log(
//   //         'This feature is not available (on this device / in this context)',
//   //       );
//   //       break;
//   //     case RESULTS.DENIED:
//   //       const resRequest = await request(
//   //         PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
//   //       );
//   //       console.log(
//   //         'The permission has not been requested / is denied but requestable',
//   //       );
//   //       break;
//   //     case RESULTS.LIMITED:
//   //       console.log('The permission is limited: some actions are possible');
//   //       break;
//   //     case RESULTS.GRANTED:
//   //       console.log('The permission is granted');
//   //       break;
//   //     case RESULTS.BLOCKED:
//   //       console.log('The permission is denied and not requestable anymore');
//   //       break;
//   //   }
//   // }, []);
//   useEffect(() => {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => {
//     //     alert(JSON.stringify(position));
//     //   },
//     //   error => alert(error.message),
//     //   {timeout: 2000, maximumAge: 2000},
//     // );

//   //   setCurrentPosition({
//   //     ...currentPossition,
//   //     latitude: 37.78825,
//   //     longitude: -122.4324,
//   //   });
//   // }, []);

//   // componentDidMount() {
//   //   this.requestLocationPermision();
//   // }

//   // const requestLocationPermission = async () => {
//   //   try {
//   //     const granted = await PermissionsAndroid.request(
//   //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//   //       {
//   //         title: 'Izinkan aplikasi mengakses lokasi',
//   //         message:
//   //           'Cool Photo App needs access to your camera ' +
//   //           'so you can take awesome pictures.',
//   //         buttonNeutral: 'Ask Me Later',
//   //         buttonNegative: 'Cancel',
//   //         buttonPositive: 'OK',
//   //       },
//   //     );
//   //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//   //       console.log('You can use the camera');
//   //     } else {
//   //       console.log('Camera permission denied');
//   //     }
//   //   } catch (err) {
//   //     console.warn(err);
//   //   }
//   // };

//   return (
//     <View>
//       <MapView
//         provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//         style={{height: 900}}
//         region={{
//           latitude: -6.1719063,
//           longitude: 106.617668,
//           latitudeDelta: 0.015,
//           longitudeDelta: 0.0121,
//         }}></MapView>
//     </View>
//   );

// }

// import {View, Text} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
// import Geolocation from '@react-native-community/geolocation';

// Geolocation.setRNConfiguration({
//   enableHighAccuracy: false,
//   timeout: 5000,
//   maximumAge: 10000,
// });

// GoogleSignin.configure({
//   webClientId:
//     '719105775509-d4149mbgsmt0b63athth56ukd7c71c98.apps.googleusercontent.com',
// });

// export default function Geolocationn() {
//   const requestPermissions = React.useCallback(async () => {
//     const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
//     switch (result) {
//       case RESULTS.UNAVAILABLE:
//         console.log(
//           'This feature is not available (on this device / in this context)',
//         );
//         break;
//       case RESULTS.DENIED:
//         const resRequest = await request(
//           PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
//         );
//         console.log(
//           'The permission has not been requested / is denied but requestable',
//         );
//         break;
//       case RESULTS.LIMITED:
//         console.log('The permission is limited: some actions are possible');
//         break;
//       case RESULTS.GRANTED:
//         console.log('The permission is granted');
//         break;
//       case RESULTS.BLOCKED:
//         console.log('The permission is denied and not requestable anymore');
//         break;
//     }
//   }, []);

//   const _signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       console.log(userInfo);
//     } catch (error) {
//       console.log(error);
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         // user cancelled the login flow
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         // operation (e.g. sign in) is in progress already
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         // play services not available or outdated
//       } else {
//         // some other error happened
//       }
//     }
//   };

//   useEffect(() => {
//     requestPermissions();
//   }, [requestPermissions]);

//   return (
//     <View>
//       <MapView
//         provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//         style={{height: 300}}
//         region={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.015,
//           longitudeDelta: 0.0121,
//         }}></MapView>
//       <GoogleSigninButton
//         style={{width: 192, height: 60}}
//         size={GoogleSigninButton.Size.Wide}
//         color={GoogleSigninButton.Color.Dark}
//         onPress={_signIn}
//         // disabled={this.state.isSigninInProgress}
//       />
//     </View>
//   );
// }
