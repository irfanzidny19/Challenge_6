import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Buttonn = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Buttonn;

const styles = StyleSheet.create({});
