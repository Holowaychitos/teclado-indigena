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
  Image,
  TouchableOpacity
} from 'react-native';

import _ from 'lodash';

import Char from './Char';

export default class Keyboard extends Component {

  onClick(char) {
    console.log(char)

    this.props.onInput(char);
  }

  render() {
    const {data} = this.props;

    return (
      <View style={styles.keyboard}>

        {_.map(data.slice(0, -4), key => {
          return <TouchableOpacity style={styles.keyboardButton} key={key.value} onPress={this.onClick.bind(this, key)}>
            <Char data={key}/>
          </TouchableOpacity>
        })}

        <View style={styles.break} />

        {_.map(data.slice(-4).slice(0, 2), key => {
          return <TouchableOpacity style={styles.keyboardButton} key={key.value} onPress={this.onClick.bind(this, key)}>
            <Char data={key}/>            
          </TouchableOpacity>
        })}

        <TouchableOpacity style={styles.keyboardButton}>
          <Text style={styles.keyboardText}>    space    </Text>
        </TouchableOpacity>

        {_.map(data.slice(-2), key => {
          return <TouchableOpacity style={styles.keyboardButton} key={key.value} onPress={this.onClick.bind(this, key)}>
            <Char data={key}/>
          </TouchableOpacity>
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  keyboard: {
    borderTopColor: '#c0c4cc',
    borderTopWidth: 1,
    backgroundColor: '#cdd0d7',
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    flexWrap: 'wrap'
  },
  keyboardButton: {
    backgroundColor: '#fff',
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 5,
    marginBottom: 5,
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    shadowOffset:{
      width: 0,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowRadius: 0.2,
    alignContent: 'center',
    justifyContent: 'center'
  },
  keyboardText: {
    fontSize: 21
  },
  keyboardImage: {
    height: 35,
    resizeMode: 'contain'
  },
  break: {
    width: Dimensions.get('window').width,
  }
});

AppRegistry.registerComponent('Keyboard', () => Keyboard);
