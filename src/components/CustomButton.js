import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonStyle: {justifyContent: 'center', alignItems: 'center'},
  textStyle: {
    textAlign: 'center',
    fontFamily: 'Raleway-Bold',
  },
});

const CustomButton = ({
  navigation,
  externalStyle,
  onPress,
  externalTextStyle,
  title,
}) => (
  <TouchableOpacity
    style={{...styles.buttonStyle, ...externalStyle}}
    onPress={onPress}>
    <Text style={{...styles.textStyle, ...externalTextStyle}}>{title}</Text>
  </TouchableOpacity>
);

export default CustomButton;
