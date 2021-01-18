import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../views/Home';
import Profile from '../views/Profile';
import Single from '../views/Single';
import {getFocusedRouteNameFromRoute} from '@react-navigation/core';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const TabScreen = () => {
  return (
    // TODO: move content of <NavigationContainer> here
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabScreen}
                    options={({route}) => ({headerTitle: getFocusedRouteNameFromRoute(route),})} />
      <Stack.Screen name="Single" component={Single} />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>

      <StackScreen />

    </NavigationContainer>
  );
};

export default Navigator;

