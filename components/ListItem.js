import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  return (<View style={styles.imageAndText}>
    <Image
      style={styles.image}
      source={{uri: props.singleMedia.thumbnails.w160}}
    />
    <ScrollView style={{marginTop: 20}}>
      <Text style={styles.text1}>{props.singleMedia.title}</Text>
      <Text style={styles.text2}>{props.singleMedia.description}</Text>
    </ScrollView>
  </View>);
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
    flexDirection: 'column',
    backgroundColor: 'rgb(242, 242, 242)',
    borderWidth: 2,
    borderColor: 'rgb(51, 204, 51)',
    margin: 15,
    padding: 15,
    width: Dimensions.get('window').width -50,
    borderRadius: 50,

  },
  image: {
    alignSelf: 'center',
    height: 250,
    width: 250,
    borderRadius: 250,
    borderWidth: 2,
    borderColor: 'rgb(255,140,0)',
  },
  text1: {
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(255,140,0)',
  },
  text2: {
    padding: 15,
    width: '100%',
    fontSize: 15,
  }
});

export default ListItem;
