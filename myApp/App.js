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
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>Hello World Marco6!</Text>
    //     <Text style={styles.instructions}>To get started, edit App.js</Text>
    //     <Text style={styles.instructions}>{instructions}</Text>
    //   </View>
    // );
    return (
      <View>
        <ToolbarAndroid
        logo={require('./src/images/1.jpg')}
        title="AwesomeApp"
        actions={[{title: 'Settings', icon: require('./src/images/2.jpg'), show: 'always'}]}
        style={styles.toolbar}/>
        <AntDesign name = {'caretup'} />
        <AntDesign name = {'pluscircleo'} />
        <AntDesign name = {'iconfontdesktop'} />
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
