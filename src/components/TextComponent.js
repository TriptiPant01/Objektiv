import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Colors} from '../constant';
import {Scale} from '../services/HelperFunction';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    marginLeft: Scale(10),
    color: Colors.activeTextColor,
    fontSize: Scale(16),
    fontFamily: 'Raleway-Regular',
  },
});

const TextComponent = ({title, Icon, externalStyle}) => (
  <View style={styles.wrapper}>
    {Icon}
    <Text style={{...styles.textStyle, ...externalStyle}}>{title}</Text>
  </View>
);

export default TextComponent;
