import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';

import {
  TextInputComponent,
  TextComponent,
  NextText,
  CustomButton,
} from '../../components';
import {Scale} from '../../services/HelperFunction';
import {Colors} from '../../constant';
import {Images} from '../../images';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  textInputContainerStyle: {
    fontSize: Scale(20),
    paddingVertical: Scale(20),
    marginTop: Scale(20),
    borderBottomColor: Colors.startColor,
  },
  container: {
    flexDirection: 'row',
    marginVertical: Scale(30),
    justifyContent: 'space-between',
  },
  textInputExternalStyle: {
    marginRight: Scale(40),
    fontSize: Scale(20),
    color: Colors.activeTextColor,
  },
  textInputByContainer: {
    width: width * Scale(0.5),
    paddingVertical: Scale(10),
    borderBottomColor: Colors.startColor,

    textAlign: 'center',
  },
  topWrapper: {},
  iconContainer: {
    right: 0,
    position: 'absolute',
    bottom: Scale(20),
  },
  customButtonContainer: {
    marginVertical: Scale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  externalButtonStyle: {
    backgroundColor: Colors.startColor,
    paddingHorizontal: Scale(20),
    height: Scale(48),
    width: Scale(180),
    borderRadius: Scale(24),
  },
  externalTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: Scale(20),
  },
});

const OverView = ({navigation}) => {
  const [commit, setCommit] = useState('');
  const [datevalue, setDate] = useState('');
  const [start, setStart] = useState(false);

  const handleDateChangeColor = val => {
    setDate(val);
  };
  const handleCommitMessage = text => {
    setCommit(text);
  };

  return (
    <View>
      {start ? (
        <View>
          <TextComponent
            title="Lorem ipsum dolor sit amet"
            Icon={<Image source={Images.InfoIcon} />}
          />
          <View style={styles.topWrapper}>
            <TextInputComponent
              placeholder="I commit to..."
              onChangeText={text => handleCommitMessage(text)}
              value={commit}
              multiline={true}
              externalStyle={
                commit.length < 2
                  ? {
                      ...styles.textInputContainerStyle,
                      borderBottomColor: Colors.redColor,
                    }
                  : {...styles.textInputContainerStyle}
              }
            />
            {commit.length === 0 && (
              <Image source={Images.Alert} style={styles.iconContainer} />
            )}
          </View>
          <View style={styles.container}>
            <TextComponent
              title="by"
              externalStyle={styles.textInputExternalStyle}
            />

            <TextInputComponent
              placeholder="22/08/2020"
              externalStyle={
                datevalue.length < 2
                  ? {...styles.textInputByContainer}
                  : {
                      ...styles.textInputByContainer,
                      borderBottomColor: Colors.startColor,
                    }
              }
              onChangeText={text => handleDateChangeColor(text)}
              value={datevalue}
            />
          </View>
          <NextText />
        </View>
      ) : (
        <View>
          <TextComponent
            title="Lorem ipsum dolor sit amet"
            Icon={<Image source={Images.InfoIcon} />}
          />
          <View style={styles.customButtonContainer}>
            <CustomButton
              title="START HERE"
              onPress={() => setStart(true)}
              externalStyle={styles.externalButtonStyle}
              externalTextStyle={styles.externalTextStyle}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default OverView;
