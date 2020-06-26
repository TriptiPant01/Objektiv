import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Colors} from '../constant';
import {Scale} from '../services/HelperFunction';

const styles = StyleSheet.create({
  textInputStyle: {
    borderBottomWidth: Scale(1),
    color: Colors.activeTextColor,
    fontSize: Scale(20),
    fontFamily: 'Raleway-Regular',
  },
});
const TextInputComponent = ({externalStyle, ...props}) => (
  <View>
    <TextInput
      style={{...styles.textInputStyle, ...externalStyle}}
      {...props}
    />
  </View>
);

export default TextInputComponent;
