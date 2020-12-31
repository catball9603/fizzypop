import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Poster from './Poster';
import { formatDate, trimText } from '../utils';
import PropTypes from 'prop-types';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px;
  margin-bottom: 10px;
`;

const Data = styled.View`
  width: 65%;
`;
const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;
const ReleaseDate = styled.Text`
  color: #dee2e6;
  padding: 10px 0;
  font-size: 13px;
`;
const Overview = styled.Text`
  color: #dee2e6;
  font-size: 13px;
`;

function HorizontalContents({ id, poster, title, releaseDate, overview, votes }) {
  return (
    <TouchableOpacity>
      <Container>
        <Poster url={poster} />
        <Data>
          <Title>🎬 {trimText(title, 20)}</Title>
          <ReleaseDate>{releaseDate ? `개봉일 : ${formatDate(releaseDate)}` : `⭐ ${votes} / 10`}</ReleaseDate>
          <Overview ellipsizeMode="tail">{trimText(overview, 90)}</Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  );
}

HorizontalContents.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
  votes: PropTypes.number,
  overview: PropTypes.string.isRequired,
};

export default HorizontalContents;
