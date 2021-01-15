import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

const uploadsURL = 'http://media.mw.metropolia.fi/wbma/uploads/';

const ListItem = (props) => {
  return (<TouchableOpacity style={styles.imageAndText}>
    <Image
      style={styles.image}
      source={{uri: uploadsURL + props.singleMedia.thumbnails.w160}}
      // source={{uri: uploadsURL + props.singleMedia.filename}}
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'gainsboro',
    borderWidth: 2,
    borderColor: 'white',
    padding: 15,
    overflow: 'visible'
  },
  image: {
    width: '50%',
    height: '100%',
    maxHeight: 400,
  },
  text1: {
    paddingLeft: 15,
    fontWeight: 'bold',
    flexWrap: 'wrap'
  },
  text2: {
    padding: 15,
    width: 200,
    flexWrap: 'wrap'
  }
});

export default ListItem;
