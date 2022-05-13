import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

export default function LoadingScreen() {
  return (
    <View
      style={{flex: 1, backgroundColor: 'yellow', justifyContent: 'center'}}>
      <ActivityIndicator color="#000" size="large" />
    </View>
  );
}
