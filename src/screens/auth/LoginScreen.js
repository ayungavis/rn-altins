import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';
import { Item, Label, Input, Form } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RectButton } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

import fonts from 'res/fonts';
import colors from 'res/colors';
import images from 'res/images';

import Styles from 'res/styles';

class LoginScreen extends Component {
	constructor () {
		super ()
		this.state = {
			toggledOn: false
		}
	}

	handleChangeSize () {
		this.setState({
			toggledOn: !this.state.toggledOn
		})
	}

	imageBackgroundToggle () {
		if (this.state.toggledOn) {
			const result = [styles.imageBackground, styles.imageBackgroundToggledOn]
			return result
		}
		else {
			const result = [styles.imageBackground, styles.imageBackgroundToggledOff]
			return result
		}
	}

	registerTitleToggle () {
		if (this.state.toggledOn) {
			const result = [styles.registerTitleLayout, styles.registerTitleLayoutToggledOn]
			return result
		}
		else {
			const result = [styles.registerTitleLayout, styles.registerTitleLayoutToggledOff]
			return result
		}
	}

	registerFormToggle () {
		if (this.state.toggledOn) return 'fadeOut'
		else return 'fadeIn'
	}

	registerOr () {
		if (this.state.toggledOn) return 'fadeIn'
		else return 'fadeOut'
	}

	registerAutoFocus () {
		if (this.state.toggledOn) return false
		else return true
	}

	loginAutoFocus () {
		if (this.state.toggledOn) return true
		else return false
	}

	render () {
		return (
			<View style={Styles.container}>
				<StatusBar backgroundColor={'transparent'} translucent={true}/>
				<Animatable.Image source={{ uri: images.login.background }} style={this.imageBackgroundToggle()} transition={['top']}></Animatable.Image>
				<View style={styles.registerLayout}>
					<Animatable.View style={this.registerTitleToggle()} transition={['top']}>
						{this.state.toggledOn ?  <Animatable.Text style={styles.loginOr} animation={this.registerOr()}>or  </Animatable.Text> : null }
						<TouchableWithoutFeedback onPress={() => this.handleChangeSize()}>
							<Animatable.Text style={[styles.registerTitle, this.state.toggledOn && styles.registerTitleToggledOn]} transition={['fontSize']}>Sign up</Animatable.Text>
						</TouchableWithoutFeedback>
					</Animatable.View>
					<Animatable.View style={styles.registerShape} animation={this.registerFormToggle()}>
						<Form style={styles.form}>
							<Item inlineLabel>
								{/*<Label style={styles.label}>Username</Label>*/}
								<Input style={styles.input} autoFocus={this.registerAutoFocus()} placeholder='Username' />
							</Item>
							<Item inlineLabel>
								{/*<Label style={styles.label}>Email</Label>*/}
								<Input style={styles.input} placeholder='Email' />
							</Item>
							<Item inlineLabel>
								{/*<Label style={styles.label}>Password</Label>*/}
								<Input style={styles.input} secureTextEntry={true} placeholder='Password' />
							</Item>
						</Form>
					</Animatable.View>
					<Animatable.View animation={this.registerFormToggle()}>
						<RectButton style={styles.registerButton}>
							<Text style={styles.registerButtonText}>Sign up</Text>
						</RectButton>
					</Animatable.View>
				</View>
				<Animatable.View style={[styles.loginShape, this.state.toggledOn && styles.loginShapeToggledOn]} transition={['bottom']}></Animatable.View>
				<Animatable.View style={[styles.loginLayout, this.state.toggledOn && styles.loginLayoutToggledOn]} transition={['bottom']}>
					<Animatable.View style={styles.loginTitleLayout}>
						{this.state.toggledOn == false ? <Animatable.Text style={styles.loginOr} animation={this.registerFormToggle()}>or  </Animatable.Text> : null }
						<TouchableWithoutFeedback onPress={() => this.handleChangeSize()}>
							<Animatable.Text style={[styles.loginTitle, this.state.toggledOn && styles.loginTitleToggledOn]} transition={['fontSize']}>Log in</Animatable.Text>
						</TouchableWithoutFeedback>
					</Animatable.View>
					<Animatable.View style={styles.loginFormLayout}>
						<Form style={styles.form}>
							<Item inlineLabel>
								{/*<Label style={styles.label}>Email</Label>*/}
								<Input style={styles.input} autoFocus={this.loginAutoFocus()} placeholder='Email' />
							</Item>
							<Item inlineLabel>
								{/*<Label style={styles.label}>Password</Label>*/}
								<Input style={styles.input} secureTextEntry={true} placeholder='Password' />
							</Item>
						</Form>
					</Animatable.View>
					<RectButton style={styles.loginButton}>
						<Text style={styles.loginButtonText}>Log in</Text>
					</RectButton>
					<TouchableWithoutFeedback>
						<Text style={styles.loginForgotPassword}>Forgot your password?</Text>
					</TouchableWithoutFeedback>
				</Animatable.View>
			</View>
		)
	}
}

