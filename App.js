/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { NavigationActions } from 'react-navigation';

// import MainNavigator from './src/screens/main/MainNavigator';
import SwitchNavigator from './src/screens/auth/AuthNavigator';

import store from 'library/redux/store';

export default class App extends Component {
  componentWillMount() {
    SplashScreen.hide();
  }

  render() {
    return (
    	<Provider store={store}>
    		<SwitchNavigator />
    	</Provider>
    )
  }
}