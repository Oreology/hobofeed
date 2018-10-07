import { React, Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { PropTypes } from 'prop-types';

const Card = props => {
  const {
    proptitle,
    propdescription,
    propimage,
  } = props;

  return (
    <View style={container}>
      <Image style={image}
        source=propimage
      >
      <Text style={title}
        {proptitle}
      </Text>
      <Text style={description}
        {propdescription}
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
