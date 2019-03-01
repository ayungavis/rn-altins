import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from './SplashScreen';

const OnboardingNavigator = createStackNavigator({
	Splash: { screen: SplashScreen }
}, {
	initialRouteName: 'Splash',
	headerMode: 'none'
})

export default createAppContainer(OnboardingNavigator)