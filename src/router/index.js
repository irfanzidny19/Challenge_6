import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Login from '../screens/Login';

import ScanScreen from '../screens/Scan QR';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Geolocationn from '../screens/Geolocation';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Geolocationn"
        component={Geolocationn}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="location-outline" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ScanScreen"
        component={ScanScreen}
        options={{
          tabBarLabel: 'Scan QR',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="scan-outline" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});

// const MainApp = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
//       <Tab.Screen
//         name="Geolocationn"
//         component={Geolocationn}
//         options={{headerShown: false}}
//       />
//       <Tab.Screen
//         name="ScanScreen"
//         component={ScanScreen}
//         options={{headerShown: false}}
//       />
//     </Tab.Navigator>
//   );
// };

// const MainRoutes = () => {
//   return (
//     <Stack.Navigator initialRouteName="MainApp">
//       <Stack.Screen
//         name="Login"
//         component={Login}
//         options={{headerShown: false}}
//       />

//       <Stack.Screen
//         name="MainApp"
//         component={MainApp}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };

// export default MainRoutes;

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

// // Screen names
// const homeName = 'Home';
// const geolocation = 'Geolocation';
// const scanScreen = 'ScanScreen';
// const login = 'Login';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// const NavigatorBottom = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName={homeName}
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
//     <Stack.Navigator initialRouteName="NavigatorBottom">
//       <Stack.Screen
//         name="Login"
//         component={Login}
//         options={{headerShown: false}}
//       />

//       <Stack.Screen
//         name="NavigatorBottom"
//         component={NavigatorBottom}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };

// export default Router;
