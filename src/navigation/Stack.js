import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Tabs from './Tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Movie';

  switch (routeName) {
    case 'Movie':
      return 'Movie';
    case 'Tv':
      return 'TV show';
    case 'Search':
      return 'Search';
    case 'Favs':
      return 'Favs';
  }
}

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#212121',
        shadowColor: '#212121',
        borderBottomColor: '#212121',
      },
      headerTintColor: '#fff',
      headerBackTitleVisible: false,
      // headerTransparent: true,
    }}
  >
    <Stack.Screen
      name="Tabs"
      component={Tabs}
      options={({ route }) => ({
        headerTitle: getHeaderTitle(route),
      })}
    />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
