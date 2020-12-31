import React from 'react';
import Swiper from 'react-native-web-swiper';
import { Dimensions } from 'react-native';
import Slide from '../../components/Slide';
import styled from 'styled-components/native';
import Title from '../../components/Title';
import { ScrollView } from 'react-native';
import VerticalContents from '../../components/VerticalContents';
import HorizontalContents from '../../components/HorizontalContents';
import PageLoading from '../../components/PageLoading';
import HorizontalSlider from '../../components/HorizontalSlider';

const { width, height } = Dimensions.get('window');

const SliderContainer = styled.View`
  width: 100%;
  height: ${height / 4}px;
`;

const UpcomingContent = styled.View``;

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
            />
          ))}
        </HorizontalSlider>
        <Title title={'Coming Soon'} />
        <UpcomingContent>
          {upcoming.map((movie) => (
            <HorizontalContents
              key={movie.id}
              id={movie.id}
              title={movie.title}
              releaseDate={movie.release_date}
              poster={movie.poster_path !== null ? movie.poster_path : '/ndAvF4JLsliGreX87jAc9GdjmJY.png'}
              overview={movie.overview}
            />
          ))}
        </UpcomingContent>
      </>
    </PageLoading>
  );
}

export default MoviePresenter;
