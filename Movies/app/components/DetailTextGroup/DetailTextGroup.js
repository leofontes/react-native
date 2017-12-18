import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import styles from './DetailTextGroupStyles'

export default class DetailTextGroup extends Component {

  render() {
    return (
      <View>
        <Text style={styles.header}>{this.props.header}</Text>
        <Text style={styles.body}>{this.props.body}</Text>
      </View>
    )
  }

}
