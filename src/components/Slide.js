import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { apiImage } from '../api';
import Poster from './Poster';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { trimText } from '../utils';

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const Bg = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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
  width: 100px;
  height: 30px;
  margin-top: 10px;
  background-color: #e03131;
  border-radius: 3px;
`;

function Slide({ id, title, backgroundImage, votes, overview, poster }) {
  return (
    <Container>
      <Bg source={{ uri: apiImage(backgroundImage) }} blurRadius={2} />
      <Content>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 10)}</Title>
          <Votes>⭐{votes} / 10</Votes>
          <Overview ellipsizeMode="tail">{trimText(overview, 70)}</Overview>
          <TouchableOpacity>
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
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Slide;
