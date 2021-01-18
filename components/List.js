import React from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {useLoadMedia} from '../hooks/ApiHooks';
import PropTypes from 'prop-types';

const List = (props) => {

  const mediaArray = useLoadMedia();

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={
        ({item}) => <ListItem
          navigation={props.navigation} // without destucturing
          singleMedia={item}
        />
      }
    />
  );
};

List.propTypes = {
  navigation: PropTypes.object,
}

export default List;
