import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { apiImage } from '../api';
import Poster from './Poster';
import { Text, TouchableOpacity } from 'react-native';
import { trimText } from '../utils';
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const Bg = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.4;
`;

const Content = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 5px;
`;
const Data = styled.View`
  width: 50%;
`;

const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
const Votes = styled.Text`
  color: #dee2e6;
  padding: 10px 0 5px 0;
  font-size: 13px;
`;
const Overview = styled.Text`
  color: #dee2e6;
  font-size: 13px;
`;

const Button = styled.View`
  justify-content: center;
  width: 100px;
  height: 35px;
  margin-top: 10px;
  background-color: #e03131;
  border-radius: 3px;
`;

function Slide({ id, title, backgroundImage, votes, overview, poster, isTv = false }) {
  const navigation = useNavigation();
  const goToDetail = () => navigation.navigate('Detail', { id, title, backgroundImage, votes, overview, poster, isTv });

  return (
    <Container>
      <Bg source={{ uri: apiImage(backgroundImage) }} blurRadius={2} />
      <Content>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 10)}</Title>
          <Votes>⭐{votes} / 10</Votes>
          <Overview ellipsizeMode="tail">{trimText(overview, 70)}</Overview>
          <TouchableOpacity onPress={goToDetail}>
            <Button>
              <Text style={{ color: '#fff', fontSize: 14, textAlign: 'center', lineHeight: 25 }}>See Detail</Text>
            </Button>
          </TouchableOpacity>
        </Data>
      </Content>
    </Container>
  );
}

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string,
  poster: PropTypes.string,
};

export default Slide;
