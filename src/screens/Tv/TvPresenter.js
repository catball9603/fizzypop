import React from 'react';
import { Dimensions, View } from 'react-native';
import Swiper from 'react-native-web-swiper';
import styled from 'styled-components/native';
import HorizontalContents from '../../components/HorizontalContents';
import HorizontalSlider from '../../components/HorizontalSlider';
import PageLoading from '../../components/PageLoading';
import Slide from '../../components/Slide';
import Title from '../../components/Title';
import VerticalContents from '../../components/VerticalContents';

const { width, height } = Dimensions.get('window');

const SliderContainer = styled.View`
  width: 100%;
  height: ${height / 4}px;
`;

function TvPresenter({ id, loading, today, topRated, popular, thisWeek, refreshFn }) {
  return (
    <PageLoading loading={loading} refreshFn={refreshFn}>
      <View>
        <Title title={'Popular Tv Show'} />
        <HorizontalSlider>
          {popular.map((tv) => (
            <VerticalContents
              isTv={true}
              key={tv.id}
              id={tv.id}
              title={tv.name}
              votes={tv.vote_average}
              poster={tv.poster_path}
              overview={tv.overview}
              backgroundImage={tv.backdrop_path}
            />
          ))}
        </HorizontalSlider>
        <Title title={'Top Rated Tv Show'} />
        <HorizontalSlider>
          {topRated.map((tv) => (
            <VerticalContents
              isTv={true}
              key={tv.id}
              id={tv.id}
              title={tv.name}
              votes={tv.vote_average}
              poster={tv.poster_path}
              overview={tv.overview}
              backgroundImage={tv.backdrop_path}
            />
          ))}
        </HorizontalSlider>
        <Title title={'This Week'} />
        <SliderContainer>
          <Swiper loop={true} timeout={3} controlsEnabled={false}>
            {thisWeek.map((tv) => (
              <Slide
                isTv={true}
                key={tv.id}
                id={tv.id}
                title={tv.name}
                backgroundImage={tv.backdrop_path}
                votes={tv.vote_average}
                overview={tv.overview}
                poster={tv.poster_path}
              />
            ))}
          </Swiper>
        </SliderContainer>
        <Title title={'Airing Today'} />
        <View>
          {today.map((tv) => (
            <HorizontalContents
              isTv={true}
              key={tv.id}
              id={tv.id}
              title={tv.name}
              votes={tv.vote_average}
              poster={tv.poster_path}
              overview={tv.overview}
              backgroundImage={tv.backdrop_path}
            />
          ))}
        </View>
      </View>
    </PageLoading>
  );
}

export default TvPresenter;
