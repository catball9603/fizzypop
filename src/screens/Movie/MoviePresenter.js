import React from 'react';
import Swiper from 'react-native-web-swiper';
import { Dimensions, View } from 'react-native';
import Slide from '../../components/Slide';
import styled from 'styled-components/native';
import Title from '../../components/Title';
import VerticalContents from '../../components/VerticalContents';
import HorizontalContents from '../../components/HorizontalContents';
import PageLoading from '../../components/PageLoading';
import HorizontalSlider from '../../components/HorizontalSlider';

const { width, height } = Dimensions.get('window');

const SliderContainer = styled.View`
  width: 100%;
  height: ${height / 4}px;
`;

function MoviePresenter({ loading, nowPlaying, popular, upcoming, refreshFn }) {
  return (
    <PageLoading loading={loading} refreshFn={refreshFn}>
      <>
        <SliderContainer>
          <Swiper loop={true} timeout={3} controlsEnabled={false}>
            {nowPlaying.map((movie) => (
              <Slide
                key={movie.id}
                id={movie.id}
                title={movie.title}
                backgroundImage={movie.backdrop_path}
                votes={movie.vote_average}
                overview={movie.overview}
                poster={movie.poster_path}
              />
            ))}
          </Swiper>
        </SliderContainer>
        <Title title={'Popular Movie'} />
        <HorizontalSlider>
          {popular.map((movie) => (
            <VerticalContents
              key={movie.id}
              id={movie.id}
              title={movie.title}
              votes={movie.vote_average}
              poster={movie.poster_path}
              overview={movie.overview}
              backgroundImage={movie.backdrop_path}
            />
          ))}
        </HorizontalSlider>
        <Title title={'Coming Soon'} />
        <View>
          {upcoming.map((movie) => (
            <HorizontalContents
              key={movie.id}
              id={movie.id}
              title={movie.title}
              releaseDate={movie.release_date}
              poster={movie.poster_path}
              overview={movie.overview}
              backgroundImage={movie.backdrop_path}
            />
          ))}
        </View>
      </>
    </PageLoading>
  );
}

export default MoviePresenter;
