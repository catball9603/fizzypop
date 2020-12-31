import React from 'react';
import HorizontalSlider from '../../components/HorizontalSlider';
import Input from '../../components/Input';
import PageLoading from '../../components/PageLoading';
import Title from '../../components/Title';
import VerticalContents from '../../components/VerticalContents';

function SearchPresenter({ movies, shows, onChange, onSubmit, keyword }) {
  return (
    <PageLoading refreshFn={onSubmit} loading={false} contentContainerStyle={{ paddingTop: 10 }}>
      <Input placeholder={'Write a keyword'} value={keyword} onChange={onChange} onSubmit={onSubmit} />
      {movies.length !== 0 && (
        <>
          <Title title={'Movie Results'} />
          <HorizontalSlider>
            {movies.map((movie) => (
              <VerticalContents
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.poster_path}
                votes={movie.vote_average}
              />
            ))}
          </HorizontalSlider>
        </>
      )}
      {shows.length !== 0 && (
        <>
          <Title title={'Tv Show Results'} />
          <HorizontalSlider>
            {shows.map((show) => (
              <VerticalContents
                key={show.id}
                id={show.id}
                title={show.name}
                poster={show.poster_path}
                votes={show.vote_average}
              />
            ))}
          </HorizontalSlider>
        </>
      )}
    </PageLoading>
  );
}

export default SearchPresenter;
