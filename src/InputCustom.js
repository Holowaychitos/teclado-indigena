/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';

import _ from 'lodash';
import Char from './Char';

export default class InputCustom extends Component {
  render() {
    const {value} = this.props;
    let newValue = value
    if(value.length > 6){
      newValue = value.slice(value.length - 6, value.length)
    }

    return (
      <View style={styles.input}>
        {_.map(newValue, (key, keyIdx) => {
          return <Char data={key} key={keyIdx} />
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'scroll'
  }
});

AppRegistry.registerComponent('InputCustom', () => InputCustom);
