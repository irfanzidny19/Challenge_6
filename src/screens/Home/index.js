// import {View, Text, TouchableOpacity, Alert} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import crashlytics from '@react-native-firebase/crashlytics';
// import analytics from '@react-native-firebase/analytics';
// import messaging from '@react-native-firebase/messaging';
// import {firebaseService} from '../../utils/api';
// import axios from 'axios';
// import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
// import Geolocation from '@react-native-community/geolocation';
// import MapView from 'react-native-maps';

// Geolocation.setRNConfiguration({
//   enableHighAccuracy: false,
//   timeout: 5000,
//   maximumAge: 10000,
// });

// export default function App(props) {
//   const [tokenState, setToken] = useState('');
//   const [position, setPosition] = useState({});
//   const {} = crashlytics();

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
//         console.log(Geolocation.getCurrentPosition(info => console.log(info)));
//         console.log('The permission is granted');
//         break;
//       case RESULTS.BLOCKED:
//         console.log('The permission is denied and not requestable anymore');
//         break;
//     }
//   }, []);
//   useEffect(() => {
//     crashlytics().log('App mounted.');
//     requestPermissions();
//     const unsubscribe = messaging().onMessage(async remoteMessage => {
//       Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
//     });

//     // Geolocation.getCurrentPosition(info => {
//     //   console.log(info);
//     // });
//     // setPosition({
//     //   lat: info.coords.latitude,
//     //   long: info.coords.longitude,
//     // });
//     return unsubscribe;
//   }, [requestPermissions]);
//   return (
//     <View>
//       <TouchableOpacity onPress={() => crashlytics().crash()}>
//         <Text>Click for crash</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         onPress={async () => {
//           await analytics().logEvent('register_account', {
//             name: 'zidny',
//           });
//           console.log(await messaging().getToken());
//         }}>
//         <Text>Click for analytics</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         onPress={async () => {
//           // console.log(await messaging().getToken());
//           // const token = await messaging().getToken();
//           // console.log(token);
//           // setToken(token);

//           const body = {
//             to: 'FCM Token goes here',
//             notification: {
//               body: 'New Lesson Added 1',
//               title: 'Lokesh',
//             },
//           };
//           const res = await axios.post(`${firebaseService}`, body, {
//             headers: {
//               Authorization: `Bearer AAAAp24LV5U:APA91bFKl3HG6-XLXzEmMpHrDnq88Op9sRHZNqeTT5XfEPQ-snqeLUJD3-KhvsJvHXklYHBpSjh35cmnb0VTdLwvBILLrN3JZ3jbtdMnp2EYScXWpn0jaxlxqwwDKB4EIFUb79-SlApv`,
//             },
//           });
//           console.log(res);
//         }}>
//         <Text>testing notif</Text>
//       </TouchableOpacity>

//       {/* <MapView
//         initialRegion={{
//           latitude: position.lat,
//           longitude: position.long,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       /> */}
//     </View>
//   );
// }
import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Home(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => props.navigation.navigate('ScanScreen')}>
        <View
          style={{
            height: 50,
            width: 200,
            backgroundColor: 'red',
            alignSelf: 'center',
          }}>
          <Text style={{color: 'yellow', textAlign: 'center'}}>
            Klik untuk melihat Lokasi
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('Geolocation')}>
        <View
          style={{
            height: 50,
            width: 200,
            backgroundColor: 'red',
            alignSelf: 'center',
            marginTop: 15,
          }}>
          <Text style={{textAlign: 'center', color: 'yellow'}}>
            Klik untuk SCAN QR
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
