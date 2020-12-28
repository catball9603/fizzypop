import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { movieApi } from '../api';

function Favs() {
  const [movies, setMovies] = useState({
    results: [],
    error: null,
  });

  const getData = async () => {
    const [results, error] = await movieApi.discover();
    setMovies({
      results,
      error,
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{movies.results?.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});

export default Favs;
