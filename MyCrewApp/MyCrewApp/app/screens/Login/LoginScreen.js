import React, { Component } from 'react';
import { Text, View, TextInput, Image } from 'react-native';

import styles from './LoginScreenStyles'

export default class DetailScreen extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.loginLogo} />
        <TextInput placeholder="E-mail"/>
      </View>
    );
  }
}
