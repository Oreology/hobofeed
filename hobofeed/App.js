
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.homesrc}>
        <Text style={styles.hometxt}>HELLO WORLD!</Text>
        <Button
          title="Go to Details"
          onPress={ () => this.props.navigation.navigate('Details') }
        />
      </View>
    )
  }
}

class DetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.detailsrc}>
        <Text style={styles.detailtxt}>DETAILS SCREEN!!!</Text>
        <Button
          title="Go to Details Again!!!!"
          onPress={ () => this.props.navigation.navigate('Details') }
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
  Home: HomeScreen,
  Details: DetailScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack/>
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
  detailsrc: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff68b3',
  },
  detailtxt: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFFFFF',
  }

});
