import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, ScrollView, Image, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RectButton } from 'react-native-gesture-handler';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { connect } from 'react-redux';

import fonts from 'res/fonts';
import colors from 'res/colors';
import server from 'res/server';

import Styles from 'res/styles';

class ProfileScreen extends Component {
	_renderBackground () {
		return (
			/*<Image style={styles.coverImage} source={{ uri: 'http://img.udah.pw/products/10/1.png' }} />*/
			<Image style={styles.coverImage} source={{ uri: 'https://wallup.net/wp-content/uploads/2016/04/06/326678-portrait_display-nature-trees-forest-fire-wood-leaves-dark-evening-branch-bonfires.jpg' }}></Image>
		)
	}

	_renderStickyHeader () {
		return (
			<View style={styles.stickyHeader}>
				<Text style={styles.stickyHeaderText}>Wahyu Adi Kurniawan</Text>
			</View>
		)
	}

	render () {
		return (
			<ParallaxScrollView
				parallaxHeaderHeight={hp('58%')}
				// backgroundColor={colors.grey}
				renderBackground={this._renderBackground}
				renderStickyHeader={this._renderStickyHeader}
				stickyHeaderHeight={hp('8%')}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={Styles.container}
			>
				<StatusBar backgroundColor={colors.background} barStyle="dark-content" translucent={false} />
				<View style={Styles.container}>
					<View style={styles.headerLayout}>
						<View style={styles.headerLeft}>
							<Image style={styles.photoProfile} source={{ uri: 'https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png' }}></Image>
						</View>
						<View style={styles.headerMiddle}>
							<Text style={styles.headerName} numberOfLines={2}>Wahyu Adi Kurniawan</Text>
							<Text style={styles.headerUsername}>@ayungavis</Text>
						</View>
						<View style={styles.headerRight}>
							<RectButton style={styles.headerSettingButton} onPress={() => this.props.navigation.navigate('Setting')}>
								<Text style={styles.headerSettingText}>Edit</Text>
							</RectButton>
						</View>
					</View>
					<View style={styles.infoLayout}>
						<View style={styles.infoContainer}>
							<Text style={styles.infoNumber}>2015</Text>
							<Text style={styles.infoText}>generation</Text>
						</View>
						<View style={styles.infoContainer}>
							<Text style={styles.infoNumber}>28</Text>
							<Text style={styles.infoText}>age</Text>
						</View>
						<View style={styles.infoContainer}>
							<FontAwesome5 name="mars" size={25} color={colors.black} />
							<Text style={styles.infoText}>gender</Text>
						</View>
					</View>
					<View style={styles.titleLayout}>
						<Text style={styles.titleText}>About Me</Text>
						{/*<Text style={styles.titleSubText}>Show All</Text>*/}
					</View>
					<View style={styles.aboutLayout}>
						<Text style={styles.aboutText} numberOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor, erat a porta sagittis, mauris metus consectetur magna, in gravida quam massa nec orci. Quisque sit amet placerat nibh, id facilisis est. Maecenas quis diam in ligula euismod elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus.</Text>
					</View>
					<View style={styles.titleLayout}>
						<Text style={styles.titleText}>Job Experience</Text>
						{/*<Text style={styles.titleSubText}>Show All</Text>*/}
					</View>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						<View style={[styles.jobLayout, {marginLeft: 30}]}>
							<View style={styles.jobContainer}>
								<Text style={styles.jobYear}>2015 <Text style={styles.jobUntil}>-</Text> NOW</Text>
								<Text style={styles.jobPosition}>Fullstach Developer</Text>
								<Text style={styles.jobCompany}>Tranity Porject, Inc.</Text>
							</View>
						</View>
						<View style={styles.jobLayout}>
							<View style={styles.jobContainer}>
								<Text style={styles.jobYear}>2015 <Text style={styles.jobUntil}>-</Text> NOW</Text>
								<Text style={styles.jobPosition}>Fullstach Developer</Text>
								<Text style={styles.jobCompany}>Tranity Porject, Inc.</Text>
							</View>
						</View>
						<View style={styles.jobLayout}>
							<View style={styles.jobContainer}>
								<Text style={styles.jobYear}>2015 <Text style={styles.jobUntil}>-</Text> NOW</Text>
								<Text style={styles.jobPosition}>Fullstach Developer</Text>
								<Text style={styles.jobCompany}>Tranity Porject, Inc.</Text>
							</View>
						</View>
						<View style={[styles.jobLayout, {marginRight: 30}]}>
							<View style={styles.jobContainer}>
								<FontAwesome5 name="plus-circle" size={hp('6%')} color="white" />
							</View>
						</View>
					</ScrollView>
					<View style={styles.titleLayout}>
						<Text style={styles.titleText}>Academic History</Text>
						{/*<Text style={styles.titleSubText}>Show All</Text>*/}
					</View>
					<View style={styles.academicLayout}>
						<View style={styles.academicContainer}>
							<Text style={styles.academicTitle}>Rancang Bangun Sistem Alarm Pada Alat Simulasi Perpindahan Panas</Text>
							<View style={styles.academicSupLayout}>
								<View style={styles.academicSupContainer}>
									<View style={styles.academicSupImage}></View>
									<View style={styles.academicSupNameContainer}>
										<Text style={styles.academicSupText}>FIRST SUPERVISOR</Text>
										<Text style={styles.academicSupName}>Purwadi Agus Darwito, M.Sc.</Text>
									</View>
								</View>
								<View style={styles.academicSupContainer}>
									<View style={styles.academicSupImage}></View>
									<View style={styles.academicSupNameContainer}>
										<Text style={styles.academicSupText}>SECOND SUPERVISOR</Text>
										<Text style={styles.academicSupName}>Detak Yan Pratama, M.T.</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style={{ marginBottom: 50 }}></View>
			</ParallaxScrollView>
		);
	}
}

