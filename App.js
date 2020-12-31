import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/navigation/Stack';

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFont = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
      'https://images.unsplash.com/photo-1542204637-e67bc7d41e48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      require('./assets/splash.png'),
    ]);
    const fonts = cacheFont([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setIsReady(true);
  const onError = (e) => console.log(e);
  return (
    <View style={styles.container}>
      {isReady ? (
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
      ) : (
        <AppLoading startAsync={loadAssets} onFinish={onFinish} onError={onError} />
      )}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
