import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, ScrollView, Image, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RectButton } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import fonts from 'res/fonts';
import colors from 'res/colors';
import server from 'res/server';

import Styles from 'res/styles';

class EventScreen extends Component {
	render () {
		return (
			<View style={Styles.container}>
				<StatusBar backgroundColor={colors.background} barStyle="dark-content" translucent={false} />
				<ScrollView showsVerticalScrollIndicator={false} >
					<View style={styles.headerContainer}>
						<Text style={styles.headerTitle}>Hi, Ayung!</Text>
						<Text style={styles.headerSubTitle}>Discover what's happening in here.</Text>
					</View>
					<View style={styles.closestLayout}>
						{/*<Text style={styles.closestTitle}>Closest Event</Text>*/}
						<View style={styles.closestImage}></View>
						<View style={styles.closestButtonLayout}>
							<View style={styles.closestButtonShape}>
								<FontAwesome5 name="share-alt" size={20} color={colors.black} />
							</View>
							<View style={styles.closestButtonShape}>
								<FontAwesome5 name="heart" size={20} color={colors.black} light />
							</View>
						</View>
						<View style={styles.closestTitleLayout}>
							<View style={styles.closestDateLayout}>
								<Text style={styles.closestMonthText}>MAR</Text>
								<Text style={styles.closestDateText}>03</Text>
							</View>
							<View style={styles.closestTitleContainer}>
								<Text style={styles.closestTitleText} numberOfLines={2}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit</Text>
								<Text style={styles.closestVenue}>JIEXPO Kemayoran</Text>
							</View>
						</View>
					</View>
					<View style={styles.eventLayout}>
						<View style={styles.eventContainer}>
							<View style={styles.eventImage}></View>
							<View style={styles.eventTitleLayout}>
								<Text style={styles.eventTitle} numberOfLines={2}>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing</Text>
								<Text style={styles.eventDate}>March 9 • 11:00 AM</Text>
								<View style={styles.eventSubLayout}>
									<FontAwesome5 name="map-marker-alt" size={15} color={colors.grey} />
									<Text style={styles.eventSubText}>Golden Gate Club</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.eventLayout}>
						<View style={styles.eventContainer}>
							<View style={styles.eventImage}></View>
							<View style={styles.eventTitleLayout}>
								<Text style={styles.eventTitle} numberOfLines={2}>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing</Text>
								<Text style={styles.eventDate}>March 9 • 11:00 AM</Text>
								<View style={styles.eventSubLayout}>
									<FontAwesome5 name="map-marker-alt" size={15} color={colors.grey} />
									<Text style={styles.eventSubText}>Golden Gate Club</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.eventLayout}>
						<View style={styles.eventContainer}>
							<View style={styles.eventImage}></View>
							<View style={styles.eventTitleLayout}>
								<Text style={styles.eventTitle} numberOfLines={2}>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing</Text>
								<Text style={styles.eventDate}>March 9 • 11:00 AM</Text>
								<View style={styles.eventSubLayout}>
									<FontAwesome5 name="map-marker-alt" size={15} color={colors.grey} />
									<Text style={styles.eventSubText}>Golden Gate Club</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.loadMoreLayout}>
						<Text style={styles.loadMoreText}>Show more events</Text>
					</View>
					<View style={styles.titleLayout}>
						<Text style={styles.titleText}>Explore More</Text>
						{/*<Text style={styles.titleSubText}>Show All</Text>*/}
					</View>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						<View style={[styles.exploreLayout, {marginLeft: 30}]}>
							<View style={styles.exploreContainer}>
								<Text style={styles.exploreText}>Gathering</Text>
							</View>
						</View>
						<View style={styles.exploreLayout}>
							<View style={styles.exploreContainer}>
								<Text style={styles.exploreText}>Gathering</Text>
							</View>
						</View>
						<View style={[styles.exploreLayout, {marginRight: 20}]}>
							<View style={styles.exploreContainer}>
								<Text style={styles.exploreText}>Gathering</Text>
							</View>
						</View>
					</ScrollView>
					<View style={{ marginBottom: 20 }}></View>
				</ScrollView>
			</View>
		);
	}
}

export default EventScreen;

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
	closestLayout: {
		marginTop: 10,
		marginRight: 30,
		marginLeft: 30,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	closestTitle: {
		fontFamily: fonts.bold,
		fontSize: hp('3%'),
		color: colors.black
	},
	closestImage: {
		width: wp('85%'),
		height: hp('30%'),
		backgroundColor: colors.grey,
		borderRadius: 5,
		marginTop: 20
	},
	closestButtonLayout: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		alignSelf: 'flex-end',
		bottom: 23
	},
	closestButtonShape: {
		width: wp('11%'),
		height: hp('6.5%'),
		backgroundColor: 'white',
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 10,
		borderWidth: 0.5,
		borderColor: colors.grey
	},
	closestTitleLayout: {
		marginTop: 5,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		bottom: 23
	},
	closestDateLayout: {
		width: wp('15%'),
		height: hp('8%'),
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	closestMonthText: {
		fontFamily: fonts.semibold,
		fontSize: hp('1.7%'),
		color: colors.red
	},
	closestDateText: {
		fontFamily: fonts.semibold,
		fontSize: hp('2%'),
		color: colors.black
	},
	closestTitleContainer: {
		marginLeft: 5,
		width: wp('70%'),
		height: hp('8%'),
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start'
	},
	closestTitleText: {
		fontFamily: fonts.semibold,
		fontSize: hp('2.2%'),
		color: colors.black
	},
	closestVenue: {
		fontFamily: fonts.regular,
		fontSize: hp('1.7%'),
		color: colors.grey
	},
	eventLayout: {
		marginTop: 0,
		marginLeft: 30,
		marginRight: 30,
		marginBottom: 5
	},
	eventContainer: {
		marginTop: 5,
		width: wp('80%'),
		height: hp('15%'),
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	eventImage: {
		width: wp('22%'),
		height: hp('13%'),
		backgroundColor: colors.grey,
		borderRadius: 5
	},
	eventTitleLayout: {
		height: hp('13%'),
		width: wp('70%'),
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		paddingHorizontal: 15
	},
	eventTitle: {
		fontFamily: fonts.bold,
		fontSize: hp('2.2%'),
		color: colors.black,
	},
	eventDate: {
		fontFamily: fonts.semibold,
		fontSize: hp('2%'),
		color: colors.black,	
	},
	eventSubLayout: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	eventSubText: {
		fontFamily: fonts.regular,
		fontSize: hp('2%'),
		color: colors.grey,
		marginLeft: 5,
		marginRight: 10,
		marginBottom: 5
	},
	titleLayout: {
		marginTop: 30,
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
	exploreLayout: {
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	exploreContainer: {
		width: wp('50%'),
		height: hp('20%'),
		backgroundColor: colors.grey,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 15,
	},
	exploreText: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: 'white'
	},
	loadMoreLayout: {
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	},
	loadMoreText: {
		fontFamily: fonts.semibold,
		fontSize: hp('2%'),
		color: colors.blue
	}
})