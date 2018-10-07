import React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './components/screens/home';
import DetailScreen from './components/screens/detail';

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
