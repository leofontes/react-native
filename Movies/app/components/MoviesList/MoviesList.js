import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

import styles from './MoviesListStyles'

export default class MoviesList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: []
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ac6ebfcd9300aeee710aef10fe23e547`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={this.state.data}
          renderItem={({item}) => <TouchableHighlight onPress={() => navigate('Detail', {item: item})} >
            <View style={styles.item}>
              <Image source={{uri: 'https://image.tmdb.org/t/p/w300' + item.poster_path}} style={styles.image} />
              <Text style={styles.label}>{item.original_title}</Text>
            </View>
          </TouchableHighlight>}
        />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('Movies', () => MoviesList);
