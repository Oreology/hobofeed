import React from "react";
import { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, createTabNavigator } from "react-navigation";
import OneSignal from "react-native-onesignal";

import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Method "]);

import FoodScreen from "./components/screens/food";
import DetailScreen from "./components/screens/detail";
import AcademicScreen from "./components/screens/academic";
import EventsScreen from "./components/screens/events";

const FoodStack = createStackNavigator(
  {
    Food: FoodScreen,
    Details: DetailScreen
  },
  {
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: true
    }
  }
);

const AcademicStack = createStackNavigator(
  {
    Academic: AcademicScreen,
    Details: DetailScreen
  },
  {
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: true
    }
  }
);

const EventsStack = createStackNavigator(
  {
    Events: EventsScreen,
    Details: DetailScreen
  },
  {
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: true
    }
  }
);

const MainTab = createTabNavigator(
  {
    Food: FoodStack,
    Academic: AcademicStack,
    Events: EventsStack
  },
  {
    swipeEnabled: true,
    tabBarOptions: {
      fontSize: 22,
      activeTintColor: "#f2f2f2",
      activeBackgroundColor: "#2EC4B6",
      inactiveTintColor: "#666"
    }
  }
);

export default class App extends React.Component {
  componentWillMount() {
    if (OneSignal) {
      OneSignal.init("b9633af0-1d0d-4ef3-8ea8-b7507aa056ad");
    }
  }
  render() {
    return <MainTab />;
  }
}
