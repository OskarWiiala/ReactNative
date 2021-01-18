import React from 'react';
import {StyleSheet, SafeAreaView, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import {uploadsURL} from '../utils/Variables';

// const uploadsURL = 'http://media.mw.metropolia.fi/wbma/uploads/';

const Single = ({route}) => {
  const {file} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text>{file.title}</Text>
      <Image source={{uri: uploadsURL + file.filename}}
             style={{width: '90%', height: '80%'}}
             resizeMode="contain"/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
