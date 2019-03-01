import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, ScrollView, Image, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RectButton } from 'react-native-gesture-handler';
import RadioGroup from 'react-native-custom-radio-group';
import { connect } from 'react-redux';

import fonts from 'res/fonts';
import colors from 'res/colors';
import server from 'res/server';

import Styles from 'res/styles';
import Category from 'res/data/category';

class NewsScreen extends Component {
	render () {
		return (
			<View style={Styles.container}>
				<StatusBar backgroundColor={colors.background} barStyle="dark-content" translucent={false} />
				<ScrollView showsVerticalScrollIndicator={false} >
					<View style={styles.headerContainer}>
						<Text style={styles.headerTitle}>Hi, Ayung!</Text>
						<Text style={styles.headerSubTitle}>Let's know what's new in here.</Text>
					</View>
					<View style={styles.mainLayout}>
						<View style={styles.mainImage}>
							<View style={styles.mainSubLayout}>
								<FontAwesome5 name="eye" size={15} color={'white'} />
								<Text style={styles.mainSubText}>562</Text>
								<FontAwesome5 name="clock" size={15} color={'white'} light />
								<Text style={styles.mainSubText}>3 hours ago</Text>
							</View>
							<Text style={styles.mainTitle} numberOfLines={2}>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing</Text>
						</View>
					</View>
					<View style={styles.titleLayout}>
						<Text style={styles.titleText}>Choose Category</Text>
						{/*<Text style={styles.titleSubText}>Show All</Text>*/}
					</View>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						<RadioGroup 
							radioGroupList={Category}
							initialValue={'all'}
							containerStyle={styles.categoryContainer}
							buttonContainerStyle={styles.categoryButton}
							buttonTextStyle={styles.categoryButtonText}
							buttonContainerActiveStyle={styles.categoryButtonActive}
							buttonContainerInactiveStyle={styles.categoryButtonInactive}
							buttonTextActiveStyle={styles.categoryButtonTextActive}
							buttonTextInactiveStyle={styles.categoryButtonTextInactive}
						/>
					</ScrollView>
					<View style={styles.newsLayout}>
						<View style={styles.newsImage}>
							<View style={styles.mainSubLayout}>
								<FontAwesome5 name="eye" size={15} color={'white'} />
								<Text style={styles.mainSubText}>562</Text>
								<FontAwesome5 name="clock" size={15} color={'white'} light />
								<Text style={styles.mainSubText}>3 hours ago</Text>
							</View>
						</View>
						<View style={styles.newsTitleLayout}>
							<Text style={styles.newsTitle} numberOfLines={2}>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing</Text>
							<Text style={styles.newsDescription} numberOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris felis, vehicula id facilisis vitae, laoreet nec odio. Fusce lobortis ex a dolor ultricies porttitor. Curabitur in quam eu nibh condimentum venenatis. Nulla pellentesque metus nec est malesuada euismod. Quisque condimentum ornare libero. Sed iaculis lacus orci, sit amet tempus libero tempor id.</Text>
						</View>
					</View>
					<View style={styles.newsLayout}>
						<View style={styles.newsImage}>
							<View style={styles.mainSubLayout}>
								<FontAwesome5 name="eye" size={15} color={'white'} />
								<Text style={styles.mainSubText}>562</Text>
								<FontAwesome5 name="clock" size={15} color={'white'} light />
								<Text style={styles.mainSubText}>3 hours ago</Text>
							</View>
						</View>
						<View style={styles.newsTitleLayout}>
							<Text style={styles.newsTitle} numberOfLines={2}>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing</Text>
							<Text style={styles.newsDescription} numberOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris felis, vehicula id facilisis vitae, laoreet nec odio. Fusce lobortis ex a dolor ultricies porttitor. Curabitur in quam eu nibh condimentum venenatis. Nulla pellentesque metus nec est malesuada euismod. Quisque condimentum ornare libero. Sed iaculis lacus orci, sit amet tempus libero tempor id.</Text>
						</View>
					</View>
					<View style={styles.newsLayout}>
						<View style={styles.newsImage}>
							<View style={styles.mainSubLayout}>
								<FontAwesome5 name="eye" size={15} color={'white'} />
								<Text style={styles.mainSubText}>562</Text>
								<FontAwesome5 name="clock" size={15} color={'white'} light />
								<Text style={styles.mainSubText}>3 hours ago</Text>
							</View>
						</View>
						<View style={styles.newsTitleLayout}>
							<Text style={styles.newsTitle} numberOfLines={2}>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing</Text>
							<Text style={styles.newsDescription} numberOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris felis, vehicula id facilisis vitae, laoreet nec odio. Fusce lobortis ex a dolor ultricies porttitor. Curabitur in quam eu nibh condimentum venenatis. Nulla pellentesque metus nec est malesuada euismod. Quisque condimentum ornare libero. Sed iaculis lacus orci, sit amet tempus libero tempor id.</Text>
						</View>
					</View>
					<View style={{ marginBottom: 20 }}></View>
				</ScrollView>
			</View>
		);
	}
}

