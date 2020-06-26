import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import Accordion from 'react-native-collapsible/Accordion';
import {OverView, Actions} from './InnerScreens';
import {Header, CustomButton} from '../components';
import {Colors} from '../constant';
import {Scale} from '../services/HelperFunction';
import {Images} from '../images';

const CONTENT = [
  {
    id: '0',
    title: '1. Overview',
    content: <OverView />,
  },
  {
    id: '1',
    title: '2. Actions',
    content: <Actions />,
  },
  {
    id: '2',
    title: '3. Stakes',
    content: <OverView />,
  },
  {
    id: '3',
    title: '4. Accountability Partner',
    content: <OverView />,
  },
  {
    id: '4',
    title: '5. Social Sharing',
    content: <OverView />,
  },
];

export default class App extends Component {
  state = {
    activeSections: [],
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <View
        style={[
          styles.headerStyle,
          isActive ? styles.active : styles.inactive,
        ]}>
        <Text
          style={[
            styles.headerText,
            isActive ? styles.activeText : styles.inactiveText,
          ]}>
          {section.title}
        </Text>
        {!isActive ? (
          <Image source={Images.DownIcon} style={styles.downIconStyle} />
        ) : (
          <TouchableOpacity
            style={styles.questionContainer}
            onPress={() => alert('info Pressed')}>
            <Image source={Images.Help} />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  renderContent(section) {
    return <View style={styles.content}>{section.content}</View>;
  }

  render() {
    const {activeSections} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titletextStyle}>New contract</Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}>
            <Accordion
              activeSections={activeSections}
              sections={CONTENT}
              touchableComponent={TouchableOpacity}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
              duration={400}
              onChange={this.setSections}
              sectionContainerStyle={styles.containerStyle}
            />
          </ScrollView>
          <View style={styles.buttonContainerStyle}>
            <CustomButton
              title="CREATE"
              externalStyle={styles.buttonexternalStyle}
              externalTextStyle={styles.buttonTextStyle}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  downIconStyle: {
    tintColor: '#b2a9a9',
  },
  buttonTextStyle: {
    fontSize: Scale(24),
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  buttonContainerStyle: {
    marginBottom: Scale(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Scale(5),
  },
  buttonexternalStyle: {
    backgroundColor: Colors.buttonStartColor,
    height: Scale(60),
    width: Scale(200),
    borderRadius: Scale(30),
  },
  barIconStyle: {
    position: 'absolute',
    left: Scale(15),
  },
  topTextStyle: {color: 'white', fontSize: 20},
  wrapper: {flex: 1, backgroundColor: 'white'},
  questionContainer: {
    width: Scale(50),
    height: Scale(50),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  backGroundStyle: {
    width: '100%',
    height: Scale(120),
    marginBottom: Scale(30),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titletextStyle: {
    fontSize: Scale(38),
    textAlign: 'center',
    color: Colors.textColor,
    fontFamily: 'Raleway-Light',
  },
  containerStyle: {
    backgroundColor: '#EFECFF',
    borderRadius: Scale(20),
    marginBottom: Scale(10),
  },
  headerStyle: {
    borderRadius: Scale(20),
    height: Scale(64),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Scale(20),
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    marginHorizontal: Scale(20),
  },
  title: {
    fontSize: Scale(22),
    fontWeight: '300',
  },
  header: {
    backgroundColor: '#F5FCFF',
  },
  headerText: {
    textAlign: 'center',
    fontSize: Scale(20),
    color: '#4E4E4E',
    fontFamily: 'Raleway-Regular',
  },
  content: {
    paddingVertical: Scale(10),
    borderRadius: Scale(100),
    paddingHorizontal: Scale(20),
  },
  titleContainer: {
    marginBottom: Scale(20),
  },
  active: {
    backgroundColor: '#EFECFF',
  },
  inactive: {
    backgroundColor: '#F6F6F6',
  },
  activeText: {
    color: Colors.activeTextColor,
  },
  inactiveText: {
    color: '#b2a9a9',
  },
  arrowStyle: {
    backgroundColor: '#b2a9a9',
  },
});
