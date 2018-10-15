import React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, FlatList } from 'react-native';
import CardView from '../common/cardview';

var FoodData = require('../temporarydata/fooddata.json');

const CardData = [{
  "imgsource": "http://asiantoprecipes.weebly.com/uploads/5/3/4/0/5340076/12.jpg?718",

}];

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { foods: [] };
  }
  componentWillMount() {
    this.fetchFromDatabase(this.props.url);
  }

  fetchFromDatabase(url) {
    this.setState({ foods: FoodData });
    /*fetch(url)
      .then(response => response.json())
      .then(responseData => this.setState({ foods: responseData }));*/
  }

  renderCardItem = item => {
    console.log("this is item: ", item);
    //console.log("this is item.title: ", item.title);
    //console.log("this is item.description: ", item.description);
    return(
      <CardView
        imgsource={item.item.image}
        title={item.item.title}
        description={item.item.description}
        screenname={item.item.screenname}
      />
    );
  };

  render() {
    console.log(this.state.foods);
    return (
      <FlatList style={styles.flatliststyle} data={this.state.foods.data} renderItem={this.renderCardItem} />





      /*
      <View style={styles.homesrc}>
        <CardView
          imgsource="http://asiantoprecipes.weebly.com/uploads/5/3/4/0/5340076/12.jpg?718"
          title="Test 1"
          description="Hello there this is a test description of the cardview custom component."
        />
        <CardView
          imgsource="http://asiantoprecipes.weebly.com/uploads/5/3/4/0/5340076/12.jpg?718"
          title="Test 2"
          description="Hello there this is a test description of the cardview custom component."
        />
        <CardView
          imgsource="http://asiantoprecipes.weebly.com/uploads/5/3/4/0/5340076/12.jpg?718"
          title="Test 3"
          description="Hello there this is a test description of the cardview custom component."
        />
        <Text style={styles.hometxt}>FOOD SCREEN!!</Text>
        <Button
          title="Go to Details"
          onPress={ () => this.props.navigation.navigate('Details') }
        />
      </View>
      */
    );
  }
}

const styles = StyleSheet.create({
  flatliststyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
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
