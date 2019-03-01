import React, { Component } from 'react';
import { ActivityIndicator, View, AsyncStorage, StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';

import { getStatus } from 'library/redux/actions/auth';

import colors from 'res/colors';
import fonts from 'res/fonts';
import images from 'res/images';

class AuthLoadingScreen extends Component {
	constructor (props) {
		super (props)
		this.getStatus()
	}

	getStatus = async () => {
		const token = await AsyncStorage.getItem('token')
		// console.log('token baru:', token)
		this.props.dispatch(getStatus(token))
		.then(res => {
			this.props.navigation.navigate('Setting')
		})
		.catch(err => {
			this.props.navigation.navigate('Login')
		})
	}

	render () {
		return (
			<View style={styles.background}>
				<StatusBar backgroundColor={'#2699FB'} barStyle="light-content" translucent={false} />
				<ActivityIndicator size="large" color="white" />
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {

	}
}

export default connect(mapStateToProps)(AuthLoadingScreen)

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#2699FB',
		height: hp('100%'),
		width: wp('100%'),
		justifyContent: 'center',
		alignItems: 'center'
	}
})