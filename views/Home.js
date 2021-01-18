import {StatusBar} from 'expo-status-bar';
import GlobalStyles from '../GlobalStyles';
import List from '../components/List'
import React from 'react';
import {
  SafeAreaView
} from 'react-native';

const Home = (props) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <List navigation={navigation}></List>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Home;
