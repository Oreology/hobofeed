import React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import CardView from '../common/cardview';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.homesrc}>
        <CardView
          imgsource="http://asiantoprecipes.weebly.com/uploads/5/3/4/0/5340076/12.jpg?718"
          title="Test Title"
          description="Hello there this is a test description of the cardview custom component."
        />

        <Text style={styles.hometxt}>FOOD SCREEN!!</Text>
        <Button
          title="Go to Details"
          onPress={ () => this.props.navigation.navigate('Details') }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homesrc: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  hometxt: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
});
