import React, {useState, useEffect} from 'react';
import {baseUrl} from '../utils/Variables';

// const baseUrl = 'http://media.mw.metropolia.fi/wbma/';

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

const useLogin = () => {

  const postLogin = async (userCredentials) => {
    const options = {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(userCredentials)
    };
    try {
      const response = fetch(baseUrl + 'login', options);
      const userData = await response.json();
      console.log('postLogin response status', response.status);
      console.log('postLogin userData', userData);
      if (response.ok) {
        return userData;
      } else {
        throw new Error(userData.message());
      };
    } catch (error) {
      throw new Error(error.message());
    };
  };

  const checkToken = async (token) => {
    try {
      const options = {
        method: 'GET',
        headers: {'x-access-token': token},
      };
      const response = await fetch(baseUrl + 'user/users', options);
      const userData = response.json;
      if (response.ok) {
        return userData;
      } else {
        throw new Error(userData.message);
      };
    } catch (error) {
      throw new Error(error.message);
    };
  };

  return {postLogin, checkToken};
};

export {useLoadMedia, useLogin};


