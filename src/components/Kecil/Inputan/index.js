import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors} from '../../../utils';

const Inputan = ({
  label,
  suptext,
  fontSizes,
  fontSize,
  color,
  backgroundColor,
  placeholder,
  width,
  height,
  secureTextEntry,
  value,
  onFocus,
  lineHeight,
  textAlignVertical,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize, color, lineHeight)}>
        {label}
        <Text style={styles.labelsup(fontSizes, lineHeight, textAlignVertical)}>
          {suptext}
        </Text>
      </Text>
      <TextInput
        style={styles.input(width, height, fontSize, backgroundColor)}
        value={value}
        onFocus={onFocus}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Inputan;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: (fontSize, color) => ({
    fontSize: fontSize ? fontSize : 18,
    color: color,
    fontFamily: 'Arial',
    marginBottom: 4,
  }),
  labelsup: (fontSizes, lineHeight, textAlignVertical) => ({
    fontSize: fontSizes,
    lineHeight: lineHeight,

    textAlignVertical: textAlignVertical,
  }),
  input: (width, height, fontSize, backgroundColor) => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: 'Arial',
    width: width,
    height: height,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.white,
    backgroundColor: backgroundColor,
    paddingVertical: 9,
    paddingHorizontal: 10,
  }),
});
