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
  View
} from 'react-native';

import Keyboard from './src/Keyboard';
import InputCustom from './src/InputCustom';

export default class tecladoindigena extends Component {

  constructor() {
    super();

    this.state = {
      inputValue: []
    }
  }

  onInput(newChar) {
    this.setState({
      inputValue: this.state.inputValue.concat([newChar])
    });
  }

  render() {
    const keyboardData = [
      {value:'a', char: 'A', type: 'string'},
      {value:'b', char: 'B', type: 'string'},
      {value:'c', char: 'C', type: 'string'},
      {value:'d', char: 'D', type: 'string'},
      {value:'e', char: 'E', type: 'string'},
      {value:'g', char: 'か', type: 'string'},
      {value:'h', char: 'わ', type: 'string'},
      {value:'i', char: 'い', type: 'string'},
      {value:'j', char: 'い', type: 'string'},
      {value:'f', char: 'F', type: 'string'},
      {value:'k', char: 'K', type: 'string'},
      {value:'l', char: 'L', type: 'string'},
      {value:'m', char: 'M', type: 'string'},
      {value:'n', char: 'N', type: 'string'},
      {value:'o', char: 'O', type: 'string'},
      {value:'p', char: 'P', type: 'string'},
      {value:'q', char: 'Q', type: 'string'},
      {value:'r', char: 'R', type: 'string'},
      {value:'s', char: 'S', type: 'string'},
      {value:'t', char: 'T', type: 'string'},
      {value:'u', char: 'U', type: 'string'},
      {value:'v', char: 'V', type: 'string'},
      {value:'w', char: require('./assets/B.png'), type: 'image'},
      {value:'x', char: require('./assets/C.png'), type: 'image'},
      {value:'y', char: 'Y', type: 'string'},
      {value:'z', char: 'Z', type: 'string'},
      {value:'z1', char: 'す', type: 'string'}
    ];

    const {inputValue} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu

          aaaa{JSON.stringify(inputValue)}bbb
        </Text>

        <InputCustom value={inputValue} />

        <Keyboard data={keyboardData} onInput={this.onInput.bind(this)} />
      </View>
    );
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
    flex: 1
  },
});

AppRegistry.registerComponent('tecladoindigena', () => tecladoindigena);
