import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native';

import styles from './styles/DetailScreenStyles'
import DetailTextGroup from './../components/DetailTextGroup/DetailTextGroup'

export default class DetailScreen extends Component<{}> {
  constructor(props) {
    super(props);

    const {state} = this.props.navigation;

    this.state = {
      idMovie: state.params.item.id,
      loading: true,
      movie: {
        original_title: state.params.item.original_title,
        poster_path: '-',
        overview: '-',
        release_date: '-',
        genres: []
      }
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = `https://api.themoviedb.org/3/movie/` + this.state.idMovie + `?api_key=ac6ebfcd9300aeee710aef10fe23e547`;
    this.setState({ loading: true });
    fetch(url)
      .then(
        res => res.json()
      ).then(res => {
        this.setState({
          movie: res,
          loading: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  // static navigationOptions = {
  //   title: this.state.movie.original_title
  // }
//<Text style={styles.title}>{this.state.params.item.original_title}</Text>
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.item.original_title}`,
  });

  formatDate = (date) => {
    return date.substring(date.length - 2, date.length) + '/' + date.substring(date.length - 5, date.length - 3) + '/' + date.substring(0, 4)
  }

  formatCurrency = (value) => {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });

    return formatter.format(value);
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageGrid}>
          <Image source={{uri: 'https://image.tmdb.org/t/p/w300' + this.state.movie.poster_path}} style={styles.image} />
          <View style={styles.gridRight}>
            <DetailTextGroup header='Description' body={this.state.movie.overview} style={styles.descriptionGroup}/>
            <DetailTextGroup header='Release Date' body={this.formatDate(this.state.movie.release_date)} />
          </View>
        </View>

        <DetailTextGroup header='Genres' body=''/>
        <FlatList
          style={styles.genresList}
          keyExtractor={item => item.id}
          data={this.state.movie.genres}
          numColumns={4}
          renderItem={({item}) =>
            <View style={styles.genresItem}>
              <Text style={styles.genresLabel}>{item.name}</Text>
            </View>}
        />

        <View style={styles.moneyGrid}>
          <DetailTextGroup header='Budget' body={this.formatCurrency(this.state.movie.budget)} style={styles.descriptionGroup}/>
          <DetailTextGroup header='Revenue' body={this.formatCurrency(this.state.movie.revenue)} style={styles.descriptionGroup}/>
        </View>
      </ScrollView>
    );
  }
}
