import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Filter, Lefts, Notifikasi} from '../../../assets';
import {colors} from '../../../utils';
import TextOnly from './TextOnly';
import TombolLoading from './TombolLoading';

const Tombol = props => {
  const Icon = () => {
    if (icon === 'notifikasi') {
      return <Notifikasi />;
    }
    if (icon === 'filter') {
      return <Filter />;
    }
    if (icon === 'left') {
      return <Lefts />;
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
    loading,
    icon,
    paddingTop,
    paddingHorizontal,
    color,
    paddingVertical,
    onPress,
    marginLeft,
  } = props;
  if (loading) {
    return <TombolLoading {...props} />;
  }
  if (type === 'text') {
    return <TextOnly {...props} />;
  }

  return (
    <TouchableOpacity
      style={styles.container(
        padding,
        marginRight,
        marginTop,
        marginLeft,
        paddingTop,
        paddingHorizontal,
        paddingVertical,
      )}
      onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default Tombol;

const styles = StyleSheet.create({
  container: (
    padding,
    marginRight,
    marginTop,
    marginLeft,
    paddingTop,
    paddingHorizontal,
    paddingVertical,
  ) => ({
    backgroundColor: colors.white,
    padding: padding,
    borderRadius: 5,
    marginRight: marginRight,
    marginLeft: marginLeft,
    marginTop: marginTop,
    paddingTop: paddingTop,
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
  }),
});
