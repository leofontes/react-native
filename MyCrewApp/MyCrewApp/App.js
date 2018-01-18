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

import LoginScreen from './app/screens/Login/LoginScreen.js'

const Navigation = StackNavigator({
  Login: { screen: LoginScreen }
});

export default Navigation;
