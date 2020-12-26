import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function Movie({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Movie</Text>
      <Button title="Movie" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: '#fff',
  },
});

export default Movie;
