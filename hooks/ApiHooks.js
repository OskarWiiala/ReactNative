import React, {useState, useEffect} from 'react';

const baseUrl = 'http://media.mw.metropolia.fi/wbma/';

const useLoadMedia = () => {
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

  return mediaArray;
};

export {useLoadMedia};


