import {View, Text, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {Marker} from 'react-native-maps';

const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function Geolocationn() {
  let myMap;
  const [currentPosition, setCurrentPosition] = useState(initialState);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        // alert(JSON.stringify(position));

        const {longitude, latitude} = position.coords;
        setCurrentPosition({
          ...currentPosition,
          latitude,
          longitude,
        });
      },
      error => alert(error.message),
      {timeout: 20000, maximumAge: 1000},
    );
    // setCurrentPosition({
    //   ...currentPosition,
    //   latitude: 37.78825,
    //   longitude: -122.4324,
    // });
  }, []);

  return currentPosition.latitude ? (
    <MapView
      ref={ref => (myMap = ref)}
      provider={PROVIDER_GOOGLE}
      style={{flex: 1}}
      showsUserLocation
      initialRegion={currentPosition}>
      <Marker
        coordinate={{
          latitude: -6.183912,
          longitude: 106.676169,
        }}
        title={'RS SARI ASIH'}
        description={'NO TELP: 08129180128'}
        onPress={() => {
          myMap.fitToCoordinates(
            [
              {
                latitude: -6.183912,
                longitude: 106.676169,
              },
            ],
            {
              edgePadding: {top: 10, bottom: 10, left: 10, right: 10},
              animated: true,
            },
          );
        }}
      />
    </MapView>
  ) : (
    <ActivityIndicator style={{flex: 1}} animating size="large" />
  );
}
