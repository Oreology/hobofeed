import React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

export default class DetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.detailsrc}>
        <Text style={styles.detailtxt}>SAYA SUKA TEH BOTOL!!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailsrc: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6b2500',
  },
  detailtxt: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFFFFF',
  }
});
