import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Routes from './src/routes/navigator/nav';
import store from './src/config/store';
import { Provider } from 'react-redux';
import './src/reducers';

export default class App extends Component{
  render() {
    return (
        <Provider store={store}>
          <Routes/>
        </Provider>

    );
  }
}