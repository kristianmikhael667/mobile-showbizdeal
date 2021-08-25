import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextOnly from './TextOnly';

const Tombol = props => {
  const {type, width, height, paddingTop, paddingHorizontal, color, onPress} =
    props;
  if (type === 'text') {
    return <TextOnly {...props} />;
  }
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Tombol;

const styles = StyleSheet.create({});
