import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

import fonts from 'res/fonts';
import colors from 'res/colors';

import Styles from 'res/styles';

class HomeScreen extends Component {
	render () {
		return (
			<View style={Styles.container}>
				<Text>HomeScreen</Text>
			</View>
		)
	}
}

export default HomeScreen

const styles = StyleSheet.create({
	slider: {

	},
	image: {

	},
	imageContainer: {

	}
});