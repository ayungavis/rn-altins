import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, ScrollView, Image, StatusBar, TouchableWithoutFeedback, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RectButton } from 'react-native-gesture-handler';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux';

import fonts from 'res/fonts';
import colors from 'res/colors';
import server from 'res/server';

import Styles from 'res/styles';

class SettingScreen extends Component {
	_renderFixedHeader () {
		return (
			<View style={styles.headerContainer}>
				<TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
					<View style={styles.headerLeft}>
						<FontAwesome5 name='chevron-left' size={20} color='white' style={{ marginLeft: 20 }} />
						{/*<Text style={styles.headerTitle}>Home</Text>*/}
					</View>
				</TouchableWithoutFeedback>
				<View style={styles.headerMiddle}>
					<Text style={styles.headerTitle}>Setting</Text>
				</View>
				<View style={styles.headerRight}>
					{/*<View style={styles.headerAvatar}></View>*/}
				</View>
			</View>
		)
	}

	_renderForeground () {
		return (
			<View style={{ width: wp('80%'), height: hp('15%'), backgroundColor: colors.black }}>
			</View>
		)
	}

	_renderBackground () {
		return (
			<View style={styles.parallaxBackground}></View>
		)
	}

	render () {
		return (
			<ParallaxScrollView
				parallaxHeaderHeight={hp('30%')}
				renderFixedHeader={this._renderFixedHeader}
				backgroundColor={colors.primary}
				renderBackground={this._renderBackground}
				stickyHeaderHeight={hp('8%')}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={Styles.container}
				renderForeground={this._renderForeground}
			>
				<View style={Styles.container}>
					<StatusBar backgroundColor={colors.primary} barStyle="light-content" translucent={false} />
					
				</View>
			</ParallaxScrollView>
		)
	}
}

export default SettingScreen;

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: colors.primary,
		height: hp('7.5%')
	},
	headerLeft: {
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	headerMiddle: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerRight: {
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	headerTitle: {
		fontFamily: fonts.bold,
		fontSize: hp('3%'),
		color: 'white',
		marginRight: 20
	},
	parallaxBackground: {
		backgroundColor: colors.primary
	}
})