export default ProfileScreen;

const styles = StyleSheet.create({
	stickyHeader: {
		width: wp('100%'),
		height: hp('8%'),
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.background
	},
	stickyHeaderText: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: colors.black,
		// marginLeft: 30
	},
	headerLayout: {
		flex: 1,
		marginTop: 30,
		marginLeft: 30,
		marginRight: 30,
		width: wp('85%'),
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	headerLeft: {
		flex: 1,
		width: wp('16%'),
		height: hp('10%'),
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	headerMiddle: {
		flex: 2,
		// width: wp('40%'),
		height: hp('10%'),
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'flex-start',
		paddingRight: 10
	},
	headerRight: {
		flex: 1,
		// width: wp('25%'),
		height: hp('10%'),
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-end',
	},
	headerName: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: colors.black
	},
	headerUsername: {
		fontFamily: fonts.semibold,
		fontSize: hp('2%'),
		color: colors.grey
	},
	headerSettingButton: {
		width: wp('20%'),
		height: hp('4%'),
		backgroundColor: colors.grey,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerSettingText: {
		fontFamily: fonts.semibold,
		fontSize: hp('2%'),
		color: colors.white
	},
	photoProfile: {
		width: wp('16%'),
		height: hp('10%'),
		backgroundColor: colors.grey,
		borderRadius: 5
	},
	infoLayout: {
		marginTop: 40,
		marginLeft: 30,
		marginRight: 30,
		width: wp('85%'),
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'flex-start'
	},
	infoContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	infoText: {
		fontFamily: fonts.regular,
		fontSize: hp('2%'),
		color: colors.black,
		marginTop: 5
	},
	infoNumber: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: colors.black,
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
	aboutLayout: {
		marginTop: 10,
		marginLeft: 30,
		marginRight: 30,
		marginBottom: 10,
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	aboutText: {
		fontFamily: fonts.regular,
		fontSize: hp('2%'),
		color: colors.black
	},
	jobLayout: {
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginBottom: 10
	},
	jobContainer: {
		width: wp('50%'),
		height: hp('20%'),
		backgroundColor: colors.grey,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 15
	},
	jobYear: {
		fontFamily: fonts.semibold,
		fontSize: hp('1.8%'),
		color: 'white',
		marginBottom: 20
	},
	jobUntil: {
		fontFamily: fonts.regular,
		fontSize: hp('1.8%'),
		color: 'white'
	},
	jobPosition: {
		fontFamily: fonts.semibold,
		fontSize: hp('2.5%'),
		color: 'white'
	},
	jobCompany: {
		fontFamily: fonts.regular,
		fontSize: hp('2%'),
		color: 'white'
	},
	academicLayout: {
		marginTop: 10,
		marginLeft: 30,
		marginRight: 30
	},
	academicContainer: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	academicTitle: {
		fontFamily: fonts.regular,
		fontSize: hp('2%'),
		color: colors.black
	},
	academicSupLayout: {
		marginTop: 20,
		width: wp('85%'),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	academicSupContainer: {
		width: wp('40%'),
		height: hp('30%'),
		borderRadius: 5	
	},
	academicSupImage: {
		flex: 2,
		width: wp('40%'),
		height: hp('18%'),
		backgroundColor: colors.grey,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5
	},
	academicSupNameContainer: {
		flex: 1,
		width: wp('40%'),
		backgroundColor: colors.red,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		padding: 10,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5
	},
	academicSupText: {
		fontFamily: fonts.regular,
		fontSize: hp('1.8%'),
		color: colors.black
	},
	academicSupName: {
		fontFamily: fonts.semibold,
		fontSize: hp('2%'),
		color: colors.black
	},
	coverImage: {
		width: wp('100%'),
		height: hp('58%')
	}
})