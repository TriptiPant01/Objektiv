import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Header} from 'react-native-elements';
import {Images} from '../images';
import {Scale} from '../services/HelperFunction';

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  topBackgroundStyle: {
    width: '100%',
    height: height * Scale(0.12),
    marginBottom: Scale(20),
    resizeMode: 'stretch',
  },
  headerStyle: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    borderColor: 'transparent',
  },
  leftItemStyle: {
    marginHorizontal: Scale(12),
  },
});

const HeaderComponent = ({navigation}) => {
  return (
    <ImageBackground
      source={Images.TopBackground}
      style={styles.topBackgroundStyle}>
      <Header
        leftComponent={
          <TouchableOpacity>
            <Image source={Images.BarIcon} style={styles.leftItemStyle} />
          </TouchableOpacity>
        }
        centerComponent={<Image source={Images.Logo} />}
        containerStyle={styles.headerStyle}
      />
    </ImageBackground>
  );
};

export default HeaderComponent;
