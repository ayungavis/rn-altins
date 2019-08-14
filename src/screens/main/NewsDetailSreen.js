import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class NewsDetailSreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text style={styles.text}>
      	  News Detail Screen
      	</Text>
      </View>
    );
  }
}

export default NewsDetailSreen;

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});