export default NewsScreen

const styles = StyleSheet.create({
	headerContainer: {
		width: wp('80%'),
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginTop: 15,
		marginLeft: 30,
		marginRight: 30
	},
	headerTitle: {
		fontFamily: fonts.bold,
		fontSize: hp('4%'),
		color: colors.black
	},
	headerSubTitle: {
		fontFamily: fonts.regular,
		fontSize: hp('2.5%'),
		color: colors.black
	},
	mainLayout: {
		marginTop: 30,
		marginRight: 30,
		marginLeft: 30
	},
	mainImage: {
		width: wp('85%'),
		height: hp('45%'),
		backgroundColor: colors.grey,
		borderRadius: 5,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		padding: 20
	},
	mainSubLayout: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10
	},
	mainSubText: {
		fontFamily: fonts.semibold,
		fontSize: hp('2%'),
		color: 'white',
		marginLeft: 5,
		marginRight: 10
	},
	mainTitle: {
		fontFamily: fonts.bold,
		fontSize: hp('3%'),
		color: 'white',
		lineHeight: 30
	},
	titleLayout: {
		marginTop: 40,
		marginLeft: 30,
		marginRight: 30,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	titleText: {
		fontFamily: fonts.bold,
		fontSize: hp('3%'),
		color: colors.black
	},
	titleSubText: {
		fontFamily: fonts.regular,
		fontSize: hp('2%'),
		color: colors.grey
	},
	categoryContainer: {
		marginLeft: 30,
		marginRight: 30,
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'flex-start',
		height: hp('10%')
	},
	categoryButton: {
		width: wp('30%'),
		height: hp('5%'),
		backgroundColor: 'white',
		borderRadius: 100,
		borderWidth: 0,
		marginRight: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	categoryButtonActive: {
		backgroundColor: colors.blue,
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 10
	},
	categoryButtonInactive: {
		backgroundColor: colors.grey,
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0,
		shadowRadius: 0,
		elevation: 0,
	},
	categoryButtonText: {
		fontFamily: fonts.semibold,
		fontSize: hp('2%'),
		color: colors.black
	},
	categoryButtonTextActive: {
		fontFamily: fonts.bold,
		fontSize: hp('2%'),
		color: 'white'
	},
	categoryButtonTextInactive: {
		fontFamily: fonts.semibold,
		fontSize: hp('2%'),
		color: colors.black
	},
	newsLayout: {
		marginTop: 20,
		marginLeft: 30,
		marginRight: 30
	},
	newsImage: {
		width: wp('85%'),
		height: hp('25%'),
		backgroundColor: colors.grey,
		borderRadius: 5,
		paddingHorizontal: 20,
		paddingBottom: 10,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'flex-start'
	},
	newsTitleLayout: {
		width: wp('85%'),
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginTop: 10,
		marginBottom: 10
	},
	newsTitle: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: colors.black
	},
	newsDescription: {
		fontFamily: fonts.regular,
		fontSize: hp('2%'),
		color: colors.black
	}
})