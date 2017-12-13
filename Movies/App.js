/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   View
 } from 'react-native';

 import { StackNavigator } from 'react-navigation';

 import HomeScreen from './app/screens/HomeScreen.js'
 import DetailScreen from './app/screens/DetailScreen.js'

 const Navigation = StackNavigator({
   Home: { screen: HomeScreen },
   Detail: { screen: DetailScreen }
 });

 export default Navigation;
