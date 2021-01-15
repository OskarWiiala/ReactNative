import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';

const baseUrl = 'http://media.mw.metropolia.fi/wbma/';

const List = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async (limit = 5) => {
    try {
      const response = await fetch(baseUrl + 'media?limit=' + limit);
      const json = await response.json();
      console.log(json);

      const media = await Promise.all(json.map(async (item) => {
        const response = await fetch(baseUrl + 'media/' + item.file_id);
        const json = response.json();
        console.log('media file data', json);
        return json;
      }));

      console.log('media array data', media);

      setMediaArray(media);
    } catch (error) {
      console.error('error in List.js loadMedia:', error);
    }
  };
  useEffect(() => {
    loadMedia(10);
  }, []);

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) =>
        <ListItem singleMedia={item} />}
    />
  );
};

export default List;
