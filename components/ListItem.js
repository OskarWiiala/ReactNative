import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  return (<TouchableOpacity style={styles.imageAndText}>
    <Image
      style={styles.image}
      source={{uri: props.singleMedia.thumbnails.w160}}
    />
    <View>
      <Text style={styles.text1}>{props.singleMedia.title}</Text>
      <Text style={styles.text2}>{props.singleMedia.description}</Text>
    </View>
  </TouchableOpacity>);
};

ListItem.propTypes = {
  singleMedia: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageAndText: {
    flexDirection: 'row',
    backgroundColor: 'gainsboro',
    borderWidth: 2,
    borderColor: 'white',
    padding: 15,
  },
  image: {
    flex: 1,
    maxHeight: 400,
  },
  text1: {
    paddingLeft: 15,
    fontWeight: 'bold',
  },
  text2: {
    padding: 15,
    width: 200,
  }
});

export default ListItem;
