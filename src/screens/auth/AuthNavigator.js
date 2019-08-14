import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import MainNavigator from '../main/MainNavigator';

import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import AuthLoadingScreen from './AuthLoadingScreen'

const AuthNavigator = createStackNavigator({
	Login: { screen: LoginScreen },
	Register: { screen: RegisterScreen },
	Home: { screen: MainNavigator }
}, {
	initialRouteName: 'Login',
	headerMode: 'none'
})

const SwitchNavigator = createSwitchNavigator({
	AuthLoading: { screen: AuthLoadingScreen },
	Login: { screen: AuthNavigator },
	Home: {screen: MainNavigator }
}, {
	initialRouteName: 'Home'
})

export default createAppContainer(SwitchNavigator)