import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { movieApi, tvApi } from '../../api';
import DetailPresenter from './DetailPresenter';
import * as WebBrowser from 'expo-web-browser';

function DetailContainer({
  navigation,
  route: {
    params: { id, title, poster, releaseDate, overview, votes, backgroundImage, isTv },
  },
}) {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({
    id,
    title,
    poster,
    releaseDate,
    overview,
    votes,
    backgroundImage,
    isTv,
    videos: {
      results: [],
    },
  });
  const getData = async () => {
    const [getDetail, getDetailError] = isTv ? await tvApi.show(id) : await movieApi.movie(id);

    setDetail({
      id: getDetail.id,
      title: getDetail.title || getDetail.name,
      poster: getDetail.poster_path,
      releaseDate: getDetail.release_date,
      backgroundImage: getDetail.backdrop_path,
      overview: getDetail.overview,
      votes: getDetail.vote_average,
      ...getDetail,
      getDetailError,
    });
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, [id]);

  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, [navigation]);

  const openBrowser = async (url) => {
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <View style={styles.container}>
      <DetailPresenter detail={detail} loading={loading} openBrowser={openBrowser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  text: {
    color: '#fff',
  },
});

export default DetailContainer;
