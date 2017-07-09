/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Store from './store';
import HelloComponent from './components/Hello';
export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <HelloComponent/>
      </Provider>
    );
  }
}