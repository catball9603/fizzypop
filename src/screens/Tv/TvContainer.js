import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { tvApi } from '../../api';
import TvPresenter from './TvPresenter';

function Tv() {
  const [tv, setTv] = useState({
    loading: true,
    today: [],
    thisWeek: [],
    topRated: [],
    popular: [],
    todayError: null,
    thisWeekError: null,
    topRatedError: null,
    popularError: null,
  });

  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [topRated, topRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();
    setTv({
      loading: false,
      today,
      thisWeek,
      topRated,
      popular,
      todayError,
      thisWeekError,
      topRatedError,
      popularError,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <TvPresenter refreshFn={getData} {...tv} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
});

export default Tv;
