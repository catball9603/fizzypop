import React from 'react';
import Swiper from 'react-native-web-swiper';
import { ActivityIndicator, Dimensions } from 'react-native';
import Slide from '../../components/Slide';
import styled from 'styled-components/native';
import Title from '../../components/Title';
import { ScrollView } from 'react-native';
import VerticalContents from '../../components/VerticalContents';
import HorizontalContents from '../../components/HorizontalContents';

const { width, height } = Dimensions.get('window');

const SliderContainer = styled.View`
  width: 100%;
  height: ${height / 4}px;
`;

const UpcomingContent = styled.View``;

function MoviePresenter({ loading, nowPlaying, popular, upcoming }) {
  return (
    <ScrollView>
      {loading ? (
        <ActivityIndicator style={{ paddingTop: 100 }} size="large" color="#fff" />
      ) : (
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
          <ScrollView horizontal showsVerticalScrollIndicator={false} style={{ marginLeft: 10 }}>
            {popular.map((movie) => (
              <VerticalContents
                key={movie.id}
                id={movie.id}
                title={movie.title}
                votes={movie.vote_average}
                poster={movie.poster_path}
              />
            ))}
          </ScrollView>
          <Title title={'Coming Soon'} />
          <UpcomingContent>
            {upcoming.map((movie) => (
              <HorizontalContents
                key={movie.id}
                id={movie.id}
                title={movie.title}
                date={movie.release_date}
                poster={movie.poster_path !== null ? movie.poster_path : 'wwemzKWzjKYJFfCeiB57q3r4Bcm.png'}
                overview={movie.overview}
              />
            ))}
          </UpcomingContent>
        </>
      )}
    </ScrollView>
  );
}

export default MoviePresenter;
