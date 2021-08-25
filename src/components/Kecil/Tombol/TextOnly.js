import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const TextOnly = ({
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
      )}>
      <Text style={styles.text(fontSize, fontFamily, color)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextOnly;

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
  ) => ({
    backgroundColor: backgroundColor,
    padding: padding,
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
    borderRadius: 8,
    width: width,
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
