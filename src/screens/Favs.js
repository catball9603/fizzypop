import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Favs() {
  return (
    <View style={styles.container}>
      <Text>Favs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Favs;
