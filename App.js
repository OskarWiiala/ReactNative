import {StatusBar} from 'expo-status-bar';
import GlobalStyles from './GlobalStyles';
import List from './components/List';
import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Text,
  StyleSheet
} from 'react-native';
import {Menu} from 'react-native-feather';
import {Settings} from 'react-native-feather';

const App = () => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <StatusBar backgroundColor='rgb(51, 204, 51)' barStyle='light-content' />
      <View>
        <ImageBackground source={require('./assets/catinabox.webp')}
                         style={styles.bgImage}
                         imageStyle={{
                           resizeMode: 'stretch',
                           borderBottomRightRadius: 30
                         }}>
        </ImageBackground>
        <Menu stroke='white' width={32} height={32} style={styles.menu} />
        <Settings stroke='white' width={32} height={32}
                  style={styles.settings} />
        <Text style={styles.hello}>TestText</Text>
      </View>
      <View>
        <Text style={styles.header}>Cats / Kittens:</Text>
      </View>
      <List />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    top: 20,
    left: 20
  },

  settings: {
    position: 'absolute',
    top: 20,
    right: 20
  },

  header: {
    backgroundColor: 'rgb(51, 204, 51)',
    textAlign: 'center',
    width: '100%',
  },

  hello: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    position: 'absolute',
    alignSelf: 'center',
    top: 20,
    color: 'white',
    backgroundColor: 'lightgray'

  },

  statusBar: {
    backgroundColor: 'aquamarine'
  },

  bgImage: {
    width: '100%',
    height: 200
  }
});

export default App;
