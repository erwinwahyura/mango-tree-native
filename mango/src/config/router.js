import React, { Component } from 'react';
import  { StackNavigator } from 'react-navigation'
import  { AppRegistry } from 'react-native'

import Home from '../screens/Home'
import Main from '../screens/Main'
import Gameover from '../screens/Gameover'

const HomeScreen = StackNavigator({
  Home: { screen: Home },
  Main: { screen: Main },
  Gameover: { screen: Gameover }

});

AppRegistry.registerComponent('mango', () => HomeScreen);
