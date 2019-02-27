import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RectButon } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import fonts from 'res/fonts';
import colors from 'res/colors';

import Styles from 'res/styles';

class RegisterScreen extends Component {
	render () {
		return (
			<View style={Styles.container}>
				<Text>RegisterScreen</Text>
			</View>
		)
	}
}

export default RegisterScreen