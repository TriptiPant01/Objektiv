import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import {Colors} from '../constant';
import {Scale} from '../services/HelperFunction';
import {Images} from '../images';
const styles = StyleSheet.create({
  iconStyle: {
    color: 'orange',
  },
  actionBoxContainer: {
    borderWidth: Scale(1),
    borderRadius: Scale(20),
    paddingVertical: Scale(20),

    paddingHorizontal: Scale(15),

    marginBottom: Scale(10),
    borderStyle: 'dashed',

    borderColor: Colors.startColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  exerciseStyle: {
    fontSize: Scale(20),
    color: Colors.activeTextColor,
    marginBottom: Scale(2),
    fontFamily: 'Raleway-SemiBold',
  },
  datetimeStyle: {
    color: Colors.startColor,
    fontSize: Scale(16),
    fontFamily: 'Raleway-Regular',
  },
  editContainer: {
    width: Scale(16),
    height: Scale(16),
  },
});
const Box = ({count}) => {
  var store = [];
  for (let i = 0; i < count; i++) {
    store.push(
      <View style={styles.actionBoxContainer} key={i}>
        <View>
          <Text style={styles.exerciseStyle}>20 situps</Text>
          <Text style={styles.datetimeStyle}>Mo, wed</Text>
        </View>
        <TouchableOpacity>
          <Image source={Images.Edit} style={styles.editContainer} />
        </TouchableOpacity>
      </View>,
    );
  }

  return <View>{store.map(i => i)}</View>;
};

export default Box;