export default LoginScreen

const styles = StyleSheet.create({
	imageBackground: {
		width: wp('100%'),
		height: hp('90%')
	},
	imageBackgroundToggledOn: {
		top: -30
	},
	imageBackgroundToggledOff: {
		top: 0
	},
	registerLayout: {
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		top: 100
	},
	registerTitleLayout: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	registerTitleLayoutToggledOn: {
		top: -50
	},
	registerTitleLayoutToggledOff: {
		top: 0
	},
	registerTitle: {
		fontFamily: fonts.black,
		fontSize: hp('4%'),
		color: colors.black,
	},
	registerTitleToggledOn: {
		fontSize: hp('2.5%')
	},
	registerShape: {
		width: wp('80%'),
		height: hp('27%'),
		backgroundColor: 'white',
		borderRadius: 10,
		marginTop: 40,
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	registerButton: {
		width: wp('80%'),
		height: hp('8%'),
		backgroundColor: colors.black,
		opacity: 0.7,
		borderRadius: 10,
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	registerButtonText: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: 'white'
	},
	loginShape: {
		position: 'absolute',
		width: wp('100%'),
		height: hp('100%'),
		backgroundColor: 'white',
		borderRadius: 600,
		bottom: -580, // -580
		justifyContent: 'center',
		alignItems: 'center',
		transform: [
			{ scaleX: 2 }
		]
	},
	loginShapeToggledOn: {
		position: 'absolute',
		width: wp('100%'),
		height: hp('100%'),
		backgroundColor: 'white',
		borderRadius: 600,
		bottom: -100,
		justifyContent: 'center',
		alignItems: 'center',
		transform: [
			{ scaleX: 2 }
		]
	},
	loginLayout: {
		 justifyContent: 'center', 
		 alignItems: 'center',
		 bottom: 0 
	},
	loginLayoutToggledOn: {
		bottom: 400
	},
	loginTitleLayout: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	loginTitle: {
		fontFamily: fonts.black,
		fontSize: hp('2.5%'),
		color: colors.black
	},
	loginTitleToggledOn: {
		fontSize: hp('4%')
	},
	loginOr: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: 'grey'
	},
	loginFormLayout: {
		width: wp('80%'),
		height: hp('20%'),
		backgroundColor: 'white',
		borderRadius: 10,
		marginTop: 40,
		justifyContent: 'center',
		alignItems: 'center',
		left: -10
	},
	loginButton: {
		width: wp('80%'),
		height: hp('8%'),
		backgroundColor: colors.blue,
		opacity: 0.7,
		borderRadius: 10,
		marginTop: 40,
		justifyContent: 'center',
		alignItems: 'center'
	},
	loginButtonText: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: 'white'
	},
	loginForgotPassword: {
		fontFamily: fonts.bold,
		fontSize: hp('2%'),
		color: colors.grey,
		marginTop: 70
	},
	form: {
		width: wp('75%'),
	},
	label: {
		fontFamily: fonts.regular,
		color: colors.grey
	},
	input: {
		height: hp('8%'),
		fontFamily: fonts.regular,
		// color: colors.primary
	}
})