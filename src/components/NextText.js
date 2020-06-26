import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import {Scale} from '../services/HelperFunction';
import {Colors} from '../constant';
import {Images} from '../images';

const styles = StyleSheet.create({
  nextTextStyle: {
    fontSize: Scale(20),
    fontWeight: 'bold',
    color: Colors.startColor,
    textAlign: 'right',
  },
  nextTextStyleContainer: {
    marginVertical: Scale(20),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconStyle: {
    fontSize: Scale(16),
    color: 'blue',
    marginLeft: Scale(-6),
  },
  rightIconContainer: {
    marginLeft: Scale(10),
  },
});
const NextText = ({params}) => (
  <TouchableOpacity style={styles.nextTextStyleContainer}>
    <Text style={styles.nextTextStyle}>NEXT </Text>
    <View style={styles.rightIconContainer}>
      <Image source={Images.Right} />
    </View>
  </TouchableOpacity>
);

export default NextText;
