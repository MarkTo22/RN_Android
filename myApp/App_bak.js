/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Ionicons";
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component {
  render() {
    return (
      <View>
        <ToolbarAndroid
        // logo={require('./src/images/1.jpg')}
        title="AwesomeApp"
        actions={[{title: 'aa', icon: require('./src/images/1.jpg'), show: 'always'},{title: 'bb', icon: require('./src/images/2.jpg'), show: 'always'},{title: 'cc', icon: require('./src/images/3.jpg'), show: 'always'}]}
        style={styles.toolbar}
        onActionSelected={this.onActionSelected}
        />
        <AntDesign size={26} color="#4F8EF7" name = {'caretup'} />
        <AntDesign size={26} color="#4F8EF7" name = {'pluscircleo'} />
        <AntDesign size={26} color="#4F8EF7" name = {'iconfontdesktop'} />
        <ToolbarView clickEve={this.tabClick}></ToolbarView>
      </View>
      
    )
  }
  tabClick() {
    
  }
  onActionSelected(position) {
    alert(position)
  }
}

class ToolbarView extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <View>
        <Icon.ToolbarAndroid
          title="Home"
          titleColor="white"
          navIconName="md-arrow-back"
          onIconClicked={props.clickEve}
          actions={[
            {
              title: 'a',
              iconName: 'md-settings',
              iconSize: 30,
              show: 'always',
            },
            {
              title: 'b',
              iconName: 'logo-twitter',
              iconColor: '#4099FF',
              show: 'ifRoom',
            },
          ]}
        />
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  }
});
