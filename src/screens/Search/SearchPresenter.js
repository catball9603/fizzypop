import React from 'react';
import { View } from 'react-native';
import HorizontalSlider from '../../components/HorizontalSlider';
import Input from '../../components/Input';
import PageLoading from '../../components/PageLoading';
import Title from '../../components/Title';
import VerticalContents from '../../components/VerticalContents';

function SearchPresenter({ movies, tv, onChange, onSubmit, keyword }) {
  return (
    <PageLoading refreshFn={onSubmit} loading={false} contentContainerStyle={{ paddingTop: 10 }}>
      <Input placeholder={'Write a keyword'} value={keyword} onChange={onChange} onSubmit={onSubmit} />
      {movies.length !== 0 && (
        <View>
          <Title title={'Movie Results'} />
          <HorizontalSlider>
            {movies.map((movie) => (
              <VerticalContents
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.poster_path}
                votes={movie.vote_average}
                overview={movie.overview}
                backgroundImage={tv.backdrop_path}
              />
            ))}
          </HorizontalSlider>
        </View>
      )}
      {tv.length !== 0 && (
        <View>
          <Title title={'Tv Show Results'} />
          <HorizontalSlider>
            {tv.map((tv) => (
              <VerticalContents
                isTv={true}
                key={tv.id}
                id={tv.id}
                title={tv.name}
                poster={tv.poster_path}
                votes={tv.vote_average}
                overview={tv.overview}
                backgroundImage={tv.backdrop_path}
              />
            ))}
          </HorizontalSlider>
        </View>
      )}
    </PageLoading>
  );
}

export default SearchPresenter;
