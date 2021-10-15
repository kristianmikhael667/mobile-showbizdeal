import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../../utils';

const TombolLoading = ({
  padding,

  onPress,
  paddingHorizontal,
  paddingVertical,
  backgroundColor,
  width,
  height,
  borderWidth,
  borderColor,
  justifyContent,
  borderRadius,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={true}
      style={styles.container(
        backgroundColor,
        padding,
        paddingHorizontal,
        paddingVertical,
        width,
        height,
        borderWidth,
        borderColor,
        justifyContent,
        borderRadius,
      )}>
      <View style={styles.indikator}>
        <ActivityIndicator size="large" color={colors.active} />
      </View>
    </TouchableOpacity>
  );
};

export default TombolLoading;

const styles = StyleSheet.create({
  container: (
    backgroundColor,
    padding,
    paddingHorizontal,
    paddingVertical,
    width,
    height,
    borderWidth,
    borderColor,
    justifyContent,
    borderRadius,
  ) => ({
    backgroundColor: backgroundColor,
    padding: padding,
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
    borderRadius: 8,
    width: width,
    borderRadius: borderRadius,
    height: height,
    borderWidth: borderWidth,
    borderColor: borderColor,
    justifyContent: justifyContent,
  }),
  indikator: {
    flex: 1,
    justifyContent: 'center',
  },
});
