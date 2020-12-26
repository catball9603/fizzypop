import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Tabs from './Tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
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
        backgroundColor: 'black',
        shadowColor: 'black',
        borderBottomColor: 'black',
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
