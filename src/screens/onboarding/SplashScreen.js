import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';

import colors from 'res/colors';
import fonts from 'res/fonts';
import images from 'res/images';

class SplashScreen extends Component {
	render () {
		return (
			<View style={styles.background}>
				<Image source={{ uri: images.splashscreen }} style={styles.image} />
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {

	}
}

export default connect(mapStateToProps)(SplashScreen)

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#2699FB',
		height: hp('100%'),
		width: wp('100%'),
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		height: hp('10%'),
		width: wp('50%')
	}
})