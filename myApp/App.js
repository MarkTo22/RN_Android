import React, {Component} from 'react';
import {Platform,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
} from 'react-native';

import BootMenuComponent from './src/components/BootMenuComponent'
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BootMenuComponent />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 50
  },
});
