import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Geolocation from '../screens/Geolocation';
import ScanScreen from '../screens/Scan QR';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Geolocationn from '../screens/Geolocation';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Geolocation"
        component={Geolocationn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ScanScreen"
        component={ScanScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {createStackNavigator} from '@react-navigation/stack';
// // Screens
// import Home from '../screens/Home';
// import Geolocation from '../screens/Geolocation';
// import Login from '../screens/Login';
// import ScanScreen from '../screens/Scan QR';
// import ButtonNavigator from './mainRoutes';
//Screen names
// const homeName = 'Home';
// const geolocation = 'Geolocation';
// const scanScreen = 'ScanScreen';
// const login = 'Login';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// const ButtonNavigator = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName={login}
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;
//           let rn = route.name;

//           if (rn === geolocation) {
//             iconName = focused ? 'location' : 'location-outline';
//           } else if (rn === scanScreen) {
//             iconName = focused ? 'scan' : 'scan-outline';
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'grey',
//         labelStyle: {paddingBottom: 10, fontSize: 10},
//         style: {padding: 10, height: 70},
//       }}>
//       <Tab.Screen
//         name={login}
//         component={Login}
//         options={{headerShown: false}}
//       />
//       <Tab.Screen
//         name={geolocation}
//         component={Geolocation}
//         options={{headerShown: false}}
//       />
//       <Tab.Screen
//         name={scanScreen}
//         component={ScanScreen}
//         options={{headerShown: false}}
//       />
//     </Tab.Navigator>
//   );
// };

// const Router = () => {
//   return (
//     <Stack.Navigator initialRouteName="Login">
//       <Stack.Screen
//         name="Login"
//         component={Login}
//         options={{headerShown: false}}
//       />

//       <Stack.Screen
//         name="ScanScreen"
//         component={ScanScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{headerShown: false}}
//       />

//       <Stack.Screen
//         name="ButtonNavigator"
//         component={ButtonNavigator}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };

// export default Router;
