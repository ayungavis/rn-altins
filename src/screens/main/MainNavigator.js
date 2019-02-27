import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import EventScreen from './EventScreen';
import NewsScreen from './NewsScreen';
import ProfileScreen from './ProfileScreen';

import colors from 'res/colors';
import fonts from 'res/fonts';

const BottomNavigator = createMaterialBottomTabNavigator({
	Home: { 
		screen: HomeScreen,
		navigationOptions: {
			tabBarColor: colors.blue
		}
	},
	Event: { 
		screen: EventScreen,
		navigationOptions: {
			tabBarColor: colors.red
		}
	},
	News: { 
		screen: NewsScreen,
		navigationOptions: {
			tabBarColor: colors.orange
		}
	},
	Profile: { 
		screen: ProfileScreen,
		navigationOptions: {
			tabBarColor: colors.green
		}
	}  
}, {
	defaultNavigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			const { routeName } = navigation.state;
			let IconComponent = Icon;
			let iconName;
			if (routeName === 'Home') {
				iconName = 'ios-home';
			}
			else if (routeName === 'Event') {
				iconName = 'ios-calendar';
			}
			else if (routeName === 'News') {
				iconName = 'ios-paper';
			}
			else if (routeName === 'Profile') {
				iconName = 'ios-contact';
			}
			return <IconComponent name={iconName} size={23} color={tintColor} />;
		}
	}),
	initialRouteName: 'Home',
	shifting: true,
	activeColor: 'white',
	inactiveColor: 'white',
	barStyle: { fontFamily: fonts.regular }
});

const MainNavigator = createStackNavigator({
	Home: {
		screen: BottomNavigator,
		navigationOptions: {
			header: null
		}
	}
}, {
	headerMode: 'none'
});

export default createAppContainer(MainNavigator);