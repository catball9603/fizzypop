import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movie from '../screens/Movie';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Favs from '../screens/Favs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

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
      return 'My Favs';
  }
}

const Tabs = createBottomTabNavigator();

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const name = getHeaderTitle(route);
    navigation.setOptions({ title: name });
  }, [navigation, route]);

  // useLayoutEffect(() => {
  //   navigation.setOptions({ title: route?.state?.routeNames[route.state.index] || 'Movie' });
  // }, [route]);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Movie') {
            iconName = 'film';
          } else if (route.name === 'Tv') {
            iconName = 'tv-outline';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'Favs') {
            iconName = 'heart';
          }
          return <Ionicons name={iconName} color={focused ? '#fff' : '#495057'} size={30} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'black',
          borderTopColor: 'black',
        },
      }}
    >
      <Tabs.Screen name="Movie" component={Movie} />
      <Tabs.Screen name="Tv" component={Tv} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Favs" component={Favs} />
    </Tabs.Navigator>
  );
};
