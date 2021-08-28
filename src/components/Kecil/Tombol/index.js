import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Filter, Notifikasi} from '../../../assets';
import {colors} from '../../../utils';
import TextOnly from './TextOnly';

const Tombol = props => {
  const Icon = () => {
    if (icon === 'notifikasi') {
      return <Notifikasi />;
    }
    if (icon === 'filter') {
      return <Filter />;
    }
    return <Notifikasi />;
  };
  const {
    type,
    padding,
    marginRight,
    marginTop,
    width,
    height,
    icon,
    paddingTop,
    paddingHorizontal,
    color,
    onPress,
  } = props;
  if (type === 'text') {
    return <TextOnly {...props} />;
  }
  return (
    <TouchableOpacity
      style={styles.container(padding, marginRight, marginTop)}
      onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default Tombol;

const styles = StyleSheet.create({
  container: (padding, marginRight, marginTop) => ({
    backgroundColor: colors.white,
    padding: padding,
    borderRadius: 5,
    marginRight: marginRight,
    marginTop: marginTop,
  }),
});
