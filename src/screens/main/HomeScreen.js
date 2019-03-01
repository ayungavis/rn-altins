import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, ScrollView, Image, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RectButton } from 'react-native-gesture-handler';
import { Input } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';

import { getStatus } from 'library/redux/actions/auth';

import fonts from 'res/fonts';
import colors from 'res/colors';
import server from 'res/server';

import Styles from 'res/styles';

class HomeScreen extends Component {
	constructor (props) {
		super (props)
		this.state = {
			offsetY: 0
		}
	}

	componentDidMount () {
		
	}

	render () {
		return (
			<View style={Styles.container}>
				<StatusBar backgroundColor={colors.background} barStyle="dark-content" translucent={false} />
				<ScrollView showsVerticalScrollIndicator={false} >
					<View style={styles.headerContainer}>
						<View style={styles.headerLeft}>
							{/*<FontAwesome5 name='phoenix-squadron' size={20} color={colors.black} />*/}
							<Text style={styles.headerTitle}>Home</Text>
						</View>
						<View style={styles.headerMiddle}>
							<Text style={styles.headerTitle}></Text>
						</View>
						<View style={styles.headerRight}>
							<View style={styles.headerAvatar}></View>
						</View>
					</View>
					<View style={styles.searchLayout}>
						<Input
							containerStyle={styles.searchContainer}
							inputContainerStyle={styles.searchInput}
							inputStyle={styles.searchText}
							placeholder="Search here"
							rightIcon={<FontAwesome5 name="search" size={20} color={colors.grey}/>}
						/>
					</View>
					<View style={styles.titleLayout}>
						<Text style={styles.titleText}>Showcase Menu</Text>
						{/*<Text style={styles.titleSubText}>Show All</Text>*/}
					</View>
					<View style={styles.menuFirst}>
						<RectButton>
							<View style={[styles.menuContainer, { backgroundColor: '#97E0E9' }]}>
								<View style={styles.menuIconLayout}>
									<FontAwesome5 name="calendar-alt" size={30} color='white' light />
								</View>
								<View style={styles.menuTextLayout}>
									<Text style={styles.menuText}>Generation</Text>
									<Text style={styles.menuSubText}>1991 - Now</Text>
								</View>
							</View>
						</RectButton>
						<RectButton>
							<View style={[styles.menuContainer, { backgroundColor: '#F48FB6' }]}>
								<View style={styles.menuIconLayout}>
									<FontAwesome5 name="file-alt" size={30} color='white' light />
								</View>
								<View style={styles.menuTextLayout}>
									<Text style={styles.menuText}>Thesis</Text>
									<Text style={styles.menuSubText}>Final Project</Text>
								</View>
							</View>
						</RectButton>
						<RectButton>
							<View style={[styles.menuContainer, { backgroundColor: '#F8D545' }]}>
								<View style={styles.menuIconLayout}>
									<FontAwesome5 name="building" size={30} color='white' light />
								</View>
								<View style={styles.menuTextLayout}>
									<Text style={styles.menuText}>Job</Text>
									<Text style={styles.menuSubText}>The Company</Text>
								</View>
							</View>
						</RectButton>
					</View>
					<View style={styles.menuSecond}>
						<RectButton>
							<View style={[styles.menuContainer, { backgroundColor: '#C4A7F7' }]}>
								<View style={styles.menuIconLayout}>
									<FontAwesome5 name="map" size={30} color='white' light />
								</View>
								<View style={styles.menuTextLayout}>
									<Text style={styles.menuText}>Location</Text>
									<Text style={styles.menuSubText}>Find Nearby</Text>
								</View>
							</View>
						</RectButton>
						<RectButton>
							<View style={[styles.menuContainer, { backgroundColor: '#6FD371' }]}>
								<View style={styles.menuIconLayout}>
									<FontAwesome5 name="comments" size={30} color='white' light />
								</View>
								<View style={styles.menuTextLayout}>
									<Text style={styles.menuText}>Social Media</Text>
									<Text style={styles.menuSubText}>Get Connect</Text>
								</View>
							</View>
						</RectButton>
						<RectButton>
							<View style={[styles.menuContainer, { backgroundColor: '#4A57B6' }]}>
								<View style={styles.menuIconLayout}>
									<FontAwesome5 name="user" size={30} color='white' light />
								</View>
								<View style={styles.menuTextLayout}>
									<Text style={styles.menuText}>Profile</Text>
									<Text style={styles.menuSubText}>Get Closer</Text>
								</View>
							</View>
						</RectButton>
					</View>
					<View style={styles.titleLayout}>
						<Text style={styles.titleText}>Upcoming Events</Text>
						<Text style={styles.titleSubText}>Show All</Text>
					</View>
					<View style={styles.sliderLayout}>
						<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
							<View style={[styles.eventLayout, {marginLeft: 30}]}>
								<View style={styles.eventContainer}>
									<Text style={styles.eventType}>GATHERING</Text>
									<View style={styles.eventDateLayout}>
										<FontAwesome5 name="calendar-alt" size={15} color="white" />
										<Text style={styles.eventDate}>22 Des 2019</Text>
									</View>
								</View>
								<View style={styles.eventTitleLayout}>
									<Text style={styles.eventTitle}>Grand Reunion #1</Text>
									<Text style={styles.eventDescription} numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
								</View>
							</View>
							<View style={styles.eventLayout}>
								<View style={styles.eventContainer}>
									<Text style={styles.eventType}>GATHERING</Text>
									<View style={styles.eventDateLayout}>
										<FontAwesome5 name="calendar-alt" size={15} color="white" />
										<Text style={styles.eventDate}>22 Des 2019</Text>
									</View>
								</View>
								<View style={styles.eventTitleLayout}>
									<Text style={styles.eventTitle}>Grand Reunion #1</Text>
									<Text style={styles.eventDescription} numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
								</View>
							</View>
							<View style={[styles.eventLayout, {marginRight: 30}]}>
								<View style={styles.eventContainer}>
									<Text style={styles.eventType}>GATHERING</Text>
									<View style={styles.eventDateLayout}>
										<FontAwesome5 name="calendar-alt" size={15} color="white" />
										<Text style={styles.eventDate}>22 Des 2019</Text>
									</View>
								</View>
								<View style={styles.eventTitleLayout}>
									<Text style={styles.eventTitle}>Grand Reunion #1</Text>
									<Text style={styles.eventDescription} numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
								</View>
							</View>
						</ScrollView>
					</View>
					<View style={styles.titleLayout}>
						<Text style={styles.titleText}>Popular News</Text>
						<Text style={styles.titleSubText}>Show All</Text>
					</View>
					<View style={styles.popularLayout}>
						<View style={styles.popularContainer}>
							<View style={styles.popularImage}></View>
							<View style={styles.popularTitleLayout}>
								<Text style={styles.popularTitle} numberOfLines={2}>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing</Text>
								<View style={styles.popularSubLayout}>
									<FontAwesome5 name="eye" size={15} color={colors.grey} />
									<Text style={styles.popularSubText}>562</Text>
									<FontAwesome5 name="clock" size={15} color={colors.grey} light />
									<Text style={styles.popularSubText}>3 hours ago</Text>
								</View>
							</View>
						</View>
						<View style={styles.horizontalLine}></View>
						<View style={styles.popularContainer}>
							<View style={styles.popularImage}></View>
							<View style={styles.popularTitleLayout}>
								<Text style={styles.popularTitle} numberOfLines={2}>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing</Text>
								<View style={styles.popularSubLayout}>
									<FontAwesome5 name="eye" size={15} color={colors.grey} />
									<Text style={styles.popularSubText}>562</Text>
									<FontAwesome5 name="clock" size={15} color={colors.grey} light />
									<Text style={styles.popularSubText}>3 hours ago</Text>
								</View>
							</View>
						</View>
						<View style={styles.horizontalLine}></View>
						<View style={styles.popularContainer}>
							<View style={styles.popularImage}></View>
							<View style={styles.popularTitleLayout}>
								<Text style={styles.popularTitle} numberOfLines={2}>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing</Text>
								<View style={styles.popularSubLayout}>
									<FontAwesome5 name="eye" size={15} color={colors.grey} />
									<Text style={styles.popularSubText}>562</Text>
									<FontAwesome5 name="clock" size={15} color={colors.grey} light />
									<Text style={styles.popularSubText}>3 hours ago</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.titleLayout}>
						<Text style={styles.titleText}>Recent News</Text>
						<Text style={styles.titleSubText}>Show All</Text>
					</View>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						<View style={styles.recentSliderLayout}>
							<View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
								<View style={[styles.recentContainer, {marginLeft: 30}]}>
									<View style={styles.recentImage}></View>
									<View style={styles.recentTitleLayout}>
										<Text style={styles.recentTitle} numberOfLines={2}>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing</Text>
										<View style={styles.recentSubLayout}>
											<FontAwesome5 name="eye" size={15} color={colors.grey} />
											<Text style={styles.recentSubText}>562</Text>
											<FontAwesome5 name="clock" size={15} color={colors.grey} light />
											<Text style={styles.recentSubText}>3 hours ago</Text>
										</View>
									</View>
								</View>
								<View style={styles.recentContainer}>
									<View style={styles.recentImage}></View>
									<View style={styles.recentTitleLayout}>
										<Text style={styles.recentTitle} numberOfLines={2}>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing</Text>
										<View style={styles.recentSubLayout}>
											<FontAwesome5 name="eye" size={15} color={colors.grey} />
											<Text style={styles.recentSubText}>562</Text>
											<FontAwesome5 name="clock" size={15} color={colors.grey} light />
											<Text style={styles.recentSubText}>3 hours ago</Text>
										</View>
									</View>
								</View>
								<View style={[styles.recentContainer, {marginRight: 20}]}>
									<View style={styles.recentImage}></View>
									<View style={styles.recentTitleLayout}>
										<Text style={styles.recentTitle} numberOfLines={2}>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing</Text>
										<View style={styles.recentSubLayout}>
											<FontAwesome5 name="eye" size={15} color={colors.grey} />
											<Text style={styles.recentSubText}>562</Text>
											<FontAwesome5 name="clock" size={15} color={colors.grey} light />
											<Text style={styles.recentSubText}>3 hours ago</Text>
										</View>
									</View>
								</View>
							</View>
							<View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 15 }}>
								<View style={[styles.recentContainer, {marginLeft: 30}]}>
									<View style={styles.recentImage}></View>
									<View style={styles.recentTitleLayout}>
										<Text style={styles.recentTitle} numberOfLines={2}>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing</Text>
										<View style={styles.recentSubLayout}>
											<FontAwesome5 name="eye" size={15} color={colors.grey} />
											<Text style={styles.recentSubText}>562</Text>
											<FontAwesome5 name="clock" size={15} color={colors.grey} light />
											<Text style={styles.recentSubText}>3 hours ago</Text>
										</View>
									</View>
								</View>
								<View style={styles.recentContainer}>
									<View style={styles.recentImage}></View>
									<View style={styles.recentTitleLayout}>
										<Text style={styles.recentTitle} numberOfLines={2}>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing</Text>
										<View style={styles.recentSubLayout}>
											<FontAwesome5 name="eye" size={15} color={colors.grey} />
											<Text style={styles.recentSubText}>562</Text>
											<FontAwesome5 name="clock" size={15} color={colors.grey} light />
											<Text style={styles.recentSubText}>3 hours ago</Text>
										</View>
									</View>
								</View>
								<View style={[styles.recentContainer, {marginRight: 20}]}>
									<View style={styles.recentImage}></View>
									<View style={styles.recentTitleLayout}>
										<Text style={styles.recentTitle} numberOfLines={2}>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing</Text>
										<View style={styles.recentSubLayout}>
											<FontAwesome5 name="eye" size={15} color={colors.grey} />
											<Text style={styles.recentSubText}>562</Text>
											<FontAwesome5 name="clock" size={15} color={colors.grey} light />
											<Text style={styles.recentSubText}>3 hours ago</Text>
										</View>
									</View>
								</View>
							</View>
						</View>
					</ScrollView>
					<View style={{ marginBottom: 20 }}></View>
				</ScrollView>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps)(HomeScreen)

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 10,
		marginLeft: 30,
		marginRight: 30
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
		fontSize: hp('4%'),
		color: colors.black
	},
	headerAvatar: {
		height: 40,
		width: 40,
		borderRadius: 50,
		backgroundColor: 'grey'
	},
	searchLayout: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 40
	},
	searchContainer: {
		height: hp('8%'),
		width: wp('90%'),
	},
	searchInput: {
		backgroundColor: 'white',
		paddingHorizontal: 10,
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0,
		shadowRadius: 10,
		elevation: 20,
		borderRadius: 5,
	},
	searchText: {
		fontFamily: fonts.regular,
		fontSize: hp('2.5%'),
		color: colors.black
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
	menuFirst: {
		marginTop: 20,
		marginLeft: 30,
		marginRight: 30,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start'
	},
	menuSecond: {
		marginTop: 10,
		marginLeft: 30,
		marginRight: 30,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start'
	},
	menuContainer: {
		height: hp('14%'),
		width: wp('27%'),
		borderRadius: 5,
		padding: 10,
		justifyContent: 'space-between'
	},
	menuIconLayout: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	menuTextLayout: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	menuText: {
		fontFamily: fonts.bold,
		fontSize: hp('2.2%'),
		color: 'white'
	},
	menuSubText: {
		fontFamily: fonts.semibold,
		fontSize: hp('1.8%'),
		color: 'white'
	},
	sliderLayout: {
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	eventLayout: {
		marginRight: 15
	},
	eventContainer: {
		height: hp('30%'),
		width: wp('70%'),
		backgroundColor: colors.grey,
		borderRadius: 5,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		padding: 10		
	},
	eventType: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: 'white'
	},
	eventDateLayout: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	eventDate: {
		fontFamily: fonts.semibold,
		fontSize: hp('1.8%'),
		color: 'white',
		marginLeft: 5
	},
	eventTitleLayout: {
		width: wp('70%'),
		marginTop: 10
	},
	eventTitle: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: colors.black
	},
	eventDescription: {
		fontFamily: fonts.regular,
		fontSize: hp('2%'),
		color: colors.black
	},
	popularLayout: {
		marginTop: 15,
		marginLeft: 30,
		marginRight: 30
	},
	popularContainer: {
		marginTop: 5,
		width: wp('80%'),
		height: hp('15%'),
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	popularImage: {
		width: wp('22%'),
		height: hp('13%'),
		backgroundColor: colors.grey,
		borderRadius: 5
	},
	popularTitleLayout: {
		height: hp('13%'),
		width: wp('60%'),
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		paddingHorizontal: 10
	},
	popularTitle: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: colors.black,
	},
	popularSubLayout: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	popularSubText: {
		fontFamily: fonts.semibold,
		fontSize: hp('2%'),
		color: colors.grey,
		marginLeft: 5,
		marginRight: 10,
		marginBottom: 5
	},
	recentSliderLayout: {
		marginTop: 20,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	recentContainer: {
		marginTop: 5,
		width: wp('70%'),
		height: hp('10%'),
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginRight: 10
	},
	recentImage: {
		width: wp('19%'),
		height: hp('10%'),
		backgroundColor: colors.grey,
		borderRadius: 5
	},
	recentTitleLayout: {
		height: hp('10%'),
		width: wp('50%'),
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		paddingHorizontal: 10
	},
	recentTitle: {
		fontFamily: fonts.bold,
		fontSize: hp('2%'),
		color: colors.black,
		lineHeight: 20
	},
	recentSubLayout: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	recentSubText: {
		fontFamily: fonts.semibold,
		fontSize: hp('1.7%'),
		color: colors.grey,
		marginLeft: 5,
		marginRight: 10,
		marginBottom: 5
	},
	horizontalLine: {
		width: wp('85%'),
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 5,
		borderWidth: 0.25,
		borderColor: colors.grey
	}
});