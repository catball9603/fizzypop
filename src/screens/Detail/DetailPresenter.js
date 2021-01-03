import React from 'react';
import { ActivityIndicator, Dimensions, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { apiImage } from '../../api';
import PageLoading from '../../components/PageLoading';
import Poster from '../../components/Poster';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const HeaderContent = styled.View`
  width: 100%;
  height: ${height / 3}px;
`;
const HeaderImage = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
`;
const HeaderData = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 100px;
`;

const Info = styled.View`
  width: 50%;
`;
const TitleText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;
const VoteData = styled.Text`
  color: #fff;
`;

const MainContent = styled.View`
  margin-top: 30px;
  padding: 0 30px;
  flex-direction: column;
`;

const DataName = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 7px;
`;

const DataValue = styled.Text`
  color: #fff;
  font-size: 13px;
  line-height: 22px;
`;

const Link = styled.View`
  flex-direction: row;
`;

function DetailPresenter({ detail, loading, openBrowser }) {
  return (
    <PageLoading loading={false}>
      <HeaderContent>
        <HeaderImage source={{ uri: apiImage(detail.backgroundImage) }} />
        <HeaderData>
          <Poster url={detail.poster} />
          <Info>
            <TitleText>{detail.title}</TitleText>
            {detail.votes && <VoteData>⭐ {detail.votes} / 10</VoteData>}
          </Info>
        </HeaderData>
      </HeaderContent>
      <MainContent>
        {detail.overview && (
          <>
            <DataName>Overview</DataName>
            <DataValue>{` ${detail.overview}`}</DataValue>
          </>
        )}
        {loading && <ActivityIndicator style={{ marginTop: 30 }} color={'#fff'} />}
        {detail.spoken_languages && (
          <>
            <DataName>Langages</DataName>
            <DataValue>{detail.spoken_languages.map((l) => `${l.name} `)}</DataValue>
          </>
        )}
        {detail.release_date && (
          <>
            <DataName>Release Date</DataName>
            <DataValue>{detail.release_date}</DataValue>
          </>
        )}
        {detail.first_air_date && (
          <>
            <DataName>First Air Date</DataName>
            <DataValue>{detail.first_air_date}</DataValue>
          </>
        )}
        {detail.status && (
          <>
            <DataName>Status</DataName>
            <DataValue>{detail.status}</DataValue>
          </>
        )}
        {detail.runtime && (
          <>
            <DataName>Runtime</DataName>
            <DataValue>{`${detail.runtime} min`}</DataValue>
          </>
        )}
        {detail.number_of_episodes && (
          <>
            <DataName>Season / Episodes</DataName>
            <DataValue>
              {detail.number_of_seasons} / {detail.number_of_episodes}
            </DataValue>
          </>
        )}
        {detail.imdb_id && (
          <>
            <TouchableOpacity
              style={{ marginVertical: 20 }}
              onPress={() => openBrowser(`https://www.imdb.com/title/${detail.imdb_id}`)}
            >
              <Link>
                <DataValue>IMDB page : </DataValue>
                <View style={{ marginHorizontal: 3 }} />
                <DataValue>
                  <Fontisto name="imdb" size={30} color="#fff" />
                </DataValue>
              </Link>
            </TouchableOpacity>
          </>
        )}
        {detail.videos.results.length > 0 && (
          <>
            <DataName style={{ marginTop: 0 }}>Videos</DataName>
            {detail.videos.results.map((video) => (
              <TouchableOpacity
                style={{ marginVertical: 5 }}
                onPress={() => openBrowser(`https://www.youtube.com/watch?v=${video.key}`)}
                key={video.id}
              >
                <Link>
                  <DataValue>
                    <FontAwesome name="youtube-play" size={30} color="#ff0000" />
                  </DataValue>
                  <DataValue>{`  ${video.name}`}</DataValue>
                </Link>
              </TouchableOpacity>
            ))}
          </>
        )}
      </MainContent>
    </PageLoading>
  );
}

export default DetailPresenter;
