import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const TextOnly = ({
  padding,
  color,
  title,
  onPress,
  fontSize,
  paddingLeft,
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
  marginTop,
  textAlign,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container(
        backgroundColor,
        padding,
        paddingLeft,
        paddingHorizontal,
        paddingVertical,
        width,
        height,
        borderWidth,
        borderColor,
        justifyContent,
        borderRadius,
        marginTop,
      )}>
      <Text style={styles.text(fontSize, fontFamily, color, textAlign)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TextOnly;

const styles = StyleSheet.create({
  container: (
    backgroundColor,
    padding,
    paddingLeft,
    paddingHorizontal,
    paddingVertical,
    width,
    height,
    borderWidth,
    borderColor,
    justifyContent,
    borderRadius,
    marginTop,
  ) => ({
    backgroundColor: backgroundColor,
    padding: padding,
    paddingLeft: paddingLeft,
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
    borderRadius: 8,
    width: width,
    borderRadius: borderRadius,
    height: height,
    borderWidth: borderWidth,
    borderColor: borderColor,
    justifyContent: justifyContent,
    marginTop: marginTop,
  }),
  text: (fontSize, fontFamily, color, textAlign) => ({
    color: color,
    textAlign: 'center',
    fontSize: fontSize ? fontSize : 13,
    fontFamily: fontFamily,
    textAlign: textAlign,
  }),
});
