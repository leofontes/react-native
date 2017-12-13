import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class DetailScreen extends Component<{}> {
  static navigationOptions = {
    title: 'Detail'
  }

  render() {
    const {state} = this.props.navigation;

    return (
      <View>
        <Text>{state.params.item.original_title}</Text>
      </View>
    );
  }
}
