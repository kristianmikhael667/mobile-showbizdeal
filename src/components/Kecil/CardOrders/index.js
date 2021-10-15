import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const CardOrders = ({order}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.text}>{order}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardOrders;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  body: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  text: {
    fontFamily: fonts.primary.regular,
    fontSize: 14,
  },
});
