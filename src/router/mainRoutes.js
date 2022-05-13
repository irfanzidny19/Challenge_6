// import React, {useEffect} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';
// import Home from '../screens/Home';
// import Login from '../screens/Login';
// import Register from '../screens/Register';
// import Geolocation from '../screens/Geolocation';
// import ScanScreen from '../screens/Scan QR';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const Stack = createStackNavigator();

// const Tab = createBottomTabNavigator();

// export default function MainRoutes() {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen name="Home" component={Home} screenoptions={{route}} />

//       <Stack.Screen
//         name="Login"
//         component={Login}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Register"
//         component={Register}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Geolocation"
//         component={Geolocation}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="ScanScreen"
//         component={ScanScreen}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// }
