import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { movieApi, tvApi } from '../../api';
import SearchPresenter from './SearchPresenter';

function Search() {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState({
    loading: true,
    movies: [],
    tv: [],
    movieError: null,
    tvError: null,
  });
  const onChange = (text) => setKeyword(text);
  const search = async () => {
    if (keyword === '') {
      return;
    }
    const [movies, movieError] = await movieApi.search(keyword);
    const [tv, tvError] = await tvApi.search(keyword);
    setResults({
      loading: false,
      movies,
      tv,
      movieError,
      tvError,
    });
  };

  return (
    <View style={styles.container}>
      <SearchPresenter {...results} onChange={onChange} onSubmit={search} keyword={keyword} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
});

export default Search;
