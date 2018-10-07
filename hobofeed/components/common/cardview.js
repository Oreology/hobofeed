import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

export class CardView extends Component {
  render() {
    return (
      <View style={styles.containershadow}>
        <View style={styles.container}>
          <Image style={styles.image}
            source={ {uri: this.props.imgsource} }
          />
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.description}>{this.props.description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 25,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    //padding: -15,
  },
  containershadow: {
    flex: 1,
    width: '92.5%',
    maxHeight: '40%',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    shadowOpacity: 0.15,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowRadius: 10,
    //overflow: 'hidden',
    marginLeft: -10,
    marginRight: -10,
    position: 'relative',
    top: 50,
  },
  title: {
    fontFamily: 'Avenir Next',
    fontWeight: '400',
    color: '#000000',
    fontSize: 30,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  description: {
    fontFamily: 'Avenir Next',
    fontWeight: 'normal',
    color: '#000000',
    fontSize: 15,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  image: {
    width: null,
    flex: 1,
    minHeight: '20%',
    //position: 'relative',
    //top: -50,
  },
});

export default CardView;











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
