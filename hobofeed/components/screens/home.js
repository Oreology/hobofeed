import React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.homesrc}>
        <Text style={styles.hometxt}>HELLO WORLD!</Text>
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
