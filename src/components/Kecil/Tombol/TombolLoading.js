import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const TombolLoading = ({
  padding,
  color,
  title,
  onPress,
  fontSize,
  paddingHorizontal,
  paddingVertical,
  backgroundColor,
  width,
  height,
  fontFamily,
  borderWidth,
  borderColor,
  justifyContent,
  borderRadius,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
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
      <Text style={styles.text(fontSize, fontFamily, color)}>
        Loading . . .
      </Text>
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
  text: (fontSize, fontFamily, color) => ({
    color: color,
    textAlign: 'center',
    fontSize: fontSize ? fontSize : 13,
    fontFamily: fontFamily,
  }),
});
