import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';
import messaging from '@react-native-firebase/messaging';
import {firebaseService} from '../../utils/api';
import axios from 'axios';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

export default function App(props) {
  const [tokenState, setToken] = useState('');

  const {} = crashlytics();

  const requestPermissions = React.useCallback(async () => {}, []);
  useEffect(() => {
    crashlytics().log('App mounted.');
    requestPermissions();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, [requestPermissions]);

  return (
    <View style={{backgroundColor: 'grey', flex: 1}}>
      <View style={{marginTop: 250}}>
        <TouchableOpacity onPress={() => crashlytics().crash()}>
          <View
            style={{
              height: 60,
              width: 150,
              backgroundColor: 'white',
              alignSelf: 'center',
              borderRadius: 15,
            }}>
            <Text style={{color: 'black', textAlign: 'center', marginTop: 22}}>
              Click for crash
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={async () => {
            await analytics().logEvent('register_account', {
              name: 'zidny',
            });
            console.log(await messaging().getToken());
          }}>
          <View
            style={{
              height: 60,
              width: 150,
              backgroundColor: 'white',
              alignSelf: 'center',
              borderRadius: 15,
              marginTop: 15,
            }}>
            <Text style={{color: 'black', textAlign: 'center', marginTop: 22}}>
              Click for analytics
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={async () => {
            console.log(await messaging().getToken());
            const token = await messaging().getToken();
            console.log(token);
            setToken(token);

            const body = {
              to: 'FCM Token goes here',
              notification: {
                body: 'New Lesson Added 1',
                title: 'Lokesh',
              },
            };
            const res = await axios.post(`${firebaseService}`, body, {
              headers: {
                Authorization: `Bearer AAAAp24LV5U:APA91bFKl3HG6-XLXzEmMpHrDnq88Op9sRHZNqeTT5XfEPQ-snqeLUJD3-KhvsJvHXklYHBpSjh35cmnb0VTdLwvBILLrN3JZ3jbtdMnp2EYScXWpn0jaxlxqwwDKB4EIFUb79-SlApv`,
              },
            });
            console.log(res);
          }}>
          <View
            style={{
              height: 60,
              width: 150,
              backgroundColor: 'white',
              alignSelf: 'center',
              borderRadius: 15,
              marginTop: 15,
            }}>
            <Text style={{color: 'black', textAlign: 'center', marginTop: 18}}>
              Testing Notif
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// import {View, Text, TouchableOpacity, Alert} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import crashlytics from '@react-native-firebase/crashlytics';
// import analytics from '@react-native-firebase/analytics';
// import messaging from '@react-native-firebase/messaging';
// import {firebaseService} from '../../utils/api';
// import axios from 'axios';

// export default function Home(props) {
//   const [tokenState, setToken] = useState('');
//   const {} = crashlytics();

//   useEffect(() => {
//     crashlytics().log('App mounted.');
//     requestPermissions();
//     const unsubscribe = messaging().onMessage(async remoteMessage => {
//       Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
//     });

//     return unsubscribe;
//   }, [requestPermissions]);
//   return (
//     <View style={{flex: 1, justifyContent: 'center'}}>
//       <TouchableOpacity
//         onPress={() => props.navigation.navigate('Geolocationn')}>
//         <View
//           style={{
//             height: 50,
//             width: 200,
//             backgroundColor: 'red',
//             alignSelf: 'center',
//           }}>
//           <Text style={{color: 'yellow', textAlign: 'center'}}>
//             Klik untuk melihat Lokasi
//           </Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => props.navigation.navigate('ScanScreen')}>
//         <View
//           style={{
//             height: 50,
//             width: 200,
//             backgroundColor: 'red',
//             alignSelf: 'center',
//             marginTop: 15,
//           }}>
//           <Text style={{textAlign: 'center', color: 'yellow'}}>
//             Klik untuk SCAN QR
//           </Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// }
