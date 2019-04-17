import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
} from 'react-native'

export default class BootMenuComponent extends Component {
  render() {
    return (
      <View>
        <ToolbarAndroid
        title="App"
        actions={[{title: 'aa', icon: require('../images/1.jpg'), show: 'always'},{title: 'bb', icon: require('../images/2.jpg'), show: 'always'},{title: 'cc', icon: require('../images/3.jpg'), show: 'always'}]}
        style={styles.toolbar}
        onActionSelected={this.onActionSelected}
        />
      </View>
    )
  }
  onActionSelected ( position ) {
    alert(position)
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    color: 'red'
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
})