import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './HomeScreen';
import EventScreen from './EventScreen';
import NewsScreen from './NewsScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';

import colors from 'res/colors';
import fonts from 'res/fonts';

const BottomNavigator = createMaterialBottomTabNavigator({
	Home: { 
		screen: HomeScreen,
		navigationOptions: {
		 	tabBarColor: colors.background
		}
	},
	Event: { 
		screen: EventScreen,
		navigationOptions: {
		 	tabBarColor: colors.background
		}
	},
	News: { 
		screen: NewsScreen,
		navigationOptions: {
		 	tabBarColor: colors.background
		}
	},
	Profile: { 
		screen: ProfileScreen,
		navigationOptions: {
		 	tabBarColor: colors.background
		}
	}  
}, {
	defaultNavigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			const { routeName } = navigation.state;
			let IconComponent = FontAwesome5;
			let iconName;
			if (routeName === 'Home') {
				iconName = 'home';
			}
			else if (routeName === 'Event') {
				iconName = 'calendar-alt';
			}
			else if (routeName === 'News') {
				iconName = 'newspaper';
			}
			else if (routeName === 'Profile') {
				iconName = 'user';
			}
			return <IconComponent name={iconName} size={23} color={tintColor} />;
		}
	}),
	initialRouteName: 'Home',
	shifting: true,
	activeColor: '#1BA0E2',
	inactiveColor: colors.grey,
	barStyle: { backgroundColor: 'white', fontFamily: fonts.regular }
});

const MainNavigator = createStackNavigator({
	Home: {
		screen: BottomNavigator,
		navigationOptions: {
			header: null
		}
	},
	Setting: { screen: SettingScreen }
}, {
	headerMode: 'none'
});

export default createAppContainer(MainNavigator);