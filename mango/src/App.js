import React, { Component } from 'react';
import  { StackNavigator } from 'react-navigation'
import  { AppRegistry } from 'react-native'

import Home from './screens/Home'
import Main from './screens/Main'

const HomeScreen = StackNavigator({
  Home: { screen: Home },
  Main: { screen: Main }
});

AppRegistry.registerComponent('mango', () => HomeScreen);
