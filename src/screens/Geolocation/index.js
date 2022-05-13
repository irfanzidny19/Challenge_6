import {View, Text, Alert, PermissionsAndroid} from 'react-native';
import React, {useState, useEffect} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

// componentDidMount() {
//     this.requestLocationPermission();
// }

//  requestLocationPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       {
//         title: 'Izinkan mengambil data lokasi',
//         message: 'Izin kan mengambil ' + 'so you can take awesome pictures.',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log('Sekarang bisa mengacdcdkses Lokasi');
//     } else {
//       console.log('Tidak diizinkan');
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };
export default function Geolocation() {
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{height: 900}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    </View>
  );
}
