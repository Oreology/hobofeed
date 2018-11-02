import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Animated } from 'react-native';
//import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export class CardView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded    : false,
      animation   : new Animated.Value()
    };
    this.buttondown = this.buttondown.bind(this);
  }

  buttondown() {
    //this.props.navigation.navigate(this.props.screenname)
    this.setState({
      expanded : !this.state.expanded
    });

    let initialValue  = 50
        finalValue    = 100

    this.state.animation.setValue(initialValue);
    Animated.spring(
      this.state.animation,
      {
        toValue: finalValue
      }
    ).start();
  };


  /*toggle() {
    l
  }*/

  render() {
    return (
      <View style={styles.containershadow}>
        <AnimatedTouchable
          style={styles.touchview}
          onPress={ this.buttondown } >
          <View style={styles.container}>
            <Image style={styles.image}
              source={ {uri: this.props.imgsource} }
            />
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.description}>{this.props.description}</Text>
          </View>
        </AnimatedTouchable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  touchview: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    //margin: 10,
  },
  containershadow: {
    //lex: 1,
    alignSelf: 'center',
    //left: '3.75%',
    width: '95%',
    height: 300,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    shadowOpacity: 0.125,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowRadius: 10,
    //overflow: 'hidden',
    //marginLeft: 10,
    //marginRight: 10,
    marginTop: 25,
  },
  title: {
    fontFamily: 'Avenir Next',
    fontWeight: '400',
    color: '#000000',
    fontSize: 25,
    marginLeft: 10,
  },
  description: {
    fontFamily: 'Avenir Next',
    fontWeight: 'normal',
    color: '#000000',
    fontSize: 14,
    marginLeft: 10,
  },
  image: {
    width: null,
    flex: 1,
    height: '50%',
    position: 'relative',
    //top: -50,
  },
});

export default withNavigation(CardView);











/*
const Card = props => {
  const {
    title,
    description,
    image,
  } = props;

  return (
    <View style={container}>
      <Image style={image}
        source=image
      >
      <Text style={title}
        {title}
      </Text>
    </View>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: Image.propTypes.source.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  title: {
    fontFamily: 'Avenir Next',
    fontWeight: 'light',
    color: '#000000',
    fontSize: 30,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  description: {
    fontFamily: 'Avenir Next',
    fontWeight: 'normal',
    color: '#000000',
    fontSize: 15,
    paddingLeft: 10,
  },
  image: {
    width: null,
    height: 150,
  },
});

export default Card;
*/
