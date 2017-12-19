
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import MoviesList from './../components/MoviesList/MoviesList';

export default class HomeScreen extends Component<{}> {
  static navigationOptions = {
    title: 'Movies 3.0'
  }

  render() {
    return (
      <ScrollView>
          <MoviesList navigation={this.props.navigation}></MoviesList>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
