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

export default class Message extends Component {
  render() {
    const {value} = this.props;

    return (
      <View style={styles.input}>
        {_.map(value, (key, keyIdx) => {
          return <Char data={key} key={keyIdx} />
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'scroll'
  }
});
