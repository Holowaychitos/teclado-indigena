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

export default class Char extends Component {
  render() {
    const {data} = this.props;

    return (
      <View style={styles.char}>
        {data.type === 'string' && (
          <Text style={styles.charText}>
            {data.char}
          </Text>
        )}

        {data.type === 'image' && (
          <Image
            style={styles.charImage}
            source={data.char} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  char: {
  },
  charText: {
    fontSize: 21
  },
  charImage: {
    height: 35,
    resizeMode: 'contain'
  },
});

AppRegistry.registerComponent('Char', () => Char);
