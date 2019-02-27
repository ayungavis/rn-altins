import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainNavigator from '../main/MainNavigator';

import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const AuthNavigator = createStackNavigator({
	Login: { screen: LoginScreen },
	Register: { screen: RegisterScreen },
	Home: { screen: MainNavigator }
}, {
	initialRouteName: 'Login',
	headerMode: 'none'
})

export default createAppContainer(AuthNavigator)