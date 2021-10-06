import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Filter, Lefts, MessageAktif, Notifikasi} from '../../../assets';
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
    if (icon === 'message') {
      return <MessageAktif />;
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
    borderWidth,
    borderColor,
    justifyContent,
    alignItems,
    alignSelf,
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
        borderWidth,
        borderColor,
        height,
        justifyContent,
        alignItems,
        alignSelf,
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
    borderWidth,
    borderColor,
    height,
    justifyContent,
    alignItems,
    alignSelf,
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
    borderWidth: borderWidth,
    borderColor: borderColor,
    height: height,
    justifyContent: justifyContent,
    alignItems: alignItems,
    alignSelf: alignSelf,
  }),
});
