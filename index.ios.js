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
      {value:'a', char: require('./assets/A0.png'), type: 'image'},
      {value:'a', char: require('./assets/A1.png'), type: 'image'},
      {value:'a', char: require('./assets/A2.png'), type: 'image'},
      {value:'b', char: require('./assets/B0.png'), type: 'image'},
      {value:'b', char: require('./assets/B1.png'), type: 'image'},
      {value:'c', char: require('./assets/C.png'), type: 'image'},
      {value:'ca', char: require('./assets/CA.png'), type: 'image'},
      {value:'cu', char: require('./assets/CU.png'), type: 'image'},
      {value:'e', char: require('./assets/E.png'), type: 'image'},
      {value:'h', char: require('./assets/h.png'), type: 'image'},
      {value:'i', char: require('./assets/I.png'), type: 'image'},
      {value:'k', char: require('./assets/k.png'), type: 'image'},
      {value:'ku', char: require('./assets/KU.png'), type: 'image'},
      {value:'l', char: require('./assets/L0.png'), type: 'image'},
      {value:'l', char: require('./assets/L1.png'), type: 'image'},
      {value:'m', char: require('./assets/M.png'), type: 'image'},
      {value:'n', char: require('./assets/N.png'), type: 'image'},
      {value:'o', char: require('./assets/o0.png'), type: 'image'},
      {value:'o', char: require('./assets/o1.png'), type: 'image'},
      {value:'p', char: require('./assets/p.png'), type: 'image'},
      {value:'pp', char: require('./assets/PP.png'), type: 'image'},
      {value:'t', char: require('./assets/T.png'), type: 'image'},
      {value:'u', char: require('./assets/u0.png'), type: 'image'},
      {value:'u', char: require('./assets/u1.png'), type: 'image'},
      {value:'x', char: require('./assets/X0.png'), type: 'image'},
      {value:'x', char: require('./assets/X1.png'), type: 'image'},
      {value:'z', char: require('./assets/Z.png'), type: 'image'}
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
