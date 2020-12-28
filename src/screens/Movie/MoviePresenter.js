import React from 'react';
import Swiper from 'react-native-web-swiper';
import { ActivityIndicator, Dimensions } from 'react-native';
import Slide from '../../components/Slide';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('screen');

const Container = styled.View`
  flex: 1;
`;

const SliderContainer = styled.View`
  width: ${width}px;
  height: ${height / 3}px;
`;

function MoviePresenter({ loading, nowPlaying, popular, upcoming }) {
  return (
    <Container>
      {loading ? (
        <ActivityIndicator style={{ paddingTop: 100 }} size="large" color="#fff" />
      ) : (
        <SliderContainer>
          <Swiper loop={true} timeout={2} controlsEnabled={false}>
            {nowPlaying.map((movie) => (
              <Slide
                key={movie.id}
                id={movie.id}
                title={movie.title}
                backgroundImage={movie.backdrop_path}
                votes={movie.vote_average}
                overview={movie.overview}
              />
            ))}
          </Swiper>
        </SliderContainer>
      )}
    </Container>
  );
}

export default MoviePresenter;
