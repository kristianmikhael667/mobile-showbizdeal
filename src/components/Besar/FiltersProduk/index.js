import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  colors,
  heightMobileUi,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
const FilterProduk = ({title, active, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(active)} onPress={onPress}>
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FilterProduk;

const styles = StyleSheet.create({
  container: active => ({
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
    width: responsiveWidth(102),
    height: 25,
    backgroundColor: active ? colors.nonactive : colors.white,
  }),
  text: active => ({
    fontSize: RFValue(11, heightMobileUi),
    color: active ? colors.white : colors.black,
    textAlign: 'center',
  }),
});
