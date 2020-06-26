import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {TextComponent, ActionBox, NextText} from '../../components';
import {Scale} from '../../services/HelperFunction';
import {Images} from '../../images';
import {Colors} from '../../constant';

const styles = StyleSheet.create({
  textInputWrapper: {
    marginVertical: Scale(20),
  },
  plusContainer: {
    height: Scale(28),
    width: Scale(28),
    backgroundColor: Colors.orangeColor,
    borderRadius: Scale(14),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  imageStyle: {
    width: Scale(10),
    height: Scale(10),
  },
});
const Actions = ({params}) => {
  const [plus, setPlus] = useState(2);

  const handlePlusIcon = () => {
    setPlus(plus + 1);
  };
  return (
    <View>
      <TextComponent
        title="Lorem ipsum dolor sit amet"
        Icon={<Image source={Images.InfoIcon} />}
      />
      <View style={styles.textInputWrapper}>
        <ActionBox count={plus} />
      </View>
      <TouchableOpacity
        style={styles.plusContainer}
        onPress={() => handlePlusIcon()}>
        <Image source={Images.Plus} style={styles.imageStyle} />
      </TouchableOpacity>
      <NextText />
    </View>
  );
};

export default Actions;
