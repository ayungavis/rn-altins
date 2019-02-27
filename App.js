/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

// import MainNavigator from './src/screens/main/MainNavigator';
import AuthNavigator from './src/screens/auth/AuthNavigator';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <AuthNavigator />
  }
}