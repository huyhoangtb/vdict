/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './src/index';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class vdict extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('vdict', () => vdict);
