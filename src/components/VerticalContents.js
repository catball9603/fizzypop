import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { trimText } from '../utils';
import Poster from './Poster';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5px;
`;
const TitleText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  margin: 5px 0;
`;
const Vote = styled.Text`
  color: #fff;
  font-size: 12px;
`;

function VerticalContents({ id, poster, title, votes, backgroundImage, overview, isTv = false }) {
  const navigation = useNavigation();
  const goToDetail = () => navigation.navigate('Detail', { id, title, poster, votes, backgroundImage, overview, isTv });
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <TitleText>{trimText(title, 10)}</TitleText>
        {votes > 0 && <Vote>⭐ {votes} / 10</Vote>}
      </Container>
    </TouchableOpacity>
  );
}

VerticalContents.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string,
};

export default VerticalContents;
